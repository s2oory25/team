import { useNavigate } from "react-router-dom";
import "./RecentPage.css";

const RECENT_PRODUCTS_KEY = "chalfitRecentlyViewed";

export default function RecentPage({ products }) {
  const navigate = useNavigate();
  let recentIds = [];

  try {
    const stored = JSON.parse(localStorage.getItem(RECENT_PRODUCTS_KEY) || "[]");
    if (Array.isArray(stored)) recentIds = stored;
  } catch {
    recentIds = [];
  }

  const recentProducts = recentIds
    .map((id) => products[id])
    .filter(Boolean);

  function clearRecentProducts() {
    localStorage.removeItem(RECENT_PRODUCTS_KEY);
    navigate(0);
  }

  return (
    <main className="recent-page">
      <section className="recent-title-bar">
        <h1>최근 본 상품</h1>
        {recentProducts.length > 0 && (
          <button className="recent-clear-button" type="button" onClick={clearRecentProducts}>
            전체 삭제
          </button>
        )}
      </section>
      <p className="recent-intro">최근 확인한 상품을 다시 둘러보세요.</p>
      {recentProducts.length ? (
        <section className="recent-product-grid" aria-label="최근 본 상품 목록">
          {recentProducts.map((product) => (
            <button
              className="recent-product-card"
              type="button"
              key={product.id}
              onClick={() => navigate(`/product/${product.id}`)}
              aria-label={`${product.brand} ${product.name} 제품 상세 보기`}
            >
              <img src={product.image} alt="" />
              <span className="recent-product-brand">{product.brand}</span>
              <span className="recent-product-name">{product.name}</span>
              <span className="recent-product-price">{product.price.toLocaleString("ko-KR")}원</span>
            </button>
          ))}
        </section>
      ) : (
        <section className="recent-empty-state">
          <p className="recent-empty-title">최근 본 상품이 없어요.</p>
          <p>상품 상세를 확인하면 여기에 최근 본 상품이 표시됩니다.</p>
          <button type="button" onClick={() => navigate("/")}>상품 둘러보기</button>
          <button className="recent-ai-link" type="button" onClick={() => navigate("/ai-fitting")}>
            AI FIT 시작하기 <span aria-hidden="true">›</span>
          </button>
        </section>
      )}
    </main>
  );
}
