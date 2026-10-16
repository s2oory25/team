import { useState } from "react";
import {
  GUEST_TEST_ORDERS_STORAGE_KEY,
  GUEST_TEST_ORDER_PHONE,
} from "../constants/guestOrder.js";
import "./GuestOrderLookup.css";

function normalizePhone(value) {
  return value.replace(/\D/g, "");
}

function isValidStoredOrder(order) {
  return (
    order &&
    typeof order === "object" &&
    typeof order.orderNumber === "string" &&
    typeof order.orderedAt === "string" &&
    typeof order.productName === "string" &&
    typeof order.option === "string" &&
    Number.isInteger(order.quantity) &&
    order.quantity > 0 &&
    typeof order.amount === "number" &&
    Number.isFinite(order.amount) &&
    typeof order.testPhone === "string"
  );
}

function formatOrderDate(value) {
  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return "확인할 수 없음";
  }

  return new Intl.DateTimeFormat("ko-KR", {
    dateStyle: "long",
    timeStyle: "short",
  }).format(date);
}

function GuestOrderLookup() {
  const [orderNumber, setOrderNumber] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({});
  const [lookupError, setLookupError] = useState("");
  const [foundOrder, setFoundOrder] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const normalizedOrderNumber = orderNumber.trim().toUpperCase();
    const normalizedPhone = normalizePhone(phone);
    const nextErrors = {};

    if (!normalizedOrderNumber) {
      nextErrors.orderNumber = "주문번호를 입력해주세요.";
    }

    if (!normalizedPhone) {
      nextErrors.phone = "테스트용 연락처를 입력해주세요.";
    }

    setErrors(nextErrors);
    setLookupError("");
    setFoundOrder(null);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    let savedOrders;

    try {
      savedOrders = localStorage.getItem(GUEST_TEST_ORDERS_STORAGE_KEY);
    } catch {
      setLookupError(
        "브라우저 저장소에 접근할 수 없습니다. 저장소 설정을 확인해주세요.",
      );
      return;
    }

    let orders;

    try {
      orders = savedOrders ? JSON.parse(savedOrders) : [];
    } catch {
      setLookupError(
        "저장된 테스트 주문정보가 손상되어 조회할 수 없습니다.",
      );
      return;
    }

    if (!Array.isArray(orders)) {
      setLookupError(
        "저장된 테스트 주문정보의 형식이 올바르지 않아 조회할 수 없습니다.",
      );
      return;
    }

    const matchedOrder = orders.find(
      (order) =>
        isValidStoredOrder(order) &&
        order.orderNumber.toUpperCase() === normalizedOrderNumber &&
        normalizePhone(order.testPhone) === normalizedPhone,
    );

    if (!matchedOrder) {
      setLookupError("주문번호와 테스트용 연락처가 일치하는 주문이 없습니다.");
      return;
    }

    setFoundOrder(matchedOrder);
  };

  return (
    <main className="guest-order-lookup-page">
      <section className="guest-order-lookup-container">
        <header className="guest-order-lookup-header">
          <p>GUEST ORDER</p>
          <h1>비회원 주문조회</h1>
          <span>
            테스트 주문 완료 시 발급된 주문번호와 시연용 연락처로
            조회할 수 있습니다.
          </span>
        </header>

        <form className="guest-order-lookup-form" onSubmit={handleSubmit} noValidate>
          <div className="guest-order-lookup-field">
            <label htmlFor="guestOrderNumber">주문번호</label>
            <input
              id="guestOrderNumber"
              value={orderNumber}
              onChange={(event) => setOrderNumber(event.target.value)}
              placeholder="CHF-YYYYMMDD-000000"
              autoComplete="off"
              aria-invalid={Boolean(errors.orderNumber)}
              aria-describedby={
                errors.orderNumber ? "guestOrderNumberError" : undefined
              }
            />
            {errors.orderNumber && (
              <p id="guestOrderNumberError" className="guest-order-lookup-error">
                {errors.orderNumber}
              </p>
            )}
          </div>

          <div className="guest-order-lookup-field">
            <label htmlFor="guestOrderPhone">테스트용 연락처</label>
            <input
              id="guestOrderPhone"
              type="tel"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              placeholder={GUEST_TEST_ORDER_PHONE}
              autoComplete="off"
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={errors.phone ? "guestOrderPhoneError" : undefined}
            />
            {errors.phone && (
              <p id="guestOrderPhoneError" className="guest-order-lookup-error">
                {errors.phone}
              </p>
            )}
          </div>

          <p className="guest-order-lookup-guide">
            발표용 테스트 연락처: <strong>{GUEST_TEST_ORDER_PHONE}</strong>
            <br />
            실제 본인 인증에 사용되지 않습니다.
          </p>

          <button type="submit" className="guest-order-lookup-submit">
            주문조회
          </button>

          {lookupError && (
            <p className="guest-order-lookup-message" role="alert">
              {lookupError}
            </p>
          )}
        </form>

        {foundOrder && (
          <section className="guest-order-lookup-result" aria-live="polite">
            <div className="guest-order-lookup-result-heading">
              <div>
                <p>ORDER FOUND</p>
                <h2>주문정보</h2>
              </div>
              <span>테스트 주문</span>
            </div>

            <dl>
              <div>
                <dt>주문번호</dt>
                <dd>{foundOrder.orderNumber}</dd>
              </div>
              <div>
                <dt>주문일시</dt>
                <dd>{formatOrderDate(foundOrder.orderedAt)}</dd>
              </div>
              <div>
                <dt>상품명</dt>
                <dd>{foundOrder.productName}</dd>
              </div>
              <div>
                <dt>상품 옵션</dt>
                <dd>{foundOrder.option}</dd>
              </div>
              <div>
                <dt>주문 수량</dt>
                <dd>{foundOrder.quantity.toLocaleString("ko-KR")}개</dd>
              </div>
              <div>
                <dt>주문 금액</dt>
                <dd>{foundOrder.amount.toLocaleString("ko-KR")}원</dd>
              </div>
            </dl>

            <p>시연을 위한 테스트 주문이며 실제 결제 내역이 아닙니다.</p>
          </section>
        )}
      </section>
    </main>
  );
}

export default GuestOrderLookup;
