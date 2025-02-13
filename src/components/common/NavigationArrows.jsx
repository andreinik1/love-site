import React from "react";
import "./NavigationArrows.css";

const NavigationArrows = ({ onNext, onPrev, isFirstScreen, isLastScreen }) => {
  return (
    <div className="navigation-arrows">
      {/* Если не первый экран, показываем левую стрелку */}
      {!isFirstScreen && (
        <button className="arrow left-arrow" onClick={onPrev}>
          ←
        </button>
      )}
      {/* Если не последний экран, показываем правую стрелку */}
      {!isLastScreen && (
        <button
          className={`arrow ${
            isFirstScreen ? "center-right-arrow" : "right-arrow"
          }`}
          onClick={onNext}
        >
          →
        </button>
      )}
    </div>
  );
};

export default NavigationArrows;
