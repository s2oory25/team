import { useEffect, useState } from 'react'
import './App.css'

const sampleFaceShape = {
  name: '역삼각형',
  outline: '14,18 86,18 50,97',
}

function App() {
  const [activeMenu, setActiveMenu] = useState('CELEB PICK')
  const [menuOpen, setMenuOpen] = useState(false)
  const [categoryOpen, setCategoryOpen] = useState(false)
  const [styleOpen, setStyleOpen] = useState(false)
  const [customerOpen, setCustomerOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [mobileMypageOpen, setMobileMypageOpen] = useState(false)
  const [selectedCustomerItem, setSelectedCustomerItem] = useState(null)
  const [currentPage, setCurrentPage] = useState('home')

  const [selectedPhoto, setSelectedPhoto] = useState(null)
  const [photoPreview, setPhotoPreview] = useState('')
  const [analysisMessage, setAnalysisMessage] = useState('')
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [hasAnalyzed, setHasAnalyzed] = useState(false)
  const [inquiryType, setInquiryType] = useState('')
  const [inquiryEmail, setInquiryEmail] = useState('abcd@gmail.com')
  const [inquiryContent, setInquiryContent] = useState('')
  const [showInquiryFaq, setShowInquiryFaq] = useState(false)
  const [inquiryMessage, setInquiryMessage] = useState('')
  const [accountMessage, setAccountMessage] = useState('')
  const [isChangingPassword, setIsChangingPassword] = useState(false)
  const [openFaqIndex, setOpenFaqIndex] = useState(null)
  const [cartAgreement, setCartAgreement] = useState(false)
  const [cartItems, setCartItems] = useState([
    { id: 'cocoa', brand: 'GENTLE MONSTER', name: '뉴 허 01', option: '블랙/블랙', price: 289000, image: '/cocoa-01.png', quantity: 1, selected: true },
    { id: 'july', brand: 'Roy Bon', name: 'WAYFARER', option: '블랙/카키', price: 262200, image: '/july-01.png', quantity: 1, selected: true },
  ])

  const menuItems = ['CELEB PICK', '종류', 'AI 맞춤 서비스', '스타일']
  const categoryItems = ['스퀘어', '라운드', '캣아이', '스포츠']
  const styleItems = ['클래식', '스포츠', '캐주얼', '트렌디']
  const customerItems = ['FAQ', '1:1문의']
  const mypageItems = ['마이페이지 홈', '좋아요']

  const faqItems = [
    '회원가입은 어떻게 하나요?',
    '로그인은 어떻게 하나요?',
    '주문은 어떻게 하나요?',
    '배송은 얼마나 걸리나요?',
    '교환 및 반품은 어떻게 하나요?',
    '결제 방법은 어떤 것이 있나요?',
  ]

  const faqDetails = [
    {
      question: 'AI 얼굴형 분석은 어떻게 이용하나요?',
      answer: 'AI 맞춤 서비스에서 정면 사진을 올리고 얼굴형 분석하기를 눌러주세요.',
    },
    {
      question: '사진은 저장되나요?',
      answer: '현재 데모에서는 사진을 브라우저에서 미리보기로만 사용하며 서버에 저장하지 않습니다.',
    },
    {
      question: 'AI 피팅은 어디서 하나요?',
      answer: 'AI 맞춤 서비스에서 사진 분석 후 추천 상품의 AI 피팅 버튼을 눌러주세요.',
    },
    {
      question: '배송은 얼마나 걸리나요?',
      answer: '배송 일정은 주문과 배송이 연결되면 주문 내역에서 확인할 수 있습니다.',
    },
    {
      question: '교환/반품은 가능한가요?',
      answer: '교환 및 반품 신청은 고객센터 1:1 문의를 통해 접수해주세요.',
    },
  ]

  const products = [
    {
      id: 1,
      name: '코코아',
      description: '라운드 메탈 선글라스',
      price: '₩333,000',
      shape: 'round',
      image: '/cocoa-01.png',
    },
    {
      id: 2,
      name: '줄라이',
      description: '모던 스퀘어 선글라스',
      price: '₩333,000',
      shape: 'square',
      image: '/july-01.png',
    },
    {
      id: 3,
      name: '르',
      description: '캣아이 선글라스',
      price: '₩333,000',
      shape: 'cat',
      image: '/le-01.png',
    },
  ]

  useEffect(() => {
    if (!selectedPhoto) {
      setPhotoPreview('')
      return undefined
    }

    const previewUrl = URL.createObjectURL(selectedPhoto)
    setPhotoPreview(previewUrl)

    return () => URL.revokeObjectURL(previewUrl)
  }, [selectedPhoto])

  useEffect(() => {
    if (!isAnalyzing) return undefined

    const timer = setTimeout(() => {
      setIsAnalyzing(false)
      setHasAnalyzed(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [isAnalyzing])

  const closeSubmenus = () => {
    setCategoryOpen(false)
    setStyleOpen(false)
    setCustomerOpen(false)
    setMobileMypageOpen(false)
    setSelectedCustomerItem(null)
  }

  const navigateTo = (page) => {
    setCurrentPage(page)
    setMenuOpen(false)
    closeSubmenus()

    if (page === 'home') {
      setActiveMenu('')
    }
  }

  const handleMenuClick = (menu) => {
    if (menu === 'CELEB PICK') {
      setActiveMenu('')
      closeSubmenus()
      setMenuOpen(false)
      return
    }

    if (menu === 'AI 맞춤 서비스') {
      setActiveMenu('')
      navigateTo('ai-fitting')
      return
    }

    setActiveMenu(menu)

    if (menu === '종류') {
      setCategoryOpen((prev) => !prev)
      setStyleOpen(false)
      setCustomerOpen(false)
      setMobileMypageOpen(false)
      setSelectedCustomerItem(null)
      return
    }

    if (menu === '스타일') {
      setStyleOpen((prev) => !prev)
      setCategoryOpen(false)
      setCustomerOpen(false)
      setMobileMypageOpen(false)
      setSelectedCustomerItem(null)
      return
    }

    if (menu === '고객센터') {
      setCustomerOpen((prev) => !prev)
      setCategoryOpen(false)
      setStyleOpen(false)
      setMobileMypageOpen(false)
      setSelectedCustomerItem(null)
    }
  }

  const handleMobileMypageClick = () => {
    setActiveMenu('마이페이지')
    setMobileMypageOpen((prev) => !prev)
    setCategoryOpen(false)
    setStyleOpen(false)
    setCustomerOpen(false)
    setSelectedCustomerItem(null)
  }

  const handleSubMenuClick = (item) => {
    if (item === '마이페이지 홈') {
      navigateTo('mypage')
      return
    }

    if (item === '좋아요') {
      navigateTo('likes')
      return
    }

    if (item === '주문내역') {
      navigateTo('orders')
      return
    }

    if (item === '최근 본 상품') {
      navigateTo('recent')
      return
    }

    if (item === '장바구니') {
      navigateTo('cart')
      return
    }

    console.log(`${item} 페이지로 이동`)
  }

  const handleMobileCustomerClick = (item) => {
    if (item === 'FAQ') {
      navigateTo('faq')
      return
    }

    if (item === '1:1문의') {
      navigateTo('inquiry')
      return
    }

    console.log(`${item} 페이지로 이동`)
  }

  const handleCustomerItemClick = (item) => {
    setSelectedCustomerItem(item)
    if (item === '1:1문의') {
      navigateTo('inquiry')
      return
    }
    console.log(`${item} 선택`)
  }

  const handleInquirySubmit = (event) => {
    event.preventDefault()
    setInquiryMessage('문의 접수 기능은 아직 연결되지 않았습니다.')
  }

  const handleLoginClick = () => {
    setIsLoggedIn(true)
    setCategoryOpen(false)
    setStyleOpen(false)
    setCustomerOpen(false)
    setMobileMypageOpen(false)
    setSelectedCustomerItem(null)
    setActiveMenu('')
  }

  const handleLogoutClick = () => {
    setIsLoggedIn(false)
    setSelectedCustomerItem(null)
  }

  const handleProfileCardClick = () => {
    setIsLoggedIn(true)
    setAccountMessage('')
    navigateTo('account')
  }

  const handleAccountMenuClick = (destination) => {
    if (destination === 'account') {
      navigateTo('account')
    } else if (destination === 'orders') {
      navigateTo('orders')
    } else if (destination === 'recent') {
      navigateTo('recent')
    } else if (destination === 'cart') {
      navigateTo('cart')
    } else if (destination === 'likes') {
      navigateTo('likes')
    } else if (destination === 'inquiry') {
      navigateTo('inquiry')
    } else if (destination === 'mypage') {
      navigateTo('mypage')
    } else if (destination === 'logout') {
      handleLogoutClick()
      navigateTo('mypage')
    } else {
      setAccountMessage('선택하신 메뉴는 아직 준비 중입니다.')
    }
  }

  const openMenu = () => {
    setMenuOpen(true)
    closeSubmenus()
    setActiveMenu(isLoggedIn ? '' : 'CELEB PICK')
  }

  const closeMenu = () => {
    setMenuOpen(false)
    closeSubmenus()
  }

  const handlePhotoChange = (event) => {
    const file = event.target.files?.[0]

    if (!file) return

    if (!file.type.startsWith('image/')) {
      setAnalysisMessage('이미지 파일을 선택해 주세요.')
      return
    }

    setSelectedPhoto(file)
    setAnalysisMessage('')
    setIsAnalyzing(false)
    setHasAnalyzed(false)
  }

  const handleAnalyze = () => {
    if (!selectedPhoto) {
      setAnalysisMessage('먼저 분석할 사진을 업로드해 주세요.')
      return
    }

    setAnalysisMessage('')
    setHasAnalyzed(false)
    setIsAnalyzing(true)
  }

  const handleRetry = () => {
    setIsAnalyzing(false)
    setHasAnalyzed(false)
    setAnalysisMessage('')
  }

  const selectedCartItems = cartItems.filter((item) => item.selected)
  const cartSubtotal = selectedCartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div
      className={`app ${
        currentPage === 'ai-fitting' ? 'ai-page-active' : ''
      }`}
    >
      <header className="header">
        <button
          type="button"
          className="menu-button"
          onClick={openMenu}
        >
          ☰ 메뉴
        </button>

        <div className="logo">Chalfit</div>

        <div className="header-right">
          <button
            type="button"
            className="login-text"
            onClick={() => navigateTo('mypage')}
          >
            마이페이지
          </button>
          <button type="button" className="cart-text" onClick={() => navigateTo('cart')}>장바구니</button>

          <span className="header-person-icon">
            <span className="header-person-head" />
            <span className="header-person-body" />
          </span>
        </div>
      </header>

      {currentPage === 'home' ? (
        <main className="main-content">
          <h1>ChalFit</h1>
          <p>선글라스 쇼핑몰 메인 화면</p>
        </main>
      ) : currentPage === 'faq' ? (
        <main className="faq-page">
          <section className="faq-page-title">
            <h1>FAQ</h1>
            <p>자주 묻는 질문입니다.</p>
          </section>

          <nav className="faq-page-tabs" aria-label="고객센터 메뉴">
            <button className="active" type="button" onClick={() => navigateTo('faq')}>
              <span>FAQ</span><span aria-hidden="true">›</span>
            </button>
            <button type="button" onClick={() => navigateTo('inquiry')}>
              <span>1:1 문의</span><span aria-hidden="true">›</span>
            </button>
          </nav>

          <section className="faq-page-list" aria-label="자주 묻는 질문 목록">
            <p className="faq-page-count">총 {faqDetails.length}개</p>
            {faqDetails.map((item, index) => (
              <div className="faq-page-item" key={item.question}>
                <button
                  type="button"
                  aria-expanded={openFaqIndex === index}
                  onClick={() => setOpenFaqIndex((open) => open === index ? null : index)}
                >
                  <span>{item.question}</span>
                  <span className={`faq-page-arrow ${openFaqIndex === index ? 'open' : ''}`} aria-hidden="true">›</span>
                </button>
                {openFaqIndex === index && <p>{item.answer}</p>}
              </div>
            ))}
          </section>

          <footer className="site-footer">
            <div className="footer-brand">Chalfit</div>
            <div className="footer-links">
              <div className="footer-link-row">
                <span>문의하기</span><span>고객센터</span><span>배송안내</span><span>이용약관</span><span>FAQ</span>
              </div>
              <p>ChalFit 대표자 홍길동 사업자등록번호 123-45-67890</p>
              <p>주소 : 서울특별시 강남구 선릉로 340 이메일 : support@chalfit.com</p>
            </div>
            <div className="footer-copyright">
              <span>© 2026 ChalFit. All rights reserved.</span>
              <small>STYLE FITS YOU</small>
            </div>
          </footer>
        </main>
      ) : currentPage === 'inquiry' ? (
        <main className="inquiry-page">
          <section className="inquiry-title-bar">
            <h1>1:1 문의</h1>
            <p className="inquiry-intro">궁금한 점이 있으신가요?</p>
            <button className="mypage-return-link inquiry-mypage-return" type="button" onClick={() => navigateTo('account')}>
              ← 회원정보 수정으로 돌아가기
            </button>
          </section>

          <nav className="inquiry-mobile-tabs" aria-label="고객센터 메뉴">
            <button type="button" onClick={() => navigateTo('faq')}>
              <span>FAQ</span><span aria-hidden="true">›</span>
            </button>
            <button className="active" type="button" onClick={() => navigateTo('inquiry')}>
              <span>1:1 문의</span><span aria-hidden="true">›</span>
            </button>
          </nav>

          <div className="inquiry-content">
            <button
              type="button"
              className="inquiry-faq-toggle"
              onClick={() => setShowInquiryFaq((open) => !open)}
              aria-expanded={showInquiryFaq}
            >
              <span>자주 묻는 질문</span>
              <span aria-hidden="true">›</span>
            </button>

            {showInquiryFaq && (
              <div className="inquiry-faq-list">
                {faqItems.slice(0, 4).map((question) => (
                  <button
                    type="button"
                    key={question}
                    onClick={() => {
                      setInquiryContent(`${question} `)
                      setShowInquiryFaq(false)
                    }}
                  >
                    {question}
                  </button>
                ))}
              </div>
            )}

            <form className="inquiry-form" onSubmit={handleInquirySubmit}>
              <label className="inquiry-email-field">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="2" y="4" width="20" height="16" rx="1" />
                  <path d="m3 5 9 8 9-8" />
                </svg>
                <input
                  type="email"
                  value={inquiryEmail}
                  onChange={(event) => setInquiryEmail(event.target.value)}
                  aria-label="답변 받을 이메일"
                  required
                />
              </label>

              <label className="inquiry-type-field">
                <span className={inquiryType ? 'has-value' : ''}>
                  {inquiryType || '질문 유형을 선택하세요'}
                </span>
                <select
                  value={inquiryType}
                  onChange={(event) => setInquiryType(event.target.value)}
                  aria-label="질문 유형"
                  required
                >
                  <option value="" disabled>질문 유형을 선택하세요</option>
                  <option value="주문/결제">주문/결제</option>
                  <option value="배송">배송</option>
                  <option value="교환/환불">교환/환불</option>
                  <option value="상품 문의">상품 문의</option>
                  <option value="기타">기타</option>
                </select>
                <span className="inquiry-select-arrow" aria-hidden="true">⌄</span>
              </label>

              <textarea
                value={inquiryContent}
                onChange={(event) => setInquiryContent(event.target.value)}
                placeholder="문의 내용을 자세히 입력해주세요."
                aria-label="문의 내용"
                required
              />

              <button type="submit" className="inquiry-submit-button">
                문의 보내기
              </button>
              {inquiryMessage && (
                <p className="inquiry-status" role="status">{inquiryMessage}</p>
              )}
            </form>
          </div>

          <footer className="site-footer">
            <div className="footer-brand">Chalfit</div>
            <div className="footer-links">
              <div className="footer-link-row">
                <span>문의하기</span>
                <span>고객센터</span>
                <span>배송안내</span>
                <span>이용약관</span>
                <span>FAQ</span>
              </div>
              <p>ChalFit　 대표자 홍길동　 사업자등록번호 123-45-67890</p>
              <p>주소 : 서울특별시 강남구 선릉로 340　 이메일 : support@chalfit.com</p>
            </div>
            <div className="footer-copyright">
              <span>© 2026 ChalFit. All rights reserved.</span>
              <small>STYLE FITS YOU</small>
            </div>
          </footer>
        </main>
      ) : currentPage === 'mypage' ? (
        <main className="mypage-screen">
          <section className="mypage-title-bar">
            <h1>마이페이지</h1>
          </section>

          <p className="mypage-welcome">살펴보고 싶은 메뉴를 선택해주세요.</p>

          <div className="mypage-dashboard">
            <button
              type="button"
              className="mypage-profile-card"
              onClick={handleProfileCardClick}
            >
              <span className="mypage-profile-avatar" aria-hidden="true">
                <span />
                <i />
              </span>
              <div>
                <strong>{isLoggedIn ? '김철님' : '로그인 해주세요'}</strong>
                <p>
                  {isLoggedIn
                    ? '회원 정보를 확인하고 수정할 수 있습니다.'
                    : '나에게 어울리는 스타일을 찾아보세요.'}
                </p>
              </div>
              <span className="mypage-card-arrow" aria-hidden="true">›</span>
            </button>

            <section className="mypage-summary" aria-label="마이페이지 요약">
              <button type="button" onClick={() => navigateTo('likes')}>
                <span aria-hidden="true">♡</span>
                <strong>0</strong>
                <small>좋아요</small>
              </button>
              <button type="button" onClick={() => navigateTo('cart')}>
                <span aria-hidden="true">🛒</span>
                <strong>0</strong>
                <small>장바구니</small>
              </button>
              <button type="button" onClick={() => navigateTo('orders')}>
                <span aria-hidden="true">▢</span>
                <strong>0</strong>
                <small>주문 내역</small>
              </button>
            </section>

            <button
              type="button"
              className="mypage-fit-button"
              onClick={() => navigateTo('ai-fitting')}
            >
              <strong>MY FIT</strong>
              <span>나의 분석 결과 보기　›</span>
            </button>

            <section className="mypage-shortcuts">
              <button type="button" onClick={() => navigateTo('recent')}>
                <span aria-hidden="true">◷</span> 최근 본 상품
              </button>
              <button type="button" onClick={() => navigateTo('inquiry')}>
                <span aria-hidden="true">◎</span> 1:1 문의
              </button>
              <button type="button" onClick={() => navigateTo('orders')}>
                <span aria-hidden="true">♧</span> 배송 조회
              </button>
              <button type="button" disabled>
                <span aria-hidden="true">♧</span> 알림 설정 · 준비 중
              </button>
            </section>
          </div>

          <footer className="site-footer">
            <div className="footer-brand">Chalfit</div>
            <div className="footer-links">
              <div className="footer-link-row">
                <span>문의하기</span>
                <span>고객센터</span>
                <span>배송안내</span>
                <span>이용약관</span>
                <span>FAQ</span>
              </div>
              <p>ChalFit 대표자 홍길동 사업자등록번호 123-45-67890</p>
              <p>주소 : 서울특별시 강남구 선릉로 340 이메일 : support@chalfit.com</p>
            </div>
            <div className="footer-copyright">
              <span>© 2026 ChalFit. All rights reserved.</span>
              <small>STYLE FITS YOU</small>
            </div>
          </footer>
        </main>
      ) : currentPage === 'account' ? (
        <main className="account-page">
          <section className="account-title-bar">
            <h1>회원정보 수정</h1>
          </section>
          <p className="account-mobile-intro">회원정보를 확인하고 필요한 정보를 수정해보세요.</p>

          <div className="account-layout">
            <aside className="account-sidebar" aria-label="마이페이지 메뉴">
              <button className="active" type="button" onClick={() => handleAccountMenuClick('account')}>회원정보 수정</button>
              <span className="account-sidebar-label">SHOPPING</span>
              <button type="button" onClick={() => handleAccountMenuClick('orders')}>주문내역</button>
              <button type="button" onClick={() => handleAccountMenuClick('recent')}>최근 본 상품</button>
              <button type="button" onClick={() => handleAccountMenuClick('likes')}>좋아요</button>
              <button type="button" onClick={() => handleAccountMenuClick('cart')}>장바구니</button>
              <span className="account-sidebar-label">고객지원</span>
              <button type="button" onClick={() => handleAccountMenuClick('inquiry')}>1:1 문의</button>
              <button type="button" onClick={() => {
                handleAccountMenuClick('logout')
              }}>로그아웃</button>
            </aside>

            <section className="account-panel">
              <h2>회원정보 수정</h2>
              <p className="account-description">회원님의 정보를 확인하고 수정할 수 있습니다.</p>

              <form
                className="account-form"
                onSubmit={(event) => {
                  event.preventDefault()
                  setAccountMessage('회원정보 저장 기능은 아직 연결되지 않았습니다.')
                }}
              >
                <div className="account-user-summary">
                  <span className="mypage-profile-avatar" aria-hidden="true">
                    <span />
                    <i />
                  </span>
                  <div>
                    <strong>김철님</strong>
                    <small>abcd@gmail.com</small>
                  </div>
                  <button className="account-profile-photo-button" type="button">
                    프로필 사진 변경
                  </button>
                </div>

                <div className="account-fields-grid">
                  <label><span>이름</span><input defaultValue="김철" /></label>
                  <label><span>아이디</span><input defaultValue="chalfit123" /></label>
                  <label><span>이메일</span><input type="email" defaultValue="abcd@gmail.com" /></label>
                  <label className="account-password-field">
                    <span>비밀번호</span>
                    <div className="account-password-control">
                      <input type="password" defaultValue="chalfit123" readOnly aria-label="현재 비밀번호" />
                      <button
                        type="button"
                        className="account-password-change-button"
                        aria-expanded={isChangingPassword}
                        onClick={() => setIsChangingPassword((changing) => !changing)}
                      >
                        <svg viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M4 16.5V20h3.5L18.8 8.7l-3.5-3.5L4 16.5Z" />
                          <path d="m13.8 6.7 3.5 3.5M4 20h16" />
                        </svg>
                        <span>비밀번호 변경</span>
                      </button>
                    </div>
                  </label>
                  {isChangingPassword && (
                    <>
                      <label><span>새 비밀번호</span><input type="password" placeholder="새 비밀번호" autoComplete="new-password" /></label>
                      <label><span>비밀번호 확인</span><input type="password" placeholder="새 비밀번호 확인" autoComplete="new-password" /></label>
                    </>
                  )}
                  <label><span>생년월일</span><input type="date" defaultValue="2000-01-01" /></label>
                  <label><span>성별</span><select defaultValue="선택 안 함"><option>선택 안 함</option><option>여성</option><option>남성</option></select></label>
                  <label><span>연락처</span><input type="tel" placeholder="010-0000-0000" /></label>
                  <label><span>우편번호</span><input placeholder="우편번호" /></label>
                  <label className="account-address-field"><span>주소</span><input placeholder="주소를 입력해주세요." /></label>
                  <label className="account-address-field"><span>상세 주소</span><input placeholder="상세 주소를 입력해주세요." /></label>
                </div>

                <div className="account-form-actions">
                  <button type="button" onClick={() => navigateTo('mypage')}>취소</button>
                  <button type="submit">변경 내용 저장</button>
                </div>
                {accountMessage && <p className="account-message" role="status">{accountMessage}</p>}
              </form>
            </section>
          </div>

          <footer className="site-footer">
            <div className="footer-brand">Chalfit</div>
            <div className="footer-links">
              <div className="footer-link-row">
                <span>문의하기</span><span>고객센터</span><span>배송안내</span><span>이용약관</span><span>FAQ</span>
              </div>
              <p>ChalFit 대표자 홍길동 사업자등록번호 123-45-67890</p>
              <p>주소 : 서울특별시 강남구 선릉로 340 이메일 : support@chalfit.com</p>
            </div>
            <div className="footer-copyright">
              <span>© 2026 ChalFit. All rights reserved.</span>
              <small>STYLE FITS YOU</small>
            </div>
          </footer>
        </main>
      ) : currentPage === 'orders' ? (
        <main className="orders-page">
          <section className="orders-title-bar">
            <h1>주문내역</h1>
            <button className="mypage-return-link" type="button" onClick={() => navigateTo('account')}>
              ← 회원정보 수정으로 돌아가기
            </button>
          </section>
          <p className="orders-intro">주문하신 상품 내역을 조회해보세요.</p>
          <div className="orders-layout">
            <aside className="orders-sidebar" aria-label="마이페이지 메뉴">
              <button type="button" onClick={() => navigateTo('account')}>회원정보수정</button>
              <span>SHOPPING</span>
              <button type="button" className="active" onClick={() => navigateTo('orders')}>주문내역</button>
              <button type="button" onClick={() => navigateTo('recent')}>최근 본 상품</button>
              <button type="button" onClick={() => navigateTo('likes')}>좋아요</button>
              <button type="button" onClick={() => navigateTo('cart')}>장바구니</button>
              <span>고객지원</span>
              <button type="button" onClick={() => navigateTo('faq')}>FAQ</button>
              <button type="button" onClick={() => navigateTo('inquiry')}>1:1 문의</button>
            </aside>
            <section className="orders-list" aria-label="주문 목록">
              <article className="order-card">
                <header className="order-card-header">
                  <span>주문일　 2026.09.07　10:23</span>
                  <span>주문번호　<strong>CF20260907-1234</strong></span>
                  <button type="button">주문 상세보기 ›</button>
                </header>
                <div className="order-card-body">
                  <div className="order-product">
                    <div className="order-product-image"><img src="/cocoa-01.png" alt="코코아 선글라스" /></div>
                    <div className="order-product-info">
                      <span>GENTLE MONSTER</span>
                      <strong>뉴 허 01</strong>
                      <small>블랙/블랙　59-11</small>
                      <small>289,000원　 1개</small>
                    </div>
                  </div>
                  <div className="order-delivery">
                    <strong>배송중</strong>
                    <p>09.07 상품이 출고되었습니다.</p>
                    <div className="delivery-progress" aria-label="배송중">
                      <span className="done" /><span className="done" /><span className="done" /><span className="current" /><span />
                    </div>
                    <div className="delivery-labels"><span>주문접수</span><span>결제완료</span><span>배송준비중</span><b>배송중</b><span>배송완료</span></div>
                    <button type="button" onClick={() => navigateTo('shipping')}>배송 조회하기</button>
                  </div>
                </div>
              </article>
              <article className="order-card">
                <header className="order-card-header">
                  <span>주문일　 2026.08.12　11:25</span>
                  <span>주문번호　<strong>CF20260812-5678</strong></span>
                  <button type="button">주문 상세보기 ›</button>
                </header>
                <div className="order-card-body">
                  <div className="order-product">
                    <div className="order-product-image"><img src="/july-01.png" alt="줄라이 선글라스" /></div>
                    <div className="order-product-info">
                      <span>RIETI</span>
                      <strong>MANO C2</strong>
                      <small>블랙/블랙</small>
                      <small>49,000원　 1개</small>
                    </div>
                  </div>
                  <div className="order-delivery completed">
                    <strong>배송완료</strong>
                    <p>08.14 상품이 배송되었습니다.</p>
                    <div className="order-actions"><button type="button">구매확정</button><button type="button">리뷰 작성</button></div>
                  </div>
                </div>
              </article>
            </section>
          </div>
          <footer className="site-footer">
            <div className="footer-brand">Chalfit</div>
            <div className="footer-links"><div className="footer-link-row"><span>문의하기</span><span>고객센터</span><span>배송안내</span><span>이용약관</span><span>FAQ</span></div><p>ChalFit 대표자 홍길동 사업자등록번호 123-45-67890</p><p>주소 : 서울특별시 강남구 선릉로 340 이메일 : support@chalfit.com</p></div>
            <div className="footer-copyright"><span>© 2026 ChalFit. All rights reserved.</span><small>STYLE FITS YOU</small></div>
          </footer>
        </main>
      ) : currentPage === 'recent' ? (
        <main className="recent-page">
          <section className="recent-title-bar">
            <h1>최근 본 상품</h1>
            <button className="mypage-return-link" type="button" onClick={() => navigateTo('account')}>
              ← 회원정보 수정으로 돌아가기
            </button>
          </section>
          <p className="recent-intro">최근 확인한 상품을 다시 둘러보세요.</p>
          <div className="recent-layout">
            <aside className="recent-sidebar" aria-label="마이페이지 메뉴">
              <button type="button" onClick={() => navigateTo('account')}>회원정보수정</button>
              <span>SHOPPING</span>
              <button type="button" onClick={() => navigateTo('orders')}>주문내역</button>
              <button className="active" type="button" onClick={() => navigateTo('recent')}>최근 본 상품</button>
              <button type="button" onClick={() => navigateTo('likes')}>좋아요</button>
              <button type="button" onClick={() => navigateTo('cart')}>장바구니</button>
              <span>고객지원</span>
              <button type="button" onClick={() => navigateTo('faq')}>FAQ</button>
              <button type="button" onClick={() => navigateTo('inquiry')}>1:1 문의</button>
            </aside>
            <section className="recent-empty-state">
              <p className="recent-empty-title">최근 본 상품이 없어요.</p>
              <p>다양한 선글라스를 둘러보고 마음에 드는 상품을 찾아보세요</p>
              <button type="button" onClick={() => navigateTo('home')}>상품 둘러보기</button>
              <button className="recent-ai-link" type="button" onClick={() => navigateTo('ai-fitting')}>AI FIT 시작하기 <span aria-hidden="true">›</span></button>
            </section>
          </div>
          <footer className="site-footer">
            <div className="footer-brand">Chalfit</div>
            <div className="footer-links"><div className="footer-link-row"><span>문의하기</span><span>고객센터</span><span>배송안내</span><span>이용약관</span><span>FAQ</span></div><p>ChalFit 대표자 홍길동 사업자등록번호 123-45-67890</p><p>주소 : 서울특별시 강남구 선릉로 340 이메일 : support@chalfit.com</p></div>
            <div className="footer-copyright"><span>© 2026 ChalFit. All rights reserved.</span><small>STYLE FITS YOU</small></div>
          </footer>
        </main>
      ) : currentPage === 'cart' ? (
        <main className="cart-page">
          <section className="cart-title-bar">
            <h1>장바구니</h1>
            <button className="mypage-return-link" type="button" onClick={() => navigateTo('account')}>
              ← 회원정보 수정으로 돌아가기
            </button>
          </section>
          <div className="cart-content">
            <section className="cart-items-panel" aria-label="장바구니 상품 목록">
              <div className="cart-toolbar">
                <label><input type="checkbox" checked={cartItems.length > 0 && cartItems.every((item) => item.selected)} onChange={(event) => setCartItems((items) => items.map((item) => ({ ...item, selected: event.target.checked })))} /> 전체 선택</label>
                <button type="button" disabled={selectedCartItems.length === 0} onClick={() => setCartItems((items) => items.filter((item) => !item.selected))}>선택 삭제</button>
              </div>
              {cartItems.length > 0 ? cartItems.map((item) => (
                <article className="cart-item" key={item.id}>
                  <label className="cart-item-check"><input type="checkbox" aria-label={`${item.name} 선택`} checked={item.selected} onChange={() => setCartItems((items) => items.map((entry) => entry.id === item.id ? { ...entry, selected: !entry.selected } : entry))} /></label>
                  <div className="cart-item-image"><img src={item.image} alt={`${item.name} 선글라스`} /></div>
                  <div className="cart-item-info">
                    <span>{item.brand}</span>
                    <strong>{item.name}</strong>
                    <small>{item.option}</small>
                    <div className="cart-quantity-control">
                      <button type="button" aria-label="수량 줄이기" onClick={() => setCartItems((items) => items.map((entry) => entry.id === item.id ? { ...entry, quantity: Math.max(1, entry.quantity - 1) } : entry))}>−</button>
                      <span>{item.quantity}</span>
                      <button type="button" aria-label="수량 늘리기" onClick={() => setCartItems((items) => items.map((entry) => entry.id === item.id ? { ...entry, quantity: entry.quantity + 1 } : entry))}>＋</button>
                    </div>
                  </div>
                  <strong className="cart-item-price">{(item.price * item.quantity).toLocaleString('ko-KR')}원</strong>
                  <button className="cart-item-remove" type="button" aria-label={`${item.name} 삭제`} onClick={() => setCartItems((items) => items.filter((entry) => entry.id !== item.id))}>×</button>
                </article>
              )) : (
                <div className="cart-empty-state"><p>장바구니가 비어 있어요.</p><button type="button" onClick={() => navigateTo('home')}>상품 둘러보기</button></div>
              )}
            </section>
            <aside className="cart-summary">
              <h2>결제금액</h2>
              <dl>
                <dt>상품 금액</dt><dd>{cartSubtotal.toLocaleString('ko-KR')}원</dd>
                <dt>할인 금액</dt><dd>0원</dd>
                <dt>배송비</dt><dd>{cartSubtotal > 0 ? '무료배송' : '0원'}</dd>
              </dl>
              <div className="cart-total"><strong>총 결제 금액</strong><strong>{cartSubtotal.toLocaleString('ko-KR')}원</strong></div>
              <label className="cart-agreement">
                <input type="checkbox" checked={cartAgreement} onChange={(event) => setCartAgreement(event.target.checked)} />
                <span>AI 피팅 구매 상품의 교환 및 반품 제한에 동의합니다.</span>
              </label>
              <button type="button" disabled={selectedCartItems.length === 0 || !cartAgreement}>결제하기</button>
              <p>※ 결제 및 주문 기능은 준비 중입니다.</p>
            </aside>
          </div>
          <footer className="site-footer">
            <div className="footer-brand">Chalfit</div>
            <div className="footer-links"><div className="footer-link-row"><span>문의하기</span><span>고객센터</span><span>배송안내</span><span>이용약관</span><span>FAQ</span></div><p>ChalFit 대표자 홍길동 사업자등록번호 123-45-67890</p><p>주소 : 서울특별시 강남구 선릉로 340 이메일 : support@chalfit.com</p></div>
            <div className="footer-copyright"><span>© 2026 ChalFit. All rights reserved.</span><small>STYLE FITS YOU</small></div>
          </footer>
        </main>
      ) : currentPage === 'shipping' ? (
        <main className="shipping-page">
          <section className="shipping-title-bar">
            <h1>배송 조회</h1>
          </section>
          <p className="shipping-intro">주문하신 상품의 배송 현황을 확인할 수 있습니다.</p>
          <section className="shipping-content">
            <div className="shipping-order-summary">
              <span>주문일:　2026.09.07</span>
              <span>주문번호:　<button className="shipping-order-link" type="button" onClick={() => navigateTo('orders')}>CF20260907-1234</button></span>
            </div>
            <section className="shipping-progress-card" aria-label="배송 진행 상황">
              <h2>배송 진행 현황</h2>
              <div className="shipping-steps">
                <div className="shipping-step complete"><span aria-hidden="true"><svg viewBox="0 0 32 32"><path d="M8 3.5h10l6 6v19H8z" /><path d="M18 3.5v7h6M12 16h8M12 20h8" /></svg></span><strong>주문 접수</strong><small>09.07 10:23</small></div>
                <div className="shipping-step complete"><span aria-hidden="true"><svg viewBox="0 0 32 32"><path d="m16 3 12 6.5v13L16 29 4 22.5v-13L16 3Z" /><path d="m4.5 9.5 11.5 6 11.5-6M16 16v13M10 6.2l12 6.5v6" /></svg></span><strong>상품 준비중</strong><small>09.07 14:33</small></div>
                <div className="shipping-step current"><span aria-hidden="true"><svg viewBox="0 0 36 32"><path d="M2.5 6h19v18h-19zM21.5 12h7l5 6v6h-12z" /><circle cx="9" cy="26" r="3" /><circle cx="28" cy="26" r="3" /><path d="M22 18h10" /></svg></span><strong>배송중</strong><small>09.08 06:15</small></div>
                <div className="shipping-step"><span aria-hidden="true"><svg viewBox="0 0 32 32"><circle cx="16" cy="16" r="12" /><path d="m10 16 4 4 8-9" /></svg></span><strong>배송 완료</strong><small>배송 전</small></div>
              </div>
            </section>
            <div className="shipping-detail-grid">
              <section className="shipping-detail-card">
                <h2>배송 상세 정보</h2>
                <dl><dt>택배사</dt><dd>CJ 대한통운</dd><dt>송장번호</dt><dd>1234-5678-9101</dd><dt>현재 위치</dt><dd>서울 강남구 역삼동 터미널에 도착했습니다.</dd><dt>배송 예정일</dt><dd>2026.09.08 (화) 도착 예정</dd></dl>
                <button className="shipping-back-button" type="button">CJ 대한통운 배송조회 바로가기</button>
              </section>
              <section className="shipping-detail-card">
                <h2>배송지 정보</h2>
                <dl><dt>받는 사람</dt><dd>김철님</dd><dt>연락처</dt><dd>010-1234-5678</dd><dt>주소</dt><dd>(12345) 서울특별시 강남구 선릉로 340, 607호</dd><dt>배송 요청사항</dt><dd>부재시 문 앞에 두고 가주세요.</dd></dl>
              </section>
            </div>
          </section>
          <footer className="site-footer">
            <div className="footer-brand">Chalfit</div>
            <div className="footer-links"><div className="footer-link-row"><span>문의하기</span><span>고객센터</span><span>배송안내</span><span>이용약관</span><span>FAQ</span></div><p>ChalFit 대표자 홍길동 사업자등록번호 123-45-67890</p><p>주소 : 서울특별시 강남구 선릉로 340 이메일 : support@chalfit.com</p></div>
            <div className="footer-copyright"><span>© 2026 ChalFit. All rights reserved.</span><small>STYLE FITS YOU</small></div>
          </footer>
        </main>
      ) : currentPage === 'likes' ? (
        <main className="likes-page">
          <section className="likes-title-bar">
            <h1>좋아요</h1>
            <button className="mypage-return-link" type="button" onClick={() => navigateTo('account')}>
              ← 회원정보 수정으로 돌아가기
            </button>
          </section>

          <p className="likes-mobile-intro">마음에 드는 선글라스를 모아보세요.</p>

          <nav className="likes-mobile-tabs" aria-label="마이페이지 메뉴">
            <button type="button" onClick={() => navigateTo('account')}>회원정보 수정</button>
            <button type="button" onClick={() => navigateTo('orders')}>주문 내역</button>
            <button type="button" onClick={() => navigateTo('recent')}>최근 본 상품</button>
            <button className="active" type="button" onClick={() => navigateTo('likes')}>좋아요</button>
            <button type="button" onClick={() => navigateTo('cart')}>장바구니</button>
          </nav>

          <section className="likes-empty-state">
            <p>아직 좋아요한 상품이 없어요.</p>
            <p>마음에 드는 선글라스를 저장해보세요.</p>
            <button type="button" onClick={() => navigateTo('home')}>
              상품 둘러보기
            </button>
          </section>

          <footer className="site-footer">
            <div className="footer-brand">Chalfit</div>
            <div className="footer-links">
              <div className="footer-link-row">
                <span>문의하기</span>
                <span>고객센터</span>
                <span>배송안내</span>
                <span>이용약관</span>
                <span>FAQ</span>
              </div>
              <p>ChalFit 대표자 홍길동 사업자등록번호 123-45-67890</p>
              <p>주소 : 서울특별시 강남구 선릉로 340 이메일 : support@chalfit.com</p>
            </div>
            <div className="footer-copyright">
              <span>© 2026 ChalFit. All rights reserved.</span>
              <small>STYLE FITS YOU</small>
            </div>
          </footer>
        </main>
      ) : (
        <main className="ai-fitting-page">
          <section className="ai-fitting-heading">
            <h1>AI 맞춤 서비스</h1>
            <h2>나에게 어울리는 선글라스를 찾아보세요.</h2>
            <p className="ai-intro">
              고객님의 얼굴형을 분석해 맞춤 선글라스를 추천해드립니다.
            </p>
          </section>

          <section
            className={`ai-fitting-workspace ${
              hasAnalyzed ? 'results-active' : ''
            }`}
          >
            <div className="photo-column">
              <label
                className="photo-upload-box"
                htmlFor="ai-photo-upload"
              >
                {photoPreview ? (
                  <img
                    className="photo-preview"
                    src={photoPreview}
                    alt="업로드한 얼굴 사진"
                  />
                ) : (
                  <span className="photo-upload-empty">
                    <svg
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                      className="camera-icon"
                    >
                      <path
                        d="M8 14h7l3-5h12l3 5h7a3 3 0 0 1 3 3v21a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V17a3 3 0 0 1 3-3Z"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.8"
                        strokeLinejoin="round"
                      />
                      <circle
                        cx="24"
                        cy="27"
                        r="7"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.8"
                      />
                    </svg>
                    <span>이미지 불러오기</span>
                  </span>
                )}

                <input
                  id="ai-photo-upload"
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoChange}
                />
              </label>

              {hasAnalyzed && (
                <button
                  type="button"
                  className="retry-analysis-button photo-retry-button"
                  onClick={handleRetry}
                >
                  ↻ 다시 분석하기
                </button>
              )}

            </div>

            {isAnalyzing ? (
              <section className="analysis-loading" aria-live="polite">
                <div className="loading-spinner" />
                <h3>얼굴형을 분석하고 있어요.</h3>
                <p>잠시만 기다려 주세요.</p>
                <div className="loading-progress">
                  <span />
                </div>
              </section>
            ) : hasAnalyzed ? (
              <section className="analysis-results" aria-live="polite">
                <div className="results-title-row">
                  <h3>분석결과</h3>
                  <span className="sample-result-label">예시 결과</span>
                </div>

                <div className="face-result-card">
                  <div className="result-portrait-wrap">
                    {photoPreview && (
                      <img
                        className="result-portrait"
                        src={photoPreview}
                        alt="업로드한 얼굴 사진"
                      />
                    )}
                    <svg
                      className="face-shape-overlay"
                      viewBox="0 0 100 100"
                      aria-hidden="true"
                    >
                      <polygon points={sampleFaceShape.outline} />
                    </svg>
                  </div>

                  <div className="face-result-copy">
                    <strong>{sampleFaceShape.name} 얼굴</strong>
                    <span className="face-score">78%</span>
                    <p>
                      이마가 넓고 턱이 좁은 형태로 부드러운 인상을 주는 얼굴형입니다.
                    </p>
                  </div>

                  <div className="face-result-summary">
                    <strong>추천 프레임</strong>
                    <p>캣아이, 오벌</p>
                  </div>
                </div>

                <div className="recommendation-section">
                  <div className="recommendation-heading">
                    <h3>AI 추천</h3>
                    <button
                      type="button"
                      onClick={() => console.log('추천 상품 더보기')}
                    >
                      더보기 ↗
                    </button>
                  </div>

                  <div className="recommended-products">
                    {products.map((product) => (
                      <article
                        className="recommended-product"
                        key={product.id}
                      >
                        <div
                          className={`sunglasses-art sunglasses-${product.shape}`}
                          aria-label={product.description}
                        >
                          {product.image ? (
                            <img
                              className="sunglasses-product-image"
                              src={product.image}
                              alt={`${product.name} 선글라스`}
                            />
                          ) : (
                            <>
                              <span />
                              <span />
                              <i />
                            </>
                          )}
                        </div>

                        <div className="product-brand-row">
                          <strong>GENTLE MONSTER</strong>
                          <button
                            type="button"
                            className="product-favorite"
                            aria-label={`${product.name} 찜하기`}
                            onClick={() => console.log(`${product.name} 찜하기`)}
                          >
                            ♡
                          </button>
                        </div>
                        <p className="product-name">{product.name}</p>
                        <div className="product-purchase-row">
                          <button
                            type="button"
                            className="ai-fitting-button"
                            onClick={() => console.log(`${product.name} AI 피팅`)}
                          >
                            AI 피팅
                          </button>
                          <span className="product-price">{product.price}</span>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>

              </section>
            ) : (
              <div className="photo-guide">
                <h3>사진 가이드</h3>
                <p className="guide-description">
                  정확한 분석을 위해 아래 조건을 확인해주세요.
                </p>

                <div className="guide-grid">
                  <div className="guide-item">
                    <span
                      className="guide-icon person-guide-icon"
                      aria-hidden="true"
                    >
                      👤
                    </span>
                    <strong>정면 사진</strong>
                    <p>
                      얼굴이 정면으로 보이는
                      <br />
                      사진을 이용해주세요.
                    </p>
                  </div>

                  <div className="guide-item">
                    <span className="guide-icon" aria-hidden="true">
                      🙋
                    </span>
                    <strong>얼굴 전체가 보이게</strong>
                    <p>
                      머리와 턱선까지 얼굴 전체가
                      <br />
                      보이도록 촬영해주세요.
                    </p>
                  </div>

                  <div className="guide-item">
                    <span
                      className="guide-icon sun-guide-icon"
                      aria-hidden="true"
                    >
                      ☼
                    </span>
                    <strong>밝고 선명한 사진</strong>
                    <p>
                      얼굴 윤곽이 잘 보이는
                      <br />
                      밝은 사진을 권장합니다.
                    </p>
                  </div>

                  <div className="guide-item">
                    <span className="guide-icon" aria-hidden="true">
                      🚫
                    </span>
                    <strong>액세서리 없는</strong>
                    <p>
                      선글라스, 모자, 마스크 등
                      <br />
                      얼굴을 가리지 않는 상태로
                      <br />
                      촬영해주세요.
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  className="analyze-button"
                  onClick={handleAnalyze}
                  disabled={isAnalyzing}
                >
                  얼굴형 분석하기 <span aria-hidden="true">›</span>
                </button>

                {analysisMessage && (
                  <p className="analysis-message" role="alert">
                    {analysisMessage}
                  </p>
                )}
              </div>
            )}
          </section>

          <footer className="site-footer">
            <div className="footer-brand">Chalfit</div>

            <div className="footer-links">
              <div className="footer-link-row">
                <span>문의하기</span>
                <span>고객센터</span>
                <span>배송안내</span>
                <span>이용약관</span>
                <span>FAQ</span>
              </div>

              <p>
                ChalFit　 대표자 홍길동　 사업자등록번호 123-45-67890
              </p>
              <p>
                주소 : 서울특별시 강남구 선릉로 340　 이메일 :
                support@chalfit.com
              </p>
            </div>

            <div className="footer-copyright">
              <span>© 2026 ChalFit. All rights reserved.</span>
              <small>STYLE FITS YOU</small>
            </div>
          </footer>
        </main>
      )}

      {menuOpen && (
        <div className="menu-container">
          <aside className="side-menu">
            <nav className="menu-list">
              {menuItems.map((menu) => (
                <div key={menu} className="menu-item-group">
                  <div
                    className={`menu-item ${
                      activeMenu === menu ? 'active' : ''
                    }`}
                    onClick={() => handleMenuClick(menu)}
                  >
                    <span>{menu}</span>
                    <span className="menu-arrow" />
                  </div>

                  {menu === '종류' && categoryOpen && (
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

                  {menu === '스타일' && styleOpen && (
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

              <div className="mobile-customer">
                <div
                  className={`customer-mobile-button ${
                    activeMenu === '고객센터' ? 'active' : ''
                  }`}
                  onClick={() => handleMenuClick('고객센터')}
                >
                  <span>고객센터</span>
                </div>

                {customerOpen && (
                  <div className="mobile-customer-menu">
                    <div className="customer-list">
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
                  </div>
                )}
              </div>

              <div className="mobile-my-page">
                <div
                  className={`menu-item ${
                    activeMenu === '마이페이지' ? 'active' : ''
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
                  activeMenu === '고객센터' ? 'active' : ''
                }`}
                onClick={() => handleMenuClick('고객센터')}
              >
                <span>고객센터</span>
              </div>
            </div>
          </aside>

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

          {customerOpen && (
            <aside className="customer-menu desktop-submenu">
              <div className="customer-list">
                {customerItems.map((item) => (
                  <div
                    key={item}
                    className={`customer-item ${
                      selectedCustomerItem === item ? 'selected' : ''
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

          {isLoggedIn &&
            !categoryOpen &&
            !styleOpen &&
            !customerOpen && (
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

          {customerOpen && selectedCustomerItem === 'FAQ' && (
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
                ? 'submenu-active'
                : ''
            }`}
            onClick={closeMenu}
          />
        </div>
      )}
    </div>
  )
}

export default App
