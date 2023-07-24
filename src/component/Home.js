function Home({ questions, dispatch }) {
  return (
    <div>
      <h2>Welcome to the React Quiz</h2>
      <h3>{questions.length} questions are there to test your react skills</h3>
      <button className="btn">Let's Start</button>
    </div>
  );
}
export default Home;
