import React from 'react';
import './CelebPick.css';

import jennieImg from '../assets/jennie.jpg';
import wonbinImg from '../assets/wonbin.png';
import karinaImg from '../assets/karina.jpg';

export default function CelebPick() {
  const celebData = [
    {
      id: 1,
      celebName: '제니 착용',
      itemName: '데본01',
      price: '330,000',
      celebImg: jennieImg,
      glassesType: 'cat-eye'
    },
    {
      id: 2,
      celebName: '라이즈 원빈 착용',
      itemName: '제이드',
      price: '299,000',
      celebImg: wonbinImg,
      glassesType: 'square'
    },
    {
      id: 3,
      celebName: '에스파 카리나 착용',
      itemName: '쿠스쿠스',
      price: '320,000',
      celebImg: karinaImg,
      glassesType: 'oval'
    }
  ];

  // 캡처와 동일한 안경 실루엣 SVG
  const renderGlassesIcon = (type) => {
    if (type === 'cat-eye') {
      return (
        <svg width="48" height="22" viewBox="0 0 60 24" fill="#111111">
          <path d="M4 8 C10 4 22 5 25 11 C26 16 20 20 12 19 C5 18 2 13 4 8 Z" />
          <path d="M56 8 C50 4 38 5 35 11 C34 16 40 20 48 19 C55 18 58 13 56 8 Z" />
          <rect x="24" y="9.5" width="12" height="2.5" rx="1" />
        </svg>
      );
    }
    if (type === 'square') {
      return (
        <svg width="46" height="24" viewBox="0 0 56 26" fill="#111111">
          <path d="M4 4 H24 C25.5 14 24 22 14 22 C6 22 3 15 4 4 Z" />
          <path d="M52 4 H32 C30.5 14 32 22 42 22 C50 22 53 15 52 4 Z" />
          <rect x="23" y="6" width="10" height="3" rx="1" />
        </svg>
      );
    }
    // oval
    return (
      <svg width="48" height="20" viewBox="0 0 60 24" fill="#111111">
        <ellipse cx="16" cy="12" rx="12" ry="8" />
        <ellipse cx="44" cy="12" rx="12" ry="8" />
        <rect x="26" y="10.5" width="8" height="2.5" rx="1" />
      </svg>
    );
  };

  return (
    <div className="celeb-page-wrapper">
      {/* 1. 상단 Chalfit 헤더 */}
      <header className="chalfit-header">
        <div className="chalfit-header-inner">
          <div className="header-left">
            <button className="menu-btn" type="button">
              <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
                <line y1="1" x2="18" y2="1" stroke="#111111" strokeWidth="1.8" />
                <line y1="7" x2="18" y2="7" stroke="#111111" strokeWidth="1.8" />
                <line y1="13" x2="18" y2="13" stroke="#111111" strokeWidth="1.8" />
              </svg>
              <span>메뉴</span>
            </button>
          </div>

          <div className="header-center">
            <span className="chalfit-logo-text notranslate" translate="no">Chalfit</span>
          </div>

          <div className="header-right">
            <button className="header-link-btn" type="button">좋아요</button>
            <button className="header-link-btn" type="button">장바구니</button>
            <button className="profile-icon-btn" type="button" aria-label="마이페이지">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="#111111">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* 2. 본문 컨텐츠 */}
      <main className="celeb-page-container">
        <div className="celeb-header-wrap">
          <h1 className="celeb-main-title notranslate" translate="no">CELEB PICK!</h1>
        </div>

        {/* 3열 카드 그리드 */}
        <div className="celeb-card-grid">
          {celebData.map((item) => (
            <div key={item.id} className="celeb-card-item">
              <div className="celeb-img-box">
                <img src={item.celebImg} alt={item.celebName} />
                
                {/* 하단 캡처 스타일 오버레이 바 */}
                <div className="card-glass-bottom-bar">
                  <div className="glass-icon-wrapper">
                    {renderGlassesIcon(item.glassesType)}
                  </div>
                  <div className="glass-text-info">
                    <span className="celeb-tag">*{item.celebName}*</span>
                    <span className="celeb-item-title">{item.itemName}</span>
                    <span className="celeb-item-price">{item.price}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}