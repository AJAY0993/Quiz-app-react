// import './radio.css'
import { useState } from "react"
import Button from "../components/Button"
import { Link } from 'react-router-dom';
function Home() {
    const [difficulty, setDifficulty] = useState(null);
    const [selectCategory, setSelectedCategory] = useState('');
    const [numQuestions, setNumQuestions] = useState(10)
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
    return (<>
        <main className='container'>
            <h1 className='title' value="gk">Quiz</h1>
            <h3>Select No of questions</h3>
            <input type='number' value={numQuestions} min="5" max="20" onChange={onChangeNumQuestions}></input>
            <h3>Select category</h3>
            <select value={selectCategory} onChange={onChangeCategory}>
                <option>
                    General knowledge
                </option>
                <option value="animals">
                    Animals
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
            <Button className="btn-ui"><Link to="/app">Start Game</Link></Button>
        </main>
    </>
    )
}

export default Home
