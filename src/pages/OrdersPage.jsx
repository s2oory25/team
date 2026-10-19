// 기존 App.jsx의 페이지 JSX를 그대로 분리했습니다.
export default function OrdersPage(props) {
  const { activeMenu, setActiveMenu, menuOpen, setMenuOpen, categoryOpen, setCategoryOpen, styleOpen, setStyleOpen, customerOpen, setCustomerOpen, isLoggedIn, setIsLoggedIn, mobileMypageOpen, setMobileMypageOpen, selectedCustomerItem, setSelectedCustomerItem, currentPage, setCurrentPage, selectedOrder, setSelectedOrder, selectedPhoto, setSelectedPhoto, photoPreview, setPhotoPreview, analysisMessage, setAnalysisMessage, isAnalyzing, setIsAnalyzing, hasAnalyzed, setHasAnalyzed, inquiryType, setInquiryType, inquiryEmail, setInquiryEmail, inquiryContent, setInquiryContent, showInquiryFaq, setShowInquiryFaq, inquiryMessage, setInquiryMessage, accountMessage, setAccountMessage, isChangingPassword, setIsChangingPassword, openFaqIndex, setOpenFaqIndex, cartAgreement, setCartAgreement, cartItems, setCartItems, menuItems, categoryItems, styleItems, customerItems, mypageItems, faqItems, faqDetails, products, closeSubmenus, navigateTo, handleMenuClick, handleMobileMypageClick, handleSubMenuClick, handleMobileCustomerClick, handleCustomerItemClick, handleInquirySubmit, handleLoginClick, handleLogoutClick, handleProfileCardClick, handleAccountMenuClick, openMenu, closeMenu, handlePhotoChange, handleAnalyze, handleRetry, selectedCartItems, cartSubtotal, orderDetail, sampleFaceShape } = props
  return (
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
                  <button type="button" onClick={() => { setSelectedOrder({ number: 'CF20260907-1234', date: '2026.09.07 10:23', brand: 'GENTLE MONSTER', name: '뉴 허 01', option: '블랙/블랙', quantity: 1, price: 289000, image: '/cocoa-01.jpg', status: '배송중' }); navigateTo('order-detail') }}>주문 상세보기 ›</button>
                </header>
                <div className="order-card-body">
                  <div className="order-product">
                    <div className="order-product-image"><img src="/cocoa-01.jpg" alt="코코아 선글라스" /></div>
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
                  <button type="button" onClick={() => { setSelectedOrder({ number: 'CF20260812-5678', date: '2026.08.12 11:25', brand: 'RIETI', name: 'MANO C2', option: '블랙/블랙', quantity: 1, price: 49000, image: '/july-01.png', status: '배송완료' }); navigateTo('order-detail') }}>주문 상세보기 ›</button>
                </header>
                <div className="order-card-body">
                  <div className="order-product">
                    <div className="order-product-image"><img src="/july-01.png" alt="MANO C2 선글라스" /></div>
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
  )
}
