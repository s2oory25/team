import { useNavigate } from "react-router-dom";
import "./OrdersPage.css";

export default function OrdersPage({ setSelectedOrder }) {
  const navigate = useNavigate();

  const orders = [
    {
      number: "CF20260907-1234",
      date: "2026.09.07 10:23",
      brand: "GENTLE MONSTER",
      name: "뉴 허 01",
      option: "블랙/블랙",
      size: "",
      quantity: 1,
      price: 289000,
      image: "/team/classic/gmNewHer.png",
      alt: "뉴 허 01 선글라스",
      status: "배송중",
      deliveryMessage: "09.07 상품이 출고되었습니다.",
    },
    {
      number: "CF20260812-5678",
      date: "2026.08.12 11:25",
      brand: "LE SPECS",
      name: "마스카라 1475 블랙",
      option: "블랙",
      size: "",
      quantity: 1,
      price: 230000,
      image: "/team/casual/lespecs1475.png",
      alt: "마스카라 1475",
      status: "배송완료",
      deliveryMessage: "08.14 상품이 배송되었습니다.",
    },
  ];

  const formatPrice = (price) => `${price.toLocaleString("ko-KR")}원`;

  const openOrderDetail = (order) => {
    if (setSelectedOrder) {
      setSelectedOrder(order);
    }

    navigate("/order-detail");
  };

  return (
    <main className="orders-page">
      <section className="orders-title-bar">
        <h1>주문내역</h1>
      </section>

      <p className="orders-intro">
        주문하신 상품 내역을 조회해보세요.
      </p>

      <div className="orders-layout">
        <aside className="orders-sidebar" aria-label="마이페이지 메뉴">
          <button
            type="button"
            onClick={() => navigate("/account")}
          >
            회원정보수정
          </button>

          <span>SHOPPING</span>

          <button
            type="button"
            className="active"
            onClick={() => navigate("/orders")}
          >
            주문내역
          </button>

          <button
            type="button"
            onClick={() => navigate("/recent")}
          >
            최근 본 상품
          </button>

          <button
            type="button"
            onClick={() => navigate("/favorites")}
          >
            좋아요
          </button>

          <button
            type="button"
            onClick={() => navigate("/cart")}
          >
            장바구니
          </button>

          <span>고객지원</span>

          <button
            type="button"
            onClick={() => navigate("/faq")}
          >
            FAQ
          </button>

          <button
            type="button"
            onClick={() => navigate("/inquiry")}
          >
            1:1 문의
          </button>
        </aside>

        <section className="orders-list" aria-label="주문 목록">
          {orders.map((order) => (
            <article className="order-card" key={order.number}>
              <header className="order-card-header">
                <span>주문일　{order.date}</span>

                <span>
                  주문번호　<strong>{order.number}</strong>
                </span>

                <button
                  type="button"
                  onClick={() => openOrderDetail(order)}
                >
                  주문 상세보기 ›
                </button>
              </header>

              <div className="order-card-body">
                <div className="order-product">
                  <div className="order-product-image">
                    <img src={order.image} alt={order.alt} />
                  </div>

                  <div className="order-product-info">
                    <span>{order.brand}</span>
                    <strong>{order.name}</strong>

                    <small>
                      {order.option}
                      {order.size ? `　${order.size}` : ""}
                    </small>

                    <small>
                      {formatPrice(order.price)}　{order.quantity}개
                    </small>
                  </div>
                </div>

                <div
                  className={`order-delivery ${
                    order.status === "배송완료" ? "completed" : ""
                  }`}
                >
                  <strong>{order.status}</strong>
                  <p>{order.deliveryMessage}</p>

                  {order.status === "배송중" ? (
                    <>
                      <div
                        className="delivery-progress"
                        aria-label="배송중"
                      >
                        <span className="done" />
                        <span className="done" />
                        <span className="done" />
                        <span className="current" />
                        <span />
                      </div>

                      <div className="delivery-labels">
                        <span>주문접수</span>
                        <span>결제완료</span>
                        <span>배송준비중</span>
                        <b>배송중</b>
                        <span>배송완료</span>
                      </div>

                      <button
                        type="button"
                        onClick={() => openOrderDetail(order)}
                      >
                        배송 조회하기
                      </button>
                    </>
                  ) : (
                    <div className="order-actions">
                      <button
                        type="button"
                        onClick={() =>
                          alert("구매확정 기능은 아직 연결되지 않았습니다.")
                        }
                      >
                        구매확정
                      </button>

                      <button
                        type="button"
                        onClick={() =>
                          alert("리뷰 작성 기능은 아직 연결되지 않았습니다.")
                        }
                      >
                        리뷰 작성
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}