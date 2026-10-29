import React, { useRef } from "react";
import "./Celeb.css";
import { useNavigate } from "react-router-dom";

export default function CelebPick() {
  const navigate = useNavigate();
  const cardsRef = useRef(null);

  const slideCards = (direction) => {
    if (!cardsRef.current) return;

    const card = cardsRef.current.querySelector(".celeb-card");
    if (!card) return;

    const styles = window.getComputedStyle(cardsRef.current);
    const gap = parseFloat(styles.columnGap) || 24;

    cardsRef.current.scrollBy({
      left: direction * (card.offsetWidth + gap),
      behavior: "smooth",
    });
  };

  return (
    <div className="celeb-page-root">
      <main className="celeb-main-content">
        <h1 className="celeb-title">CELEB PICK!</h1>

        <div className="celeb-carousel">
          <button
            type="button"
            className="celeb-arrow celeb-arrow-left"
            onClick={() => slideCards(-1)}
            aria-label="이전 셀럽픽 상품"
          >
            <span className="celeb-arrow-icon celeb-arrow-icon-left">‹</span>
          </button>

          <div className="celeb-cards-grid" ref={cardsRef}>
            {/* 카드 1: 뷔 */}
            <div
              className="celeb-card"
              onClick={() => navigate("/product/celeb-speed")}
              style={{ cursor: "pointer" }}
            >
              <img
                src="/team/celeb/bts-v.png"
                alt="뷔 착용컷"
                className="celeb-card-img"
              />

              <div className="celeb-card-overlay">
                <div className="overlay-thumb-box">
                  <img
                    src="/team/celeb/carven.png"
                    alt="스피드"
                    className="glasses-product-photo"
                  />
                </div>

                <div className="overlay-text-box">
                  <span className="overlay-tag">BTS 뷔 착용 *</span>
                  <span className="overlay-name">스피드</span>
                  <span className="overlay-price">210,000</span>
                </div>
              </div>
            </div>

            {/* 카드 2: 정해인 */}
            <div
              className="celeb-card"
              onClick={() => navigate("/product/celeb-cyber-dino")}
              style={{ cursor: "pointer" }}
            >
              <img
                src="/team/celeb/haein.png"
                alt="정해인 착용컷"
                className="celeb-card-img"
              />

              <div className="celeb-card-overlay">
                <div className="overlay-thumb-box">
                  <img
                    src="/team/celeb/syber.png"
                    alt="사이버 다이노"
                    className="glasses-product-photo"
                  />
                </div>

                <div className="overlay-text-box">
                  <span className="overlay-tag">배우 정해인 착용 *</span>
                  <span className="overlay-name">사이버 다이노</span>
                  <span className="overlay-price">328,800</span>
                </div>
              </div>
            </div>

            {/* 카드 3: 카리나 */}
            <div
              className="celeb-card"
              onClick={() => navigate("/product/celeb-couscous")}
              style={{ cursor: "pointer" }}
            >
              <img
                src="/team/celeb/karina.png"
                alt="에스파 카리나 착용컷"
                className="celeb-card-img"
              />

              <div className="celeb-card-overlay">
                <div className="overlay-thumb-box">
                  <img
                    src="/team/celeb/cuscus.png"
                    alt="쿠스쿠스"
                    className="glasses-product-photo"
                  />
                </div>

                <div className="overlay-text-box">
                  <span className="overlay-tag">에스파 카리나 착용 *</span>
                  <span className="overlay-name">쿠스쿠스</span>
                  <span className="overlay-price">290,000</span>
                </div>
              </div>
            </div>
          </div>

          <button
            type="button"
            className="celeb-arrow celeb-arrow-right"
            onClick={() => slideCards(1)}
            aria-label="다음 셀럽픽 상품"
          >
            <span className="celeb-arrow-icon celeb-arrow-icon-right">›</span>
          </button>
        </div>
      </main>
    </div>
  );
}