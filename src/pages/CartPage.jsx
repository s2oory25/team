import './CartPage.css'
// 기존 App.jsx의 페이지 JSX를 그대로 분리했습니다.
export default function CartPage(props) {
  const { activeMenu, setActiveMenu, menuOpen, setMenuOpen, categoryOpen, setCategoryOpen, styleOpen, setStyleOpen, customerOpen, setCustomerOpen, isLoggedIn, setIsLoggedIn, mobileMypageOpen, setMobileMypageOpen, selectedCustomerItem, setSelectedCustomerItem, currentPage, setCurrentPage, selectedOrder, setSelectedOrder, selectedPhoto, setSelectedPhoto, photoPreview, setPhotoPreview, analysisMessage, setAnalysisMessage, isAnalyzing, setIsAnalyzing, hasAnalyzed, setHasAnalyzed, inquiryType, setInquiryType, inquiryEmail, setInquiryEmail, inquiryContent, setInquiryContent, showInquiryFaq, setShowInquiryFaq, inquiryMessage, setInquiryMessage, accountMessage, setAccountMessage, isChangingPassword, setIsChangingPassword, openFaqIndex, setOpenFaqIndex, cartAgreement, setCartAgreement, cartItems, setCartItems, menuItems, categoryItems, styleItems, customerItems, mypageItems, faqItems, faqDetails, products, closeSubmenus, navigateTo, handleMenuClick, handleMobileMypageClick, handleSubMenuClick, handleMobileCustomerClick, handleCustomerItemClick, handleInquirySubmit, handleLoginClick, handleLogoutClick, handleProfileCardClick, handleAccountMenuClick, openMenu, closeMenu, handlePhotoChange, handleAnalyze, handleRetry, selectedCartItems, cartSubtotal, orderDetail, sampleFaceShape } = props
  return (
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
              <h2>구매 금액</h2>
              <div className="cart-price-box">
                <dl>
                  <dt>상품 금액</dt><dd>{cartSubtotal.toLocaleString('ko-KR')}원</dd>
                  <dt>할인 금액</dt><dd>0원</dd>
                  <dt>배송비</dt><dd>{cartSubtotal > 0 ? '무료배송' : '0원'}</dd>
                </dl>
                <div className="cart-total"><strong>총 금액</strong><strong>{cartSubtotal.toLocaleString('ko-KR')}원</strong></div>
              </div>
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
  )
}
