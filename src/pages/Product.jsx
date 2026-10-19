import { useState, useEffect, useMemo } from "react";
import { Link, useParams } from "react-router-dom"
import FitProductCard from "../components/FitProductCard.jsx";
import ProductDetailSummary from "../components/ProductDetailSummary.jsx";
import FitSelector from "../components/FitSelector.jsx";
import "./Product.css";

const products = {
  "new-her": {
    id: "new-her",
    brand: "GENTLE MONSTER",
    name: "뉴 허 01",
    color: "블랙/블랙",
    price: 289000,
    image: "/team/classic/gmNewHer.png",
    video: "/team/classic/gmnewher.mp4",
    description: "클래식한 블랙 컬러와 여유로운 오버핏의 스퀘어 선글라스",
    size: ["63.9 mm", "53.7 mm", "15 mm", "148.9 mm", "147 mm"],
    features: [
      "블랙 아세테이트 프레임",
      "UV 99.9%차단 렌즈",
      "스퀘어 쉐입"
    ],
    defaultFit: "Over"
  },

  "rayclassic": {
    id: "rayclassic",
    brand: "RAY-BAN",
    name: "ORIGINAL WAYFARER CLASSIC",
    color: "52mm",
    price: 270000,
    image: "/team/classic/rayclassic.png",
    video: "/team/classic/rayclassic.mp4",
    description: "대체 불가능한 헤리티지, 선글라스의 영원한 세계 표준.",
    size: ["52mm", "44mm", "22mm", "145mm", "150mm"],
    features: [
      "블랙 아세테이트 프레임",
      "UV 100%차단 그린 블랙 글라스 렌즈",
      "스퀘어 쉐입"
    ],
    defaultFit: "Regular"
  },

  "gmsoho": {
    id: "gmsoho",
    brand: "GENTLE MONSTER",
    name: "소호 01",
    color: "블랙",
    price: 279000,
    image: "/team/classic/gmsoho.png",
    video: "",
    description: "블랙 아세테이트 리뉴 소재의 스퀘어 선글라스.",
    size: ["53mm", "38.4mm", "22mm", "145.5mm", "147.1mm"],
    features: [
      "블랙 아세테이트 리뉴 프레임",
      "UV 99.9%차단 렌즈",
      "스퀘어 쉐입",
    ],
    defaultFit: "Regular"
  },

  "blueSblack": {
    id: "blueSblack",
    brand: "BLUE ELEPHANT",
    name: "MARINA-S black",
    color: "블랙",
    price: 69900,
    image: "/team/classic/blueSblack.png",
    video: "",
    description: "MARINA-S black 상품 설명을 입력해 주세요.",
    size: ["55mm", "43mm", "19mm", "146mm", "148mm"],
    features: [
      "블랙 아세테이트 프레임",
      "UV 100% 차단 나일론 렌즈",
    ],
    defaultFit: "Over"
  },

  "persol": {
    id: "persol",
    brand: "Persol",
    name: "PO0649NE - Total Black Arrow",
    color: "54mm",
    price: 615000,
    originalPrice: 1065000,
    image: "/team/classic/persol.png",
    video: "/team/classic/persol.mp4",
    description: "올블랙의 시크함으로 재해석한 페르솔의 독보적인 클래식 아이콘.",
    size: ["54mm", "49.3mm", "20mm", "141mm", "140mm"],
    features: [
      "블랙 아세테이트 프레임",
      "블루 그라데이션 편광 크리스탈 렌즈",
      "클래식한 쉐입"
    ],
    defaultFit: "Regular"
  },

  "celine": {
    id: "celine",
    brand: "CELINE",
    name: "트리옹프 01",
    color: "블랙",
    price: 730000,
    image: "/team/classic/celine.png",
    video: "",
    description: "시그니처 트리옹프 디테일이 돋보이는 클래식 선글라스.",
    size: ["확인 필요", "확인 필요", "확인 필요", "확인 필요", "확인 필요"],
    features: [
      "블랙 프레임",
      "UV 차단 렌즈",
      "트리옹프 디테일"
    ],
    defaultFit: "Regular"
  },
};


const recommendedProducts = [
  {
    id: "rayclassic",
    brand: "RAY-BAN",
    name: "ORIGINAL WAYFARER CLASSIC",
    price: 270000,
    image: "/team/classic/rayclassic.png",
  },
  {
    id: "gmsoho",
    brand: "GENTLE MONSTER",
    name: "소호 01",
    price: 279000,
    image: "/team/classic/gmsoho.png",
  },
  {
    id: "blueSblack",
    brand: "BLUE ELEPHANT",
    name: "MARINA-S black",
    price: 69900,
    image: "/team/classic/blueSblack.png",
  },
  {
    id: "new-her",
    brand: "GENTLE MONSTER",
    name: "뉴 허 01",
    price: 289000,
    image: "/team/classic/gmNewHer.png",
  },
  {
    id: "celine",
    brand: "CELINE",
    name: "트리옹프 01",
    price: 730000,
    image: "/team/classic/celine.png",
  },
  {
    id: "persol",
    brand: "Persol",
    name: "PO0649NE - Total Black Arrow",
    originalPrice: 676334,
    price: 351515,
    image: "/team/classic/persol.png",
  },
];

function Product({ favorites, toggleFavorite, cartItems, updateCart, removeFromCart, }) {
  const { productId = "new-her" } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productId]);
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);
  const product = products[productId] ?? products["new-her"];
  const randomRecommendedProducts = useMemo(() => {
    return [...recommendedProducts]
      .filter((item) => item.id !== product.id)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);
  }, [product.id]);

  return (
    <main className="product-detail">
      <Link className="product-breadcrumb" to="/classic">
        <span aria-hidden="true">〈</span> CLASSIC
      </Link>

      <ProductDetailSummary
        key={product.id}
        product={product}
        showDiscountRate={true}
        showOriginalPrice={true}
        isFavorite={favorites.includes(product.id)}
        onToggleFavorite={() => toggleFavorite(product.id)}
        cartQuantity={cartItems[product.id] ?? 0}
        onAddToCart={(quantity) => updateCart(product.id, quantity)}
        onRemoveFromCart={() => removeFromCart(product.id)}
      />

      <section className="product-gallery" aria-label="상품 이미지">
        <div className="product-gallery-image">
          <img
            src={product.image}
            alt={`${product.name} 선글라스`}
          />
        </div>

        {product.video && (
          <div className="product-gallery-image product-gallery-image-alt">
            <video
              src={product.video}
              autoPlay
              muted
              loop
              playsInline
              aria-label={`${product.name} 상품 영상`}
            />
          </div>
        )}
      </section>

      <section className="product-information" aria-labelledby="product-info-title">
        <h2 id="product-info-title">Info</h2>
        <p className="product-info-description">
          {product.description}
        </p>

        <div className="product-specifications">
          <div>
            <div className="product-size-heading">
              <h3>Size</h3>
              <button
                type="button"
                className="size-guide-button"
                onClick={() => setIsSizeGuideOpen(true)}
              >
                Size Guide &gt;
              </button>
            </div>

            <dl>
              {["렌즈 가로", "렌즈 세로", "브릿지", "프레임 정면", "다리 길이"].map(
                (label, index) => (
                  <div key={label}>
                    <dt>{label}</dt>
                    <dd>{product.size[index]}</dd>
                  </div>
                )
              )}
            </dl>
          </div>

          <div>
            <h3>Features</h3>
            <ul>
              {product.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="product-fit">
          <h3>Fit</h3>
          <FitSelector
            key={product.id}
            options={["Small", "Regular", "Over"]}
            selectedIndex={
              ["Small", "Regular", "Over"].indexOf(product.defaultFit)
            }
          />
        </div>
      </section>

      <section className="product-recommendations" aria-labelledby="fit-for-you-title">
        <h2 id="fit-for-you-title">Fit for you</h2>
        <div className="recommended-products">
          {randomRecommendedProducts.map((item) => (
            <FitProductCard
              key={item.id}
              product={item}
              isFavorite={favorites.includes(item.id)}
              onToggleFavorite={() => toggleFavorite(item.id)}
            />
          ))}
        </div>
      </section>
      {isSizeGuideOpen && (
        <div
          className="size-guide-overlay"
          onClick={() => setIsSizeGuideOpen(false)}
        >
          <section
            className="size-guide-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="size-guide-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="size-guide-close"
              aria-label="사이즈 가이드 닫기"
              onClick={() => setIsSizeGuideOpen(false)}
            >
              ×
            </button>

            <div className="size-guide-illustration">
              <img
                src="/team/size-guide.png"
                alt="선글라스 사이즈 측정 가이드"
              />
            </div>

            <p className="size-guide-note">
              상품별 실제 치수는 상세 정보에서 확인해 주세요. (단위: mm)
            </p>
          </section>
        </div>
      )}

    </main>
  );
}

export default Product;
