import React, { useState } from "react";
import "./Result.css";

function Result({ counters }) {
  const [showResult, setShowResult] = useState(false);

  const getMaxIndex = () => {
    let maxIndex = 0;

    for (let i = 0; i < counters.length; i++) {
      if (counters[i] > counters[maxIndex]) {
        maxIndex = i;
      }
    }
    return maxIndex;
  };

  const maxIndex = getMaxIndex();

  const handlerShowResult = () => {
    setShowResult(true);
  };

  return (
    <div className="result">
      <button className="result-btn" onClick={handlerShowResult}>
        Result
      </button>
      {showResult && counters[maxIndex] > 0 && (
        <div className="result-item">
          <h2 className="result-item__title">Winner emoji:</h2>
          <img
            className="result-item__image"
            src={`./img/${maxIndex + 1}.png`}
            alt="emoji"
          ></img>
        </div>
      )}
    </div>
  );
}
export default Result;
