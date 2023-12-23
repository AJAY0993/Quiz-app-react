function Progress({ numQuestions, questions, currentIndex }) {
    return (
        <ul className="progress">
            {questions.map((x, i) => <ProgressBtn num={i} key={i} currentIndex={currentIndex} />)}
        </ul>
    )
}

function ProgressBtn({ num, currentIndex }) {
    return (
        <li className={`${num <= currentIndex ? "progressBtn filled" : "progressBtn"}`}>
            {num + 1}
        </li>
    )
}
export default Progress
