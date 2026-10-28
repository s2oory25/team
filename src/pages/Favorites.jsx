
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FavoriteProductCard from "../components/FavoriteProductCard.jsx";
import "./Favorites.css";

function HeartIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 21s-8-4.7-8-11a4.5 4.5 0 0 1 8-3 4.5 4.5 0 0 1 8 3c0 6.3-8 11-8 11Z" />
    </svg>
  );
}

export default function Favorites({
  favorites,
  products,
  toggleFavorite,
  clearFavorites,
  cartItems,
  updateCart,
}) {
  const navigate = useNavigate();
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const favoriteProducts = (Array.isArray(favorites) ? favorites : [])
    .map((item) => {
      const id =
        typeof item === "object" && item !== null ? item.id : item;

      return (
        products[String(id)] ??
        Object.values(products).find(
          (product) => String(product.id) === String(id)
        )
      );
    })
    .filter(Boolean);

  function addToCart(productId) {
    updateCart(productId, (cartItems[productId] ?? 0) + 1);
  }

  return (
    <main className="favorites-page">
      <div className="favorites-title-bar">
        <h1>좋아요</h1>
      </div>

      <p className="favorites-intro">
        마음에 드는 선글라스를 모아보세요.
      </p>

      <nav className="likes-mobile-tabs" aria-label="마이페이지 메뉴">
        <button
          type="button"
          onClick={() => navigate("/mypage")}
        >
          회원정보 수정
        </button>

        <button
          type="button"
          onClick={() => navigate("/mypage")}
        >
          주문 내역
        </button>

        <button
          type="button"
          onClick={() => navigate("/mypage")}
        >
          최근 본 상품
        </button>

        <button
          className="active"
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
      </nav>

      <section className="favorites-body" aria-label="좋아요 상품">
        {favoriteProducts.length > 0 && (
          <div className="favorites-toolbar">
            <button
              className="favorites-clear-button"
              type="button"
              onClick={() => setIsDeleteModalOpen(true)}
            >
              전체 삭제
            </button>
          </div>
        )}

        <div
          className={`favorites-content${
            favoriteProducts.length === 0 ? " is-empty" : ""
          }`}
        >
          {favoriteProducts.length > 0 ? (
            <div className="favorites-grid">
              {favoriteProducts.map((product) => (
                <FavoriteProductCard
                  key={product.id}
                  product={product}
                  isFavorite={true}
                  onToggleFavorite={() => toggleFavorite(product.id)}
                  onAddCart={() => addToCart(product.id)}
                />
              ))}
            </div>
          ) : (
            <div className="favorites-empty">
              <HeartIcon />

              <p className="favorites-empty-title">
                아직 좋아요한 상품이 없어요.
              </p>

              <p className="favorites-empty-description">
                마음에 드는 선글라스를 저장해보세요.
              </p>

              <button
                type="button"
                onClick={() => navigate("/classic")}
              >
                상품 둘러보기
              </button>
            </div>
          )}
        </div>
      </section>

      {isDeleteModalOpen && (
        <div
          className="favorites-modal-overlay"
          onClick={() => setIsDeleteModalOpen(false)}
        >
          <div
            className="favorites-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="favorites-delete-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="favorites-modal-close"
              type="button"
              aria-label="닫기"
              onClick={() => setIsDeleteModalOpen(false)}
            >
              ×
            </button>

            <h2 id="favorites-delete-modal-title">
              좋아요한 상품을 모두 삭제하시겠습니까?
            </h2>

            <div className="favorites-modal-actions">
              <button
                className="favorites-modal-cancel"
                type="button"
                onClick={() => setIsDeleteModalOpen(false)}
              >
                취소
              </button>

              <button
                className="favorites-modal-confirm"
                type="button"
                onClick={() => {
                  clearFavorites();
                  setIsDeleteModalOpen(false);
                }}
              >
                전체 삭제
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}