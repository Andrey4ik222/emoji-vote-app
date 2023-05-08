import "./Counter.css";

function Counter({ counters, handleEmojiClick, setShowResult }) {
  const handleClick = (index) => {
    handleEmojiClick(index);
    setShowResult(false);
  };

  return (
    <div className="vote">
      <div className="vote-wrapper">
        {counters.map((elem, index) => (
          <div className="vote-wrapper__item" key={index}>
            <img
              className="vote-wrapper__emoji"
              src={require(`../../../public/img/${index + 1}.png`)}
              alt="emoji"
              onClick={() => handleClick(index)}
            />
            <div className="vote-wrapper__counter">{elem}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Counter;
