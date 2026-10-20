import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";

import Header from "./components/Header.jsx";
import SideMenu from "./components/SideMenu.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import Welcome from "./pages/Welcome.jsx";
import Classic from "./pages/Classic.jsx";
import Casual from "./pages/Casual.jsx";
import Sports from "./pages/Sports.jsx";
import Trendy from "./pages/Trendy.jsx";
import Celeb from "./pages/Celeb";
import Product from "./pages/Product.jsx";
import Payment from "./pages/Payment.jsx";
import GuestOrderLookup from "./pages/GuestOrderLookup.jsx";
import Footer from "./components/Footer.jsx";

function PageFooter() {
  const location = useLocation();

  if (location.pathname === "/") {
    return null;
  }

  return <Footer />;
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

  // 좋아요 추가 및 취소
  function toggleFavorite(productId) {
    setFavorites((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  }

  // 같은 상품은 기존 수량을 새로운 수량으로 변경
  function updateCart(productId, quantity) {
    if (!Number.isInteger(quantity) || quantity < 1) return;

    setCartItems((prev) => ({
      ...prev,
      [productId]: quantity,
    }));
  }

  // 장바구니에서 해당 상품 삭제
  function removeFromCart(productId) {
    setCartItems((prev) => {
      const updated = { ...prev };
      delete updated[productId];
      return updated;
    });
  }

  // 헤더에 표시할 장바구니 총수량
  const cartCount = Object.values(cartItems).reduce(
    (total, quantity) =>
      total + (Number.isInteger(quantity) && quantity > 0 ? quantity : 0),
    0
  );

  // 좋아요 상품 개수
  const favoriteCount = favorites.length;

  // 좋아요 저장
  useEffect(() => {
    localStorage.setItem("chalfitFavorites", JSON.stringify(favorites));
  }, [favorites]);

  // 장바구니 저장
  useEffect(() => {
    localStorage.setItem("chalfitCart", JSON.stringify(cartItems));
  }, [cartItems]);

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

  function openMenu() {
    if (menuOpen) {
      closeMenu();
    } else {
      setMenuOpen(true);
    }
  }

  function navigateTo(path) {
    closeMenu();
    window.location.hash = path;
  }

  function handleMenuClick(menu) {
    setActiveMenu(menu);

    if (menu === "CELEB PICK") {
      closeMenu();
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
    closeMenu();

    const pagePaths = {
      클래식: "/classic",
      스포츠: "/sports",
      캐주얼: "/casual",
      트렌디: "/trendy",
    };

    if (pagePaths[item]) {
      window.location.href = `/team${pagePaths[item]}`;
    } else {
      console.log(`${item} 선택`);
    }
  }

  function handleMobileCustomerClick(item) {
    if (selectedCustomerItem === item) {
      setSelectedCustomerItem("");
    } else {
      setSelectedCustomerItem(item);
    }

    if (item === "1:1문의") {
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

  function handleLoginClick() {
    closeMenu();
    setIsLoginOpen(true);
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
          favoriteCount={favoriteCount}
          cartCount={cartCount}
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

          {/* 회원가입 페이지 */}
          <Route path="/signup" element={<Signup />} />
          <Route path="/welcome" element={<Welcome />} />

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
