function Login({ onClose }) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="login-panel">

      <button
        type="button"
        className="login-close-button"
        onClick={onClose}
        aria-label="로그인창 닫기"
      >
        ×
      </button>

      <h1 className="login-title">
        Welcome to ChalFit
      </h1>

      <form
        className="login-form"
        onSubmit={handleSubmit}
      >
        <div className="login-input">
          <input
            type="email"
            placeholder="이메일"
          />
        </div>

        <div className="login-input">
          <input
            type="password"
            placeholder="비밀번호"
          />
        </div>

        <button
          type="submit"
          className="login-submit-button"
        >
          로그인
        </button>
      </form>

      <div className="signup-area">
        <span>계정이 없으신가요?</span>

        <button
          type="button"
          className="signup-button"
        >
          회원가입
        </button>
      </div>

      <div className="login-or">
        <span></span>
        <p>OR</p>
        <span></span>
      </div>

      <button
        type="button"
        className="guest-button"
      >
        비회원 이용하기
      </button>

    </section>
  );
}

export default Login;