function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <strong>ChalFit</strong>
      </div>

      <div className="footer-center">
        <nav className="footer-menu">
          <a href="#">문의하기</a>
          <a href="#">고객센터</a>
          <a href="#">배송안내</a>
          <a href="#">이용약관</a>
          <a href="#">FAQ</a>
        </nav>

        <div className="footer-info">
          <p>
            ChalFit　대표자 홍길동　사업자등록번호 123-45-67890
          </p>

          <p>
            주소 : 서울특별시 관악구 신림로 340　
            이메일 : support@chalfit.com
          </p>
        </div>
      </div>

      <div className="footer-right">
        <p>© 2026 ChalFit. All rights reserved.</p>
        <span>STYLE FITS YOU</span>
      </div>
    </footer>
  );
}

export default Footer;