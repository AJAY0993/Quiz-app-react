import logo from '../logo.svg'
import { useEffect, useReducer, useState } from 'react';
import Main from './Main'
import Error from './Error';
import Loader from './Loader';
import ProgressBar from './ProgressBar';
import Question from './Question';
import Home from './Home';
import FinishedScreen from './FinishedScreen'
//url = https://opentdb.com/api.php?amount=10&category=22&difficulty=medium&type=multiple
const initialState = {
  questions: [],
  hasAnswered: false,
  currentIndex: null,
  //loading,error,active,finished
  quizStatus: "notStarted",
  choosedIndex: null,
  score: 0,
  gameStart: false
}

// const [game,setGame] = useState(true)

function reducer(state, action) {
  switch (action.type) {
    case "fetchedQuestions":
      return { ...state, questions: action.payload, quizStatus: "active", currentIndex: 0 }
    case "error":
      return { ...state, status: "error" }
    case "answered":
      return { ...state, hasAnswered: true, choosedIndex: action.payload.index, score: state.score += action.payload.points }
    case "next":
      return { ...state, hasAnswered: false, currentIndex: state.currentIndex++, choosedIndex: null }
    case "finished":
      return { ...state, quizStatus: "finished" }
    case "playAgain":
      return { ...initialState }
    default:
      return "Invalid case"
  }
}
function App() {
  const [{ questions, hasAnswered, currentIndex, quizStatus, choosedIndex, score, gameStart }, dispatch] = useReducer(reducer, initialState)
  useEffect(() => {
    const fetchQuestion = async () => {
      try {
        const res = await fetch('https://opentdb.com/api.php?amount=10&category=22&difficulty=medium&type=multiple');
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
  }, [gameStart])
  return (
    <>
      {quizStatus === "notStarted" && <Home dispatch={dispatch} />}
      {quizStatus === "loading" && < Loader />}
      {quizStatus === "error" && <Error />}
      {quizStatus === "active" &&
        <Main>
          <ProgressBar questions={questions} currentIndex={currentIndex} />
          <Question question={questions[currentIndex]} dispatch={dispatch} hasAnswered={hasAnswered} choosedIndex={choosedIndex} currentIndex={currentIndex} />
        </Main>
      }
      {quizStatus === "finished" &&
        <Main>
          <FinishedScreen score={score} dispatch={dispatch} />
        </Main>}
    </>
  );
}

export default App;
