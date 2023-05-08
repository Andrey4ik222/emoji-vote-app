import React, { useState } from "react";
import "./App.css";

import Counter from "./components/Counter/Counter";
import Result from "./components/Result/Result";

function App() {
  const [count, setCount] = useState([0, 0, 0]);

  const handleEmojiClick = (index) => {
    const newCount = [...count];
    newCount[index]++;
    setCount(newCount);
  };

  return (
    <div className="App">
      <Counter counters={count} handleEmojiClick={handleEmojiClick} />
      <Result counters={count} />
    </div>
  );
}

export default App;
