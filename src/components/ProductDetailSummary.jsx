import { useState } from "react";
import "./ProductDetailSummary.css";

function formatPrice(price) {
  return `${price.toLocaleString("ko-KR")}원`;
}

function ProductDetailSummary({
  product,
  showDiscountRate = true,
  showOriginalPrice = true,
  isAddedToCart = false,
  onAddToCart,
}) {
  const [isFavorite, setIsFavorite] = useState(false);
  const { id, brand, name, color, price, originalPrice, discountRate, image } =
    product;
  const hasDiscount =
    Number.isFinite(originalPrice) && originalPrice > price;
  const saleRate = Number.isFinite(discountRate)
    ? discountRate
    : hasDiscount
      ? Math.round(((originalPrice - price) / originalPrice) * 100)
      : 0;

  return (
    <section className="product-summary" aria-labelledby={`product-title-${id}`}>
      <div className="product-summary-image">
        <img src={image} alt={`${name} 정면`} />
      </div>

      <div className="product-summary-info">
        <button
          className="product-favorite"
          type="button"
          aria-label={isFavorite ? `${name} 좋아요 취소` : `${name} 좋아요`}
          aria-pressed={isFavorite}
          onClick={() => setIsFavorite((favorite) => !favorite)}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z" />
          </svg>
        </button>
        <p className="product-brand">{brand}</p>
        <h1 id={`product-title-${id}`}>{name}</h1>
        {color && <p className="product-color">{color}</p>}

        <div
          className={`product-detail-price${hasDiscount && (showDiscountRate || showOriginalPrice) ? " has-discount" : ""}`}
        >
          {hasDiscount && showDiscountRate && (
            <span className="product-discount-rate">{saleRate}%</span>
          )}
          <div className="product-detail-prices">
            {hasDiscount && showOriginalPrice && (
              <del className="product-original-price">
                {formatPrice(originalPrice)}
              </del>
            )}
            <span>{formatPrice(price)}</span>
          </div>
        </div>

        <div className="product-actions">
          <button className="product-ai-button" type="button">
            AI 피팅 <span aria-hidden="true">›</span>
          </button>
          <button
            className="product-cart-button"
            type="button"
            onClick={onAddToCart}
          >
            {isAddedToCart ? "담았어요" : "장바구니 담기"}
          </button>
          <button className="product-buy-button" type="button">
            구매하기
          </button>
        </div>
        <p className="product-cart-message" aria-live="polite">
          {isAddedToCart ? "장바구니에 담았습니다." : ""}
        </p>
      </div>
    </section>
  );
}

export default ProductDetailSummary;
