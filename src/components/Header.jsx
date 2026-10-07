function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <button className="menu-button" type="button" aria-label="메뉴 열기">
          {/* <img src="/header_png/menu.png" alt="" /> */}
          ☰
        </button>
        <nav className="header-menu" aria-label="주 메뉴">
          <a href="#products">메뉴</a>
        </nav>
      </div>

      <a className="logo" href="#" aria-label="Chalfit 홈">
        <img src="/team/header_png/logo.png" alt="Chalfit" />
      </a>

      <nav className="header-right" aria-label="회원 메뉴">
        <a className="desktop-text" href="#favorites">좋아요</a>
        <a className="tablet-icon heart-icon" href="#favorites" aria-label="좋아요">
          <img src="/team/header_png/heart.png" alt="" />
        </a>
        <a className="desktop-text" href="#cart">장바구니</a>
        <a className="tablet-icon cart-icon" href="#cart" aria-label="장바구니">
          <img src="/team/header_png/cart.png" alt="" />
        </a>
        <a className="login-button" href="#login" aria-label="로그인">
          <img src="/team/header_png/login.png" alt="" />
        </a>
      </nav>
    </header>
  );
}

export default Header;
