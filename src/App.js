import "./App.css";
import { useEffect, useReducer } from "react";
import Header from "./component/Header";
import Loader from "./component/Loader";
import Error from "./component/Error";
import Main from "./component/Main";
import Home from "./component/Home";
import MountQuestions from "./component/MountQuestions";
import Progress from "./component/Progress";
import Finished from "./component/Finished";
const initalState = {
  questions: [],
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
  attendedQuestions: 0,
};
let maxPoints;
const reducer = function (state, action) {
  switch (action.type) {
    case "dataReceived":
      return { ...state, questions: action.payload, status: "ready" };

    case "dataFailed":
      return { ...state, status: "error" };

    case "startGame":
      return { ...state, status: "active" };

    case "clickedOption":
      const userPoint =
        action.payload.optionIndex === action.payload.correctOption
          ? state.points + action.payload.maxPoints
          : state.points;
      return {
        ...state,
        answer: action.payload.optionIndex,
        points: userPoint,
        attendedQuestions: state.attendedQuestions + 1,
      };

    case "incrementIndex":
      return { ...state, index: state.index + 1, answer: null };

    case "completed":
      return { ...state, status: "finished" };

    case "timeOut":
      return { ...state, status: "finished" };

    case "reset":
      return { ...initalState, questions: state.questions, status: "ready" };
    default:
      return "hi";
  }
};
function App() {
  const [
    { questions, index, status, answer, points, attendedQuestions },
    dispatch,
  ] = useReducer(reducer, initalState);

  if (questions.length > 0) {
    maxPoints = questions.reduce((accumulator, currentValue) => {
      if (typeof currentValue.points === "number")
        return accumulator + currentValue.points;
      return accumulator;
    }, 0);
  }
  useEffect(() => {
    fetch("http://localhost:9000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch(() => dispatch({ type: "dataFailed" }));
  }, []);

  return (
    <div>
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}

        {status === "ready" && (
          <Home questions={questions} dispatch={dispatch} />
        )}
        {status === "active" && (
          <>
            <progress
              max={questions.length}
              value={attendedQuestions}
            ></progress>
            <Progress
              totalQuestions={questions.length}
              attendedQuestions={attendedQuestions}
              totalpoints={maxPoints}
              gainedPoints={points}
            />
            <MountQuestions
              question={questions[index]}
              dispatch={dispatch}
              answer={answer}
              attendedQuestions={attendedQuestions}
            />
          </>
        )}

        {status === "finished" && (
          <Finished maxPoints={maxPoints} points={points} />
        )}
      </Main>
    </div>
  );
}

export default App;
