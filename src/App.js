import { useReducer } from 'react';
import Main from './components/Main'
import Error from './components/Error';
import Loader from './components/Loader';
import ProgressBar from './components/ProgressBar';
import Question from './components/Question';
import Home from './components/Home';
import FinishedScreen from './components/FinishedScreen'
const initialState = {
  questions: [],
  hasAnswered: false,
  currentIndex: null,
  //loading,error,active,finished
  quizStatus: "notStarted",
  choosedIndex: null,
  score: 0,
  url: "https://opentdb.com/api.php?amount=10&category=22&difficulty=medium&type=multiple",
  gameState: "notStarted"
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
      return { ...state, quizStatus: "finished", gameState: "finished" }
    case "playAgain":
      return { ...initialState }
    case "startGame":
      return { ...state, url: action.payload.url, gameState: "started", quizStatus: "loading" }
    default:
      return "Invalid case"
  }
}
function App() {
  const [{ questions, hasAnswered, currentIndex, quizStatus, choosedIndex, score, gameState, url }, dispatch] = useReducer(reducer, initialState)
  return (
    <>
      {gameState === "notStarted" && <Home dispatch={dispatch} />}
      {/* {quizStatus === "notStarted" && <Home dispatch={dispatch} />} */}
      {gameState === "started" &&
        <Main dispatch={dispatch} url={url}>
          {quizStatus === "loading" && < Loader />}
          {quizStatus === "error" && <Error />}
          {quizStatus === "active" &&
            <>
              <ProgressBar questions={questions} currentIndex={currentIndex} />
              <Question question={questions[currentIndex]} dispatch={dispatch} hasAnswered={hasAnswered} choosedIndex={choosedIndex} currentIndex={currentIndex} numsQuestion={questions.length} />
            </>}
        </Main>}
      {gameState === "finished" &&
        <div className='container'>
          <FinishedScreen score={score} dispatch={dispatch} />
        </div>}
    </>
  );
}

export default App;


