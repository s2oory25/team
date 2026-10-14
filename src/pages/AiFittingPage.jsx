// 기존 App.jsx의 AI 맞춤 서비스 JSX를 그대로 분리했습니다.
export default function AiFittingPage(props) {
  const {
    activeMenu,
    setActiveMenu,
    menuOpen,
    setMenuOpen,
    categoryOpen,
    setCategoryOpen,
    styleOpen,
    setStyleOpen,
    customerOpen,
    setCustomerOpen,
    isLoggedIn,
    setIsLoggedIn,
    mobileMypageOpen,
    setMobileMypageOpen,
    selectedCustomerItem,
    setSelectedCustomerItem,
    currentPage,
    setCurrentPage,
    selectedOrder,
    setSelectedOrder,
    selectedPhoto,
    setSelectedPhoto,
    photoPreview,
    setPhotoPreview,
    analysisMessage,
    setAnalysisMessage,
    isAnalyzing,
    setIsAnalyzing,
    hasAnalyzed,
    setHasAnalyzed,
    inquiryType,
    setInquiryType,
    inquiryEmail,
    setInquiryEmail,
    inquiryContent,
    setInquiryContent,
    showInquiryFaq,
    setShowInquiryFaq,
    inquiryMessage,
    setInquiryMessage,
    accountMessage,
    setAccountMessage,
    isChangingPassword,
    setIsChangingPassword,
    openFaqIndex,
    setOpenFaqIndex,
    cartAgreement,
    setCartAgreement,
    cartItems,
    setCartItems,
    menuItems,
    categoryItems,
    styleItems,
    customerItems,
    mypageItems,
    faqItems,
    faqDetails,
    products,
    closeSubmenus,
    navigateTo,
    handleMenuClick,
    handleMobileMypageClick,
    handleSubMenuClick,
    handleMobileCustomerClick,
    handleCustomerItemClick,
    handleInquirySubmit,
    handleLoginClick,
    handleLogoutClick,
    handleProfileCardClick,
    handleAccountMenuClick,
    openMenu,
    closeMenu,
    handlePhotoChange,
    handleAnalyze,
    handleRetry,
    selectedCartItems,
    cartSubtotal,
    orderDetail,
    sampleFaceShape,
  } = props;

  return (
    <>
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
            hasAnalyzed ? "results-active" : ""
          }`}
        >
          <div className="photo-column">
            <label className="photo-upload-box" htmlFor="ai-photo-upload">
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
                    이마가 넓고 턱이 좁은 형태로 부드러운 인상을 주는
                    얼굴형입니다.
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
                    onClick={() => console.log("추천 상품 더보기")}
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
                          onClick={() =>
                            console.log(`${product.name} 찜하기`)
                          }
                        >
                          ♡
                        </button>
                      </div>

                      <p className="product-name">{product.name}</p>

                      <div className="product-purchase-row">
                        <button
                          type="button"
                          className="ai-fitting-button"
                          onClick={() =>
                            console.log(`${product.name} AI 피팅`)
                          }
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



</>
  );
}