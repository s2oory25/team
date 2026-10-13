import React, { useState } from 'react';
import CelebPick from './pages/CelebPick';
import ProductDetail from './pages/ProductDetail';

function App() {
  // 현재 보고 있는 페이지 상태 ('celeb' 또는 'detail')
  const [currentPage, setCurrentPage] = useState('celeb');

  return (
    <div>
      {currentPage === 'celeb' ? (
        // 원빈 카드를 눌렀을 때 detail 화면으로 전환
        <CelebPick onSelectWonbin={() => setCurrentPage('detail')} />
      ) : (
        // 상세 페이지에서 뒤로가거나 나갈 때 다시 목록으로 전환
        <ProductDetail onBack={() => setCurrentPage('celeb')} />
      )}
    </div>
  );
}

export default App;