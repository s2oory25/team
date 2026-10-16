
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  GUEST_TEST_ORDERS_STORAGE_KEY,
  GUEST_TEST_ORDER_PHONE,
} from "../constants/guestOrder.js";
import "./Payment.css";

const KAKAO_POSTCODE_SCRIPT_ID = "kakao-postcode-script";
const KAKAO_POSTCODE_SCRIPT_URL =
  "https://t1.kakaocdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";

let kakaoPostcodePromise;

function loadKakaoPostcode() {
  if (window.kakao?.Postcode) {
    return Promise.resolve();
  }

  if (kakaoPostcodePromise) {
    return kakaoPostcodePromise;
  }

  kakaoPostcodePromise = new Promise((resolve, reject) => {
    let script = document.getElementById(KAKAO_POSTCODE_SCRIPT_ID);

    const handleLoad = () => {
      if (window.kakao?.Postcode) {
        resolve();
        return;
      }

      reject(new Error("카카오 우편번호 서비스를 불러오지 못했습니다."));
    };

    const handleError = () => {
      reject(new Error("카카오 우편번호 서비스를 불러오지 못했습니다."));
    };

    if (!script) {
      script = document.createElement("script");
      script.id = KAKAO_POSTCODE_SCRIPT_ID;
      script.src = KAKAO_POSTCODE_SCRIPT_URL;
      script.async = true;
      document.head.appendChild(script);
    }

    script.addEventListener("load", handleLoad, { once: true });
    script.addEventListener("error", handleError, { once: true });
  }).catch((error) => {
    kakaoPostcodePromise = undefined;
    throw error;
  });

  return kakaoPostcodePromise;
}

const CARD_NAMES = {
  shinhan: "신한카드",
  kb: "국민카드",
  samsung: "삼성카드",
  hyundai: "현대카드",
};

const EASY_PAY_NAMES = {
  kakao: "카카오페이",
  naver: "네이버페이",
  toss: "토스페이",
};

const PHONE_NUMBER_PATTERN = /^010\d{8}$/;

function formatPhoneNumber(value) {
  const digits = value.replace(/\D/g, "").slice(0, 11);

  if (digits.length <= 3) {
    return digits;
  }

  if (digits.length <= 7) {
    return `${digits.slice(0, 3)}-${digits.slice(3)}`;
  }

  return `${digits.slice(0, 3)}-${digits.slice(3, 7)}-${digits.slice(7)}`;
}

function isValidPhoneNumber(value) {
  return PHONE_NUMBER_PATTERN.test(value.replace(/\D/g, ""));
}

function createTestOrderNumber() {
  const now = new Date();
  const date = [
    now.getFullYear(),
    String(now.getMonth() + 1).padStart(2, "0"),
    String(now.getDate()).padStart(2, "0"),
  ].join("");
  const suffix = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");

  return `CHF-${date}-${suffix}`;
}

function saveGuestTestOrder(order) {
  try {
    const savedOrders = localStorage.getItem(GUEST_TEST_ORDERS_STORAGE_KEY);
    const orders = savedOrders ? JSON.parse(savedOrders) : [];

    if (!Array.isArray(orders)) {
      throw new Error("저장된 테스트 주문 데이터 형식이 올바르지 않습니다.");
    }

    localStorage.setItem(
      GUEST_TEST_ORDERS_STORAGE_KEY,
      JSON.stringify([...orders, order]),
    );
    return true;
  } catch {
    return false;
  }
}

function Payment() {
  const navigate = useNavigate();
  const [shipping, setShipping] = useState({
    receiver: "",
    phone: "",
    postcode: "",
    address: "",
    detail: "",
    request: "",
  });

  const [customer, setCustomer] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const [method, setMethod] = useState("card");
  const [card, setCard] = useState("");
  const [installment, setInstallment] = useState("일시불");
  const [easyPay, setEasyPay] = useState("kakao");
  const [agreed, setAgreed] = useState(false);
  const [sameAsReceiver, setSameAsReceiver] = useState(false);
  const [phoneTouched, setPhoneTouched] = useState({
    shipping: false,
    customer: false,
  });
  const [isAddressSearchOpen, setIsAddressSearchOpen] = useState(false);
  const [addressSearchStatus, setAddressSearchStatus] = useState("idle");
  const [completedOrder, setCompletedOrder] = useState(null);
  const [orderModalView, setOrderModalView] = useState(null);
  const addressSearchRef = useRef(null);
  const orderSubmittedRef = useRef(false);

  const price = 289000;
  const formatPrice = (value) => value.toLocaleString("ko-KR");

  const changeShipping = (e) => {
    const { name, value } = e.target;
    const nextValue = name === "phone" ? formatPhoneNumber(value) : value;
    setShipping((prev) => ({ ...prev, [name]: nextValue }));

    if (sameAsReceiver && (name === "receiver" || name === "phone")) {
      const customerField = name === "receiver" ? "name" : "phone";
      setCustomer((prev) => ({ ...prev, [customerField]: nextValue }));
    }
  };

  const changeCustomer = (e) => {
    const { name, value } = e.target;
    const nextValue = name === "phone" ? formatPhoneNumber(value) : value;
    setCustomer((prev) => ({ ...prev, [name]: nextValue }));
  };

  const changeSameAsReceiver = (e) => {
    const { checked } = e.target;
    setSameAsReceiver(checked);

    if (checked) {
      setCustomer((prev) => ({
        ...prev,
        name: shipping.receiver,
        phone: shipping.phone,
      }));
    }
  };

  const openAddress = () => {
    setAddressSearchStatus("loading");
    setIsAddressSearchOpen(true);
  };

  const closeAddressSearch = () => {
    setIsAddressSearchOpen(false);
  };

  useEffect(() => {
    if (!isAddressSearchOpen) {
      return undefined;
    }

    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeAddressSearch();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isAddressSearchOpen]);

  useEffect(() => {
    if (!isAddressSearchOpen) {
      return undefined;
    }

    let cancelled = false;
    const addressSearchElement = addressSearchRef.current;

    loadKakaoPostcode()
      .then(() => {
        if (cancelled || !addressSearchElement) {
          return;
        }

        addressSearchElement.replaceChildren();

        const postcode = new window.kakao.Postcode({
          oncomplete: (data) => {
            const selectedAddress =
              data.userSelectedType === "R"
                ? data.roadAddress
                : data.jibunAddress;

            setShipping((prev) => ({
              ...prev,
              postcode: data.zonecode,
              address: selectedAddress || data.address,
              detail: "",
            }));
            closeAddressSearch();
          },
          onclose: closeAddressSearch,
          width: "100%",
          height: "100%",
          maxSuggestItems: 5,
        });

        postcode.embed(addressSearchElement);
        setAddressSearchStatus("ready");
      })
      .catch(() => {
        if (!cancelled) {
          setAddressSearchStatus("error");
        }
      });

    return () => {
      cancelled = true;
      addressSearchElement?.replaceChildren();
    };
  }, [isAddressSearchOpen]);

  useEffect(() => {
    if (!orderModalView) {
      return undefined;
    }

    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
    };
  }, [orderModalView]);

  const closeOrderModal = () => {
    setOrderModalView(null);
    orderSubmittedRef.current = false;
  };

  const continueShopping = () => {
    closeOrderModal();
  };

  const goToGuestOrderLookup = () => {
    closeOrderModal();
    navigate("/guest-order-lookup");
  };

  const handlePayment = () => {
    setPhoneTouched({ shipping: true, customer: true });

    if (
      !isValidPhoneNumber(shipping.phone) ||
      !isValidPhoneNumber(customer.phone)
    ) {
      return;
    }

    if (
      !shipping.receiver.trim() ||
      !shipping.phone.trim() ||
      !shipping.postcode.trim() ||
      !shipping.address.trim()
    ) {
      alert("필수 배송 정보를 입력해주세요.");
      return;
    }

    if (
      !customer.name.trim() ||
      !customer.phone.trim() ||
      !customer.email.trim()
    ) {
      alert("주문자 정보를 입력해주세요.");
      return;
    }

    if (method === "card" && !card) {
      alert("결제할 카드를 선택해주세요.");
      return;
    }

    if (!agreed) {
      alert("구매 안내 내용을 확인해주세요.");
      return;
    }

    if (orderSubmittedRef.current) {
      return;
    }

    orderSubmittedRef.current = true;
    const orderNumber = createTestOrderNumber();
    const orderedAt = new Date().toISOString();
    const product = {
      brand: "GENTLE MONSTER",
      name: "뉴 허 01",
      option: "블랙/블랙",
      quantity: 1,
      amount: price,
    };
    const isStored = saveGuestTestOrder({
      orderNumber,
      orderedAt,
      productName: product.name,
      option: product.option,
      quantity: product.quantity,
      amount: product.amount,
      testPhone: GUEST_TEST_ORDER_PHONE,
    });

    setCompletedOrder({
      orderNumber,
      orderedAt,
      isStored,
      customer: { ...customer },
      shipping: { ...shipping },
      product,
      paymentMethod:
        method === "card"
          ? `카드 · ${CARD_NAMES[card]} · ${installment}`
          : `간편결제 · ${EASY_PAY_NAMES[easyPay]}`,
      total: price,
    });
    setOrderModalView("complete");
  };

  const shippingPhoneInvalid =
    phoneTouched.shipping && !isValidPhoneNumber(shipping.phone);
  const customerPhoneInvalid =
    phoneTouched.customer && !isValidPhoneNumber(customer.phone);

  return (
    <main className="payment-page">
      <div className="payment-container">
        <h1 className="payment-page-title">결제</h1>

        <div className="payment-layout">
          <div className="payment-left">

            {/* 주문 정보 */}
            <section className="payment-section">
              <h2 className="payment-section-title">
                주문 정보 <span>1건</span>
              </h2>

              <div className="payment-product">
                <img
                  src="/team/newher01.png"
                  alt="젠틀몬스터 뉴 허 01 선글라스"
                />
                <div className="payment-product-info">
                  <p>GENTLE MONSTER</p>
                  <strong>뉴 허 01</strong>
                  <small>블랙/블랙</small>
                </div>
                <span className="payment-quantity">1개</span>
              </div>
            </section>

            {/* 배송 정보 */}
            <section className="payment-section">
              <div className="payment-section-heading">
                <h2>배송 정보</h2>
                <button
                  type="button"
                  className="payment-default-btn"
                  onClick={() =>
                    alert("저장된 배송 정보 연동 예정입니다.")
                  }
                >
                  기본 정보 불러오기
                </button>
              </div>

              <div className="payment-form">
                <label htmlFor="receiver">받는 사람</label>
                <input
                  id="receiver"
                  name="receiver"
                  value={shipping.receiver}
                  onChange={changeShipping}
                />

                <label htmlFor="shippingPhone">연락처</label>
                <div className="payment-phone-field">
                  <input
                    id="shippingPhone"
                    name="phone"
                    type="tel"
                    inputMode="numeric"
                    maxLength={13}
                    placeholder="010-1234-5678"
                    value={shipping.phone}
                    onChange={changeShipping}
                    onBlur={() =>
                      setPhoneTouched((prev) => ({ ...prev, shipping: true }))
                    }
                    aria-invalid={shippingPhoneInvalid}
                    aria-describedby={
                      shippingPhoneInvalid ? "shippingPhoneError" : undefined
                    }
                  />
                  {shippingPhoneInvalid && (
                    <p id="shippingPhoneError" className="payment-phone-error">
                      휴대폰번호 11자리를 정확히 입력해주세요.
                    </p>
                  )}
                </div>

                <label>배송지</label>
                <div className="payment-address">
                  <div className="payment-address-top">
                    <button
                      type="button"
                      onClick={openAddress}
                    >
                      주소검색
                    </button>
                    <input
                      aria-label="우편번호"
                      name="postcode"
                      placeholder="우편번호"
                      value={shipping.postcode}
                      onChange={changeShipping}
                    />
                  </div>
                  <div className="payment-address-bottom">
                    <input
                      aria-label="기본주소"
                      name="address"
                      value={shipping.address}
                      onChange={changeShipping}
                    />
                    <input
                      aria-label="상세주소"
                      name="detail"
                      placeholder="상세주소"
                      value={shipping.detail}
                      onChange={changeShipping}
                    />
                  </div>
                </div>

                <label htmlFor="deliveryRequest">
                  배송 요청사항
                </label>
                <input
                  id="deliveryRequest"
                  name="request"
                  value={shipping.request}
                  onChange={changeShipping}
                />
              </div>
            </section>

            {/* 주문자 */}
            <section className="payment-section">
              <div className="payment-section-heading payment-customer-heading">
                <h2>주문자</h2>
                <label className="payment-customer-sync">
                  <span>주문자와 받는 사람이 동일</span>
                  <input
                    type="checkbox"
                    checked={sameAsReceiver}
                    onChange={changeSameAsReceiver}
                  />
                </label>
              </div>

              <div className="payment-form">
                <label htmlFor="customerName">이름</label>
                <input
                  id="customerName"
                  name="name"
                  value={customer.name}
                  onChange={changeCustomer}
                  readOnly={sameAsReceiver}
                />

                <label htmlFor="customerPhone">연락처</label>
                <div className="payment-phone-field">
                  <input
                    id="customerPhone"
                    name="phone"
                    type="tel"
                    inputMode="numeric"
                    maxLength={13}
                    placeholder="010-1234-5678"
                    value={customer.phone}
                    onChange={changeCustomer}
                    onBlur={() =>
                      setPhoneTouched((prev) => ({ ...prev, customer: true }))
                    }
                    readOnly={sameAsReceiver}
                    aria-invalid={customerPhoneInvalid}
                    aria-describedby={
                      customerPhoneInvalid ? "customerPhoneError" : undefined
                    }
                  />
                  {customerPhoneInvalid && (
                    <p id="customerPhoneError" className="payment-phone-error">
                      휴대폰번호 11자리를 정확히 입력해주세요.
                    </p>
                  )}
                </div>

                <label htmlFor="customerEmail">이메일</label>
                <input
                  id="customerEmail"
                  name="email"
                  type="email"
                  value={customer.email}
                  onChange={changeCustomer}
                />
              </div>
            </section>

            {/* 결제수단 */}
            <section className="payment-section">
              <h2 className="payment-section-title">결제수단</h2>

              <div className="payment-method">
                <label className="payment-method-label">
                  <input
                    type="radio"
                    name="paymentMethod"
                    checked={method === "card"}
                    onChange={() => setMethod("card")}
                  />
                  카드
                </label>

                <div className="payment-card-fields">
                  <select
                    aria-label="카드 선택"
                    value={card}
                    disabled={method !== "card"}
                    onChange={(e) => setCard(e.target.value)}
                  >
                    <option value="">카드를 선택해주세요.</option>
                    <option value="shinhan">신한카드</option>
                    <option value="kb">국민카드</option>
                    <option value="samsung">삼성카드</option>
                    <option value="hyundai">현대카드</option>
                  </select>

                  <select
                    aria-label="할부 선택"
                    value={installment}
                    disabled={method !== "card"}
                    onChange={(e) => setInstallment(e.target.value)}
                  >
                    <option>일시불</option>
                    <option>2개월</option>
                    <option>3개월</option>
                    <option>6개월</option>
                  </select>
                </div>

                <label className="payment-method-label">
                  <input
                    type="radio"
                    name="paymentMethod"
                    checked={method === "easy"}
                    onChange={() => setMethod("easy")}
                  />
                  간편결제
                </label>

                <div className="payment-easy-pay">
                  <button
                    type="button"
                    disabled={method !== "easy"}
                    className={method === "easy" && easyPay === "kakao" ? "selected" : ""}
                    onClick={() => setEasyPay("kakao")}
                  >
                    <img
                      className="payment-pay-logo payment-pay-logo-kakao"
                      src={`${import.meta.env.BASE_URL}logo/kakaopay.png`}
                      alt=""
                    />
                    <span className="payment-pay-name">카카오페이</span>
                  </button>

                  <button
                    type="button"
                    disabled={method !== "easy"}
                    className={method === "easy" && easyPay === "naver" ? "selected" : ""}
                    onClick={() => setEasyPay("naver")}
                  >
                    <img
                      className="payment-pay-logo payment-pay-logo-naver"
                      src={`${import.meta.env.BASE_URL}logo/npay.png`}
                      alt=""
                    />
                    <span className="payment-pay-name">네이버페이</span>
                  </button>

                  <button
                    type="button"
                    disabled={method !== "easy"}
                    className={method === "easy" && easyPay === "toss" ? "selected" : ""}
                    onClick={() => setEasyPay("toss")}
                  >
                    <img
                      className="payment-pay-logo payment-pay-logo-toss"
                      src={`${import.meta.env.BASE_URL}logo/tosspay.png`}
                      alt=""
                    />
                    <span className="payment-pay-name">토스페이</span>
                  </button>
                </div>
              </div>
            </section>
          </div>

          {/* 오른쪽 결제 금액 */}
          <aside className="payment-right">
            <div className="payment-sticky">
              <h2>결제 금액</h2>

              <div className="payment-summary">
                <div>
                  <span>상품 금액</span>
                  <span>{formatPrice(price)}원</span>
                </div>

                <div>
                  <span>할인 금액</span>
                  <span>-</span>
                </div>

                <div>
                  <span>배송비</span>
                  <span>무료배송</span>
                </div>

                <div className="payment-total">
                  <strong>총 금액</strong>
                  <strong>{formatPrice(price)}원</strong>
                </div>
              </div>

              <div className="payment-notice">
                <p>※ AI 피팅 구매 안내</p>
                <p>
                  AI 피팅을 이용해 구매하신 상품은 상품 특성에 따라
                  교환 및 반품이 제한될 수 있습니다.
                </p>

                <label>
                  <input
                    type="checkbox"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                  />
                  <span>안내 내용을 확인했습니다.</span>
                </label>
              </div>

              <button
                type="button"
                className="payment-submit"
                onClick={handlePayment}
              >
                {formatPrice(price)}원 결제하기
              </button>
            </div>
          </aside>
        </div>
      </div>

      {isAddressSearchOpen && (
        <div className="payment-address-search-overlay">
          <section
            className="payment-address-search-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="payment-address-search-title"
          >
            <div className="payment-address-search-header">
              <h2 id="payment-address-search-title">주소검색</h2>
              <button
                type="button"
                className="payment-address-search-close"
                aria-label="주소검색 닫기"
                onClick={closeAddressSearch}
              >
                ×
              </button>
            </div>

            <div
              ref={addressSearchRef}
              className="payment-address-search-content"
            />

            {addressSearchStatus === "loading" && (
              <p className="payment-address-search-status">
                주소검색을 불러오는 중입니다.
              </p>
            )}

            {addressSearchStatus === "error" && (
              <p className="payment-address-search-status" role="alert">
                주소검색을 불러오지 못했습니다. 잠시 후 다시 시도해주세요.
              </p>
            )}
          </section>
        </div>
      )}

      {orderModalView && completedOrder && (
        <div className="payment-order-overlay">
          <section
            className="payment-order-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="payment-order-modal-title"
          >
            <button
              type="button"
              className="payment-order-close"
              aria-label="닫기"
              onClick={closeOrderModal}
            >
              ×
            </button>

            {orderModalView === "complete" ? (
              <>
                <div className="payment-order-content">
                  <div className="payment-order-check" aria-hidden="true">
                    ✓
                  </div>
                  <h2 id="payment-order-modal-title">
                    주문이 완료되었습니다.
                  </h2>
                  <p>선택하신 상품이 정상적으로 주문되었습니다.</p>
                  <p>주문해주셔서 감사합니다.</p>
                  <strong className="payment-order-number">
                    주문번호 : {completedOrder.orderNumber}
                  </strong>
                  <small className="payment-order-test-notice">
                    테스트 주문이며 실제 결제는 이루어지지 않았습니다.
                  </small>
                  <small className="payment-order-test-notice" role="status">
                    {completedOrder.isStored
                      ? "테스트 주문정보가 브라우저에 저장되었습니다."
                      : "주문은 완료되었지만 브라우저 저장에 실패하여 추후 주문조회가 불가능합니다."}
                  </small>
                  {completedOrder.isStored && (
                    <button
                      type="button"
                      className="payment-order-lookup-link"
                      onClick={goToGuestOrderLookup}
                    >
                      비회원 주문조회
                    </button>
                  )}
                </div>

                <div className="payment-order-actions">
                  <button
                    type="button"
                    className="payment-order-secondary"
                    onClick={() => setOrderModalView("detail")}
                  >
                    주문 상세보기
                  </button>
                  <button
                    type="button"
                    className="payment-order-primary"
                    onClick={continueShopping}
                  >
                    쇼핑 계속하기
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="payment-order-detail">
                  <h2 id="payment-order-modal-title">주문 상세정보</h2>
                  <p className="payment-order-detail-number">
                    주문번호 {completedOrder.orderNumber}
                  </p>

                  <div className="payment-order-detail-group">
                    <h3>주문 상품</h3>
                    <dl>
                      <div>
                        <dt>상품</dt>
                        <dd>
                          {completedOrder.product.brand} {completedOrder.product.name}
                        </dd>
                      </div>
                      <div>
                        <dt>옵션 / 수량</dt>
                        <dd>
                          {completedOrder.product.option} / {completedOrder.product.quantity}개
                        </dd>
                      </div>
                    </dl>
                  </div>

                  <div className="payment-order-detail-group">
                    <h3>주문자 정보</h3>
                    <dl>
                      <div>
                        <dt>이름</dt>
                        <dd>{completedOrder.customer.name}</dd>
                      </div>
                      <div>
                        <dt>연락처</dt>
                        <dd>{completedOrder.customer.phone}</dd>
                      </div>
                      <div>
                        <dt>이메일</dt>
                        <dd>{completedOrder.customer.email}</dd>
                      </div>
                    </dl>
                  </div>

                  <div className="payment-order-detail-group">
                    <h3>배송 정보</h3>
                    <dl>
                      <div>
                        <dt>받는 사람</dt>
                        <dd>{completedOrder.shipping.receiver}</dd>
                      </div>
                      <div>
                        <dt>연락처</dt>
                        <dd>{completedOrder.shipping.phone}</dd>
                      </div>
                      <div>
                        <dt>배송지</dt>
                        <dd>
                          [{completedOrder.shipping.postcode}]{" "}
                          {completedOrder.shipping.address}{" "}
                          {completedOrder.shipping.detail}
                        </dd>
                      </div>
                      <div>
                        <dt>배송 요청</dt>
                        <dd>{completedOrder.shipping.request || "없음"}</dd>
                      </div>
                    </dl>
                  </div>

                  <div className="payment-order-detail-group">
                    <h3>결제 정보</h3>
                    <dl>
                      <div>
                        <dt>결제수단</dt>
                        <dd>{completedOrder.paymentMethod}</dd>
                      </div>
                      <div>
                        <dt>결제 금액</dt>
                        <dd>{formatPrice(completedOrder.total)}원</dd>
                      </div>
                    </dl>
                  </div>

                  <small className="payment-order-test-notice">
                    테스트 주문이며 실제 결제는 이루어지지 않았습니다.
                  </small>
                </div>

                <div className="payment-order-actions">
                  <button
                    type="button"
                    className="payment-order-secondary"
                    onClick={() => setOrderModalView("complete")}
                  >
                    주문완료로 돌아가기
                  </button>
                  <button
                    type="button"
                    className="payment-order-primary"
                    onClick={continueShopping}
                  >
                    쇼핑 계속하기
                  </button>
                </div>
              </>
            )}
          </section>
        </div>
      )}
    </main>
  );
}

export default Payment;
