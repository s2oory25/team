import "./FitSelector.css";

const defaultOptions = ["Small", "Regular", "Over"];

function FitSelector({
  selectedIndex = 2,
  options = defaultOptions,
}) {
  return (
    <div className="fit-selector">
      {options.map((option, index) => (
        <div
          className={`fit-selector-option${
            selectedIndex === index ? " is-selected" : ""
          }`}
          key={option}
        >
          <span className="fit-selector-label">{option}</span>
          <span className="fit-selector-marker"></span>
        </div>
      ))}
    </div>
  );
}

export default FitSelector;