
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

  return (
    <article
      className="fit-product-card favorite-product-card"
      onClick={goToProduct}
      role="link"
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === "Enter") {
          goToProduct();
        }
      }}
    >
      <div className="fit-product-image">
        <img src={image} alt={`${brand} ${name}`} />
      </div>

      <div className="fit-product-heading">
        <div>
          <p className="fit-product-brand">{brand}</p>
          <p className="fit-product-name">{name}</p>
        </div>

        <div className="favorite-product-actions">
          <button
            className="fit-product-favorite"
            type="button"
            aria-label={`${name} 좋아요 취소`}
            aria-pressed={isFavorite}
            onClick={(event) => {
              event.stopPropagation();
              onToggleFavorite?.();
            }}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z" />
            </svg>
          </button>

          <button
            className="favorite-product-cart"
            type="button"
            aria-label={`${name} 장바구니에 담기`}
            onClick={(event) => {
              event.stopPropagation();
              onAddCart?.(product);
            }}
          >
            🛒
          </button>
        </div>
      </div>

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
