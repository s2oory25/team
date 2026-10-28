import { Link } from "react-router-dom";

function Header({
  onMenuClick,
  onLogoClick,
  onLoginClick,
  onCartClick,
  favoriteCount = 0,
  cartCount = 0,
}) {
  return (
    <header className="header">
      <div className="header-left">
        <button
          className="header-menu-trigger"
          type="button"
          onClick={onMenuClick}
          aria-label="메뉴 열기 및 닫기"
        >
          <span className="header-menu-icon" aria-hidden="true">☰</span>
          <span className="header-menu-label" aria-hidden="true">메뉴</span>
        </button>
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
        <Link className="desktop-text" to="/favorites" onClick={onCartClick}>
          좋아요
          {favoriteCount > 0 && (
            <span className="header-count">{favoriteCount}</span>
          )}
        </Link>

        <Link
          className="tablet-icon heart-icon"
          to="/favorites"
          aria-label={`좋아요 ${favoriteCount}개`}
          onClick={onCartClick}
        >
          <img src="/team/header_png/heart.png" alt="" />
          {favoriteCount > 0 && (
            <span className="header-count">{favoriteCount}</span>
          )}
        </Link>

        <Link
          className="desktop-text"
          to="/cart"
          onClick={onCartClick}
        >
          장바구니
          {cartCount > 0 && (
            <span className="header-count">{cartCount}</span>
          )}
        </Link>

        <Link
          className="tablet-icon cart-icon"
          to="/cart"
          aria-label={`장바구니 ${cartCount}개`}
          onClick={onCartClick}
        >
          <img src="/team/header_png/cart.png" alt="" />
          {cartCount > 0 && (
            <span className="header-count">{cartCount}</span>
          )}
        </Link>

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
