import React, { useState } from 'react';
import './ProductDetail.css';

// 1. 이미지 import
import sunglassImg from '../assets/product_her01.jpg';
import hyoseopImg from '../assets/celeb_hyoseop.jpg';
import jennieImg from '../assets/celeb_jennie2.jpg';

export default function ProductDetail({ onBack }) {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="product-page-wrapper">
      {/* 상단 Chalfit 헤더 */}
      <header className="chalfit-header">
        <div className="chalfit-header-inner">
          <div className="header-left">
            <button className="menu-btn" type="button" onClick={onBack}>
              <svg width="20" height="14" viewBox="0 0 20 14" fill="none">
                <path d="M1 1H19M1 7H19M1 13H19" stroke="#111111" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
              <span>목록으로</span>
            </button>
          </div>

          <div className="header-center">
            <span className="chalfit-logo-text" onClick={onBack} style={{ cursor: 'pointer' }}>
              ChalFit
            </span>
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

      {/* 메인 상세 컨텐츠 */}
      <main className="product-main-container">
        <h1 className="product-page-title">CELEB PICK!</h1>

        {/* 상단: 제품 메인 정보 */}
        <section className="product-hero-section">
          <div className="product-hero-img-box">
            <img src={sunglassImg} alt="뉴 허 01" />
          </div>

          <div className="product-info-box">
            <div className="info-top-row">
              <span className="brand-name">GENTLE MONSTER</span>
              <button 
                className="heart-btn" 
                type="button" 
                onClick={() => setIsLiked(!isLiked)}
                aria-label="찜하기"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill={isLiked ? "#111111" : "none"} stroke="#111111" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </button>
            </div>

            <h2 className="product-model-name">뉴 허 01</h2>
            <span className="product-color-name">블랙/블랙</span>

            <div className="price-row">
              <span className="product-price">289,000원</span>
            </div>

            <div className="action-buttons-wrap">
              <button className="btn-ai-fit" type="button">
                AI 피팅 &gt;
              </button>
              <div className="cart-buy-group">
                <button className="btn-cart" type="button">장바구니 담기</button>
                <button className="btn-buy" type="button">구매하기</button>
              </div>
            </div>
          </div>
        </section>

        {/* 구분선 */}
        <hr className="product-divider" />

        {/* 하단: 셀럽 착용샷 섹션 */}
        <section className="celeb-shots-section">
          <h3 className="celeb-shots-title">셀럽 착용샷</h3>
          <div className="celeb-shots-grid">
            <div className="shot-img-box">
              <img src={hyoseopImg} alt="안효섭 착용샷" />
            </div>
            <div className="shot-img-box">
              <img src={jennieImg} alt="제니 착용샷" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}