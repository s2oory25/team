import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ onClose, onLoginSuccess }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const testEmail = "test@gmail.com";
    const testPassword = "chalfit2026";

    if (email === testEmail && password === testPassword) {
      setError("");
      onLoginSuccess();
      navigate("/");
    } else {
      setError("이메일 또는 비밀번호가 올바르지 않습니다.");
    }
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="login-input">
          <input
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && (
          <p className="login-error-message">
            {error}
          </p>
        )}

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
          onClick={() => {
            onClose();
            navigate("/signup");
          }}
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
        onClick={() => {
          onClose();
          navigate("/");
        }}
      >
        비회원 이용하기
      </button>

    </section>
  );
}

export default Login;