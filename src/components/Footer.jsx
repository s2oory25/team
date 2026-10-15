import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="chalfit-footer-wrap">
      <div className="chalfit-footer-inner">
        {/* 1. 좌측 로고 */}
        <div className="footer-left-area">
          <span className="footer-brand-title">ChalFit</span>
        </div>

        {/* 2. 중앙 링크 및 사업자 정보 */}
        <div className="footer-center-area">
          <nav className="footer-menu-links">
            <a href="#inquiry">문의하기</a>
            <a href="#cs">고객센터</a>
            <a href="#shipping">배송안내</a>
            <a href="#terms">이용약관</a>
            <a href="#faq">FAQ</a>
          </nav>
          <div className="footer-info-text">
            <p>ChalFit &nbsp; 대표자 홍길동 &nbsp; 사업자등록번호 123-45-67890</p>
            <p>주소 : 서울특별시 관악구 신림로 340 &nbsp; 이메일 : support@chalfit.com</p>
          </div>
        </div>

        {/* 3. 우측 카피라이트 */}
        <div className="footer-right-area">
          <p className="footer-copy-text">© 2026 ChalFit. All rights reserved.</p>
          <p className="footer-slogan">STYLE FITS YOU</p>
        </div>
      </div>
    </footer>
  );
}