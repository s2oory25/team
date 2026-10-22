// 기존 App.jsx의 페이지 JSX를 그대로 분리했습니다.
import './OrderDetailPage.css'
export default function OrderDetailPage(props) {
  const { activeMenu, setActiveMenu, menuOpen, setMenuOpen, categoryOpen, setCategoryOpen, styleOpen, setStyleOpen, customerOpen, setCustomerOpen, isLoggedIn, setIsLoggedIn, mobileMypageOpen, setMobileMypageOpen, selectedCustomerItem, setSelectedCustomerItem, currentPage, setCurrentPage, selectedOrder, setSelectedOrder, selectedPhoto, setSelectedPhoto, photoPreview, setPhotoPreview, analysisMessage, setAnalysisMessage, isAnalyzing, setIsAnalyzing, hasAnalyzed, setHasAnalyzed, inquiryType, setInquiryType, inquiryEmail, setInquiryEmail, inquiryContent, setInquiryContent, showInquiryFaq, setShowInquiryFaq, inquiryMessage, setInquiryMessage, accountMessage, setAccountMessage, isChangingPassword, setIsChangingPassword, openFaqIndex, setOpenFaqIndex, cartAgreement, setCartAgreement, cartItems, setCartItems, menuItems, categoryItems, styleItems, customerItems, mypageItems, faqItems, faqDetails, products, closeSubmenus, navigateTo, handleMenuClick, handleMobileMypageClick, handleSubMenuClick, handleMobileCustomerClick, handleCustomerItemClick, handleInquirySubmit, handleLoginClick, handleLogoutClick, handleProfileCardClick, handleAccountMenuClick, openMenu, closeMenu, handlePhotoChange, handleAnalyze, handleRetry, selectedCartItems, cartSubtotal, orderDetail, sampleFaceShape } = props
  return (
        <main className="order-detail-page">
          <section className="order-detail-title-bar"><h1>주문상세</h1></section>
          <p className="order-detail-number">주문번호 : {orderDetail.number}</p>
          <div className="order-detail-content">
            <section className="order-detail-section">
              <h2>주문 정보</h2>
              <div className="order-detail-product">
                <div className="order-detail-image"><img src={orderDetail.image} alt={`${orderDetail.brand} ${orderDetail.name}`} /></div>
                <div className="order-detail-product-info">
                  <span>{orderDetail.brand}</span>
                  <strong>{orderDetail.name}</strong>
                  <small>{orderDetail.quantity}개　{orderDetail.option}</small>
                </div>
                <button className="order-detail-shipping-link" type="button" onClick={() => navigateTo('shipping')}>배송 조회 ›</button>
              </div>
            </section>
            <section className="order-detail-section">
              <h2>배송지 정보</h2>
              <dl className="order-detail-info-box">
                <dt>받는 사람</dt><dd>김찰떡</dd>
                <dt>연락처</dt><dd>010-1234-5678</dd>
                <dt>배송지</dt><dd>(12345) 서울특별시 찰떡구 찰떡동 12-345 607호</dd>
              </dl>
            </section>
            <section className="order-detail-section">
              <h2>결제 정보</h2>
              <dl className="order-detail-info-box payment">
                <dt>상품 금액</dt><dd>{orderDetail.price.toLocaleString('ko-KR')}원</dd>
                <dt>배송비</dt><dd>무료</dd>
                <dt>주문 금액</dt><dd>{orderDetail.price.toLocaleString('ko-KR')}원</dd>
                <dt>카드</dt><dd>{orderDetail.price.toLocaleString('ko-KR')}원</dd>
              </dl>
            </section>
            <section className="order-detail-section">
              <h2>주문자 정보</h2>
              <dl className="order-detail-info-box">
                <dt>받는 사람</dt><dd>김찰떡</dd>
                <dt>연락처</dt><dd>010-1234-5678</dd>
                <dt>이메일</dt><dd>chalfit@naver.com</dd>
              </dl>
            </section>
            <button className="order-detail-back" type="button" onClick={() => navigateTo('orders')}>주문내역으로 돌아가기</button>
          </div>
          <footer className="site-footer">
            <div className="footer-brand">Chalfit</div>
            <div className="footer-links"><div className="footer-link-row"><span>문의하기</span><span>고객센터</span><span>배송안내</span><span>이용약관</span><span>FAQ</span></div><p>ChalFit 대표자 홍길동 사업자등록번호 123-45-67890</p><p>주소 : 서울특별시 강남구 선릉로 340 이메일 : support@chalfit.com</p></div>
            <div className="footer-copyright"><span>© 2026 ChalFit. All rights reserved.</span><small>STYLE FITS YOU</small></div>
          </footer>
        </main>
  )
}

