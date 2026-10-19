import { Link } from "react-router-dom";

function Header({ onMenuClick, onLogoClick, onLoginClick, favoriteCount = 0, cartCount = 0, }) {
  return (
    <header className="header">
      <div className="header-left">
        <button
          className="menu-button"
          type="button"
          aria-label="메뉴 열기"
          onClick={onMenuClick}
        >
          ☰
        </button>

        <nav className="header-menu" aria-label="주 메뉴">
          <a href="#products">메뉴</a>
        </nav>
      </div>

      <Link
        className="logo"
        to="/"
        aria-label="Chalfit 홈"
        onClick={onLogoClick}
      >
        <img src="/team/header_png/logo.png" alt="Chalfit" />
      </Link>

      <nav className="header-right" aria-label="회원 메뉴">
        <a className="desktop-text" href="#favorites">
          좋아요
          {favoriteCount > 0 && (
            <span className="header-count">{favoriteCount}</span>
          )}
        </a>

        <a
          className="tablet-icon heart-icon"
          href="#favorites"
          aria-label={`좋아요 ${favoriteCount}개`}
        >
          <img src="/team/header_png/heart.png" alt="" />
          {favoriteCount > 0 && (
            <span className="header-count">{favoriteCount}</span>
          )}
        </a>

        <a className="desktop-text" href="#cart">
          장바구니
          {cartCount > 0 && (
            <span className="header-count">{cartCount}</span>
          )}
        </a>

        <a
          className="tablet-icon cart-icon"
          href="#cart"
          aria-label={`장바구니 ${cartCount}개`}
        >
          <img src="/team/header_png/cart.png" alt="" />
          {cartCount > 0 && (
            <span className="header-count">{cartCount}</span>
          )}
        </a>

        <button
          className="header-login-button"
          type="button"
          onClick={onLoginClick}
          aria-label="로그인"
        >
          <img src="/team/header_png/login.png" alt="" />
        </button>
      </nav>
    </header>
  );
}

export default Header;