// 기존 App.jsx의 페이지 JSX를 그대로 분리했습니다.
import { useState } from 'react';
import './InquiryPage.css';
export default function InquiryPage(props) {
  const [showInquiryFaq, setShowInquiryFaq] = useState(false);
  const [openInquiryFaqIndex, setOpenInquiryFaqIndex] = useState(null);
  const { activeMenu, setActiveMenu, menuOpen, setMenuOpen, categoryOpen, setCategoryOpen, styleOpen, setStyleOpen, customerOpen, setCustomerOpen, isLoggedIn, setIsLoggedIn, mobileMypageOpen, setMobileMypageOpen, selectedCustomerItem, setSelectedCustomerItem, currentPage, setCurrentPage, selectedOrder, setSelectedOrder, selectedPhoto, setSelectedPhoto, photoPreview, setPhotoPreview, analysisMessage, setAnalysisMessage, isAnalyzing, setIsAnalyzing, hasAnalyzed, setHasAnalyzed, inquiryType, setInquiryType, inquiryEmail, setInquiryEmail, inquiryContent, setInquiryContent, inquiryMessage, setInquiryMessage, showInquirySuccess, setShowInquirySuccess, accountMessage, setAccountMessage, isChangingPassword, setIsChangingPassword, openFaqIndex, setOpenFaqIndex, cartAgreement, setCartAgreement, cartItems, setCartItems, menuItems, categoryItems, styleItems, customerItems, mypageItems, faqItems, faqDetails, products, closeSubmenus, navigateTo, handleMenuClick, handleMobileMypageClick, handleSubMenuClick, handleMobileCustomerClick, handleCustomerItemClick, handleInquirySubmit, handleLoginClick, handleLogoutClick, handleProfileCardClick, handleAccountMenuClick, openMenu, closeMenu, handlePhotoChange, handleAnalyze, handleRetry, selectedCartItems, cartSubtotal, orderDetail, sampleFaceShape } = props
  return (
        <main className="inquiry-page">
          <section className="inquiry-title-bar">
            <h1>1:1 문의</h1>
          </section>

<p className="inquiry-intro">궁금한 점이 있으신가요?</p>

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
              <div className="inquiry-page-faq">
                {[
                  {
                    question: "AI 얼굴형 분석은 어떻게 이용하나요?",
                    answer: "AI 맞춤 서비스 메뉴에서 얼굴 사진을 업로드하면 AI가 얼굴형을 분석하고, 분석 결과를 바탕으로 어울리는 선글라스를 추천해 드립니다.",
                  },
                  {
                    question: "사진은 저장되나요?",
                    answer: "AI 얼굴형 분석 및 피팅 서비스에 업로드한 사진의 이용 및 보관 방식은 서비스 안내를 확인해 주세요.",
                  },
                  {
                    question: "AI 피팅은 어디서 하나요?",
                    answer: "상단 메뉴 또는 사이드 메뉴에서 AI 맞춤 서비스 → AI 피팅을 선택하면 이용할 수 있습니다.",
                  },
                  {
                    question: "배송은 얼마나 걸리나요?",
                    answer: "배송은 결제 완료 후 영업일 기준 2~5일 정도 소요됩니다. 재고 및 택배사 사정에 따라 달라질 수 있습니다.",
                  },
                  {
                    question: "교환/반품은 가능한가요?",
                    answer: "교환 및 반품이 필요한 경우 고객센터로 문의해 주세요. 상품 특성에 따라 제한될 수 있습니다.",
                  },
                ].map((item, index) => (
                  <div className="inquiry-page-faq-item" key={item.question}>
                    <button
                      type="button"
                      className="inquiry-page-faq-question"
                      onClick={() =>
                        setOpenInquiryFaqIndex(
                          openInquiryFaqIndex === index ? null : index
                        )
                      }
                      aria-expanded={openInquiryFaqIndex === index}
                    >
                      <span>{item.question}</span>
                      <span>
                        {openInquiryFaqIndex === index ? "↓" : "→"}
                      </span>
                    </button>

                    {openInquiryFaqIndex === index && (
                      <p className="inquiry-page-faq-answer">{item.answer}</p>
                    )}
                  </div>
                ))}
              </div>
            )}


            <form className="inquiry-form" onSubmit={handleInquirySubmit}>
              <label className="inquiry-email-field">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="2" y="4" width="20" height="16" rx="1" />
                  <path d="m3 5 9 8 9-8" />
                </svg>

                <label htmlFor="inquiryEmail">
                <span className="required-star">*</span>
                </label>
                <input
                  type="email"
                  value={inquiryEmail}
                  onChange={(event) => setInquiryEmail(event.target.value)}
                  aria-label="답변 받을 이메일"
                  placeholder="답변 받으실 이메일을 입력하세요."
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

          {showInquirySuccess && (
            <div className="inquiry-success-backdrop" role="presentation">
              <section className="inquiry-success-modal" role="dialog" aria-modal="true" aria-labelledby="inquiry-success-title">
                <button className="inquiry-success-close" type="button" aria-label="닫기" onClick={() => setShowInquirySuccess(false)}>×</button>
                <div className="inquiry-success-check" aria-hidden="true">✓</div>
                <h2 id="inquiry-success-title">문의가 접수되었습니다</h2>
                <p>문의 내용을 보내주셔서 감사합니다.<br />확인 후 답변드리겠습니다.</p>
                <button className="inquiry-success-confirm" type="button" onClick={() => setShowInquirySuccess(false)}>확인</button>
              </section>
            </div>
          )}
        </main>
  )
}