// 기존 App.jsx의 페이지 JSX를 그대로 분리했습니다.
import './ShippingPage.css'
export default function ShippingPage(props) {
  const { activeMenu, setActiveMenu, menuOpen, setMenuOpen, categoryOpen, setCategoryOpen, styleOpen, setStyleOpen, customerOpen, setCustomerOpen, isLoggedIn, setIsLoggedIn, mobileMypageOpen, setMobileMypageOpen, selectedCustomerItem, setSelectedCustomerItem, currentPage, setCurrentPage, selectedOrder, setSelectedOrder, selectedPhoto, setSelectedPhoto, photoPreview, setPhotoPreview, analysisMessage, setAnalysisMessage, isAnalyzing, setIsAnalyzing, hasAnalyzed, setHasAnalyzed, inquiryType, setInquiryType, inquiryEmail, setInquiryEmail, inquiryContent, setInquiryContent, showInquiryFaq, setShowInquiryFaq, inquiryMessage, setInquiryMessage, accountMessage, setAccountMessage, isChangingPassword, setIsChangingPassword, openFaqIndex, setOpenFaqIndex, cartAgreement, setCartAgreement, cartItems, setCartItems, menuItems, categoryItems, styleItems, customerItems, mypageItems, faqItems, faqDetails, products, closeSubmenus, navigateTo, handleMenuClick, handleMobileMypageClick, handleSubMenuClick, handleMobileCustomerClick, handleCustomerItemClick, handleInquirySubmit, handleLoginClick, handleLogoutClick, handleProfileCardClick, handleAccountMenuClick, openMenu, closeMenu, handlePhotoChange, handleAnalyze, handleRetry, selectedCartItems, cartSubtotal, orderDetail, sampleFaceShape } = props
  return (
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
            <section className="shipping-product-card">
              <h2>상품 정보</h2>
              <div className="shipping-product-row">
                <div className="shipping-product-image"><img src="/new-her-order.jpg" alt="GENTLE MONSTER 뉴 허 01" /></div>
                <div className="shipping-product-info">
                  <span>GENTLE MONSTER</span>
                  <strong>뉴 허 01</strong>
                  <small>블랙/블랙　59-11</small>
                  <small>289,000원　1개</small>
                </div>
              </div>
              <button className="shipping-product-tracking" type="button">CJ 대한통운 배송조회 바로가기</button>
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
  )
}

