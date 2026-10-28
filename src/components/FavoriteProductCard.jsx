
import { useNavigate } from "react-router-dom";
import "./FitProductCard.css";
import "./FavoriteProductCard.css";

function formatPrice(price) {
  return `${price.toLocaleString("ko-KR")}원`;
}

function FavoriteProductCard({
  product,
  isFavorite = true,
  onToggleFavorite,
  onAddCart,
}) {
  const navigate = useNavigate();

  const { id, brand, name, price, originalPrice, discountRate, image } =
    product;

  const hasDiscount =
    Number.isFinite(originalPrice) && originalPrice > price;

  const saleRate = hasDiscount
    ? Number.isFinite(discountRate)
      ? discountRate
      : Math.round(((originalPrice - price) / originalPrice) * 100)
    : 0;

  const goToProduct = () => {
    navigate(`/product/${id}`);
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  };

  const handleCardKeyDown = (event) => {
    // 카드 자체에 포커스가 있을 때만 키보드로 상세페이지 이동
    if (event.target !== event.currentTarget) return;

    if (event.key === "Enter") {
      event.preventDefault();
      goToProduct();
    }
  };

  return (
    <article
      className="fit-product-card favorite-product-card"
      role="link"
      tabIndex={0}
      aria-label={`${brand} ${name} 상세 보기`}
      onKeyDown={handleCardKeyDown}
    >
      {/* 상품 이미지를 눌렀을 때 상세페이지로 이동 */}
      <div
        className="fit-product-image favorite-product-image-clickable"
        onClick={goToProduct}
      >
        <img src={image} alt={`${brand} ${name}`} />
      </div>

      <div className="fit-product-heading">
        <div
          className="favorite-product-info-clickable"
          onClick={goToProduct}
        >
          <p className="fit-product-brand">{brand}</p>
          <p className="fit-product-name">{name}</p>
        </div>

        <div className="favorite-product-actions">
          {/* 하트 버튼: 좋아요 해제만 실행 */}
          <button
            className="fit-product-favorite"
            type="button"
            aria-label={`${name} 좋아요 취소`}
            aria-pressed={isFavorite}
            onClick={(event) => {
              event.preventDefault();
              event.stopPropagation();
              onToggleFavorite?.();
            }}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z" />
            </svg>
          </button>

          {/* 장바구니 버튼: 장바구니 추가만 실행 */}
          <button
            className="favorite-product-cart"
            type="button"
            aria-label={`${name} 장바구니에 담기`}
            onClick={(event) => {
              event.preventDefault();
              event.stopPropagation();
              onAddCart?.(product);
            }}
          >
            🛒
          </button>
        </div>
      </div>

      {/* 가격 영역 */}
      <div
        className={`fit-product-pricing${hasDiscount ? " has-discount" : ""}`}
      >
        {hasDiscount && (
          <>
            <span className="fit-product-discount">{saleRate}%</span>
            <del className="fit-product-original-price">
              {formatPrice(originalPrice)}
            </del>
          </>
        )}

        <span className="fit-product-price">{formatPrice(price)}</span>
      </div>
    </article>
  );
}

export default FavoriteProductCard;