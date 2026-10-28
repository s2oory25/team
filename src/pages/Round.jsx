import { useMemo, useState } from "react";
import ProductCard from "../components/ProductCard.jsx";

const products = [
  { id: "round-nuvon", brand: "TOMFORD", name: "FT1244K", price: 800000, shape: "round", image: "/team/round/tomford.png" },
  { id: "round-dean", brand: "PRADA", name: "SPRD08", price: 700000, shape: "round", image: "/team/round/prada.png" },
  { id: "round-noho", brand: "RAY BEN", name: "RB2447", price: 230000, shape: "round", image: "/team/round/rayban.png" },
  { id: "round-her", brand: "Gucci", name: "GG2079S", price: 700000, shape: "round", image: "/team/round/gucci.png" },
  { id: "round-persol", brand: "Oliver Peoples", name: "Gregory Peck Sun", price: 690000, shape: "round", image: "/team/round/oliver-peoples.png" },
  { id: "round-marina", brand: "GENTLE MONSTER", name: "딘 01", price: 279000, shape: "round", image: "/team/round/gm-dean.png" },
];

export default function Round() {
  const [sortOrder, setSortOrder] = useState("popular");
  const sortedProducts = useMemo(() => {
    if (sortOrder === "price-low") return [...products].sort((a, b) => a.price - b.price);
    if (sortOrder === "price-high") return [...products].sort((a, b) => b.price - a.price);
    return products;
  }, [sortOrder]);

  return (
    <main className="classic-page round-page">
      <section className="hero-banner" aria-label="라운드 선글라스 컬렉션">
        <img src="/team/round/banner.png" alt="골드 프레임 라운드 선글라스" />
      </section>

      <section aria-labelledby="round-collection-title">
        <div className="collection-heading">
          <h1 id="round-collection-title">ROUND</h1>
          <p>부드러운 곡선과 원형 프레임으로 얼굴 윤곽을 부드럽게 완화하는 라운드 쉐입.</p>
          <select
            className="sort-select"
            aria-label="상품 정렬"
            value={sortOrder}
            onChange={(event) => setSortOrder(event.target.value)}
          >
            <option value="popular">인기순</option>
            <option value="price-low">낮은 가격순</option>
            <option value="price-high">높은 가격순</option>
          </select>
        </div>

        <div className="product-grid" id="products">
          {sortedProducts.map((product) => <ProductCard key={product.id} product={product} />)}
        </div>
      </section>
    </main>
  );
}
