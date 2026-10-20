
import React from "react";

function PaymentProduct({
  product,
  quantity,
  onDecrease,
  onIncrease,
}) {
  return (
    <div className="payment-product">
      <img
        src={product.image}
        alt={`${product.name} 선글라스`}
      />

      <div className="payment-product-info">
        <p>{product.brand}</p>

        <div className="payment-product-middle">
          <strong>{product.name}</strong>
          <small>{product.color}</small>
        </div>
      </div>

      <div className="product-quantity-control">
        <button
          type="button"
          onClick={onDecrease}
          disabled={quantity <= 1}
          aria-label="수량 줄이기"
        >
          −
        </button>

        <span className="product-quantity-value">
          {quantity}
        </span>

        <button
          type="button"
          onClick={onIncrease}
          aria-label="수량 늘리기"
        >
          +
        </button>
      </div>
    </div>
  );
}

export default PaymentProduct;