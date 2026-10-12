import { useMemo, useState } from "react";
import ProductCard from "../components/ProductCard.jsx";

const products = [
  { id: 1, brand: "CHARLES&KEITH", name: "브레아 라운드 선글라스", price: 109900, shape: "oval",  image: "/team/casual/charles.png" },
  { id: 2, brand: "오클리", name: "아이 자켓 리덕스", price: 261000, shape: "soft-square", image: "/team/casual/okelyi.png" },
  { id: 3, brand: "RAY-BEN", name: "클럽 마스터", price: 204800, originalPrice: 256000, shape: "square", image: "/team/casual/rayclub.png" },
  { id: 4, brand: "LE SPECS", name: "마스카라 1475 블랙", price: 138000, originalPrice: 230000, shape: "oval", image: "/team/casual/lespecs1475.png"},
  { id: 5, brand: "베나코 폰타나", name: "BWF513BK", price: 89000, originalPrice: 179000, shape: "soft-square", image: "/team/casual/venaco.png" },
  { id: 6, brand: "IZIPIZI", name: "#E Black", price: 99000, shape: "square", image: "/team/casual/izipizi.png"},
];

function Casual() {
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
      <section className="hero-banner" aria-label="캐주얼 선글라스 컬렉션">
        <img src="/team/casual.png" alt="캐주얼 선글라스 이미지" />
      </section>

      <section aria-labelledby="collection-title">
        <div className="collection-heading">
          <h1 id="collection-title">CASUAL</h1>
          <p>휴양지나 특별한 야외 활동뿐만 아니라, 일상적인 옷차림(캐주얼 룩)에 자연스럽고 편안하게 매치할 수 있는 데일리용 선글라스</p>
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

export default Casual;