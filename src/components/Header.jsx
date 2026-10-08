function Header({ onLoginClick }) {
    return (
    <header className="header">

  {/* 왼쪽 */}
  <div className="header-left">

    <button className="menu-button">
      ☰
    </button>

    <nav className="header-menu">
      <a href="#">메뉴</a>
    </nav>

  </div>

  {/* 로고 */}
  <div className="logo">
    <img src="/team/header_png/logo.png" alt="CHALFIT" />
  </div>

  {/* 오른쪽 */}
  <div className="header-right">

    {/* 좋아요 */}
    <span className="desktop-text">좋아요</span>

        {/* 태블릿에서만 추가로 보여줄 이미지 */}
    <button className="tablet-icon heart-icon">
      <img src="/team/header_png/heart.png" alt="좋아요" />
    </button>

    {/* 장바구니 */}
    <span className="desktop-text">장바구니</span>

        <button className="tablet-icon cart-icon">
      <img src="/team/header_png/cart.png" alt="장바구니" />
    </button>

    {/* 로그인 - 데스크톱/태블릿/모바일 모두 이미지 */}
    <button className="header-login-button" onClick={onLoginClick}>
      <img src="/team/header_png/login.png" alt="로그인" />
    </button>

  </div>

</header>
  );
}

export default Header;
