import { useNavigate } from "react-router-dom";
import "./ProductCard.css";

function formatPrice(price) {
  return `${price.toLocaleString("ko-KR")}원`;
}

function ProductCard({ product }) {
  const navigate = useNavigate();

  const { id, brand, name, price, originalPrice, image } = product;

  const hasDiscount =
    Number.isFinite(originalPrice) && originalPrice > price;

  const discountRate = hasDiscount
    ? Math.round(((originalPrice - price) / originalPrice) * 100)
    : 0;

function handleCardClick() {
  navigate(`/product/${id}`);
}

  return (
      <article
        className={`product-card product-card-${id}`}
        onClick={handleCardClick}
        role="link"
        tabIndex={0}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            handleCardClick();
          }
        }}
        style={{ cursor: "pointer" }}
      >
      <div className="product-art">
        <img
          className="product-image"
          src={image}
          alt={`${brand} ${name}`}
        />

        <button
          className="fit-label"
          type="button"
          onClick={(event) => event.stopPropagation()}
        >
          AI 피팅
        </button>
      </div>

      <p className="product-brand">{brand}</p>
      <p className="product-name">{name}</p>

      <div className={`product-price-row${hasDiscount ? " is-discounted" : ""}`}>
        {hasDiscount && (
          <span className="discount-rate">{discountRate}%</span>
        )}

        <div className="product-prices">
          {hasDiscount && (
            <del className="original-price">
              {formatPrice(originalPrice)}
            </del>
          )}

          <span className="product-price">
            {formatPrice(price)}
          </span>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
