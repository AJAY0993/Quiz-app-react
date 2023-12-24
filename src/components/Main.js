import { useEffect } from "react";
function Main({ children, dispatch, url }) {
    useEffect(() => {
        const fetchQuestion = async () => {
            try {
                const res = await fetch(url);
                const data = await res.json();
                if (data.results.length < 1) {
                    dispatch({ type: "error" })
                    throw new Error("Some error happened in fetching questions")
                }
                const questions = data.results.map(x => {
                    const question = x.question
                    const options = [x.correct_answer, ...x.incorrect_answers]
                    options.sort(() => Math.random() - 0.5)
                    const correctIndex = options.findIndex(opt => opt === x.correct_answer)
                    return { question, options, correctIndex }
                })
                dispatch({ type: "fetchedQuestions", payload: questions })
            }
            catch (err) {
                console.log(err)
            }
        }
        fetchQuestion()
    }, [])
    return (
        <main className="container">
            {children}
        </main>
    )
}

export default Main
