
import { useNavigate } from "react-router-dom";
import "./OrderDetailPage.css";

export default function OrderDetailPage({ selectedOrder }) {
  const navigate = useNavigate();

  const orderDetail = selectedOrder;

  // 선택한 주문 정보가 없는 경우
  if (!orderDetail) {
    return (
      <main className="order-detail-page">
        <section className="order-detail-title-bar">
          <h1>주문상세</h1>
        </section>

        <div className="order-detail-content">
          <p>주문 정보를 찾을 수 없습니다.</p>

          <button
            className="order-detail-back"
            type="button"
            onClick={() => navigate("/orders")}
          >
            주문내역으로 돌아가기
          </button>
        </div>
      </main>
    );
  }

  const formatPrice = (price) =>
    `${Number(price || 0).toLocaleString("ko-KR")}원`;

  return (
    <main className="order-detail-page">
      <section className="order-detail-title-bar">
        <h1>주문상세</h1>
      </section>

      <p className="order-detail-number">
        주문번호 : {orderDetail.number}
      </p>

      <p className="order-detail-date">
        주문일시 : {orderDetail.date}
      </p>

      <div className="order-detail-content">
        {/* 주문 정보 */}
        <section className="order-detail-section">
          <h2>주문 정보</h2>

          <div className="order-detail-product">
            <div className="order-detail-image">
              <img
                src={orderDetail.image}
                alt={`${orderDetail.brand} ${orderDetail.name}`}
              />
            </div>

            <div className="order-detail-product-info">
              <span>{orderDetail.brand}</span>
              <strong>{orderDetail.name}</strong>
              <small>
                {orderDetail.quantity}개　{orderDetail.option}
              </small>
              <strong>{formatPrice(orderDetail.price)}</strong>
            </div>

            <button
              className="order-detail-shipping-link"
              type="button"
              onClick={() => navigate("/shipping")}
            >
              배송 조회 ›
            </button>
          </div>

          <dl className="order-detail-info-box">
            <dt>주문 상태</dt>
            <dd>{orderDetail.status || "주문 확인 중"}</dd>

            <dt>배송 안내</dt>
            <dd>
              {orderDetail.deliveryMessage || "배송 정보를 준비 중입니다."}
            </dd>
          </dl>
        </section>

        {/* 배송지 정보 */}
        <section className="order-detail-section">
          <h2>배송지 정보</h2>

          <dl className="order-detail-info-box">
            <dt>받는 사람</dt>
            <dd>김찰떡</dd>

            <dt>연락처</dt>
            <dd>010-1234-5678</dd>

            <dt>배송지</dt>
            <dd>
              (12345) 서울특별시 찰떡구 찰떡동 12-345 607호
            </dd>
          </dl>
        </section>

        {/* 결제 정보 */}
        <section className="order-detail-section">
          <h2>결제 정보</h2>

          <dl className="order-detail-info-box payment">
            <dt>상품 금액</dt>
            <dd>{formatPrice(orderDetail.price * orderDetail.quantity)}</dd>

            <dt>배송비</dt>
            <dd>무료</dd>

            <dt>주문 금액</dt>
            <dd>{formatPrice(orderDetail.price * orderDetail.quantity)}</dd>

            <dt>카드</dt>
            <dd>{formatPrice(orderDetail.price * orderDetail.quantity)}</dd>
          </dl>
        </section>

        {/* 주문자 정보 */}
        <section className="order-detail-section">
          <h2>주문자 정보</h2>

          <dl className="order-detail-info-box">
            <dt>주문자</dt>
            <dd>김찰떡</dd>

            <dt>연락처</dt>
            <dd>010-1234-5678</dd>

            <dt>이메일</dt>
            <dd>chalfit@naver.com</dd>
          </dl>
        </section>

        <button
          className="order-detail-back"
          type="button"
          onClick={() => navigate("/orders")}
        >
          주문내역으로 돌아가기
        </button>
      </div>
    </main>
  );
}
