import React from 'react';
import './CelebPick.css';

// 셀럽 착용 사진 (assets 폴더 내 실제 파일명)
import jennieImg from '../assets/jennie.jpg';
import wonbinImg from '../assets/wonbin.png';
import karinaImg from '../assets/karina.jpg';

// 안경 썸네일 사진
import devon01Img from '../assets/glasses_devon.png';
import jadeImg from '../assets/glasses_jade.png';
import couscousImg from '../assets/glasses_couscous.png';

// 푸터 사진 (PC용, 태블릿용, 모바일용)
import footerPc from '../assets/footer.png';
import footerTablet from '../assets/footer-tablet.png';
import footerMobile from '../assets/footer-mobile.png';

export default function CelebPick({ onSelectWonbin }) {
  const celebList = [
    {
      id: 1,
      celebImg: jennieImg,
      celebAlt: '제니',
      tag: '* 제니 착용 *',
      itemTitle: '데본01',
      price: '330,000',
      glassThumb: devon01Img,
    },
    {
      id: 2, // 라이즈 원빈 (클릭 시 화면 이동)
      celebImg: wonbinImg,
      celebAlt: '라이즈 원빈',
      tag: '* 라이즈 원빈 착용 *',
      itemTitle: '제이드',
      price: '299,000',
      glassThumb: jadeImg,
    },
    {
      id: 3,
      celebImg: karinaImg,
      celebAlt: '에스파 카리나',
      tag: '* 에스파 카리나 착용 *',
      itemTitle: '쿠스쿠스',
      price: '320,000',
      glassThumb: couscousImg,
    },
    {
      id: 4, // 태블릿 2x2 배치를 위한 4번째 카드
      celebImg: karinaImg,
      celebAlt: '에스파 카리나',
      tag: '* 에스파 카리나 착용 *',
      itemTitle: '쿠스쿠스',
      price: '320,000',
      glassThumb: couscousImg,
    },
  ];

  // 카드 클릭 시 실행되는 함수
  const handleCardClick = (id) => {
    if (id === 2 && onSelectWonbin) {
      onSelectWonbin(); // 원빈일 때만 상세 페이지 열기
    }
  };

  return (
    <div className="celeb-page-wrapper">
      {/* 1. 상단 헤더 */}
      <header className="chalfit-header">
        <div className="chalfit-header-inner">
          <div className="header-left">
            <button className="menu-btn" type="button">
              <svg width="20" height="14" viewBox="0 0 20 14" fill="none">
                <path d="M1 1H19M1 7H19M1 13H19" stroke="#111111" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
              <span>메뉴</span>
            </button>
          </div>

          <div className="header-center">
            <span className="chalfit-logo-text">ChalFit</span>
          </div>

          <div className="header-right">
            <button className="header-link-btn" type="button">좋아요</button>
            <button className="header-link-btn" type="button">장바구니</button>
            <button className="profile-icon-btn" type="button">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#111111" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* 2. 메인 컨텐츠 */}
      <main className="celeb-page-container">
        <div className="celeb-header-wrap">
          <h1 className="celeb-main-title">CELEB PICK!</h1>
        </div>

        <div className="celeb-card-grid">
          {celebList.map((item) => (
            <div 
              key={item.id} 
              className="celeb-card-item"
              onClick={() => handleCardClick(item.id)}
            >
              <div className="celeb-img-box">
                <img src={item.celebImg} alt={item.celebAlt} />
              </div>
              <div className="card-glass-badge">
                <div className="glass-icon-wrapper">
                  <img src={item.glassThumb} alt={item.itemTitle} className="glasses-thumb-img" />
                </div>
                <div className="glass-text-info">
                  <span className="celeb-tag">{item.tag}</span>
                  <span className="celeb-item-title">{item.itemTitle}</span>
                  <span className="celeb-item-price">{item.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* 3. 푸터 */}
      <footer className="chalfit-footer-img-wrap">
        <img src={footerPc} alt="Chalfit PC Footer" className="footer-image footer-pc" />
        <img src={footerTablet} alt="Chalfit Tablet Footer" className="footer-image footer-tablet" />
        <img src={footerMobile} alt="Chalfit Mobile Footer" className="footer-image footer-mobile" />
      </footer>
    </div>
  );
}