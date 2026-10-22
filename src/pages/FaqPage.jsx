// 기존 App.jsx의 페이지 JSX를 그대로 분리했습니다.
import './FaqPage.css'
export default function FaqPage(props) {
  const { activeMenu, setActiveMenu, menuOpen, setMenuOpen, categoryOpen, setCategoryOpen, styleOpen, setStyleOpen, customerOpen, setCustomerOpen, isLoggedIn, setIsLoggedIn, mobileMypageOpen, setMobileMypageOpen, selectedCustomerItem, setSelectedCustomerItem, currentPage, setCurrentPage, selectedOrder, setSelectedOrder, selectedPhoto, setSelectedPhoto, photoPreview, setPhotoPreview, analysisMessage, setAnalysisMessage, isAnalyzing, setIsAnalyzing, hasAnalyzed, setHasAnalyzed, inquiryType, setInquiryType, inquiryEmail, setInquiryEmail, inquiryContent, setInquiryContent, showInquiryFaq, setShowInquiryFaq, inquiryMessage, setInquiryMessage, accountMessage, setAccountMessage, isChangingPassword, setIsChangingPassword, openFaqIndex, setOpenFaqIndex, cartAgreement, setCartAgreement, cartItems, setCartItems, menuItems, categoryItems, styleItems, customerItems, mypageItems, faqItems, faqDetails, products, closeSubmenus, navigateTo, handleMenuClick, handleMobileMypageClick, handleSubMenuClick, handleMobileCustomerClick, handleCustomerItemClick, handleInquirySubmit, handleLoginClick, handleLogoutClick, handleProfileCardClick, handleAccountMenuClick, openMenu, closeMenu, handlePhotoChange, handleAnalyze, handleRetry, selectedCartItems, cartSubtotal, orderDetail, sampleFaceShape } = props
  return (
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
  )
}

