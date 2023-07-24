function Options({
  question,
  dispatch,
  answer,
  optionIndex,
  hasAnswer,
  option,
}) {
  return (
    <button
      className={`btn btn-option ${answer === optionIndex ? "answer" : ""} ${
        hasAnswer
          ? optionIndex === question.correctOption
            ? "correct"
            : "wrong"
          : ""
      }`}
      disabled={hasAnswer}
      onClick={() => {
        dispatch({
          type: "clickedOption",
          payload: {
            optionIndex,
            correctOption: question.correctOption,
            maxPoints: question.points,
          },
        });
      }}
    >
      {option}
    </button>
  );
}
export default Options;
