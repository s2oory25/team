
import { useEffect, useState } from "react";
import "./SideMenu.css";
import { useNavigate } from "react-router-dom";
import Faq from "../pages/Faq.jsx";

function SideMenu({
  menuOpen,
  activeMenu,
  setActiveMenu,
  isLoggedIn,
  categoryOpen,
  setCategoryOpen,
  styleOpen,
  setStyleOpen,
  customerOpen,
  setCustomerOpen,
  mobileMypageOpen,
  setMobileMypageOpen,
  selectedCustomerItem,
  setSelectedCustomerItem,
  menuItems,
  categoryItems,
  styleItems,
  customerItems,
  mypageItems,
  faqItems,
  closeMenu,
  handleMenuClick,
  handleSubMenuClick,
  handleMobileCustomerClick,
  handleMobileMypageClick,
  handleCustomerItemClick,
  handleLoginClick,
  handleLogoutClick,
  navigateTo,
}) {
  const navigate = useNavigate();
  
  const [isVisible, setIsVisible] = useState(menuOpen);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      setIsVisible(true);
      setIsClosing(false);
    } else if (isVisible) {
      setIsClosing(true);

      const timer = setTimeout(() => {
        setIsVisible(false);
        setIsClosing(false);
      }, 200);

      return () => clearTimeout(timer);
    }
  }, [menuOpen, isVisible]);

  if (!isVisible) return null;

  return (
    <div className={`menu-container ${isClosing ? "is-closing" : ""}`}>
      <aside className="side-menu">
        <nav className="menu-list">
          {menuItems.map((menu) => (
            <div key={menu} className="menu-item-group">
              <div
                className={`menu-item ${
                  activeMenu === menu ? "active" : ""
                }`}
                onClick={() => {
                  console.log("클릭한 메뉴:", menu);

                  if (menu === "CELEB PICK") {
                    navigate("/celeb");
                    closeMenu();
                  } else {
                    handleMenuClick(menu);
                  }
                }}
              >
                <span>{menu}</span>
                <span
                  className={`menu-arrow ${
                    (menu === "종류" && categoryOpen) ||
                    (menu === "스타일" && styleOpen)
                      ? "is-open"
                      : ""
                  }`}
                />
              </div>

              {menu === "종류" && categoryOpen && (
                <div className="mobile-category-menu">
                  <div className="category-list">
                    {categoryItems.map((category) => (
                      <div
                        key={category}
                        className="category-item"
                        onClick={() => handleSubMenuClick(category)}
                      >
                        <span>{category}</span>
                        <span className="menu-arrow" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {menu === "스타일" && styleOpen && (
                <div className="mobile-style-menu">
                  <div className="style-list">
                    {styleItems.map((style) => (
                      <div
                        key={style}
                        className="style-item"
                        onClick={() => handleSubMenuClick(style)}
                      >
                        <span>{style}</span>
                        <span className="menu-arrow" />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="menu-bottom">
          {!isLoggedIn && (
            <button
              type="button"
              className="user-icon"
              onClick={handleLoginClick}
              aria-label="로그인"
            >
              <span className="user-head" />
              <span className="user-body" />
            </button>
          )}

          {isLoggedIn && (
            <button
              type="button"
              className="menu-logout-button"
              onClick={handleLogoutClick}
              aria-label="로그아웃"
            >
              <span className="logout-icon">
                <span className="logout-door" />
                <span className="logout-arrow" />
              </span>
            </button>
          )}

          <div
            className={`customer-button ${
              activeMenu === "고객센터" ? "active" : ""
            }`}
            onClick={() => handleMenuClick("고객센터")}
          >
            <span>고객센터</span>
          </div>
        </div>
      </aside>

      {/* 모바일·태블릿 고객센터 하위 메뉴 */}
      {customerOpen && (
        <div className="bottom-customer-menu">
          {customerItems.map((item) => (
            <div
              key={item}
              className="customer-item"
              onClick={() => {
                if (item === "1:1 문의" || item === "1:1문의") {
                  closeMenu();
                  navigate("/inquiry");
                  return;
                }

                handleMobileCustomerClick(item);
              }}
            >
              <span>{item}</span>

              <span
                className={`menu-arrow ${
                  item === "FAQ" && selectedCustomerItem === "FAQ"
                    ? "is-open"
                    : ""
                }`}
              />
            </div>
          ))}
        </div>
      )}

      {/* 데스크톱 종류 메뉴 */}
      {categoryOpen && (
        <aside className="category-menu desktop-submenu">
          <div className="category-list">
            {categoryItems.map((category) => (
              <div
                key={category}
                className="category-item"
                onClick={() => handleSubMenuClick(category)}
              >
                <span>{category}</span>
                <span className="menu-arrow" />
              </div>
            ))}
          </div>
        </aside>
      )}

      {/* 데스크톱 스타일 메뉴 */}
      {styleOpen && (
        <aside className="style-menu desktop-submenu">
          <div className="style-list">
            {styleItems.map((style) => (
              <div
                key={style}
                className="style-item"
                onClick={() => handleSubMenuClick(style)}
              >
                <span>{style}</span>
                <span className="menu-arrow" />
              </div>
            ))}
          </div>
        </aside>
      )}

      {/* 데스크톱 고객센터 메뉴 */}
      {customerOpen && (
        <aside className="customer-menu desktop-submenu">
          <div className="customer-list">
            {customerItems.map((item) => (
              <div
                key={item}
                className={`customer-item ${
                  selectedCustomerItem === item ? "selected" : ""
                }`}
                onClick={() => {
                  if (item === "1:1 문의" || item === "1:1문의") {
                    closeMenu();
                    navigate("/inquiry");
                    return;
                  }

                  handleCustomerItemClick(item);
                }}
              >
                <span>{item}</span>
                <span
                  className={`menu-arrow ${
                    selectedCustomerItem === item ? "is-open" : ""
                  }`}
                />
              </div>
            ))}
          </div>
        </aside>
      )}

{/* FAQ 콘텐츠 */}
{customerOpen && selectedCustomerItem === "FAQ" && (
  <Faq />
)}
      <div
        className={`menu-overlay ${
          categoryOpen || styleOpen || customerOpen
            ? "submenu-active"
            : ""
        }`}
        onClick={closeMenu}
      />
    </div>
  );
}

export default SideMenu;
