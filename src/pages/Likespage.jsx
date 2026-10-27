// 기존 App.jsx의 페이지 JSX를 그대로 분리했습니다.
import './Likespage.css'
export default function Likespage(props) {
  const { activeMenu, setActiveMenu, menuOpen, setMenuOpen, categoryOpen, setCategoryOpen, styleOpen, setStyleOpen, customerOpen, setCustomerOpen, isLoggedIn, setIsLoggedIn, mobileMypageOpen, setMobileMypageOpen, selectedCustomerItem, setSelectedCustomerItem, currentPage, setCurrentPage, selectedOrder, setSelectedOrder, selectedPhoto, setSelectedPhoto, photoPreview, setPhotoPreview, analysisMessage, setAnalysisMessage, isAnalyzing, setIsAnalyzing, hasAnalyzed, setHasAnalyzed, inquiryType, setInquiryType, inquiryEmail, setInquiryEmail, inquiryContent, setInquiryContent, showInquiryFaq, setShowInquiryFaq, inquiryMessage, setInquiryMessage, accountMessage, setAccountMessage, isChangingPassword, setIsChangingPassword, openFaqIndex, setOpenFaqIndex, cartAgreement, setCartAgreement, cartItems, setCartItems, menuItems, categoryItems, styleItems, customerItems, mypageItems, faqItems, faqDetails, products, closeSubmenus, navigateTo, handleMenuClick, handleMobileMypageClick, handleSubMenuClick, handleMobileCustomerClick, handleCustomerItemClick, handleInquirySubmit, handleLoginClick, handleLogoutClick, handleProfileCardClick, handleAccountMenuClick, openMenu, closeMenu, handlePhotoChange, handleAnalyze, handleRetry, selectedCartItems, cartSubtotal, orderDetail, sampleFaceShape } = props
  return (
        <main className="likes-page">
          <section className="likes-title-bar">
            <h1>좋아요</h1>
            <button className="mypage-return-link" type="button" onClick={() => navigateTo('account')}>
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
        </main>
  )
}


