import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";

import Header from "./components/Header.jsx";
import SideMenu from "./components/SideMenu.jsx";
import Home from "./pages/Home.jsx";
import Classic from "./pages/Classic.jsx";
import Casual from "./pages/Casual.jsx";
import Sports from "./pages/Sports.jsx";
import Trendy from "./pages/Trendy.jsx";
import Product from "./pages/Product.jsx";
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
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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
    클래식: "/team/classic",
    스포츠: "/team/sports",
    캐주얼: "/team/casual",
    트렌디: "/team/trendy",
  };

  if (pagePaths[item]) {
    window.location.href = pagePaths[item];
  } else {
    console.log(`${item} 선택`);
  }
}

  function handleMobileCustomerClick(item) {
    setSelectedCustomerItem(item);

    if (item === "FAQ") {
      setCustomerOpen(true);
    } else {
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
    setSelectedCustomerItem(item);
  }

  function handleLoginClick() {
    setIsLoggedIn(true);
  }

  function handleLogoutClick() {
    setIsLoggedIn(false);
  }

  return (
    <BrowserRouter basename="/team">
      <div className="app">
        <Header onMenuClick={openMenu}
                    onLogoClick={closeMenu}/>

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

          <Route path="/classic" element={<Classic />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/casual" element={<Casual />} />
          <Route path="/trendy" element={<Trendy />} />

          <Route
            path="/product/:productId"
            element={<Product key={window.location.pathname} />}
          />
        </Routes>


        <PageFooter />
      </div>
    </BrowserRouter>
  );
}

export default App;