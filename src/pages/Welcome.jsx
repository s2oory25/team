function Welcome() {
  return (
    <main className="welcome-page">
      <section className="welcome-hero">
        <h1>Welcome to ChalFit</h1>

        <p>
          나에게 어울리는 선글라스를 찾는 가장 스마트한 방법.
          <br />
          AI FIT으로 얼굴형과 스타일을 분석하고 맞춤 아이웨어를 만나보세요.
        </p>

        <div className="welcome-visual">
          <img
            className="welcome-main-image"
            src={`${import.meta.env.BASE_URL}welcome/welcome.png`}
            alt="ChalFit 선글라스"
          />

          <article className="welcome-card welcome-card-left">
            <div className="welcome-card-icon">🧑</div>

            <h2>AI 얼굴형 분석</h2>

            <p>
              내 얼굴형에 맞는
              <br />
              스타일을 추천해요.
            </p>
          </article>

          <article className="welcome-card welcome-card-right">
            <div className="welcome-card-icon">🕶</div>

            <h2>맞춤 선글라스 추천</h2>

            <p>
              나에게 어울리는
              <br />
              아이웨어를 한 번에.
            </p>
          </article>

          <div className="welcome-actions">
            <button type="button" className="welcome-ai-button">
              AI FIT 시작하기 〉
            </button>

            <button type="button" className="welcome-shop-button">
              쇼핑하기
            </button>
          </div>
        </div>
      </section>

      <section className="welcome-brand">
        <div className="welcome-brand-text">
          <h3>찰핏은 이런 브랜드예요</h3>

          <p>
            AI 기술로 나에게 꼭 맞는 아이웨어를 제안하는
            <span className="mobile-brand-line">
            스타일 기반 선글라스 플랫폼입니다.
            </span>
          </p>
        </div>

        <div className="welcome-features">
          <div className="welcome-feature">
            <span>🎇</span>
            <p>
              AI 기반
              <br />
              맞춤 분석
            </p>
          </div>

          <div className="welcome-feature">
            <span>💎</span>
            <p>
              다양한
              <br />
              스타일 제안
            </p>
          </div>

          <div className="welcome-feature">
            <span>💘</span>
            <p>
              일상을 특별하게
              <br />
              만드는 아이웨어
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Welcome;