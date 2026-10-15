import React, { useState } from 'react';
import './ProductDetail.css';

// 1. 제품 메인 누끼 컷
import sunglassImg from '../assets/product_her01.jpg';

// 2. 셀럽 착용샷 이미지 2장 (안효섭 & 제니 다른 사진)
import celebHyoseop from '../assets/celeb_hyoseop.jpg';
import celebJennie2 from '../assets/celeb_jennie2.jpg';

// 3. 디테일 컷 이미지 3장
import detail01 from '../assets/detail_01.png';
import detail02 from '../assets/detail_02.png';
import detail03 from '../assets/detail_03.png';

// 4. Fit for you 추천 선글라스 이미지 3개
import fit01 from '../assets/glasses_devon.png';
import fit02 from '../assets/glasses_jade.png';
import fit03 from '../assets/glasses_couscous.png';

export default function ProductDetail({ onBack }) {
  const [isLiked, setIsLiked] = useState(false);
  const [recLikes, setRecLikes] = useState({ 0: false, 1: false, 2: false });

  const toggleRecLike = (index) => {
    setRecLikes((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const recommendItems = [
    { img: fit01, brand: 'GENTLE MONSTER', name: '코코아', price: '333,000원' },
    { img: fit02, brand: 'GENTLE MONSTER', name: '줄라이', price: '333,000원' },
    { img: fit03, brand: 'GENTLE MONSTER', name: '르', price: '333,000원' }
  ];

  return (
    <div className="product-page-wrapper">
      {/* 셀럽 착용샷 2장 전용 2열 배치 스타일 */}
      <style>{`
        .celeb-shots-grid-2 {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          width: 100%;
        }
        .celeb-shots-grid-2 .shot-img-box {
          width: 100%;
          aspect-ratio: 1 / 1.25;
          border-radius: 12px;
          overflow: hidden;
          background-color: #f7f7f7;
        }
        .celeb-shots-grid-2 .shot-img-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        @media (max-width: 600px) {
          .celeb-shots-grid-2 {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      {/* 1. 상단 Sticky Header */}
      <header className="chalfit-header">
        <div className="chalfit-header-inner">
          <div className="header-left">
            <button className="menu-btn" type="button" onClick={onBack}>
              <svg width="18" height="12" viewBox="0 0 18 12" fill="none">
                <path d="M1 1H17M1 6H17M1 11H17" stroke="#111111" strokeWidth="1.6" strokeLinecap="round" />
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
            <button className="profile-icon-btn" type="button" aria-label="프로필">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#111111" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* 2. 상세 메인 컨테이너 */}
      <main className="product-main-container">
        <h1 className="product-page-title">CELEB PICK!</h1>

        {/* 상단 제품 정보 섹션 */}
        <section className="product-hero-section">
          <div className="product-hero-img-box">
            <img src={sunglassImg} alt="뉴 허 01" />
          </div>

          <div className="product-info-box">
            <div className="info-top-row">
              <div className="model-text-wrap">
                <span className="brand-name">GENTLE MONSTER</span>
                <h2 className="product-model-name">제이드</h2>
                <span className="product-color-name">블랙/블랙</span>
              </div>

              <button 
                className="heart-btn" 
                type="button" 
                onClick={() => setIsLiked(!isLiked)}
                aria-label="찜하기"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill={isLiked ? "#111111" : "none"} stroke="#111111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </button>
            </div>

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

        {/* 셀럽 착용샷 섹션: 안효섭 & 제니 다른 사진 (총 2장 2열 구성) */}
        <section className="celeb-shots-section">
          <h3 className="celeb-shots-title">셀럽 착용샷</h3>
          <div className="celeb-shots-grid-2">
            <div className="shot-img-box">
              <img src={celebHyoseop} alt="안효섭 착용샷" />
            </div>
            <div className="shot-img-box">
              <img src={celebJennie2} alt="제니 다른 착용샷" />
            </div>
          </div>
        </section>

        {/* 하단 디테일 컷 갤러리 */}
        <section className="product-detail-gallery">
          <div className="detail-gallery-card">
            <img src={detail01} alt="선글라스 디테일 컷 1" />
          </div>
          <div className="detail-gallery-card">
            <img src={detail02} alt="선글라스 디테일 컷 2" />
          </div>
          <div className="detail-gallery-card">
            <img src={detail03} alt="선글라스 디테일 정면 컷" />
          </div>
        </section>

        {/* 3. Info & Spec 섹션 */}
        <section className="product-spec-section">
          <h2 className="spec-main-title">Info</h2>
          <p className="spec-sub-desc">클래식한 블랙 색상 아세테이트 소재의 스퀘어 선글라스</p>
          <hr className="spec-inner-divider" />

          <div className="spec-details-row">
            {/* 좌측: Size 영역 */}
            <div className="spec-col size-col">
              <div className="spec-header-row">
                <h3 className="spec-title-text">Size</h3>
                <span className="size-guide-text">Size Guide &gt;</span>
              </div>
              <ul className="spec-item-list">
                <li>전체 너비 : 148.9mm</li>
                <li>렌즈 너비 : 63.9mm</li>
                <li>렌즈 높이 : 53.7mm</li>
                <li>브릿지 : 15mm</li>
                <li>템플 길이 : 147mm</li>
              </ul>
            </div>

            {/* 우측: Features 영역 */}
            <div className="spec-col features-col">
              <div className="spec-header-row">
                <h3 className="spec-title-text">Features</h3>
              </div>
              <ul className="spec-item-list">
                <li>블랙 아세테이트 프레임</li>
                <li>블랙 렌즈</li>
                <li>스퀘어 쉐입</li>
                <li>UV 99.9% 차단 렌즈</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 4. Fit 섹션 */}
        <section className="product-fit-section">
          <h2 className="spec-main-title">Fit</h2>
          <div className="fit-bar-container">
            <div className="fit-labels">
              <span>Small</span>
              <span>Regular</span>
              <span>Over</span>
            </div>
            <div className="fit-line-wrap">
              <div className="fit-line"></div>
              <span className="fit-dot dot-small"></span>
              <span className="fit-dot dot-regular"></span>
              <span className="fit-dot dot-over active"></span>
            </div>
          </div>
        </section>

        {/* 5. Fit for you 섹션 */}
        <section className="product-fit-for-you">
          <h2 className="spec-main-title">Fit for you</h2>
          <div className="fit-recommend-grid">
            {recommendItems.map((item, index) => (
              <div key={index} className="fit-item-card">
                <div className="fit-img-wrap">
                  <img src={item.img} alt={item.name} />
                </div>
                <div className="fit-info-wrap">
                  <div className="fit-brand-row">
                    <span className="fit-brand-name">{item.brand}</span>
                    <button 
                      className="fit-heart-btn" 
                      type="button" 
                      onClick={() => toggleRecLike(index)}
                      aria-label="추천 상품 찜하기"
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill={recLikes[index] ? "#111111" : "none"} stroke="#111111" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                      </svg>
                    </button>
                  </div>
                  <span className="fit-product-name">{item.name}</span>
                  <div className="fit-price-row">
                    <span className="fit-product-price">{item.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}