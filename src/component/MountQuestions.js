import Options from "./Options";
import Progress from "./Progress";

function MountQuestions({
  question,
  dispatch,
  answer,
  attendedQuestions,
  points,
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
      <Progress
        totalQuestions={15}
        attendedQuestions={attendedQuestions}
        totalpoints={15 * 10}
        gainedPoints={points}
      />
      <h3> {question.question} </h3>
      <div className="options">{renderButton}</div>
      {hasAnswer && (
        <button
          className="btn btn-ui"
          onClick={() => {
            dispatch({ type: "incrementIndex" });
          }}
        >
          Next
        </button>
      )}
    </div>
  );
}

export default MountQuestions;
