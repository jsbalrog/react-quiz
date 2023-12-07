export default function Start({ numQuestions, dispatch }) {
  function handleClick() {
    dispatch({ type: "start" });
  }

  return (
    <div className="start">
      <h2>Welcome to the React Quiz!</h2>
      <h3>{numQuestions} questions to test your React mastery</h3>
      <button onClick={handleClick} className="btn btn-ui">
        Let's start
      </button>
    </div>
  );
}
