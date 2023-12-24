function Progress({ numQuestions, questions, currentIndex }) {
    return (
        <>
            <ul className="progress big-screen">
                {questions.map((x, i) => <ProgressBtn num={i} key={i} currentIndex={currentIndex} />)}
            </ul>
            <progress className="small-screen" value={currentIndex + 1} max={questions.length}></progress>
        </>
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
