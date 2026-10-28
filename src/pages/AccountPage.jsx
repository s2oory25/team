// 기존 App.jsx의 페이지 JSX를 그대로 분리했습니다.
import { useEffect, useRef, useState } from "react";
import "./AccountPage.css";

export default function AccountPage(props) {
  const { activeMenu, setActiveMenu, menuOpen, setMenuOpen, categoryOpen, setCategoryOpen, styleOpen, setStyleOpen, customerOpen, setCustomerOpen, isLoggedIn, setIsLoggedIn, mobileMypageOpen, setMobileMypageOpen, selectedCustomerItem, setSelectedCustomerItem, currentPage, setCurrentPage, selectedOrder, setSelectedOrder, selectedPhoto, setSelectedPhoto, photoPreview, setPhotoPreview, analysisMessage, setAnalysisMessage, isAnalyzing, setIsAnalyzing, hasAnalyzed, setHasAnalyzed, inquiryType, setInquiryType, inquiryEmail, setInquiryEmail, inquiryContent, setInquiryContent, showInquiryFaq, setShowInquiryFaq, inquiryMessage, setInquiryMessage, accountMessage, setAccountMessage, profilePhoto, setProfilePhoto, isChangingPassword, setIsChangingPassword, openFaqIndex, setOpenFaqIndex, cartAgreement, setCartAgreement, cartItems, setCartItems, menuItems, categoryItems, styleItems, customerItems, mypageItems, faqItems, faqDetails, products, closeSubmenus, navigateTo, handleMenuClick, handleMobileMypageClick, handleSubMenuClick, handleMobileCustomerClick, handleCustomerItemClick, handleInquirySubmit, handleLoginClick, handleLogoutClick, handleProfileCardClick, handleAccountMenuClick, openMenu, closeMenu, handlePhotoChange, handleAnalyze, handleRetry, selectedCartItems, cartSubtotal, orderDetail, sampleFaceShape } = props
  const profilePhotoInput = useRef(null);
  const formatPhoneNumber = (value) => {
  const numbers = value.replace(/\D/g, "").slice(0, 11);

  if (numbers.length <= 3) {
    return numbers;
  }

  if (numbers.length <= 7) {
    return `${numbers.slice(0, 3)}-${numbers.slice(3)}`;
  }

  return `${numbers.slice(0, 3)}-${numbers.slice(3, 7)}-${numbers.slice(7)}`;
  };
  const [savedAccount] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("chalfitAccountInfo") || "{}");
    } catch {
      return {};
    }
  });

  const [showSaveToast, setShowSaveToast] = useState(false);

  useEffect(() => {
    if (!showSaveToast) return;

    const timer = setTimeout(() => {
      setShowSaveToast(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [showSaveToast]);

  const handleProfilePhotoChange = (event) => {
    const file = event.target.files?.[0]
    if (!file) return
    if (!file.type.startsWith('image/')) {
      setAccountMessage('이미지 파일을 선택해 주세요.')
      event.target.value = ''
      return
    }

    const reader = new FileReader()
    reader.onload = () => {
      setProfilePhoto(typeof reader.result === 'string' ? reader.result : '')
      setAccountMessage('프로필 사진이 변경되었습니다.')
    }
    reader.readAsDataURL(file)
    event.target.value = ''
  }
  return (
        <main className="account-page">
          {showSaveToast && (
            <div className="account-save-toast" role="status">
              <span className="account-save-toast-icon">✓</span>
              <span>회원정보가 저장되었습니다.</span>
            </div>
          )}
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
                  event.preventDefault();

                  const formData = new FormData(event.currentTarget);
                  const accountInfo = Object.fromEntries(formData.entries());

                  try {
                    localStorage.setItem(
                      "chalfitAccountInfo",
                      JSON.stringify({
                        ...accountInfo,
                        profilePhoto: profilePhoto || "",
                      })
                    );

                    setAccountMessage("");
                    setShowSaveToast(true);
                  } catch {
                    setAccountMessage("저장에 실패했습니다. 다시 시도해 주세요.");
                  }
                }}
              >
                <div className="account-user-summary">
                  <span
                    className={`mypage-profile-avatar${profilePhoto ? ' has-photo' : ''}`}
                    role="button"
                    tabIndex={0}
                    aria-label="Change profile photo"
                    onClick={() => profilePhotoInput.current?.click()}
                    onKeyDown={(event) => {
                      if (event.key === 'Enter' || event.key === ' ') {
                        event.preventDefault()
                        profilePhotoInput.current?.click()
                      }
                    }}
                  >
                    {profilePhoto ? <img src={profilePhoto} alt="" /> : <><span /><i /></>}
                  </span>
                  <div>
                    <strong>김찰떡님</strong>
                    <small>test@gmail.com</small>
                  </div>
                  <input ref={profilePhotoInput} className="account-profile-photo-input" type="file" accept="image/*" onChange={handleProfilePhotoChange} />
                  <button className="account-profile-photo-button" type="button" onClick={() => profilePhotoInput.current?.click()}>
                    프로필 사진 변경
                  </button>
                </div>

                <div className="account-fields-grid">
                  <label>
                    <span>이름</span>
                    <input
                      name="name"
                      defaultValue={savedAccount.name ?? "김철"}
                    />
                  </label>
                  <label>
                    <span>아이디</span>
                    <input
                      name="id"
                      defaultValue={savedAccount.id ?? "chalfit123"}
                    />
                  </label>
                  <label>
                    <span>이메일</span>
                    <input
                      name="email"
                      type="email"
                      defaultValue={savedAccount.email ?? "abcd@gmail.com"}
                    />
                  </label>
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
                  <label>
                    <span>생년월일</span>
                    <input
                      name="birth"
                      type="date"
                      defaultValue={savedAccount.birth ?? "2000-01-01"}
                    />
                  </label>
                  <label>
                    <span>성별</span>
                    <select
                      name="gender"
                      defaultValue={savedAccount.gender ?? "선택 안 함"}
                    >
                      <option>선택 안 함</option>
                      <option>여성</option>
                      <option>남성</option>
                    </select>
                  </label>
                  <label>
                    <span>연락처</span>
                    <input
                      name="phone"
                      type="tel"
                      placeholder="010-0000-0000"
                      defaultValue={formatPhoneNumber(savedAccount.phone ?? "")}
                      inputMode="numeric"
                      onChange={(event) => {
                        const input = event.target;
                        const oldValue = input.value;
                        const oldCursor = input.selectionStart ?? oldValue.length;

                        const numbersBeforeCursor = oldValue
                          .slice(0, oldCursor)
                          .replace(/\D/g, "").length;

                        const formatted = formatPhoneNumber(oldValue);
                        input.value = formatted;

                        let cursorPosition = 0;
                        let digitCount = 0;

                        while (
                          cursorPosition < formatted.length &&
                          digitCount < numbersBeforeCursor
                        ) {
                          if (/\d/.test(formatted[cursorPosition])) {
                            digitCount++;
                          }
                          cursorPosition++;
                        }

                        input.setSelectionRange(cursorPosition, cursorPosition);
                      }}
                    />
                  </label>
                  <label>
                    <span>우편번호</span>
                    <input
                      name="zipcode"
                      placeholder="우편번호"
                      defaultValue={savedAccount.zipcode ?? ""}
                    />
                  </label>
                  <label className="account-address-field">
                    <span>주소</span>
                    <input
                      name="address"
                      placeholder="주소를 입력해주세요."
                      defaultValue={savedAccount.address ?? ""}
                    />
                  </label>
                  <label className="account-address-field">
                    <span>상세 주소</span>
                    <input
                      name="detailAddress"
                      placeholder="상세 주소를 입력해주세요."
                      defaultValue={savedAccount.detailAddress ?? ""}
                    />
                  </label>
                </div>

                <div className="account-form-actions">
                  <button type="button" onClick={() => navigateTo('mypage')}>취소</button>
                  <button type="submit">변경 내용 저장</button>
                </div>
                {accountMessage && <p className="account-message" role="status">{accountMessage}</p>}
              </form>
            </section>
          </div>
        </main>
  )
}