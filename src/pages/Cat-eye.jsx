import { useMemo, useState } from "react";
import ProductCard from "../components/ProductCard.jsx";

// These products already have detail pages and images in the catalog.
const products = [
  { id: "new-her", brand: "GENTLE MONSTER", name: "던 01", price: 340000, shape: "cat-eye", image: "/team/cat-eye-products/dawn.png" },
  { id: "gmsoho", brand: "PRADA", name: "SPRA09", price: 700000, shape: "cat-eye", image: "/team/cat-eye-products/spra09.png" },
  { id: "celine", brand: "BLUE ELEPHANT", name: "EVER", price: 49900, shape: "cat-eye", image: "/team/cat-eye-products/ever.png" },
  { id: "rayclassic", brand: "CELINE", name: "트리옹프 15", price: 730000, shape: "cat-eye", image: "/team/cat-eye-products/celine-triomphe.png" },
  { id: "persol", brand: "CARIN", name: "CELLY R_C1", price: 218000, shape: "cat-eye", image: "/team/cat-eye-products/carin-celly.png" },
  { id: "blueSblack", brand: "GENTLE MONSTER", name: "데본 01", price: 340000, shape: "cat-eye", image: "/team/cat-eye-products/devon.png" },
];

function CatEye() {
  const [sortOrder, setSortOrder] = useState("popular");
  const sortedProducts = useMemo(() => {
    if (sortOrder === "price-low") return [...products].sort((a, b) => a.price - b.price);
    if (sortOrder === "price-high") return [...products].sort((a, b) => b.price - a.price);
    return products;
  }, [sortOrder]);

  return (
    <main className="classic-page cat-eye-page">
      <section className="hero-banner" aria-label="캣아이 선글라스 컬렉션">
        <img src="/team/cat-eye.png" alt="캣아이 선글라스 컬렉션 이미지" />
      </section>

      <section aria-labelledby="collection-title">
        <div className="collection-heading">
          <h1 id="collection-title">CAT-EYE</h1>
          <p className="cat-eye-intro-desktop">
            위로 올라간 날렵한 프레임으로 세련되고 도회적인 인상을 더하는 캣아이 쉐입.
          </p>
          <p className="cat-eye-intro-tablet">
            위로 올라간 프레임이 세련되고 도회적인 인상을 더하는 캣아이 선글라스.
          </p>
          <p className="cat-eye-intro-mobile">
            날렵한 프레임의 세련된 캣아이 선글라스.
          </p>
          <select
            className="sort-select"
            id="product-sort"
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

export default CatEye;
