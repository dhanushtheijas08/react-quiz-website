import "./App.css";
import { useEffect, useReducer } from "react";
import Header from "./component/Header";
import Loader from "./component/Loader";
import Error from "./component/Error";
import Main from "./component/Main";
import Home from "./component/Home";
import MountQuestions from "./component/MountQuestions";
const initalState = {
  questions: [],
  // "loading", "error", "ready", "active", "finished"
  status: "loading",
  index: 0,
};
const reducer = function (state, action) {
  switch (action.type) {
    case "dataReceived":
      return { ...state, questions: action.payload, status: "ready" };

    case "dataFailed":
      return { ...state, status: "error" };

    case "ready":
      return { ...state, status: "active" };
    default:
      break;
  }
};
function App() {
  const [{ questions, status, index }, dispatch] = useReducer(
    reducer,
    initalState
  );

  useEffect(() => {
    fetch("http://localhost:9000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch((err) => dispatch({ type: "dataFailed" }));
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
          <MountQuestions
            questions={questions}
            index={index}
            dispatch={dispatch}
          />
        )}
      </Main>
    </div>
  );
}

export default App;
