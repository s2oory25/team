import { useState } from 'react'
import './App.css'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="app">

      {/* 상단 헤더 */}
      <header className="header">

        {/* 햄버거 메뉴 */}
        <button
          className="menu-button"
          onClick={() => setMenuOpen(true)}
        >
          ☰ 메뉴
        </button>

        {/* 로고 */}
        <div className="logo">
          ChalFit
        </div>

        {/* 오른쪽 메뉴 */}
        <div className="header-right">
          <span>로그인</span>
          <span>장바구니</span>
          <span>◎</span>
        </div>

      </header>


      {/* 메인 화면 */}
      <main className="main-content">
        <h1>ChalFit</h1>
        <p>선글라스 쇼핑몰 메인 화면</p>
      </main>


      {/* 메뉴가 열렸을 때 */}
      {menuOpen && (
        <div className="menu-container">

          {/* 오른쪽 블러 영역 */}
          <div
            className="menu-overlay"
            onClick={() => setMenuOpen(false)}
          ></div>


          {/* 왼쪽 메뉴 */}
          <aside className="side-menu">

            {/* 메뉴 */}
            <nav className="menu-list">

              <div className="menu-item active">
                <span>CELEB PICK</span>
                <span>›</span>
              </div>

              <div className="menu-item">
                <span>종류</span>
                <span>›</span>
              </div>

              <div className="menu-item">
                <span>AI 맞춤 서비스</span>
                <span>›</span>
              </div>

              <div className="menu-item">
                <span>스타일</span>
                <span>›</span>
              </div>

            </nav>


            {/* 아래쪽 */}
            <div className="menu-bottom">

              <div className="user-icon">
                ♟
              </div>

              <div className="customer-center">
                고객센터
              </div>

            </div>

          </aside>

        </div>
      )}

    </div>
  )
}

export default App