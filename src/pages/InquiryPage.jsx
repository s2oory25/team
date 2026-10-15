// 기존 App.jsx의 페이지 JSX를 그대로 분리했습니다.
export default function InquiryPage(props) {
  const { activeMenu, setActiveMenu, menuOpen, setMenuOpen, categoryOpen, setCategoryOpen, styleOpen, setStyleOpen, customerOpen, setCustomerOpen, isLoggedIn, setIsLoggedIn, mobileMypageOpen, setMobileMypageOpen, selectedCustomerItem, setSelectedCustomerItem, currentPage, setCurrentPage, selectedOrder, setSelectedOrder, selectedPhoto, setSelectedPhoto, photoPreview, setPhotoPreview, analysisMessage, setAnalysisMessage, isAnalyzing, setIsAnalyzing, hasAnalyzed, setHasAnalyzed, inquiryType, setInquiryType, inquiryEmail, setInquiryEmail, inquiryContent, setInquiryContent, showInquiryFaq, setShowInquiryFaq, inquiryMessage, setInquiryMessage, accountMessage, setAccountMessage, isChangingPassword, setIsChangingPassword, openFaqIndex, setOpenFaqIndex, cartAgreement, setCartAgreement, cartItems, setCartItems, menuItems, categoryItems, styleItems, customerItems, mypageItems, faqItems, faqDetails, products, closeSubmenus, navigateTo, handleMenuClick, handleMobileMypageClick, handleSubMenuClick, handleMobileCustomerClick, handleCustomerItemClick, handleInquirySubmit, handleLoginClick, handleLogoutClick, handleProfileCardClick, handleAccountMenuClick, openMenu, closeMenu, handlePhotoChange, handleAnalyze, handleRetry, selectedCartItems, cartSubtotal, orderDetail, sampleFaceShape } = props
  return (
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
  )
}
