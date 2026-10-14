// 기존 App.jsx의 페이지 JSX를 그대로 분리했습니다.
export default function AccountPage(props) {
  const { activeMenu, setActiveMenu, menuOpen, setMenuOpen, categoryOpen, setCategoryOpen, styleOpen, setStyleOpen, customerOpen, setCustomerOpen, isLoggedIn, setIsLoggedIn, mobileMypageOpen, setMobileMypageOpen, selectedCustomerItem, setSelectedCustomerItem, currentPage, setCurrentPage, selectedOrder, setSelectedOrder, selectedPhoto, setSelectedPhoto, photoPreview, setPhotoPreview, analysisMessage, setAnalysisMessage, isAnalyzing, setIsAnalyzing, hasAnalyzed, setHasAnalyzed, inquiryType, setInquiryType, inquiryEmail, setInquiryEmail, inquiryContent, setInquiryContent, showInquiryFaq, setShowInquiryFaq, inquiryMessage, setInquiryMessage, accountMessage, setAccountMessage, isChangingPassword, setIsChangingPassword, openFaqIndex, setOpenFaqIndex, cartAgreement, setCartAgreement, cartItems, setCartItems, menuItems, categoryItems, styleItems, customerItems, mypageItems, faqItems, faqDetails, products, closeSubmenus, navigateTo, handleMenuClick, handleMobileMypageClick, handleSubMenuClick, handleMobileCustomerClick, handleCustomerItemClick, handleInquirySubmit, handleLoginClick, handleLogoutClick, handleProfileCardClick, handleAccountMenuClick, openMenu, closeMenu, handlePhotoChange, handleAnalyze, handleRetry, selectedCartItems, cartSubtotal, orderDetail, sampleFaceShape } = props
  return (
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
  )
}
