import Options from "./Options"
import Button from "./Button"
function Question({ question, dispatch, hasAnswered, choosedIndex, currentIndex, numsQuestion }) {

    function next() {
        dispatch({ type: "next" })
    }

    function finishQuiz() {
        dispatch({ type: "finished" })
    }
    return (
        <div className="question">
            <p className="question-text">{question.question}</p>
            <Options options={question.options} correctIndex={question.correctIndex} dispatch={dispatch} hasAnswered={hasAnswered} choosedIndex={choosedIndex} />
            {hasAnswered && currentIndex < numsQuestion - 1 && <Button onClickHandler={next} className="next-btn btn-ui">Next</Button>}
            {hasAnswered && currentIndex === numsQuestion - 1 && <Button onClickHandler={finishQuiz} className="finish-btn btn-ui">Finish</Button>}
        </div>
    )
}

export default Question
