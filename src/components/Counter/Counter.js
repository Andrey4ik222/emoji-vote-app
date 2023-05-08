import "./Counter.css";

function Counter({ counters, handleEmojiClick }) {
  return (
    <div className="vote">
      <div className="vote-wrapper">
        {counters.map((elem, index) => (
          <div className="vote-wrapper__item" key={index}>
            <img
              className="vote-wrapper__emoji"
              src={`./img/${index + 1}.png`}
              alt="emoji"
              onClick={() => handleEmojiClick(index)}
            />
            <div className="vote-wrapper__counter">{elem}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Counter;
