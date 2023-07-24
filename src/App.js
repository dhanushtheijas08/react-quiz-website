import "./App.css";
import { useReducer } from "react";
import Header from "./component/Header";
const initalState = {
  questions: [],
  // "loading", "error", "ready", "active", "finished"
  status: "loading",
};
const reducer = function (state, action) {
  return initalState;
};
function App() {
  const [state, dispatch] = useReducer(reducer, initalState);

  return (
    <div>
      <Header />
    </div>
  );
}

export default App;
