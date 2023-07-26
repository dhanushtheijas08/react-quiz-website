function Progress({
  totalQuestions,
  attendedQuestions,
  totalpoints,
  gainedPoints,
}) {
  return (
    <div className="progress pt-10">
      <h2>
        {attendedQuestions || 0} / {totalQuestions} question
      </h2>
      <h2>
        {gainedPoints || 0} / {totalpoints} points
      </h2>
    </div>
  );
}

export default Progress;
