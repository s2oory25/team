import React, { useState } from 'react';
import './SidebarNav.css';

export default function SidebarNav() {
  const [isOpen, setIsOpen] = useState(true);
  // 'celeb'이면 셀럽픽 선택 상태, 'category'면 종류(2단 펼침) 상태
  const [selectedMenu, setSelectedMenu] = useState('celeb');

  const categorySubItems = ['스퀘어', '라운드', '캣아이', '스포츠'];

  return (
    <div className="layout-container">
      {/* 1. 상단 헤더 */}
      <header className="header">
        <div className="header-inner">
          <button className="menu-btn" onClick={() => setIsOpen(!isOpen)}>
            <span className="hamburger-icon">
              <span></span>
              <span></span>
              <span></span>
            </span>
            <span className="menu-text">메뉴</span>
          </button>

          <div className="logo notranslate" translate="no">
            <a href="/">ChalFit</a>
          </div>

          <div className="right-nav">
            <a href="#like" className="nav-item">좋아요</a>
            <a href="#cart" className="nav-item">장바구니</a>
            <button className="profile-btn" aria-label="마이페이지">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="9" r="3.2" />
                <path d="M6.5 18.5C7.8 16.5 9.8 15.2 12 15.2C14.2 15.2 16.2 16.5 17.5 18.5" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* 2. 어두운 배경 오버레이 */}
      {isOpen && (
        <div className="overlay" onClick={() => setIsOpen(false)}></div>
      )}

      {/* 3. 사이드바 영역 */}
      <aside className={`sidebar-container ${isOpen ? 'open' : ''}`}>
        
        {/* 1차 메뉴 패널 */}
        <div className="primary-panel">
          <nav className="primary-menu-list">
            
            {/* CELEB PICK 클릭 시: CELEB PICK 활성화 & 옆 패널 닫힘 */}
            <div 
              className={`primary-menu-item ${selectedMenu === 'celeb' ? 'active' : ''}`}
              onClick={() => setSelectedMenu('celeb')}
            >
              <span className="menu-title notranslate" translate="no">CELEB PICK</span>
              <span className="arrow">&gt;</span>
            </div>

            {/* 종류 클릭 시: 종류 활성화 & 옆 2차 패널 펼쳐짐 */}
            <div 
              className={`primary-menu-item ${selectedMenu === 'category' ? 'active' : ''}`}
              onClick={() => setSelectedMenu('category')}
            >
              <span className="menu-title">종류</span>
              <span className="arrow">&gt;</span>
            </div>

            {/* AI 맞춤 서비스 */}
            <div className="primary-menu-item" onClick={() => setSelectedMenu(null)}>
              <span className="menu-title">AI 맞춤 서비스</span>
              <span className="arrow">&gt;</span>
            </div>

            {/* 스타일 */}
            <div className="primary-menu-item" onClick={() => setSelectedMenu(null)}>
              <span className="menu-title">스타일</span>
              <span className="arrow">&gt;</span>
            </div>

          </nav>

          {/* 좌측 하단 고객센터 */}
          <div className="sidebar-footer">
            <div className="footer-left">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="12" cy="7" r="4"/>
                <path d="M4 21v-2a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v2"/>
              </svg>
            </div>
            <span className="footer-text">고객센터</span>
          </div>
        </div>

        {/* 2차 서브메뉴 패널 ('종류'가 눌렸을 때만 오른쪽에 붙어서 펼쳐짐) */}
        {selectedMenu === 'category' && (
          <div className="secondary-panel">
            <div className="secondary-menu-list">
              {categorySubItems.map((sub, idx) => (
                <div key={idx} className="secondary-menu-item">
                  <span className="sub-title">{sub}</span>
                  <span className="sub-arrow">&gt;</span>
                </div>
              ))}
            </div>
          </div>
        )}

      </aside>
    </div>
  );
}