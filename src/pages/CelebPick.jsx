import React from 'react';

// 선글라스 누끼 컷 이미지 (assets)
import glassesDevon from '../assets/glasses_devon.png';
import glassesJade from '../assets/glasses_jade.png';
import glassesCouscous from '../assets/glasses_couscous.png';

export default function CelebPick({ onSelectWonbin }) {
  return (
    <div className="celeb-page-root">
      <style>{`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        .celeb-page-root {
          width: 100%;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          background-color: #ffffff;
          font-family: -apple-system, BlinkMacSystemFont, "Pretendard", "Noto Sans KR", sans-serif;
          color: #111111;
        }

        /* 1. 상단 ChalFit 헤더 */
        .chalfit-nav-header {
          width: 100%;
          background-color: #ffffff;
          border-bottom: 1px solid #f0f0f0;
        }

        .chalfit-nav-inner {
          max-width: 1360px;
          margin: 0 auto;
          padding: 16px 32px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .nav-left-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: none;
          border: none;
          cursor: pointer;
          font-size: 14px;
          font-weight: 500;
          color: #111111;
        }

        .nav-logo-text {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 26px;
          font-weight: 500;
          color: #111111;
          letter-spacing: 0.5px;
          cursor: pointer;
        }

        .nav-right-group {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .nav-text-link {
          background: none;
          border: none;
          font-size: 13.5px;
          color: #222222;
          cursor: pointer;
        }

        .nav-icon-link {
          background: none;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
        }

        /* 2. 중앙 컨텐츠 영역 */
        .celeb-main-content {
          flex: 1;
          width: 100%;
          max-width: 1320px;
          margin: 0 auto;
          padding: 36px 32px 80px 32px;
        }

        /* 셀럽픽 타이틀 좌측 정렬 */
        .celeb-title {
          text-align: left;
          font-size: 24px;
          font-weight: 800;
          letter-spacing: 0.5px;
          color: #111111;
          margin-bottom: 24px;
        }

        /* 3. 기본 PC 그리드: 3개 카드 가로 3열 배치 */
        .celeb-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          width: 100%;
        }

        /* 기본 PC 화면에서는 4번째 카드를 숨김 */
        .card-tablet-only {
          display: none;
        }

        /* 개별 카드 스타일 */
        .celeb-card {
          position: relative;
          width: 100%;
          aspect-ratio: 1 / 1.34;
          border-radius: 14px;
          overflow: hidden;
          background-color: #f2f2f2;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
          transition: transform 0.25s ease;
        }

        .celeb-card:hover {
          transform: translateY(-4px);
        }

        .celeb-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        /* 하단 반투명 정보 바 */
        .celeb-card-overlay {
          position: absolute;
          bottom: 14px;
          left: 14px;
          right: 14px;
          background-color: rgba(26, 26, 26, 0.74);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border-radius: 8px;
          padding: 10px 14px;
          display: flex;
          align-items: center;
          gap: 14px;
        }

        /* 선글라스 실제 제품 사진 느낌 흰색 박스 */
        .overlay-thumb-box {
          width: 56px;
          height: 40px;
          background-color: #ffffff;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          padding: 4px 6px;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.12);
        }

        .glasses-product-photo {
          width: 100%;
          height: 100%;
          object-fit: contain;
          display: block;
          filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1));
        }

        /* 중앙 텍스트 그룹 */
        .overlay-text-box {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
        }

        .overlay-tag {
          font-size: 11.5px;
          font-weight: 600;
          color: #ff3322;
          line-height: 1.25;
          margin-bottom: 2px;
        }

        .overlay-name {
          font-size: 14px;
          font-weight: 700;
          color: #ffffff;
          line-height: 1.25;
        }

        .overlay-price {
          font-size: 12px;
          font-weight: 400;
          color: #e0e0e0;
          line-height: 1.2;
          margin-top: 2px;
        }

        /* 4. 하단 회색 푸터 */
        .custom-site-footer {
          width: 100%;
          background-color: #ebebeb;
          padding: 36px 40px;
          margin-top: auto;
          border-top: 1px solid #e0e0e0;
        }

        .custom-footer-inner {
          max-width: 1320px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          font-size: 12px;
          color: #444444;
        }

        .custom-footer-left {
          display: flex;
          gap: 48px;
          align-items: flex-start;
        }

        .custom-footer-logo {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 26px;
          font-weight: 500;
          color: #111111;
          line-height: 1;
          padding-top: 4px;
        }

        .custom-footer-content {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .custom-footer-nav {
          display: flex;
          gap: 24px;
          font-weight: 600;
          color: #222222;
        }

        .custom-footer-nav span {
          cursor: pointer;
        }

        .custom-footer-details {
          line-height: 1.8;
          color: #555555;
          font-size: 11.5px;
        }

        .custom-footer-right {
          text-align: right;
          display: flex;
          flex-direction: column;
          gap: 8px;
          align-items: flex-end;
        }

        .custom-footer-copy {
          font-size: 12px;
          color: #333333;
          font-weight: 500;
        }

        .custom-footer-slogan {
          font-size: 11px;
          font-weight: 700;
          color: #555555;
          letter-spacing: 0.6px;
        }

        /* ================= 반응형 미디어 쿼리 ================= */

        /* [태블릿 버전: 769px ~ 1024px] 
           4번째 카드가 보이며 총 4개 카드가 2열 2행으로 배치 */
        @media (min-width: 769px) and (max-width: 1024px) {
          .celeb-main-content {
            padding: 30px 24px 60px 24px;
          }
          .celeb-cards-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 20px !important;
          }
          .card-tablet-only {
            display: block !important;
          }
          .custom-footer-inner {
            flex-direction: column;
            gap: 24px;
          }
          .custom-footer-right {
            text-align: left;
            align-items: flex-start;
          }
        }

        /* [모바일 버전: 768px 이하] 
           4번째 카드는 숨기고, 원래의 3개 이미지가 일자로 스크롤되어 하나씩 보임 */
        @media (max-width: 768px) {
          .chalfit-nav-inner {
            padding: 14px 20px;
          }
          .nav-logo-text {
            font-size: 22px;
          }
          .nav-right-group {
            gap: 12px;
          }
          .celeb-main-content {
            padding: 24px 16px 50px 16px;
          }
          .celeb-title {
            font-size: 20px;
            margin-bottom: 18px;
          }
          .celeb-cards-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
          .card-tablet-only {
            display: none !important;
          }
          .celeb-card {
            aspect-ratio: 1 / 1.28;
          }
          .custom-site-footer {
            padding: 28px 20px;
          }
          .custom-footer-left {
            flex-direction: column;
            gap: 18px;
          }
          .custom-footer-logo {
            border-right: none;
            padding-right: 0;
          }
          .custom-footer-nav {
            flex-wrap: wrap;
            gap: 14px;
          }
        }
      `}</style>


      {/* 2. 중앙 메인 컨텐츠 영역 */}
      <main className="celeb-main-content">
        <h1 className="celeb-title">CELEB PICK!</h1>

        <div className="celeb-cards-grid">
          {/* 카드 1: 제니 */}
          <div className="celeb-card">
            <img src="/celeb/jennie.jpg" alt="제니 착용컷" className="celeb-card-img" />
            <div className="celeb-card-overlay">
              <div className="overlay-thumb-box">
                <img src={glassesDevon} alt="데본01" className="glasses-product-photo" />
              </div>
              <div className="overlay-text-box">
                <span className="overlay-tag">* 제니 착용 *</span>
                <span className="overlay-name">데본01</span>
                <span className="overlay-price">330,000</span>
              </div>
            </div>
          </div>

          {/* 카드 2: 원빈 (상세페이지 이동) */}
          <div 
            className="celeb-card" 
          >
            <img src="/celeb/wonbin.png" alt="라이즈 원빈 착용컷" className="celeb-card-img" />
            <div className="celeb-card-overlay">
              <div className="overlay-thumb-box">
                <img src={glassesJade} alt="제이드" className="glasses-product-photo" />
              </div>
              <div className="overlay-text-box">
                <span className="overlay-tag">* 라이즈 원빈 착용 *</span>
                <span className="overlay-name">제이드</span>
                <span className="overlay-price">299,000</span>
              </div>
            </div>
          </div>

          {/* 카드 3: 카리나 1 */}
          <div className="celeb-card">
            <img src="/celeb/karina.jpg" alt="에스파 카리나 착용컷" className="celeb-card-img" />
            <div className="celeb-card-overlay">
              <div className="overlay-thumb-box">
                <img src={glassesCouscous} alt="쿠스쿠스" className="glasses-product-photo" />
              </div>
              <div className="overlay-text-box">
                <span className="overlay-tag">* 에스파 카리나 착용 *</span>
                <span className="overlay-name">쿠스쿠스</span>
                <span className="overlay-price">320,000</span>
              </div>
            </div>
          </div>

          {/* 카드 4: 카리나 2 (태블릿 전용 - PC 및 모바일에서는 자동 숨김) */}
          <div className="celeb-card card-tablet-only">
            <img src="/celeb/karina.jpg" alt="에스파 카리나 착용컷 2" className="celeb-card-img" />
            <div className="celeb-card-overlay">
              <div className="overlay-thumb-box">
                <img src={glassesJade} alt="제이드" className="glasses-product-photo" />
              </div>
              <div className="overlay-text-box">
                <span className="overlay-tag">* 에스파 카리나 픽 *</span>
                <span className="overlay-name">제이드</span>
                <span className="overlay-price">299,000</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* 3. 하단 푸터
      <footer className="custom-site-footer">
        <div className="custom-footer-inner">
          <div className="custom-footer-left">
            <div className="custom-footer-logo">ChalFit</div>
            <div className="custom-footer-content">
              <div className="custom-footer-nav">
                <span>문의하기</span>
                <span>고객센터</span>
                <span>배송안내</span>
                <span>이용약관</span>
                <span>FAQ</span>
              </div>
              <div className="custom-footer-details">
                <div>ChalFit &nbsp; 대표자: 홍길동 &nbsp; 사업자등록번호: 123-45-67890</div>
                <div>주소 : 서울특별시 관악구 신림로 340 &nbsp; 이메일 : support@chalfit.com</div>
              </div>
            </div>
          </div>
          <div className="custom-footer-right">
            <span className="custom-footer-copy">© 2026 ChalFit. All rights reserved.</span>
            <span className="custom-footer-slogan">STYLE FITS YOU</span>
          </div>
        </div>
      </footer> */}
    </div>
  );
}