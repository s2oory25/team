function PaymentProduct({
  product,
  quantity,
  onDecrease,
  onIncrease,
}) {
  const formatPrice = (value) =>
    Number(value || 0).toLocaleString("ko-KR");

  const totalPrice = Number(product.price || 0) * quantity;

  return (
    <div className="payment-product">
      <img
        className="payment-product-image"
        src={product.image}
        alt={`${product.name} 선글라스`}
      />

      <div className="payment-product-info">
        <p>{product.brand}</p>
        <div className="payment-product-middle">
          <strong>{product.name}</strong>
          <small>{product.color || product.option || ""}</small>
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

      

        <div className="payment-product-price">
          {Number(product.originalPrice) > Number(product.price) && (
            <>
              <span className="payment-product-discount">
                {Math.round(
                  (1 - Number(product.price) / Number(product.originalPrice)) * 100
                )}%
              </span>

              <del>
                {formatPrice(Number(product.originalPrice) * quantity)}원
              </del>
            </>
          )}

          <strong>{formatPrice(totalPrice)}원</strong>
        </div>
    </div>
  );
}

export default PaymentProduct;