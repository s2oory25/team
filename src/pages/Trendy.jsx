import { useMemo, useState } from "react";
import ProductCard from "../components/ProductCard.jsx";


const products = [
  {
    id: "rayban-rb4441d",
    brand: "RAY-BEN",
    name: "RB4441D",
    price: 172800,
    originalPrice: 216000,
    shape: "oval",
    image: "/team/trendy/ray4441d.png",
  },
  {
    id: "blue-elephant-postiq",
    brand: "BLUE ELEPHANT",
    name: "POSTIQ black",
    price: 69900,
    shape: "soft-square",
    image: "/team/trendy/bluepostiq.png",
  },
  {
    id: "moncler-cirsee",
    brand: "MONCLER",
    name: "Cirsee 파일럿 선글라스",
    price: 700000,
    shape: "square",
    image: "/team/trendy/moncler.png",
  },
  {
    id: "prada-linea-rossa",
    brand: "PRADA",
    name: "Linea Rossa sunglasses",
    price: 610000,
    shape: "oval",
    image: "/team/trendy/prada.png",
  },
  {
    id: "wakilly-tutu",
    brand: "WACKY WILLY",
    name: "아세테이트 TUTU 선글라스",
    price: 41580,
    originalPrice: 99000,
    shape: "soft-square",
    image: "/team/trendy/tutu.png",
  },
  {
    id: "romantic-noir-pulse",
    brand: "ROMANTINUER",
    name: "PULSE B1",
    price: 64960,
    originalPrice: 116000,
    shape: "square",
    image: "/team/trendy/pulse.png",
  },
];


function Trendy() {
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
      <section className="hero-banner" aria-label="트렌디 선글라스 컬렉션">
        <img src="/team/trendy.png" alt="트렌디 선글라스 이미지" />
      </section>

      <section aria-labelledby="collection-title">
        <div className="collection-heading">
          <h1 id="collection-title">TRENDY</h1>
          <p className="trendy-intro trendy-intro-desktop">
            시대의 유행과 감각을 반영하여 개인의 개성과 패션 스타일을 극대화해 주는 선글라스.
          </p>

          <p className="trendy-intro trendy-intro-mobile">
            개성과 패션 감각을 살려주는 트렌디한 선글라스.
          </p>

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

export default Trendy;