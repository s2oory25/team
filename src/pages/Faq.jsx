
import { useState } from "react";

export default function Faq() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const faqDetails = [
    {
      question: "AI 얼굴형 분석은 어떻게 이용하나요?",
      answer: "AI 맞춤 서비스 메뉴에서 얼굴 사진을 업로드하면 AI가 얼굴형을 분석하고, 분석 결과를 바탕으로 얼굴형에 어울리는 선글라스를 추천해 드립니다.",
    },
    {
      question: "사진은 저장되나요?",
      answer: "AI 얼굴형 분석 및 피팅 서비스에 업로드한 사진은 서비스 이용 목적으로 사용되어 안심하고 서비스를 이용하실 수 있도록 사진의 이용 및 보관 방식을 명확하게 안내하겠습니다..",
    },
    {
      question: "AI 피팅은 어디서 하나요?",
      answer: "상단 메뉴 또는 사이드 메뉴에서 AI 맞춤 서비스 → AI 피팅을 선택하면 이용할 수 있습니다. 안내에 따라 원하는 선글라스를 선택하고 착용 모습을 확인해 보세요.",
    },
    {
      question: "배송은 얼마나 걸리나요?",
      answer: "배송은 결제 완료 후 영업일 기준 2~5일 정도 소요됩니다. 다만, 상품 재고 및 택배사 사정에 따라 배송 일정이 달라질 수 있습니다.",
    },
    {
      question: "교환/반품은 가능한가요?",
      answer: "상품에 문제가 있거나 교환 및 반품이 필요한 경우 고객센터를 통해 문의해 주세요. 단, AI 피팅을 이용해 구매하신 상품은 상품 특성에 따라 교환 및 반품이 제한될 수 있습니다.",
    },
  ];

  return (
    <div className="customer-content">
      <h2>FAQ</h2>
      <p>자주 묻는 질문을 확인해보세요.</p>

      <div className="faq-list">
        {faqDetails.map((item, index) => (
          <div className="faq-item" key={item.question}>
            <button
              type="button"
              className="faq-question"
              onClick={() =>
                setOpenFaqIndex(
                  openFaqIndex === index ? null : index
                )
              }
              aria-expanded={openFaqIndex === index}
            >
              <span>{item.question}</span>
              <span className="content-arrow">
                {openFaqIndex === index ? "↓" : "→"}
              </span>
            </button>

            {openFaqIndex === index && (
              <p className="faq-answer">{item.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
