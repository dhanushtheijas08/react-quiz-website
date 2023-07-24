function Progress({
  totalQuestions,
  questionAttended,
  totalpoints,
  gainedPoints,
}) {
  return (
    <div className="progress">
      <h2>
        {questionAttended || 0} / {totalQuestions} question
      </h2>
      <h2>
        {gainedPoints || 0} / {totalpoints} points
      </h2>
    </div>
  );
}

export default Progress;
