import Button from "./Button"

function FinishedScreen({ score, dispatch }) {
    function playAgain() {
        dispatchEvent({ type: "playAgain" })
    }
    return (
        <div>
            <img src="/congrats.svg"></img>
            <p className="congrats-message">Congrats! You completed the quiz.</p>
            <p className="score-stats">You answer {score / 10} correctly.</p>
            <Button className="btn-ui" onClickHandler={playAgain}>Play again</Button>
        </div>
    )
}

export default FinishedScreen
