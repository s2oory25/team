
import { useMemo, useState } from "react";
import ProductCard from "../components/ProductCard.jsx";

const products = [
  {
    id: "thom-browne",
    brand: "THOM BROWNE",
    name: "UES928A",
    price: 1030000,
    color: "블랙 / 그레이 실버 플래시",
    fit: "Regular",
    shape: "square",
    image: "/square/thombrowne-ues928a.png",
    description: "블랙 스퀘어 프레임과 실버 렌즈가 돋보이는 선글라스",
    sizeDetails: [
      { label: "렌즈 너비", value: "56mm" },
      { label: "브릿지 너비", value: "18.5mm" },
      { label: "템플 길이", value: "148mm" },
    ],
    features: ["아세테이트", "블랙", "그레이 실버 플래시", "스퀘어", "반사 코팅"],
  },
  {
    id: "chanel-9193",
    brand: "CHANEL",
    name: "Square Sunglasses 9193",
    price: 1030000,
    color: "블랙 / 다크 그레이",
    fit: "Over",
    shape: "square",
    image: "/square/chanel-9193.png",
    description: "블랙 아세테이트 프레임의 오버사이즈 스퀘어 선글라스",
    sizeDetails: [
      { label: "전체 너비", value: "126mm" },
      { label: "렌즈 너비", value: "53mm" },
      { label: "렌즈 높이", value: "47mm" },
      { label: "템플", value: "140mm" },
    ],
    features: ["블랙 아세테이트 프레임", "다크 그레이 렌즈", "스퀘어", "100% UVA·UVB 차단"],
  },
  {
    id: "charles-keith-maude",
    brand: "CHARLES & KEITH",
    name: "Maude Square Sunglasses",
    price: 1006000,
    color: "블랙 / 다크 그레이",
    fit: "Regular",
    shape: "square",
    image: "/square/charles-and-keith-maude.png",
    description: "블랙 아세테이트 프레임과 다크 렌즈의 스퀘어 선글라스",
    sizeDetails: [
      { label: "전체 너비", value: "136mm" },
      { label: "렌즈 너비", value: "51mm" },
      { label: "렌즈 높이", value: "47mm" },
      { label: "브리지", value: "17mm" },
      { label: "템플", value: "145mm" },
    ],
    features: ["블랙 아세테이트 프레임", "다크 그레이 렌즈", "스퀘어 형태", "100% UV 차단"],
  },
  {
    id: "gent01",
    brand: "GENTLE MONSTER",
    name: "젠트 01",
    price: 289000,
    color: "블랙",
    fit: "Over",
    shape: "square",
    image: "/square/gentle-monster-gent-01.png",
    description: "블랙 아세테이트 소재의 스퀘어 선글라스",
    sizeDetails: [
      { label: "전체 너비", value: "149.1mm" },
      { label: "렌즈 너비", value: "64.2mm" },
      { label: "렌즈 높이", value: "48.3mm" },
      { label: "브릿지", value: "17mm" },
      { label: "템플 길이", value: "146.8mm" },
    ],
    features: ["블랙 아세테이트 프레임", "블랙 렌즈", "스퀘어 쉐입", "UV 99.9% 차단 렌즈"],
  },
  {
    id: "tiffany-t",
    brand: "TIFFANY & CO.",
    name: "Tiffany T Sunglasses",
    price: 566000,
    color: "블랙 / 다크 그레이",
    fit: "Regular",
    shape: "square",
    image: "/square/tiffany-t.png",
    description: "블랙 아세테이트 프레임과 다크 그레이 렌즈를 적용한 선글라스",
    sizeDetails: [
      { label: "렌즈 높이", value: "56mm" },
      { label: "브리지", value: "16mm" },
      { label: "템플", value: "140mm" },
    ],
    features: ["블랙 아세테이트 프레임", "다크 그레이 렌즈", "스퀘어", "100% UV 차단", "눈부심 방지"],
  },
  {
    id: "swarovski-sk6032",
    brand: "SWAROVSKI",
    name: "SK6032",
    price: 350000,
    color: "블랙 / 다크 그레이",
    fit: "Regular",
    shape: "square",
    image: "/square/swarovski-sk6032.png",
    description: "블랙 프레임과 크리스털 포인트가 어우러진 스퀘어 선글라스",
    sizeDetails: [
      { label: "렌즈 너비", value: "55mm" },
      { label: "렌즈 높이", value: "44.8mm" },
      { label: "브리지", value: "17mm" },
      { label: "템플", value: "145mm" },
    ],
    features: ["아세테이트 / 금속", "블랙", "다크 그레이", "스퀘어", "UV400, 자외선 100% 차단"],
  },
];

function Square({ onProductClick }) {
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
              onClick={(selected) =>
                onProductClick?.({
                  ...selected,
                  recommendations: products.filter(({ id }) => id !== selected.id),
                })
              }
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Square;
