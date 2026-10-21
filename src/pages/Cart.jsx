import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

export default function CartPage({
  cartItems,
  products,
  updateCart,
  removeFromCart,
}) {
  const navigate = useNavigate();
  const [selectedIds, setSelectedIds] = useState(
    () => Object.keys(cartItems)
  );
  const [cartAgreement, setCartAgreement] = useState(false);

  // 장바구니 객체를 화면에 표시할 상품 배열로 변환
  const items = Object.entries(cartItems)
    .map(([id, quantity]) => {
      const product = products[id];

      if (!product) return null;

      return {
        ...product,
        quantity,
      };
    })
    .filter(Boolean);

  const selectedCartItems = items.filter((item) =>
    selectedIds.includes(item.id)
  );

  const cartSubtotal = selectedCartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const allSelected =
    items.length > 0 &&
    items.every((item) => selectedIds.includes(item.id));

  function toggleSelectAll(checked) {
    setSelectedIds(
      checked ? items.map((item) => item.id) : []
    );
  }

  function toggleSelect(id) {
    setSelectedIds((prev) =>
      prev.includes(id)
        ? prev.filter((itemId) => itemId !== id)
        : [...prev, id]
    );
  }

  function deleteSelected() {
    selectedCartItems.forEach((item) =>
      removeFromCart(item.id)
    );

    setSelectedIds((prev) =>
      prev.filter((id) => !selectedCartItems.some(
        (item) => item.id === id
      ))
    );
  }

  return (
    <main className="cart-page">
      <section className="cart-title-bar">
        <h1>장바구니</h1>
        <button
          className="mypage-return-link"
          type="button"
          onClick={() => navigate(-1)}
        >
          ← 이전 페이지로 돌아가기
        </button>
      </section>

      <div className="cart-content">
        <section
          className="cart-items-panel"
          aria-label="장바구니 상품 목록"
        >
          <div className="cart-toolbar">
            <label>
              <input
                type="checkbox"
                checked={allSelected}
                onChange={(event) =>
                  toggleSelectAll(event.target.checked)
                }
              />
              전체 선택
            </label>

            <button
              type="button"
              disabled={selectedCartItems.length === 0}
              onClick={deleteSelected}
            >
              선택 삭제
            </button>
          </div>

          {items.length > 0 ? (
            items.map((item) => (
              <article className="cart-item" key={item.id}>
                <label className="cart-item-check">
                  <input
                    type="checkbox"
                    aria-label={`${item.name} 선택`}
                    checked={selectedIds.includes(item.id)}
                    onChange={() => toggleSelect(item.id)}
                  />
                </label>

                <div className="cart-item-image">
                  <img
                    src={item.image}
                    alt={`${item.name} 선글라스`}
                  />
                </div>

                <div className="cart-item-info">
                  <span>{item.brand}</span>
                  <strong>{item.name}</strong>
                  <small>{item.color}</small>

                  <div className="cart-quantity-control">
                    <button
                      type="button"
                      aria-label="수량 줄이기"
                      disabled={item.quantity <= 1}
                      onClick={() =>
                        updateCart(item.id, item.quantity - 1)
                      }
                    >
                      −
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      type="button"
                      aria-label="수량 늘리기"
                      onClick={() =>
                        updateCart(item.id, item.quantity + 1)
                      }
                    >
                      ＋
                    </button>
                  </div>
                </div>

                <strong className="cart-item-price">
                  {(item.price * item.quantity).toLocaleString("ko-KR")}원
                </strong>

                <button
                  className="cart-item-remove"
                  type="button"
                  aria-label={`${item.name} 삭제`}
                  onClick={() => {
                    removeFromCart(item.id);
                    setSelectedIds((prev) =>
                      prev.filter((id) => id !== item.id)
                    );
                  }}
                >
                  ×
                </button>
              </article>
            ))
          ) : (
            <div className="cart-empty-state">
              <p>장바구니가 비어 있어요.</p>
              <button
                type="button"
                onClick={() => navigate("/")}
              >
                상품 둘러보기
              </button>
            </div>
          )}
        </section>

        <aside className="cart-summary">
          <h2>구매 금액</h2>

          <div className="cart-price-box">
            <dl>
              <dt>상품 금액</dt>
              <dd>{cartSubtotal.toLocaleString("ko-KR")}원</dd>

              <dt>할인 금액</dt>
              <dd>0원</dd>

              <dt>배송비</dt>
              <dd>{cartSubtotal > 0 ? "무료배송" : "0원"}</dd>
            </dl>

            <div className="cart-total">
              <strong>총 금액</strong>
              <strong>{cartSubtotal.toLocaleString("ko-KR")}원</strong>
            </div>
          </div>

          <label className="cart-agreement">
            <input
              type="checkbox"
              checked={cartAgreement}
              onChange={(event) =>
                setCartAgreement(event.target.checked)
              }
            />
            <span>
              AI 피팅 구매 상품의 교환 및 반품 제한에 동의합니다.
            </span>
          </label>

          <button
            type="button"
            disabled={
              selectedCartItems.length === 0 || !cartAgreement
            }
            onClick={() => navigate("/payment")}
          >
            결제하기
          </button>

          <p>※ 결제 기능은 별도 연동이 필요합니다.</p>
        </aside>
      </div>
    </main>
  );
}