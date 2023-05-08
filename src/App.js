import React, { useState } from "react";
import "./App.css";

import Counter from "./components/Counter/Counter";
import Result from "./components/Result/Result";

function App() {
  const [count, setCount] = useState([0, 0, 0]);
  const [showResult, setShowResult] = useState(false);

  const handleEmojiClick = (index) => {
    const newCount = [...count];
    newCount[index]++;
    setCount(newCount);
  };

  return (
    <div className="App">
      <Counter
        counters={count}
        handleEmojiClick={handleEmojiClick}
        setShowResult={setShowResult}
      />
      <Result
        counters={count}
        showResult={showResult}
        setShowResult={setShowResult}
      />
    </div>
  );
}

export default App;
