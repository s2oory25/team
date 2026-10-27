
import { useState, useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";
import "./App.css";

import Header from "./components/Header.jsx";
import SideMenu from "./components/SideMenu.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import Welcome from "./pages/Welcome.jsx";
import Cart from "./pages/Cart.jsx";
import Favorites from "./pages/Favorites.jsx";
import Mypage from "./pages/Mypage.jsx";
import InquiryPage from "./pages/InquiryPage.jsx";
import { products } from "./pages/Product.jsx";
import AiFitting from "./pages/AiFitting.jsx";
import Classic from "./pages/Classic.jsx";
import Casual from "./pages/Casual.jsx";
import Sports from "./pages/Sports.jsx";
import Trendy from "./pages/Trendy.jsx";
import Celeb from "./pages/Celeb";
import Product from "./pages/Product.jsx";
import Payment from "./pages/Payment.jsx";
import GuestOrderLookup from "./pages/GuestOrderLookup.jsx";
// import GuestOrderLookupPage from "./pages/GuestOrderLookup.jsx";
import Footer from "./components/Footer.jsx";

function PageFooter() {
  const location = useLocation();

  if (location.pathname === "/") {
    return null;
  }

  return <Footer />;
}

function AppContent() {
  const navigate = useNavigate();

  return <AppInner navigate={navigate} />;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  // 좋아요 상품 ID 목록
  const [favorites, setFavorites] = useState(() => {
    try {
      const saved = JSON.parse(localStorage.getItem("chalfitFavorites"));
      return Array.isArray(saved) ? saved : [];
    } catch {
      return [];
    }
  });

  // 장바구니 상품별 수량
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = JSON.parse(localStorage.getItem("chalfitCart"));
      return saved &&
        typeof saved === "object" &&
        !Array.isArray(saved)
        ? saved
        : {};
    } catch {
      return {};
    }
  });

  // AI 맞춤 서비스 이미지 업로드 상태
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [photoPreview, setPhotoPreview] = useState("");
  const [analysisMessage, setAnalysisMessage] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [hasAnalyzed, setHasAnalyzed] = useState(false);

  // 이미지 선택 및 미리보기
  function handlePhotoChange(event) {
    const file = event.target.files?.[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("이미지 파일만 선택할 수 있어요.");
      event.target.value = "";
      return;
    }

    if (photoPreview) {
      URL.revokeObjectURL(photoPreview);
    }

    setSelectedPhoto(file);
    setPhotoPreview(URL.createObjectURL(file));
    setAnalysisMessage("");
    setHasAnalyzed(false);
    setIsAnalyzing(false);
  }

  // AI 분석 화면 초기화
  function handleRetry() {
    setHasAnalyzed(false);
    setIsAnalyzing(false);
    setAnalysisMessage("");
  }

  // 분석 버튼 처리: 현재는 화면 확인용 예시 분석
  function handleAnalyze() {
    if (!selectedPhoto) {
      setAnalysisMessage("먼저 얼굴 사진을 불러와 주세요.");
      return;
    }

    setIsAnalyzing(true);
    setAnalysisMessage("");

    // 실제 AI 분석 API가 아닌 화면 테스트용 처리
    window.setTimeout(() => {
      setIsAnalyzing(false);
      setHasAnalyzed(true);
    }, 1200);
  }

  // 컴포넌트가 사라질 때 미리보기 URL 정리
  useEffect(() => {
    return () => {
      if (photoPreview) {
        URL.revokeObjectURL(photoPreview);
      }
    };
  }, [photoPreview]);

  // 좋아요 추가 및 취소
  function toggleFavorite(productId) {
    setFavorites((prev) => {
      const current = Array.isArray(prev) ? prev : [];
      const id = String(productId);

      return current.some((item) => String(item) === id)
        ? current.filter((item) => String(item) !== id)
        : [...current, id];
    });
  }

  function clearFavorites() {
    setFavorites([]);
  }

  // 장바구니 상품 수량 변경
  function updateCart(productId, quantity) {
    if (!Number.isInteger(quantity) || quantity < 1) return;

    setCartItems((prev) => ({
      ...prev,
      [productId]: quantity,
    }));
  }

  // 장바구니 상품 삭제
  function removeFromCart(productId) {
    setCartItems((prev) => {
      const updated = { ...prev };
      delete updated[productId];
      return updated;
    });
  }

  // 장바구니 총수량
  const cartCount = Object.values(cartItems).reduce(
    (total, quantity) =>
      total + (Number.isInteger(quantity) && quantity > 0 ? quantity : 0),
    0
  );

  // 좋아요 상품 개수
  const favoriteCount = favorites.length;
  console.log("좋아요 ID 목록:", favorites);
  console.log("전체 상품 ID 목록:", Object.keys(products));

  // 좋아요 저장
  useEffect(() => {
    localStorage.setItem("chalfitFavorites", JSON.stringify(favorites));
  }, [favorites]);

  // 장바구니 저장
  useEffect(() => {
    localStorage.setItem("chalfitCart", JSON.stringify(cartItems));
  }, [cartItems]);

  // 메뉴 열림 상태에 따라 배경 스크롤 제어
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const [activeMenu, setActiveMenu] = useState("");
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [styleOpen, setStyleOpen] = useState(false);
  const [customerOpen, setCustomerOpen] = useState(false);
  const [mobileMypageOpen, setMobileMypageOpen] = useState(false);
  const [selectedCustomerItem, setSelectedCustomerItem] = useState("");

  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return sessionStorage.getItem("chalfitLogin") === "true";
  });

  const menuItems = [
    "CELEB PICK",
    "종류",
    "AI 맞춤 서비스",
    "스타일",
  ];

  const categoryItems = ["스퀘어", "라운드", "캣아이", "스포츠"];
  const styleItems = ["클래식", "스포츠", "캐주얼", "트렌디"];
  const customerItems = ["FAQ", "1:1문의"];
  const mypageItems = ["마이페이지 홈", "좋아요"];

  const faqItems = [
    "회원가입은 어떻게 하나요?",
    "주문 내역은 어디서 확인하나요?",
    "배송 기간은 얼마나 걸리나요?",
    "교환 및 환불은 어떻게 하나요?",
  ];

  function closeSubmenus() {
    setCategoryOpen(false);
    setStyleOpen(false);
    setCustomerOpen(false);
    setMobileMypageOpen(false);
    setSelectedCustomerItem("");
  }

  function closeMenu() {
    setMenuOpen(false);
    setActiveMenu("");
    closeSubmenus();
  }

  function navigateTo(path) {
  closeMenu();

  const cleanPath = path.startsWith("/")
    ? path
    : `/${path}`;

  window.location.href = `/team${cleanPath}`;
}

  function openMenu() {
    if (menuOpen) {
      closeMenu();
    } else {
      setMenuOpen(true);
    }
  }

  function handleMenuClick(menu) {
    setActiveMenu(menu);

    if (menu === "CELEB PICK") {
      closeMenu();
      navigateTo("/celeb");
      return;
    }

    if (menu === "AI 맞춤 서비스") {
      closeMenu();
      navigateTo("/ai-fitting");
      return;
    }

    setCategoryOpen(menu === "종류" ? !categoryOpen : false);
    setStyleOpen(menu === "스타일" ? !styleOpen : false);
    setCustomerOpen(menu === "고객센터" ? !customerOpen : false);
    setMobileMypageOpen(false);
  }



function handleSubMenuClick(item) {
  const pagePaths = {
    클래식: "/classic",
    스포츠: "/sports",
    캐주얼: "/casual",
    트렌디: "/trendy",
    "마이페이지 홈": "/mypage",
    좋아요: "/favorites",
  };

  if (pagePaths[item]) {
    navigateTo(pagePaths[item]);
  } else {
    closeMenu();
    console.log(`${item} 선택`);
  }
  }

  function handleMobileMypageClick() {
    setActiveMenu("마이페이지");
    setMobileMypageOpen(!mobileMypageOpen);
    setCategoryOpen(false);
    setStyleOpen(false);
    setCustomerOpen(false);
  }


  function handleCustomerItemClick(item) {
    if (selectedCustomerItem === item) {
      setSelectedCustomerItem("");
    } else {
      setSelectedCustomerItem(item);
    }
  }

  function handleMobileCustomerClick(item) {
    handleCustomerItemClick(item);
  }


function handleLoginClick() {
  closeMenu();

  if (isLoggedIn) {
    window.location.href = "/team/mypage";
    return;
  }

  setIsLoginOpen((prev) => !prev);
}

  function handleLogoutClick() {
    sessionStorage.removeItem("chalfitLogin");
    setIsLoggedIn(false);
  }

  return (
    <BrowserRouter basename="/team">
      <div className="app">
        <Header
          onMenuClick={openMenu}
          onLogoClick={closeMenu}
          onLoginClick={handleLoginClick}
          onCartClick={closeMenu}
          cartCount={cartCount}
          favoriteCount={favoriteCount}
        />

        <SideMenu
          menuOpen={menuOpen}
          activeMenu={activeMenu}
          isLoggedIn={isLoggedIn}
          categoryOpen={categoryOpen}
          styleOpen={styleOpen}
          customerOpen={customerOpen}
          mobileMypageOpen={mobileMypageOpen}
          selectedCustomerItem={selectedCustomerItem}
          menuItems={menuItems}
          categoryItems={categoryItems}
          styleItems={styleItems}
          customerItems={customerItems}
          mypageItems={mypageItems}
          faqItems={faqItems}
          handleMenuClick={handleMenuClick}
          handleSubMenuClick={handleSubMenuClick}
          handleMobileCustomerClick={handleMobileCustomerClick}
          handleMobileMypageClick={handleMobileMypageClick}
          handleCustomerItemClick={handleCustomerItemClick}
          handleLoginClick={handleLoginClick}
          handleLogoutClick={handleLogoutClick}
          closeMenu={closeMenu}
        />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/celeb" element={<Celeb />} />
          <Route path="/inquiry" element={<InquiryPage />} />
          <Route path="/ai-fitting" element={<AiFitting />} />
          <Route
            path="/ai-fitting"
            element={
              <AiFitting
                selectedPhoto={selectedPhoto}
                setSelectedPhoto={setSelectedPhoto}
                photoPreview={photoPreview}
                setPhotoPreview={setPhotoPreview}
                analysisMessage={analysisMessage}
                setAnalysisMessage={setAnalysisMessage}
                isAnalyzing={isAnalyzing}
                setIsAnalyzing={setIsAnalyzing}
                hasAnalyzed={hasAnalyzed}
                setHasAnalyzed={setHasAnalyzed}
                handlePhotoChange={handlePhotoChange}
                handleAnalyze={handleAnalyze}
                handleRetry={handleRetry}
                products={[
                  {
                    id: 1,
                    name: "뉴 허 01",
                    price: "289,000원",
                    shape: "oval",
                    description: "블랙 오벌 선글라스",
                    image: "/team/classic/gmNewHer.png",
                  },
                  {
                    id: 2,
                    name: "소호",
                    price: "320,000원",
                    shape: "square",
                    description: "블랙 스퀘어 선글라스",
                    image: "/team/classic/gmsoho.png",
                  },
                  {
                    id: 3,
                    name: "레이밴 클래식",
                    price: "198,000원",
                    shape: "round",
                    description: "클래식 프레임 선글라스",
                    image: "/team/classic/rayclassic.png",
                  },
                ]}
                sampleFaceShape={{
                  name: "타원형",
                  outline: "50,8 70,15 85,35 82,65 65,88 50,95 35,88 18,65 15,35 30,15",
                }}
              />
            }
          />

          <Route path="/signup" element={<Signup />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route
            path="/mypage"
            element={
              <Mypage
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
                handleLogoutClick={handleLogoutClick}
                navigateTo={navigateTo}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <Cart
                cartItems={cartItems}
                products={products}
                updateCart={updateCart}
                removeFromCart={removeFromCart}
              />
            }
          />
          <Route
            path="/favorites"
            element={
              <Favorites
                favorites={favorites}
                products={products}
                toggleFavorite={toggleFavorite}
                clearFavorites={clearFavorites}
                cartItems={cartItems}
                updateCart={updateCart}
              />
            }
          />

          <Route path="/classic" element={<Classic />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/casual" element={<Casual />} />
          <Route path="/trendy" element={<Trendy />} />

          <Route
            path="/product/:productId"
            element={
              <Product
                favorites={favorites}
                toggleFavorite={toggleFavorite}
                cartItems={cartItems}
                updateCart={updateCart}
                removeFromCart={removeFromCart}
              />
            }
          />

          <Route path="/payment" element={<Payment />} />
          <Route path="/guest-order-lookup" element={<GuestOrderLookup />} />
        </Routes>

        {isLoginOpen && (
          <Login
            onClose={() => setIsLoginOpen(false)}
            onLoginSuccess={() => {
              sessionStorage.setItem("chalfitLogin", "true");
              setIsLoggedIn(true);
              setIsLoginOpen(false);
            }}
          />
        )}

        <PageFooter />
      </div>
    </BrowserRouter>
  );
}
export default App;
