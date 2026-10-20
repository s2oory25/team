import React from 'react';
import './Celeb.css'; 

// 선글라스 누끼 컷 이미지 (assets)
// import Devon from 
// import Jade from 
// import Couscous from 

export default function CelebPick({ onSelectWonbin }) {
  return (
    <div className="celeb-page-root">
      {/* 중앙 메인 컨텐츠 영역 */}
      <main className="celeb-main-content">
        <h1 className="celeb-title">CELEB PICK!</h1>

        <div className="celeb-cards-grid">
          {/* 카드 1: 제니 */}
          <div className="celeb-card">
            <img src="/team/celeb/jennie.png" alt="제니 착용컷" className="celeb-card-img" />
            <div className="celeb-card-overlay">
              <div className="overlay-thumb-box">
                <img src="/team/celeb/devon.png" alt="데본01" className="glasses-product-photo" />
              </div>
              <div className="overlay-text-box">
                <span className="overlay-tag">제니 착용 *</span>
                <span className="overlay-name">데본01</span>
                <span className="overlay-price">330,000</span>
              </div>
            </div>
          </div>

          {/* 카드 2: 원빈 (상세페이지 연동) */}
          <div 
            className="celeb-card" 
            onClick={onSelectWonbin}
            style={{ cursor: onSelectWonbin ? 'pointer' : 'default' }}
          >
            <img src="/team/celeb/wonbin.png" alt="라이즈 원빈 착용컷" className="celeb-card-img" />
            <div className="celeb-card-overlay">
              <div className="overlay-thumb-box">
                <img src="/team/celeb/jade.png" alt="제이드" className="glasses-product-photo" />
              </div>
              <div className="overlay-text-box">
                <span className="overlay-tag">라이즈 원빈 착용 *</span>
                <span className="overlay-name">제이드</span>
                <span className="overlay-price">299,000</span>
              </div>
            </div>
          </div>

          {/* 카드 3: 카리나 1 */}
          <div className="celeb-card">
            <img src="/team/celeb/karina.png" alt="에스파 카리나 착용컷" className="celeb-card-img" />
            <div className="celeb-card-overlay">
              <div className="overlay-thumb-box">
                <img src="/team/celeb/couscous.png" alt="쿠스쿠스" className="glasses-product-photo" />
              </div>
              <div className="overlay-text-box">
                <span className="overlay-tag">에스파 카리나 착용 *</span>
                <span className="overlay-name">쿠스쿠스</span>
                <span className="overlay-price">320,000</span>
              </div>
            </div>
          </div>

          {/* 카드 4: 카리나 2 (태블릿 전용) */}
          <div className="celeb-card card-tablet-only">
            <img src="/celeb/karina.jpg" alt="에스파 카리나 착용컷 2" className="celeb-card-img" />
            <div className="celeb-card-overlay">
              <div className="overlay-thumb-box">
                <img src="/team/celeb/jade.png" alt="제이드" className="glasses-product-photo" />
              </div>
              <div className="overlay-text-box">
                <span className="overlay-tag">에스파 카리나 픽 *</span>
                <span className="overlay-name">제이드</span>
                <span className="overlay-price">299,000</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}