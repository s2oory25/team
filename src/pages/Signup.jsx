function Signup() {
  return (
    <main className="signup-page">
      <section className="signup-content">
        <div className="signup-left">
          <div className="signup-intro">
            <h1>JOIN ChalFit</h1>
            <p>새로운 스타일을 만나보세요</p>
          </div>

          <div className="social-signup">
            <button type="button" className="social-button">
              <span className="social-icon">●</span>
              카카오톡으로 시작하기
            </button>

            <button type="button" className="social-button">
              <span className="social-icon">N</span>
              네이버로 시작하기
            </button>

            <button type="button" className="social-button">
              <span className="social-icon">G</span>
              구글로 시작하기
            </button>
          </div>

          <div className="signup-divider"></div>

          <h2 className="simple-signup-title">간편 회원가입</h2>

          <form className="signup-form">
            <div className="signup-field">
              <label htmlFor="name">이름</label>
              <input
                id="name"
                type="text"
                placeholder="이름을 입력해주세요."
              />
            </div>

            <div className="signup-field">
              <label htmlFor="email">이메일</label>
              <input
                id="email"
                type="email"
                placeholder="이메일을 입력해주세요."
              />
            </div>

            <div className="signup-field">
              <label htmlFor="password">비밀번호</label>
              <div className="password-field">
                <input
                  id="password"
                  type="password"
                  placeholder="비밀번호를 입력해주세요."
                />
                <span className="password-guide">
                  *8자 이상, 특수문자 포함
                </span>
              </div>
            </div>

            <button
              type="submit"
              className="signup-submit-button"
            >
              회원가입하기
            </button>
          </form>
        </div>

        <div className="signup-right">
          <img
            src={`${import.meta.env.BASE_URL}signup/signup-model.png`}
            alt="ChalFit 회원가입 모델"
          />
        </div>
      </section>
    </main>
  );
}

export default Signup;