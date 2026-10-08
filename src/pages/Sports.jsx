import { useMemo, useState } from "react";
import ProductCard from "../components/ProductCard.jsx";

const products = [
  { id: 1, brand: "BLUE ELEPHANT", name: "AVRO purple crystal", price: 69900, shape: "oval",  image: "/team/sports/blueavro.png" },
  { id: 2, brand: "오클리", name: "수처 자켓", price: 294400, originalPrice: 368000, shape: "soft-square", image: "/team/sports/okely.png" },
  { id: 3, brand: "REVO", name: "THUNDER 00", price: 240000, shape: "square", image: "/team/sports/revo.png" },
  { id: 4, brand: "POC", name: "Elicit 선글라스", price: 340000, shape: "oval", image: "/team/sports/poc.png"},
  { id: 5, brand: "RUDY PROJECT", name: "스핀쉴드 프로", price: 25000, shape: "soft-square", image: "/team/sports/rudyspin.png" },
  { id: 6, brand: "VAN RYSEL", name: "미러렌즈 선글라스 타이엔", price: 69900, shape: "square", image: "/team/sports/vanmirror.png"},
];

function Sports() {
  const [sortOrder, setSortOrder] = useState("popular");
  const sortedProducts = useMemo(() => {
    if (sortOrder === "price-low") {
      return [...products].sort((first, second) => first.price - second.price);
    }
    if (sortOrder === "price-high") {
      return [...products].sort((first, second) => second.price - first.price);
    }
    return products;
  }, [sortOrder]);

  return (
    <main className="classic-page">
      <section className="hero-banner" aria-label="스포츠 선글라스 컬렉션">
        <img src="/team/sports.png" alt="스포츠 선글라스 이미지" />
      </section>

      <section aria-labelledby="collection-title">
        <div className="collection-heading">
          <h1 id="collection-title">SPORTS</h1>
          <p>격렬한 야외 활동 중 눈과 얼굴을 보호하고 시야를 선명하게 유지하기 위해 특수 제작된 기능성 안경</p>
          {/* <label className="visually-hidden" htmlFor="product-sort">상품 정렬</label> */}
          <select
            className="sort-select"
            id="product-sort"
            value={sortOrder}
            onChange={(event) => setSortOrder(event.target.value)}
          >
            <option value="popular">인기순</option>
            <option value="price-low">낮은 가격순</option>
            <option value="price-high">높은 가격순</option>
          </select>
        </div>

        <div className="product-grid" id="products">
          {sortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Sports;