
import { useMemo, useState } from "react";
import ProductCard from "../components/ProductCard.jsx";

const products = [
  {
    id: "thom-browne",
    brand: "THOM BROWNE",
    name: "UES928A",
    price: 1030000,
    shape: "square",
    image: "/square/thombrowne-ues928a.png",
  },
  {
    id: "chanel-9193",
    brand: "CHANEL",
    name: "Square Sunglasses 9193",
    price: 1030000,
    shape: "square",
    image: "/square/chanel-9193.png",
  },
  {
    id: "charles-keith-maude",
    brand: "CHARLES & KEITH",
    name: "Maude Square Sunglasses",
    price: 1006000,
    shape: "square",
    image: "/square/charles-and-keith-maude.png",
  },
  {
    id: "gent01",
    brand: "GENTLE MONSTER",
    name: "젠트 01",
    price: 289000,
    shape: "square",
    image: "/square/gentle-monster-gent-01.png",
  },
  {
    id: "tiffany-t",
    brand: "TIFFANY & CO.",
    name: "Tiffany T Sunglasses",
    price: 566000,
    shape: "square",
    image: "/square/tiffany-t.png",
  },
  {
    id: "swarovski-sk6032",
    brand: "SWAROVSKI",
    name: "SK6032",
    price: 350000,
    shape: "square",
    image: "/square/swarovski-sk6032.png",
  },
];

function Square() {
  const [sortOrder, setSortOrder] = useState("popular");

  const sortedProducts = useMemo(() => {
    if (sortOrder === "price-low") {
      return [...products].sort(
        (first, second) => first.price - second.price
      );
    }

    if (sortOrder === "price-high") {
      return [...products].sort(
        (first, second) => second.price - first.price
      );
    }

    return products;
  }, [sortOrder]);

  return (
    <main className="classic-page">
      <section
        className="hero-banner"
        aria-label="스퀘어 선글라스 컬렉션"
      >
        <img
          src="/square/square.png"
          alt=""
        />
      </section>

      <section aria-labelledby="collection-title">
        <div className="collection-heading">
          <h1 id="collection-title">SQUARE</h1>

          <p>
            세련된 직선과 또렷한 프레임이 돋보이는
            스퀘어 선글라스 컬렉션.
          </p>

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
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Square;
