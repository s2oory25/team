import { useState } from "react";
import "./ProductDetailSummary.css";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  const [isFavorite, setIsFavorite] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const decreaseQuantity = () => {
  setQuantity((prev) => Math.max(1, prev - 1));
  };

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };
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


        <div className="product-price-quantity">
          {/* 할인율: 오른쪽 위 */}
          {hasDiscount && showDiscountRate && (
            <div className="product-discount-top">
              <span className="product-discount-rate">{saleRate}%</span>
            </div>
          )}

          {/* 아래 줄: 수량 버튼 + 가격 */}
          <div className="product-price-bottom">
            <div className="product-quantity-control">
              <button
                type="button"
                onClick={decreaseQuantity}
                disabled={quantity === 1}
                aria-label="수량 줄이기"
              >
                −
              </button>

              <span className="product-quantity-value">{quantity}</span>

              <button
                type="button"
                onClick={increaseQuantity}
                aria-label="수량 늘리기"
              >
                +
              </button>
            </div>

            <div className="product-detail-price">
              <div className="product-detail-prices">
                {hasDiscount && showOriginalPrice && (
                  <del className="product-original-price">
                    {formatPrice(originalPrice)}
                  </del>
                )}

                <span>{formatPrice(price * quantity)}</span>
              </div>
            </div>
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
          <button
            className="product-buy-button"
            type="button"
            onClick={() =>
              navigate("/payment", {
                state: {
                  product,
                  quantity,
                },
              })
            }
          >
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
