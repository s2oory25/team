import { useMemo, useState } from "react";
import ProductCard from "../components/ProductCard.jsx";

const products = [
  { id: 1, brand: "RAYBEN", name: "ORIGINAL WAYFARER CLASSIC", price: 270000, shape: "oval",  image: "/team/classic/rayclassic.png" },
  { id: 2, brand: "Persol", name: "PO0649NE - Total Black Arrow", price: 351515, originalPrice: 676334, shape: "soft-square", image: "/team/classic/persol.png" },
  { id: 3, brand: "GENTLE MONSTER", name: "뉴 허 01", price: 289000, shape: "square", image: "/team/classic/gmNewHer.png" },
  { id: 4, brand: "CELENE", name: "트리옹프 01", price: 730000, shape: "oval", image: "/team/classic/celine.png"},
  { id: 5, brand: "BLUE ELEPHANT", name: "MARINA-S black", price: 69900, shape: "soft-square", image: "/team/classic/blueSblack.png" },
  { id: 6, brand: "GENTLE MONSTER", name: "소호 01", price: 279000, shape: "square", image: "/team/classic/gmsoho.png"},
];

function Classic() {
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
      <section className="hero-banner" aria-label="클래식 선글라스 컬렉션">
        <img src="/team/classic.png" alt="클래식 선글라스 이미지" />
      </section>

      <section aria-labelledby="collection-title">
        <div className="collection-heading">
          <h1 id="collection-title">CLASSIC</h1>
          <p>오랜 시간 동안 사랑받아 온 시대를 초월한 디자인의 선글라스</p>
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

export default Classic;