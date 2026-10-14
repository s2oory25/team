
import { useEffect, useState } from "react";
import "./SideMenu.css";

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
                onClick={() => handleMenuClick(menu)}
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

          {isLoggedIn && (
            <div className="mobile-my-page">
              <div
                className={`menu-item ${
                  activeMenu === "마이페이지" ? "active" : ""
                }`}
                onClick={handleMobileMypageClick}
              >
                <span>마이페이지</span>
                <span className="menu-arrow" />
              </div>

              {mobileMypageOpen && (
                <div className="mobile-mypage-menu">
                  <div className="mypage-list">
                    {mypageItems.map((item) => (
                      <div
                        key={item}
                        className="mypage-item"
                        onClick={() => handleSubMenuClick(item)}
                      >
                        <span>{item}</span>
                        <span className="menu-arrow" />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
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
              onClick={() => handleMobileCustomerClick(item)}
            >
              <span>{item}</span>
              <span className="menu-arrow" />
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
                onClick={() => handleCustomerItemClick(item)}
              >
                <span>{item}</span>
                <span className="menu-arrow" />
              </div>
            ))}
          </div>
        </aside>
      )}

      {/* 데스크톱 마이페이지 메뉴 */}
      {isLoggedIn && !categoryOpen && !styleOpen && !customerOpen && (
        <aside className="mypage-menu desktop-submenu">
          <div className="mypage-list">
            {mypageItems.map((item) => (
              <div
                key={item}
                className="mypage-item"
                onClick={() => handleSubMenuClick(item)}
              >
                <span>{item}</span>
                <span className="menu-arrow" />
              </div>
            ))}
          </div>
        </aside>
      )}

      {/* FAQ 콘텐츠 */}
      {customerOpen && selectedCustomerItem === "FAQ" && (
        <div className="customer-content">
          <h2>FAQ</h2>
          <p>자주 묻는 질문을 확인해보세요.</p>

          <div className="faq-list">
            {faqItems.map((question, index) => (
              <div
                key={index}
                className="faq-item"
                onClick={() => console.log(`${question} 선택`)}
              >
                <span>{question}</span>
                <span className="content-arrow">→</span>
              </div>
            ))}
          </div>
        </div>
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
