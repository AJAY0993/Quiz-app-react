import './radio.css'
import { useState } from "react"
import Button from "./Button"
function Home({ dispatch }) {
    const [difficulty, setDifficulty] = useState("easy");
    const [selectCategory, setSelectedCategory] = useState('9');
    const [numQuestions, setNumQuestions] = useState(10)
    //https://opentdb.com/api.php?amount=10&category=25&type=multiple
    function onChange(e) {
        setDifficulty(e.target.value)
    }
    function onChangeCategory(e) {
        setSelectedCategory(e.target.value)
    }
    function onChangeNumQuestions(e) {
        const value = +e.target.value
        if (value >= 5 && value <= 20) {
            setNumQuestions(value);
        }
    }
    function onClickHandler() {
        dispatch({
            type: "startGame", payload: {
                url: `https://opentdb.com/api.php?amount=${numQuestions}&category=${selectCategory}&type=multiple&difficulty=${difficulty}`
            }
        })
    }
    return (<>
        <main className='container'>
            <h1 className='title' value="gk">Quiz</h1>
            <h3>Select No of questions</h3>
            <input type='number' value={numQuestions} min="5" max="20" onChange={onChangeNumQuestions}></input>
            <h3>Select category</h3>
            <select value={selectCategory} onChange={onChangeCategory}>
                <option value="9">
                    General knowledge
                </option>
                <option value="11">
                    Entertainment:Film
                </option>
                <option value="10">
                    Entertainment: Books
                </option>
                <option value="12">
                    Entertainment: Music
                </option>
                <option value="17">
                    Science and Nature
                </option>
                <option value="18">
                    Science: Computers
                </option>
                <option value="19">
                    Science: Mathematics
                </option>
                <option value="20">
                    Mythology
                </option>
            </select>
            <div className='difficulty-selection-box'>
                <h3>Select difficulty</h3>
                <div className='radio-input'>
                    <label>Easy<input className="input green" type="radio" id="easy" name="difficulty" value="easy" checked={difficulty === "easy"} onChange={onChange}></input></label>
                    <label>Medium<input className="input yellow" type="radio" id="medium" name="difficulty" value="medium" checked={difficulty === "medium"} onChange={onChange}></input></label>
                    <label>Hard<input className="input red" type="radio" id="medium" name="difficulty" value="hard" checked={difficulty === "hard"} onChange={onChange}></input></label>
                </div>
            </div>
            <Button className="btn-ui" onClickHandler={onClickHandler}>Start Game</Button>
        </main>
    </>
    )
}

export default Home
