import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;

    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "",
      }));
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    const nextErrors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const specialCharacterPattern = /[^\p{L}\p{N}\s]/u;

    if (!form.name.trim()) {
      nextErrors.name = "이름을 입력해주세요.";
    }

    if (!form.email.trim()) {
      nextErrors.email = "이메일을 입력해주세요.";
    } else if (!emailPattern.test(form.email)) {
      nextErrors.email = "올바른 이메일 형식을 입력해주세요.";
    }

    if (
      form.password.length < 8 ||
      !specialCharacterPattern.test(form.password)
    ) {
      nextErrors.password =
        "비밀번호는 8자 이상, 특수문자를 포함해주세요.";
    }
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) {
      navigate("/welcome");
    }
  }

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
              <span className="social-icon">
                <img
                  src={`${import.meta.env.BASE_URL}social/kakao.png`}
                  alt=""
                />
              </span>
              카카오톡으로 시작하기
            </button>

            <button type="button" className="social-button">
              <span className="social-icon">
                <img
                  src={`${import.meta.env.BASE_URL}social/naver.png`}
                  alt=""
                />
              </span>
              네이버로 시작하기
            </button>

            <button type="button" className="social-button">
              <span className="social-icon">
                <img
                  src={`${import.meta.env.BASE_URL}social/google.png`}
                  alt=""
                />
              </span>
              구글로 시작하기
            </button>
          </div>

          <div className="signup-divider"></div>

          <h2 className="simple-signup-title">간편 회원가입</h2>

          <form
            className="signup-form"
            onSubmit={handleSubmit}
            noValidate
          >
            <div className="signup-field">
              <label htmlFor="name">이름</label>
              <div className="password-field">
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="이름을 입력해주세요."
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name && (
                  <span id="name-error" className="password-guide" role="alert">
                    {errors.name}
                  </span>
                )}
              </div>
            </div>

            <div className="signup-field">
              <label htmlFor="email">이메일</label>
              <div className="password-field">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="이메일을 입력해주세요."
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && (
                  <span id="email-error" className="password-guide" role="alert">
                    {errors.email}
                  </span>
                )}
              </div>
            </div>

            <div className="signup-field">
              <label htmlFor="password">비밀번호</label>
              <div className="password-field">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="비밀번호를 입력해주세요."
                  aria-invalid={Boolean(errors.password)}
                  aria-describedby={errors.password ? "password-error" : undefined}
                />
                {errors.password && (
                  <span
                    id="password-error"
                    className="password-guide"
                    role="alert"
                  >
                    {errors.password}
                  </span>
                )}
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
