import { useState } from 'react'
import './App.css'

function App() {
  // 현재 선택된 메뉴
  const [activeMenu, setActiveMenu] = useState('CELEB PICK')

  // 메뉴가 열려 있는지 확인
  const [menuOpen, setMenuOpen] = useState(false)

  // 메뉴 항목
  const menuItems = [
    'CELEB PICK',
    '종류',
    'AI 맞춤 서비스',
    '스타일',
  ]

  return (
    <div className="app">

      {/* =========================
          상단 헤더
      ========================= */}

      <header className="header">

        {/* 햄버거 메뉴 */}
        <button
          className="menu-button"
          onClick={() => setMenuOpen(true)}
        >
          ☰ 메뉴
        </button>


        {/* 가운데 로고 */}
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


      {/* =========================
          메인 화면
      ========================= */}

      <main className="main-content">

        <h1>ChalFit</h1>

        <p>선글라스 쇼핑몰 메인 화면</p>

      </main>


      {/* =========================
          메뉴가 열렸을 때
      ========================= */}

      {menuOpen && (

        <div className="menu-container">

          {/* =========================
              메뉴
              데스크톱 : 왼쪽
              모바일 : 위쪽
          ========================= */}

          <aside className="side-menu">

            {/* 메뉴 목록 */}
            <nav className="menu-list">

              {menuItems.map((menu) => (

                <div
                  key={menu}
                  className={`menu-item ${
                    activeMenu === menu ? 'active' : ''
                  }`}
                  onClick={() => setActiveMenu(menu)}
                >

                  <span>
                    {menu}
                  </span>

                  <span>
                    ›
                  </span>

                </div>

              ))}

            </nav>


            {/* =========================
                메뉴 아래쪽
            ========================= */}

            <div className="menu-bottom">

            <div className="user-icon">
              <span className="user-head"></span>
              <span className="user-body"></span>
            </div>

              <div className="customer-center">
                고객센터
              </div>

            </div>

          </aside>


          {/* =========================
              블러 영역
              데스크톱 : 오른쪽
              모바일 : 아래쪽
          ========================= */}

          <div
            className="menu-overlay"
            onClick={() => setMenuOpen(false)}
          ></div>

        </div>

      )}

    </div>
  )
}

export default App