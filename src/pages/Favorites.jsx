import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Favorites.css";

function HeartIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 21s-8-4.7-8-11a4.5 4.5 0 0 1 8-3 4.5 4.5 0 0 1 8 3c0 6.3-8 11-8 11Z" />
    </svg>
  );
}

function CartIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3 4h2l2.1 11.1a2 2 0 0 0 2 1.6h8.7a2 2 0 0 0 1.9-1.5L21 8H6" />
      <circle cx="9.5" cy="20" r="1" />
      <circle cx="18" cy="20" r="1" />
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
  const favoriteProducts = favorites
    .map((productId) => products[productId])
    .filter(Boolean);

  function openProduct(productId) {
    navigate(`/product/${productId}`);
  }

  function handleCardKeyDown(event, productId) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openProduct(productId);
    }
  }

  function addToCart(productId) {
    updateCart(productId, (cartItems[productId] ?? 0) + 1);
  }

  return (
    <main className="favorites-page">
      <div className="favorites-title-bar">
        <h1>좋아요</h1>
      </div>

      <section className="favorites-body" aria-label="좋아요 상품">
        {favoriteProducts.length > 0 && (
          <div className="favorites-toolbar">
            <h2 className="favorites-description">
              마음에 드는 선글라스를 모아보세요.
            </h2>
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
              <article
                className="favorite-card"
                key={product.id}
                role="link"
                tabIndex="0"
                aria-label={`${product.brand} ${product.name} 상세 보기`}
                onClick={() => openProduct(product.id)}
                onKeyDown={(event) => handleCardKeyDown(event, product.id)}
              >
                <div className="favorite-card-image">
                  <img src={product.image} alt={`${product.brand} ${product.name}`} />
                </div>

                <div className="favorite-card-row">
                  <p className="favorite-card-brand">{product.brand}</p>
                  <button
                    className="favorite-card-heart"
                    type="button"
                    aria-label={`${product.name} 좋아요 취소`}
                    aria-pressed="true"
                    onClick={(event) => {
                      event.stopPropagation();
                      toggleFavorite(product.id);
                    }}
                  >
                    <HeartIcon />
                  </button>
                </div>

                <p className="favorite-card-name">{product.name}</p>

                <div className="favorite-card-row favorite-card-bottom">
                  <p className="favorite-card-price">
                    {product.price.toLocaleString("ko-KR")}원
                  </p>
                  <button
                    className="favorite-card-cart"
                    type="button"
                    aria-label={`${product.name} 장바구니에 담기`}
                    onClick={(event) => {
                      event.stopPropagation();
                      addToCart(product.id);
                    }}
                  >
                    <CartIcon />
                  </button>
                </div>
              </article>
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
              <button type="button" onClick={() => navigate("/classic")}>
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
