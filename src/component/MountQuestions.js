import Options from "./Options";
import Timer from "./Timer";

function MountQuestions({
  question,
  dispatch,
  answer,
  attendedQuestions,
  timeToComplete,
}) {
  const hasAnswer = answer !== null;
  const renderButton = question.options.map((option, optionIndex) => (
    <Options
      question={question}
      dispatch={dispatch}
      answer={answer}
      hasAnswer={hasAnswer}
      option={option}
      optionIndex={optionIndex}
      key={option}
    />
  ));
  return (
    <div>
      <h3> {question.question} </h3>
      <div className="options">{renderButton}</div>
      {hasAnswer && (
        <button
          className="btn btn-ui"
          onClick={() => {
            if (attendedQuestions < 15) dispatch({ type: "incrementIndex" });
            else dispatch({ type: "completed" });
          }}
        >
          Next
        </button>
      )}

      <Timer dispatch={dispatch} timeToComplete={timeToComplete} />
    </div>
  );
}

export default MountQuestions;
