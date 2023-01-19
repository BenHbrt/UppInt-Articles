import './App.scss'
import { useState, useRef } from 'react'

import Quiz from './components/Quiz';
import Credits from './components/Credits';
import Landing from './components/Landing';
import Results from './components/Results';

function App() {

  // State to manage display
  const [display, setDisplay] = useState("landing")
  // State to manage score
  const [score, setScore] = useState(0)
  // State to manage question Number
  const [questionNum, setQuestionNum] = useState(0)
  const gameStage = useRef("start")

  return (
    <div className="App">
      <div className='title'>
        Upp-Int Articles
      </div>
      <div className="main">
        {display === "quiz" && <Quiz score={score} setScore={setScore} questionNum={questionNum} setQuestionNum={setQuestionNum} gameStage={gameStage} setDisplay={setDisplay}/>}
        {display === "credits" && <Credits setDisplay={setDisplay} gameStage={gameStage}/> }
        {display === "landing" && <Landing setDisplay={setDisplay} />}
        {display === "results" && <Results setDisplay={setDisplay} score={score}/>}
      </div>
    </div>
  );
}

export default App;
