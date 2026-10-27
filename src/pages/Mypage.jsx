// 기존 App.jsx의 페이지 JSX를 그대로 분리했습니다.
import './Mypage.css'
export default function MyPage(props) {
  const { activeMenu, setActiveMenu, menuOpen, setMenuOpen, categoryOpen, setCategoryOpen, styleOpen, setStyleOpen, customerOpen, setCustomerOpen, isLoggedIn, setIsLoggedIn, mobileMypageOpen, setMobileMypageOpen, selectedCustomerItem, setSelectedCustomerItem, currentPage, setCurrentPage, selectedOrder, setSelectedOrder, selectedPhoto, setSelectedPhoto, photoPreview, setPhotoPreview, analysisMessage, setAnalysisMessage, isAnalyzing, setIsAnalyzing, hasAnalyzed, setHasAnalyzed, inquiryType, setInquiryType, inquiryEmail, setInquiryEmail, inquiryContent, setInquiryContent, showInquiryFaq, setShowInquiryFaq, inquiryMessage, setInquiryMessage, accountMessage, setAccountMessage, profilePhoto, isChangingPassword, setIsChangingPassword, openFaqIndex, setOpenFaqIndex, cartAgreement, setCartAgreement, cartItems, setCartItems, menuItems, categoryItems, styleItems, customerItems, mypageItems, faqItems, faqDetails, products, closeSubmenus, navigateTo, handleMenuClick, handleMobileMypageClick, handleSubMenuClick, handleMobileCustomerClick, handleCustomerItemClick, handleInquirySubmit, handleLoginClick, handleLogoutClick, handleProfileCardClick, handleAccountMenuClick, openMenu, closeMenu, handlePhotoChange, handleAnalyze, handleRetry, selectedCartItems, cartSubtotal, orderDetail, sampleFaceShape } = props
  return (
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
              <span className={`mypage-profile-avatar${profilePhoto ? ' has-photo' : ''}`} aria-hidden="true">
                {profilePhoto ? <img src={profilePhoto} alt="" /> : <><span /><i /></>}
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
        </main>
  )
}