import { useState, useEffect, useMemo } from "react";
import { Link, useParams } from "react-router-dom"
import FitProductCard from "../components/FitProductCard.jsx";
import ProductDetailSummary from "../components/ProductDetailSummary.jsx";
import FitSelector from "../components/FitSelector.jsx";
import "./Product.css";

export const products = {
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
      "UV 99.9% 차단 렌즈",
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
      "UV 100% 차단 그린 블랙 글라스 렌즈",
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
    video: "/team/classic/gmsoho.mp4",
    description: "도회적인 카리스마를 더하는 볼드한 스퀘어의 정석.",
    size: ["53mm", "38.4mm", "22mm", "145.5mm", "147.1mm"],
    features: [
      "블랙 아세테이트 프레임",
      "UV 99.9% 차단 렌즈",
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
    video: "/team/classic/blueSblack.mp4",
    description: "가볍게 일상을 빛내는 트렌디한 데일리 스퀘어의 정석.",
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
    video: "/team/classic/celine.mp4",
    description: "골드 트리옹프의 우아함이 돋보이는 트렌디한 오발 셰이프의 정석.",
    size: ["52mm", "38mm", "22mm", "144mm", "145mm"],
    features: [
      "블랙 아세테이트 프레임",
      "UVA 및 UVB 차단 렌즈",
      "트리옹프 시그니처 디테일의 템플",
      "오벌 프레임"
    ],
    defaultFit: "Regular"
  },

    "blue-avro": {
    id: "blue-avro",
    category: "SPORTS",
    brand: "BLUE ELEPHANT",
    name: "AVRO purple crystal",
    color: "퍼플 크리스탈",
    price: 69900,
    image: "/team/sports/blueavro.png",
    video: "/team/sports/blueavro.mp4",
    description: "영롱한 보랏빛 투명 프레임이 돋보이는 고글 선글라스.",
    size: ["143mm", "48mm", "0mm", "148mm", "128mm"],
    features: ["TR-90 프레임", "UV 99% 차단 나일론 렌즈",],
    defaultFit: "Over",
  },

  "oakley-sutro": {
    id: "oakley-sutro",
    category: "SPORTS",
    brand: "오클리",
    name: "수처 자켓",
    color: "블랙",
    price: 328800,
    originalPrice: 411000,
    image: "/team/sports/okely.png",
    video: "/team/sports/okely.mp4",
    description: "강렬한 스포티함과 넓은 시야를 선사하는 일체형 선글라스.",
    size: ["64mm", "44mm", "12mm", "135mm", "138mm"],
    features: ["오 매터 프레임", "플루토나이트 렌즈"],
    defaultFit: "Over",
  },

  "revo-thunder": {
    id: "revo-thunder",
    category: "SPORTS",
    brand: "REVO",
    name: "THUNDER 00",
    color: "그래파이트",
    price: 240000,
    image: "/team/sports/revo.png",
    video: "/team/sports/revo.mp4",
    description: "고성능 변색·편광 렌즈로 시야를 보호하는 스포티 선글라스.",
    size: ["136mm", "53mm", "0mm", "140mm", "130mm"],
    features: ["TR-90 프레임", "폴리카보네이트 렌즈"],
    defaultFit: "Over",
  },

  "poc-elicit": {
    id: "poc-elicit",
    category: "SPORTS",
    brand: "POC",
    name: "Elicit 선글라스",
    color: "투명 베이지 / 골드 미러",
    price: 460000,
    image: "/team/sports/poc.png",
    video: "/team/sports/poc.mp4",
    description: "23g 초경량 프레임리스 구조로 탁 트인 시야를 선사하는 선글라스.",
    size: ["142mm", "59mm", "0mm", "142mm", "120mm"],
    features: ["하이드로젠 화이트 프레임", "클래러티 트레일 / 파틀리 써니 실버"],
    defaultFit: "Over",
  },

  "rudy-spinshield": {
    id: "rudy-spinshield",
    category: "SPORTS",
    brand: "RUDY PROJECT",
    name: "스핀쉴드 프로",
    color: "블랙 매트",
    price: 250000,
    image: "/team/sports/rudyspin.png",
    video: "/team/sports/rudyspin.mp4",
    description: "넓은 시야와 뛰어난 밀착감을 선사하는 대형 쉴드 렌즈 스포츠 선글라스.",
    size: ["147mm", "59mm", "0mm", "147mm", "125mm"],
    features: ["블랙 매트 프레임", "스모크 블랙 렌즈"],
    defaultFit: "Over",
  },

  "van-rysel": {
    id: "van-rysel",
    category: "SPORTS",
    brand: "VAN RYSEL",
    name: "미러렌즈 선글라스 타이엔",
    color: "블랙",
    price: 69900,
    image: "/team/sports/vanmirror.png",
    video: "/team/sports/vanmirror.mp4",
    description: "압도적인 XXL 시야를 선사하는 가성비 사이클링 미러 선글라스.",
    size: ["141mm", "65mm", "19mm", "142mm", "135mm"],
    features: ["폴리카보네이트 및 TR-90 혼합 프레임", "고강도 폴리카보네이트 렌즈"],
    defaultFit: "Over",
  },

    "charles-brea": {
    id: "charles-brea",
    category: "CASUAL",
    brand: "CHARLES&KEITH",
    name: "브레아 라운드 선글라스",
    color: "블랙",
    price: 109900,
    image: "/team/casual/charles.png",
    video: "/team/casual/charles.mp4",
    description: "클래식한 라운드 쉐입으로 데일리룩에 세련된 포인트를 주는 선글라스.",
    size: ["50mm", "49mm", "15mm", "134mm", "145mm"],
    features: ["나일론 플라스틱 프레임", "틴티드 라운드 렌즈", "UV 차단"],
    defaultFit: "Regular",
  },

  "oakley-eye-jacket": {
    id: "oakley-eye-jacket",
    category: "CASUAL",
    brand: "오클리",
    name: "아이 자켓 리덕스",
    color: "매트 블랙",
    price: 261000,
    image: "/team/casual/okelyi.png",
    video: "/team/casual/okelyi.mp4",
    description: "90년대 감성의 타원형 고프코어 선글라스.",
    size: ["58mm", "43mm", "19mm", "135mm", "137mm"],
    features: ["오 메터 프레임", "UV 100% 차단 프리즘 그레이 렌즈"],
    defaultFit: "Small",
  },

  "rayban-clubmaster": {
    id: "rayban-clubmaster",
    category: "CASUAL",
    brand: "RAY-BAN",
    name: "클럽 마스터",
    color: "블랙",
    price: 204800,
    originalPrice: 256000,
    image: "/team/casual/rayclub.png",
    video: "/team/casual/rayclub.mp4",
    description: "지적이고 클래식한 하금테 선글라스의 영원한 아이콘.",
    size: ["51mm", "46mm", "21mm", "140mm", "145mm"],
    features: ["아세테이트 프레임", "아랫부분과 브릿지는 메탈", "UV 100% 차단", "G-15 그린 블랙 글라스 렌즈"],
    defaultFit: "Regular",
  },

  "lespecs-mascarra": {
    id: "lespecs-mascarra",
    category: "CASUAL",
    brand: "LE SPECS",
    name: "마스카라 1475 블랙",
    color: "블랙",
    price: 138000,
    originalPrice: 230000,
    image: "/team/casual/lespecs1475.png",
    video: "/team/casual/lespecs1475.mp4",
    description: "트렌디한 레트로 감성의 힙하고 시크한 직사각형 블랙 선글라스.",
    size: ["51mm", "34mm", "19mm", "150mm", "145mm"],
    features: ["셀룰로오스 아세테이트 프레임", "CR-39 렌즈"],
    defaultFit: "Small",
  },

  "venaco-bwf513bk": {
    id: "venaco-bwf513bk",
    category: "CASUAL",
    brand: "베나코 폰타나",
    name: "BWF513BK",
    color: "블랙",
    price: 89000,
    originalPrice: 179000,
    image: "/team/casual/venaco.png",
    video: "/team/casual/venaco.mp4",
    description: "이탈리아 감성의 편안하고 힙한 오버사이즈 블랙 선글라스.",
    size: ["54mm", "47mm", "21mm", "143mm", "145mm"],
    features: ["와그너 스틸 프레임", "나일론 렌즈"],
    defaultFit: "Over",
  },

  "izipizi-e-black": {
    id: "izipizi-e-black",
    category: "CASUAL",
    brand: "IZIPIZI",
    name: "#E Black",
    color: "블랙",
    price: 99000,
    image: "/team/casual/izipizi.png",
    video: "/team/casual/izipizi.mp4",
    description: "프랑스 감성의 편안하고 위트 있는 사각형 캐주얼 블랙 선글라스.",
    size: ["46mm", "40mm", "20mm", "142mm", "145mm"],
    features: ["폴리카보네이트 프레임", "카테고리 3렌즈", "UV 100% 차단"],
    defaultFit: "Regular",
  },


  // 트렌디 상품 1: RAY-BEN RB4441D
  "rayban-rb4441d": {
    id: "rayban-rb4441d",
    category: "TRENDY",
    brand: "RAY-BEN",
    name: "RB4441D",
    color: "블랙",
    price: 172800,
    originalPrice: 216000,
    image: "/team/trendy/ray4441d.png",
    video: "/team/trendy/ray4441d.mp4",
    description: "트렌디한 긱시크 무드의 가벼운 오벌 뿔테 선글라스.",
    size: ["53mm", "34mm", "21mm", "143mm", "145mm"],
    features: ["바이오 인젝티드 프레임", "바이오 나일론 렌즈", "UV 99.9% 차단"],
    defaultFit: "Regular",
  },

  // 트렌디 상품 2: BLUE ELEPHANT POSTIQ
  "blue-elephant-postiq": {
    id: "blue-elephant-postiq",
    category: "TRENDY",
    brand: "BLUE ELEPHANT",
    name: "POSTIQ black",
    color: "블랙",
    price: 69900,
    image: "/team/trendy/bluepostiq.png",
    video: "/team/trendy/blue_postiq.mp4",
    description: "힙하고 트렌디한 무드의 볼륨감 있는 직사각형 블랙 선글라스.",
    size: ["54mm", "34mm", "19mm", "145mm", "155mm"],
    features: ["아세테이트 프레임", "UV 100% 차단 나일론 렌즈", "블루라이트 차단"],
    defaultFit: "Over",
  },

  // 트렌디 상품 3: MONCLER Cirsee
  "moncler-cirsee": {
    id: "moncler-cirsee",
    category: "TRENDY",
    brand: "MONCLER",
    name: "Cirsee 파일럿 선글라스",
    color: "블랙",
    price: 700000,
    image: "/team/trendy/moncler.png",
    video: "/team/trendy/moncler.mp4",
    description: "미래지향적으로 재해석한 힙하고 트렌디한 파일럿 선글라스.",
    size: ["54mm", "49mm", "20mm", "144mm", "145mm"],
    features: ["아세테이트 프레임", "나일론 렌즈"],
    defaultFit: "Regular",
  },

  // 트렌디 상품 4: PRADA Linea Rossa
  "prada-linea-rossa": {
    id: "prada-linea-rossa",
    category: "TRENDY",
    brand: "PRADA",
    name: "Linea Rossa sunglasses",
    color: "블랙",
    price: 610000,
    image: "/team/trendy/prada.png",
    video: "/team/trendy/prada.mp4",
    description: "날렵한 실루엣에 상징적인 레드 라인을 더한 하이테크 선글라스.",
    size: ["55mm", "44mm", "19mm", "143mm", "143mm"],
    features: ["인젝티드 나일론 프레임", "폴리카보네이트 렌즈", "UVA/UVB 100% 차단"],
    defaultFit: "Regular",
  },

  // 트렌디 상품 5: 와키윌리 TUTU
  "wakilly-tutu": {
    id: "wakilly-tutu",
    category: "TRENDY",
    brand: "와키윌리",
    name: "TUTU 선글라스",
    color: "블랙",
    price: 41580,
    originalPrice: 99000,
    image: "/team/trendy/tutu.png",
    video: "/team/trendy/tutu.mp4",
    description: "자유로운 무드로 가볍게 매치하기 좋은 트렌디한 블랙 선글라스.",
    size: ["51mm", "38mm", "20mm", "144mm", "145mm"],
    features: ["아세테이트 프레임", "CR-39 렌즈", "UV 99.9% 차단" ],
    defaultFit: "Regular",
  },

  // 트렌디 상품 6: 로맨틱누어 PULSE B1
  "romantic-noir-pulse": {
    id: "romantic-noir-pulse",
    category: "TRENDY",
    brand: "로맨틱누어",
    name: "PULSE B1",
    color: "블랙",
    price: 64960,
    originalPrice: 116000,
    image: "/team/trendy/pulse.png",
    video: "/team/trendy/pulse.mp4",
    description: "각진 실루엣으로 트렌디한 무드를 완성하는 블랙 선글라스.",
    size: ["53mm", "34mm", "22mm", "143mm", "140mm"],
    features: ["셀룰로오스 프로피오네이트 프레임", "나일론 렌즈", "UVA, UVB 99.9% 차단"],
    defaultFit: "Regular",
  },


    // 셀럽픽 상품 1: 뷔 - 스피드
  "celeb-speed": {
    id: "celeb-speed",
    category: "CELEB PICK",
    brand: "CARVEN",
    name: "스피드",
    color: "그레이",
    price: 210000,
    image: "/team/celeb/carven.png",
    video: "/team/celeb/carven.mp4",
    description: "BTS 뷔 착용, 지코 착용, 세븐틴 조슈아, 민규 착용",
    size: ["57mm", "37mm", "21mm", "140mm", "130mm"],
    features: ["아세테이트 프레임", "볼드 와이드 템플", "실버 메탈 힌지"],
    defaultFit: "Regular",
  },

  // 셀럽픽 상품 2: 정해인 - 사이버 다이노
  "celeb-cyber-dino": {
    id: "celeb-cyber-dino",
    category: "CELEB PICK",
    brand: "오클리",
    name: "사이버 다이노",
    color: "매트 화이트",
    price: 328800,
    originalPrice: 411000,
    image: "/team/celeb/syber.png",
    video: "/team/celeb/syber.mp4",
    description: "정해인 착용",
    size: ["134mm", "51mm", "0mm", "153mm", "125mm"],
    features: ["오메터 프레임", "플루토나이트 렌즈","변색 기능","UVA/UVB 100% 차단"],
    defaultFit: "Over",
  },

  // 셀럽픽 상품 3: 카리나 - 쿠스쿠스
  "celeb-couscous": {
    id: "celeb-couscous",
    category: "CELEB PICK",
    brand: "GENTLE MONSTER",
    name: "쿠스쿠스",
    color: "블랙/블랙",
    price: 290000,
    image: "/team/celeb/cuscus.png",
    video: "/team/celeb/cuscus.mp4",
    description: "카리나 착용",
    size: ["55.4mm", "34.1mm", "19mm", "146mm", "145.8mm"],
    features: ["블랙 아세테이트 프레임", "UV 99.9% 차단"],
    defaultFit: "Regular",
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
    originalPrice: 1065000,
    price: 615000,
    image: "/team/classic/persol.png",
  },
];

const recommendedSportsProducts = [
  {
    id: "blue-avro",
    brand: "BLUE ELEPHANT",
    name: "AVRO purple crystal",
    price: 69900,
    image: "/team/sports/blueavro.png",
  },
  {
    id: "oakley-sutro",
    brand: "오클리",
    name: "수처 자켓",
    price: 328800,
    originalPrice: 411000,
    image: "/team/sports/okely.png",
  },
  {
    id: "revo-thunder",
    brand: "REVO",
    name: "THUNDER 00",
    price: 240000,
    image: "/team/sports/revo.png",
  },
  {
    id: "poc-elicit",
    brand: "POC",
    name: "Elicit 선글라스",
    price: 460000,
    image: "/team/sports/poc.png",
  },
  {
    id: "rudy-spinshield",
    brand: "RUDY PROJECT",
    name: "스핀쉴드 프로",
    price: 250000,
    image: "/team/sports/rudyspin.png",
  },
  {
    id: "van-rysel",
    brand: "VAN RYSEL",
    name: "미러렌즈 선글라스 타이엔",
    price: 69900,
    image: "/team/sports/vanmirror.png",
  },
];

const recommendedCasualProducts = [
  {
    id: "charles-brea",
    brand: "CHARLES&KEITH",
    name: "브레아 라운드 선글라스",
    price: 109900,
    image: "/team/casual/charles.png",
  },
  {
    id: "oakley-eye-jacket",
    brand: "오클리",
    name: "아이 자켓 리덕스",
    price: 261000,
    image: "/team/casual/okelyi.png",
  },
  {
    id: "rayban-clubmaster",
    brand: "RAY-BAN",
    name: "클럽 마스터",
    price: 204800,
    originalPrice: 256000,
    image: "/team/casual/rayclub.png",
  },
  {
    id: "lespecs-mascarra",
    brand: "LE SPECS",
    name: "마스카라 1475 블랙",
    price: 138000,
    originalPrice: 230000,
    image: "/team/casual/lespecs1475.png",
  },
  {
    id: "venaco-bwf513bk",
    brand: "베나코 폰타나",
    name: "BWF513BK",
    price: 89000,
    originalPrice: 179000,
    image: "/team/casual/venaco.png",
  },
  {
    id: "izipizi-e-black",
    brand: "IZIPIZI",
    name: "#E Black",
    price: 99000,
    image: "/team/casual/izipizi.png",
  },
];


const recommendedTrendyProducts = [
  {
    id: "rayban-rb4441d",
    brand: "RAY-BEN",
    name: "RB4441D",
    price: 172800,
    originalPrice: 216000,
    image: "/team/trendy/ray4441d.png",
  },
  {
    id: "blue-elephant-postiq",
    brand: "BLUE ELEPHANT",
    name: "POSTIQ black",
    price: 69900,
    image: "/team/trendy/bluepostiq.png",
  },
  {
    id: "moncler-cirsee",
    brand: "MONCLER",
    name: "Cirsee 파일럿 선글라스",
    price: 700000,
    image: "/team/trendy/moncler.png",
  },
  {
    id: "prada-linea-rossa",
    brand: "PRADA",
    name: "Linea Rossa sunglasses",
    price: 610000,
    image: "/team/trendy/prada.png",
  },
  {
    id: "wakilly-tutu",
    brand: "와키윌리",
    name: "TUTU 선글라스",
    price: 41580,
    originalPrice: 99000,
    image: "/team/trendy/tutu.png",
  },
  {
    id: "romantic-noir-pulse",
    brand: "로맨틱누어",
    name: "PULSE B1",
    price: 64960,
    originalPrice: 116000,
    image: "/team/trendy/pulse.png",
  },
];


function Product({
  favorites,
  toggleFavorite,
  cartItems,
  updateCart,
  removeFromCart,
}) {
  const { productId = "new-her" } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productId]);
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);
  const product = products[productId] ?? products["new-her"];

  const currentRecommendations =
    product.category === "SPORTS"
      ? recommendedSportsProducts
      : product.category === "CASUAL"
      ? recommendedCasualProducts
      : product.category === "TRENDY"
      ? recommendedTrendyProducts
      : product.category === "CELEB PICK"
      ? recommendedProducts
      : recommendedProducts;

  const randomRecommendedProducts = useMemo(() => {
    return [...currentRecommendations]
      .filter((item) => item.id !== product.id)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);
  }, [product.id, currentRecommendations]);

  return (
    <main className="product-detail">

    <Link
      className="product-breadcrumb"
      to={
        product.category === "SPORTS"
          ? "/sports"
          : product.category === "CELEB PICK"
          ? "/celeb"
          : product.category === "CASUAL"
          ? "/casual"
          : product.category === "TRENDY"
          ? "/trendy"
          : "/classic"
      }
    >
      <span aria-hidden="true">〈</span>{" "}
      {product.category ?? "CLASSIC"}
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