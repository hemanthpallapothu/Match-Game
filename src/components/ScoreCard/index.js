import './index.css'

const ScoreCard = props => {
  const {onPlayAgain, score} = props

  return (
    <div className="score-card-bg-container">
      <img
        alt="trophy"
        className="trophy-img"
        src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
      />
      <h1 className="your-score-label">Your Score</h1>
      <h1 className="score">{score}</h1>

      <button type="button" className="play-again-button" onClick={onPlayAgain}>
        <img
          alt="reset"
          src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png "
        />
        Play Again
      </button>
    </div>
  )
}

export default ScoreCard
