import React from 'react';
import './Celeb.css'; 
import { useNavigate } from "react-router-dom";

export default function CelebPick() {
  const navigate = useNavigate();

  return (
    <div className="celeb-page-root">
      {/* 중앙 메인 컨텐츠 영역 */}
      <main className="celeb-main-content">
        <h1 className="celeb-title">CELEB PICK!</h1>

        <div className="celeb-cards-grid">
          {/* 카드 1: 뷔 */}
          <div
            className="celeb-card"
            onClick={() => navigate("/product/celeb-speed")}
            style={{ cursor: "pointer" }}
          >
            <img src="/team/celeb/bts-v.png" alt="뷔 착용컷" className="celeb-card-img" />
            <div className="celeb-card-overlay">
              <div className="overlay-thumb-box">
                <img src="/team/celeb/carven.png" alt="스피드" className="glasses-product-photo" />
              </div>
              <div className="overlay-text-box">
                <span className="overlay-tag">뷔 착용 *</span>
                <span className="overlay-name">스피드</span>
                <span className="overlay-price">210,000</span>
              </div>
            </div>
          </div>

          {/* 카드 2: 정해인 (상세페이지 연동) */}
          <div
            className="celeb-card"
            onClick={() => navigate("/product/celeb-cyber-dino")}
            style={{ cursor: "pointer" }}
          >
            <img src="/team/celeb/haein.png" alt="정해인 착용컷" className="celeb-card-img" />
            <div className="celeb-card-overlay">
              <div className="overlay-thumb-box">
                <img src="/team/celeb/syber.png" alt="사이버 다이노" className="glasses-product-photo" />
              </div>
              <div className="overlay-text-box">
                <span className="overlay-tag">정해인 착용 *</span>
                <span className="overlay-name">사이버 다이노</span>
                <span className="overlay-price">328,800</span>
              </div>
            </div>
          </div>

          {/* 카드 3: 카리나 1 */}
          <div
            className="celeb-card"
            onClick={() => navigate("/product/celeb-couscous")}
            style={{ cursor: "pointer" }}
          >
            <img src="/team/celeb/karina.png" alt="에스파 카리나 착용컷" className="celeb-card-img" />
            <div className="celeb-card-overlay">
              <div className="overlay-thumb-box">
                <img src="/team/celeb/cuscus.png" alt="쿠스쿠스" className="glasses-product-photo" />
              </div>
              <div className="overlay-text-box">
                <span className="overlay-tag">에스파 카리나 착용 *</span>
                <span className="overlay-name">쿠스쿠스</span>
                <span className="overlay-price">290,000</span>
              </div>
            </div>
          </div>

          {/* 카드 4: 카리나 2 (태블릿 전용)
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
          </div> */}
        </div>
      </main>
    </div>
  );
}