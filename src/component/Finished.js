function Finished({ maxPoints, points }) {
  return (
    <p className="result">
      Conguraltions You Scored {points} with{" "}
      {Math.round((points / maxPoints) * 100)}
    </p>
  );
}

export default Finished;
