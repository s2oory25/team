import { useEffect, useState } from "react";
import "./Mypage.css";
import { useNavigate } from "react-router-dom";

export default function MyPage(props) {
  const navigate = useNavigate();
  const [favoriteCount, setFavoriteCount] = useState(() => {
    try {
      const favorites = JSON.parse(
        localStorage.getItem("chalfitFavorites") || "[]"
      );

      return Array.isArray(favorites) ? favorites.length : 0;
    } catch {
      return 0;
    }
  });

  useEffect(() => {
    const updateFavoriteCount = () => {
      try {
        const favorites = JSON.parse(
          localStorage.getItem("chalfitFavorites") || "[]"
        );

        setFavoriteCount(
          Array.isArray(favorites) ? favorites.length : 0
        );
      } catch {
        setFavoriteCount(0);
      }
    };

  updateFavoriteCount();

  window.addEventListener("storage", updateFavoriteCount);
  window.addEventListener("focus", updateFavoriteCount);

  return () => {
    window.removeEventListener("storage", updateFavoriteCount);
    window.removeEventListener("focus", updateFavoriteCount);
  };
}, []);

  const {
    isLoggedIn,
    profilePhoto,
    handleProfileCardClick,
  } = props;

  return (
    <main className="mypage-screen">
      <div className="mypage-title-bar">
        <h1>마이페이지</h1>
      </div>

      <p className="mypage-welcome">
        회원님의 정보를 확인하고 관리해보세요.
      </p>

      <div className="mypage-dashboard">
        <button
          type="button"
          className="mypage-profile-card"
          onClick={() => {
            if (!isLoggedIn) {
              props.onLoginClick();
              return;
            }

            navigate("/account");
          }}
        >
          <span
            className={`mypage-profile-avatar${profilePhoto ? " has-photo" : ""}`}
            aria-hidden="true"
          >
            {profilePhoto ? (
              <img src={profilePhoto} alt="" />
            ) : (
              <>
                <span />
                <i />
              </>
            )}
          </span>

          <div>
            <strong>
              {isLoggedIn ? "김찰떡님" : "로그인 해주세요"}
            </strong>
            <p>
              {isLoggedIn
                ? "회원 정보를 확인하고 수정할 수 있습니다."
                : "나에게 어울리는 스타일을 찾아보세요."}
            </p>
          </div>

          <span className="mypage-card-arrow" aria-hidden="true">
            ›
          </span>
        </button>

        <section
          className="mypage-summary"
          aria-label="마이페이지 요약"
        >
          <button
            type="button"
            onClick={() => navigate("/favorites")}
          >
          
        <span aria-hidden="true">💘</span>
        <strong>{favoriteCount}</strong>
        
            <small>좋아요</small>
          </button>

          <button
            type="button"
            onClick={() => navigate("/cart")}
          >
            <span aria-hidden="true">🛒</span>
            <strong>0</strong>
            <small>장바구니</small>
          </button>

          <button
            type="button"
            onClick={() => navigate("/orders")}
          >
            <span aria-hidden="true">📃</span>
            <strong>0</strong>
            <small>주문 내역</small>
          </button>
        </section>

        <button
          type="button"
          className="mypage-fit-button"
          onClick={() => navigate("/ai-fitting")}
        >
          <strong>MY FIT</strong>
          <span>다시 분석하기　›</span>
        </button>

        <section className="mypage-shortcuts">
          <button
            type="button"
            onClick={() => navigate("/recent")}
          >
            <span aria-hidden="true">🕓</span> 최근 본 상품
          </button>

          <button
            type="button"
            onClick={() => navigate("/inquiry")}
          >
            <span aria-hidden="true">💬</span> 1:1 문의
          </button>

          <button
            type="button"
            onClick={() => navigate("/orders")}
          >
            <span aria-hidden="true">🚚</span> 배송 조회
          </button>

          <button type="button" disabled>
            <span aria-hidden="true">🔔︎</span> 알림 설정 · 준비 중
          </button>
        </section>
      </div>
    </main>
  );
}