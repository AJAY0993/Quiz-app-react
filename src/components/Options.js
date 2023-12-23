function Options({ incorrect, correct, hasAnswered, dispatch, correctIndex, options, choosedIndex }) {
    return (
        <div className="options">
            {options.map((option, i) => <Option option={option} key={i} index={i} correctIndex={correctIndex} hasAnswered={hasAnswered} dispatch={dispatch} choosedIndex={choosedIndex} />)}
        </div>
    )
}

function Option({ option, correctIndex, hasAnswered, dispatch, index, choosedIndex }) {
    function onClickHandler(i) {
        dispatch({ type: "answered", payload: { index: i, points: i === correctIndex ? 10 : 0 } })
    }
    return (
        <button className={`option ${choosedIndex === index && "choosed"}`} onClick={() => onClickHandler(index)} disabled={hasAnswered}>{option}
            {hasAnswered && index === correctIndex && <i className="correct">✅</i>}
            {hasAnswered && index !== correctIndex && <i className="incorrect">❌</i>}
        </button>
    )
}
export default Options
