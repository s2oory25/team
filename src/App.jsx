import { useState } from 'react'

import './App.css'


function App() {


  // =========================
  // 메뉴 상태
  // =========================

  const [activeMenu, setActiveMenu] = useState('CELEB PICK')

  const [menuOpen, setMenuOpen] = useState(false)

  const [categoryOpen, setCategoryOpen] = useState(false)

  const [styleOpen, setStyleOpen] = useState(false)

  const [customerOpen, setCustomerOpen] = useState(false)


  // =========================
  // 로그인 상태
  // =========================

  const [isLoggedIn, setIsLoggedIn] = useState(false)


  // =========================
  // 모바일 마이페이지
  // =========================

  const [mobileMypageOpen, setMobileMypageOpen] = useState(false)


  // =========================
  // 데스크톱 고객센터 선택
  // =========================

  const [selectedCustomerItem, setSelectedCustomerItem] = useState(null)


  // =========================
  // 메인 메뉴
  // =========================

  const menuItems = [
    'CELEB PICK',
    '종류',
    'AI 맞춤 서비스',
    '스타일',
  ]


  // =========================
  // 종류
  // =========================

  const categoryItems = [
    '스퀘어',
    '라운드',
    '캣아이',
    '스포츠',
  ]


  // =========================
  // 스타일
  // =========================

  const styleItems = [
    '클래식',
    '스포츠',
    '캐주얼',
    '트렌디',
  ]


  // =========================
  // 고객센터
  // =========================

  const customerItems = [
    'FAQ',
    '1:1문의',
  ]


  // =========================
  // 마이페이지
  // =========================

  const mypageItems = [
    '마이페이지 홈',
    '좋아요',
  ]


  // =========================
  // FAQ 내용
  // =========================

  const faqItems = [
    '회원가입은 어떻게 하나요?',
    '로그인은 어떻게 하나요?',
    '주문은 어떻게 하나요?',
    '배송은 얼마나 걸리나요?',
    '교환 및 반품은 어떻게 하나요?',
    '결제 방법은 어떤 것이 있나요?',
  ]


  // =========================
  // 메인 메뉴 클릭
  // =========================

  const handleMenuClick = (menu) => {


    // =========================
    // CELEB PICK
    // =========================

    // 이 메뉴는 서브메뉴를 펼치는 것이 아니라
    // 별도의 페이지로 이동할 예정

    if (menu === 'CELEB PICK') {

      console.log('CELEB PICK 페이지로 이동')

      return
    }


    // =========================
    // AI 맞춤 서비스
    // =========================

    // 이 메뉴도 별도의 페이지로 이동할 예정

    if (menu === 'AI 맞춤 서비스') {

      console.log('AI 맞춤 서비스 페이지로 이동')

      return
    }


    // 메뉴 활성화

    setActiveMenu(menu)


    // =========================
    // 종류
    // =========================

    if (menu === '종류') {

      setCategoryOpen((prev) => !prev)

      setStyleOpen(false)

      setCustomerOpen(false)

      setMobileMypageOpen(false)

      setSelectedCustomerItem(null)

      return
    }


    // =========================
    // 스타일
    // =========================

    if (menu === '스타일') {

      setStyleOpen((prev) => !prev)

      setCategoryOpen(false)

      setCustomerOpen(false)

      setMobileMypageOpen(false)

      setSelectedCustomerItem(null)

      return
    }


    // =========================
    // 고객센터
    // =========================

    if (menu === '고객센터') {

      setCustomerOpen((prev) => !prev)

      setCategoryOpen(false)

      setStyleOpen(false)

      setMobileMypageOpen(false)

      setSelectedCustomerItem(null)

      return
    }


    // =========================
    // 일반 메뉴
    // =========================

    setCategoryOpen(false)

    setStyleOpen(false)

    setCustomerOpen(false)

    setMobileMypageOpen(false)

    setSelectedCustomerItem(null)

  }


  // =========================
  // 모바일 마이페이지
  // =========================

  const handleMobileMypageClick = () => {

    setActiveMenu('마이페이지')

    setMobileMypageOpen((prev) => !prev)

    setCategoryOpen(false)

    setStyleOpen(false)

    setCustomerOpen(false)

    setSelectedCustomerItem(null)

  }


  // =========================
  // 일반 하위 메뉴
  // =========================

  const handleSubMenuClick = (item) => {

    console.log(`${item} 페이지로 이동`)

  }


  // =========================
  // 모바일 / 태블릿 고객센터
  // =========================

  const handleMobileCustomerClick = (item) => {


    // FAQ

    if (item === 'FAQ') {

      console.log('FAQ 페이지로 이동')

      return
    }


    // 1:1 문의

    if (item === '1:1문의') {

      console.log('1:1문의 페이지로 이동')

      return
    }


    console.log(`${item} 페이지로 이동`)

  }


  // =========================
  // 데스크톱 고객센터
  // =========================

  const handleCustomerItemClick = (item) => {

    setSelectedCustomerItem(item)

    console.log(`${item} 선택`)

  }


  // =========================
  // 로그인
  // =========================

  const handleLoginClick = () => {

    console.log('로그인 아이콘 클릭')

    setIsLoggedIn(true)


    // 로그인하면
    // 다른 서브메뉴는 닫기

    setCategoryOpen(false)

    setStyleOpen(false)

    setCustomerOpen(false)

    setMobileMypageOpen(false)

    setSelectedCustomerItem(null)

    setActiveMenu('CELEB PICK')

  }


  // =========================
  // 로그아웃
  // =========================

  const handleLogoutClick = () => {

    console.log('로그아웃 아이콘 클릭')

    setIsLoggedIn(false)

    setSelectedCustomerItem(null)

  }


  // =========================
  // 메뉴 열기
  // =========================

  const openMenu = () => {

    setMenuOpen(true)

    setCategoryOpen(false)

    setStyleOpen(false)

    setCustomerOpen(false)

    setMobileMypageOpen(false)

    setSelectedCustomerItem(null)

    setActiveMenu('CELEB PICK')

  }


  // =========================
  // 메뉴 닫기
  // =========================

  const closeMenu = () => {

    setMenuOpen(false)

    setCategoryOpen(false)

    setStyleOpen(false)

    setCustomerOpen(false)

    setMobileMypageOpen(false)

    setSelectedCustomerItem(null)

  }


  return (

    <div className="app">


      {/* =========================
          헤더
      ========================= */}

      <header className="header">


        <button
          type="button"
          className="menu-button"
          onClick={openMenu}
        >
          ☰ 메뉴
        </button>


        <div className="logo">
          ChalFit
        </div>


        <div className="header-right">


          <span className="login-text">
            로그인
          </span>


          <span className="cart-text">
            장바구니
          </span>


          <span className="header-person-icon">

            <span className="header-person-head"></span>

            <span className="header-person-body"></span>

          </span>


        </div>


      </header>



      {/* =========================
          메인
      ========================= */}

      <main className="main-content">

        <h1>
          ChalFit
        </h1>

        <p>
          선글라스 쇼핑몰 메인 화면
        </p>

      </main>



      {/* =========================
          메뉴
      ========================= */}

      {menuOpen && (

        <div className="menu-container">


          {/* =========================
              왼쪽 메뉴
          ========================= */}

          <aside className="side-menu">


            <nav className="menu-list">


              {/* =========================
                  메인 메뉴
              ========================= */}

              {menuItems.map((menu) => (

                <div
                  key={menu}
                  className="menu-item-group"
                >


                  <div
                    className={`menu-item ${
                      activeMenu === menu
                        ? 'active'
                        : ''
                    }`}
                    onClick={() =>
                      handleMenuClick(menu)
                    }
                  >

                    <span>
                      {menu}
                    </span>


                    <span className="menu-arrow"></span>

                  </div>



                  {/* =========================
                      모바일 종류
                  ========================= */}

                  {menu === '종류' &&
                    categoryOpen && (

                      <div className="mobile-category-menu">

                        <div className="category-list">


                          {categoryItems.map(
                            (category) => (

                              <div
                                key={category}
                                className="category-item"
                                onClick={() =>
                                  handleSubMenuClick(
                                    category
                                  )
                                }
                              >

                                <span>
                                  {category}
                                </span>

                                <span className="menu-arrow"></span>

                              </div>

                            )
                          )}


                        </div>

                      </div>

                    )}



                  {/* =========================
                      모바일 스타일
                  ========================= */}

                  {menu === '스타일' &&
                    styleOpen && (

                      <div className="mobile-style-menu">

                        <div className="style-list">


                          {styleItems.map(
                            (style) => (

                              <div
                                key={style}
                                className="style-item"
                                onClick={() =>
                                  handleSubMenuClick(
                                    style
                                  )
                                }
                              >

                                <span>
                                  {style}
                                </span>

                                <span className="menu-arrow"></span>

                              </div>

                            )
                          )}


                        </div>

                      </div>

                    )}


                </div>

              ))}



              {/* =========================
                  모바일 고객센터
              ========================= */}

              <div className="mobile-customer">


                <div
                  className={`customer-mobile-button ${
                    activeMenu === '고객센터'
                      ? 'active'
                      : ''
                  }`}
                  onClick={() =>
                    handleMenuClick('고객센터')
                  }
                >

                  <span>
                    고객센터
                  </span>

                </div>



                {customerOpen && (

                  <div className="mobile-customer-menu">

                    <div className="customer-list">


                      {customerItems.map(
                        (item) => (

                          <div
                            key={item}
                            className="customer-item"
                            onClick={() =>
                              handleMobileCustomerClick(
                                item
                              )
                            }
                          >

                            <span>
                              {item}
                            </span>

                            <span className="menu-arrow"></span>

                          </div>

                        )
                      )}


                    </div>

                  </div>

                )}


              </div>



              {/* =========================
                  모바일 마이페이지
                  항상 표시
              ========================= */}

              <div className="mobile-my-page">


                <div
                  className={`menu-item ${
                    activeMenu === '마이페이지'
                      ? 'active'
                      : ''
                  }`}
                  onClick={
                    handleMobileMypageClick
                  }
                >

                  <span>
                    마이페이지
                  </span>

                  <span className="menu-arrow"></span>

                </div>



                {mobileMypageOpen && (

                  <div className="mobile-mypage-menu">

                    <div className="mypage-list">


                      {mypageItems.map(
                        (item) => (

                          <div
                            key={item}
                            className="mypage-item"
                            onClick={() =>
                              handleSubMenuClick(
                                item
                              )
                            }
                          >

                            <span>
                              {item}
                            </span>

                            <span className="menu-arrow"></span>

                          </div>

                        )
                      )}


                    </div>

                  </div>

                )}


              </div>


            </nav>



            {/* =========================
                PC 하단
            ========================= */}

            <div className="menu-bottom">


              {/* =========================
                  로그인 전
              ========================= */}

              {!isLoggedIn && (

                <button
                  type="button"
                  className="user-icon"
                  onClick={handleLoginClick}
                  aria-label="로그인"
                >

                  <span className="user-head"></span>

                  <span className="user-body"></span>

                </button>

              )}



              {/* =========================
                  로그인 후
              ========================= */}

              {isLoggedIn && (

                <button
                  type="button"
                  className="menu-logout-button"
                  onClick={handleLogoutClick}
                  aria-label="로그아웃"
                >

                  <span className="logout-icon">

                    <span className="logout-door"></span>

                    <span className="logout-arrow"></span>

                  </span>

                </button>

              )}



              {/* =========================
                  고객센터
              ========================= */}

              <div
                className={`customer-button ${
                  activeMenu === '고객센터'
                    ? 'active'
                    : ''
                }`}
                onClick={() =>
                  handleMenuClick('고객센터')
                }
              >

                <span>
                  고객센터
                </span>

              </div>


            </div>


          </aside>



          {/* =========================
              PC 종류
          ========================= */}

          {categoryOpen && (

            <aside className="category-menu desktop-submenu">

              <div className="category-list">


                {categoryItems.map(
                  (category) => (

                    <div
                      key={category}
                      className="category-item"
                      onClick={() =>
                        handleSubMenuClick(
                          category
                        )
                      }
                    >

                      <span>
                        {category}
                      </span>

                      <span className="menu-arrow"></span>

                    </div>

                  )
                )}


              </div>

            </aside>

          )}



          {/* =========================
              PC 스타일
          ========================= */}

          {styleOpen && (

            <aside className="style-menu desktop-submenu">

              <div className="style-list">


                {styleItems.map(
                  (style) => (

                    <div
                      key={style}
                      className="style-item"
                      onClick={() =>
                        handleSubMenuClick(
                          style
                        )
                      }
                    >

                      <span>
                        {style}
                      </span>

                      <span className="menu-arrow"></span>

                    </div>

                  )
                )}


              </div>

            </aside>

          )}



          {/* =========================
              PC 고객센터
          ========================= */}

          {customerOpen && (

            <aside className="customer-menu desktop-submenu">

              <div className="customer-list">


                {customerItems.map(
                  (item) => (

                    <div
                      key={item}
                      className="customer-item"
                      onClick={() =>
                        handleCustomerItemClick(
                          item
                        )
                      }
                    >

                      <span>
                        {item}
                      </span>

                      <span className="menu-arrow"></span>

                    </div>

                  )
                )}


              </div>

            </aside>

          )}



          {/* =========================
              PC 마이페이지
              
              로그인했을 때만 표시
              종류/스타일/고객센터가
              열려 있으면 숨김
          ========================= */}

          {isLoggedIn &&
            !categoryOpen &&
            !styleOpen &&
            !customerOpen && (

              <aside className="mypage-menu desktop-submenu">

                <div className="mypage-list">


                  {mypageItems.map(
                    (item) => (

                      <div
                        key={item}
                        className="mypage-item"
                        onClick={() =>
                          handleSubMenuClick(
                            item
                          )
                        }
                      >

                        <span>
                          {item}
                        </span>

                        <span className="menu-arrow"></span>

                      </div>

                    )
                  )}


                </div>

              </aside>

            )}



          {/* =========================
              PC FAQ 내용
          ========================= */}

          {customerOpen &&
            selectedCustomerItem === 'FAQ' && (

              <div className="customer-content">

                <h2>
                  FAQ
                </h2>

                <p>
                  자주 묻는 질문을 확인해보세요.
                </p>


                {faqItems.map(
                  (question, index) => (

                    <div
                      key={index}
                      className="faq-item"
                      onClick={() =>
                        console.log(
                          `${question} 선택`
                        )
                      }
                    >

                      <span>
                        {question}
                      </span>

                      <span className="content-arrow">
                        →
                      </span>

                    </div>

                  )
                )}


              </div>

            )}



          {/* =========================
              오른쪽 블러 영역
              
              중요:
              로그인 상태는 여기 조건에
              넣지 않음
          ========================= */}

          <div
            className={`menu-overlay ${
              categoryOpen ||
              styleOpen ||
              customerOpen
                ? 'submenu-active'
                : ''
            }`}
            onClick={closeMenu}
          ></div>


        </div>

      )}


    </div>

  )

}


export default App