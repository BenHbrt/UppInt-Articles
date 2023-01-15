import './App.scss'
import { useState } from 'react'

import Quiz from './components/Quiz';

function App() {

  // State to manage display
  const [display, setDisplay] = useState("quiz")
  // State to manage score
  const [score, setScore] = useState(0)
  // State to manage question Number
  const [questionNum, setQuestionNum] = useState(0)

  return (
    <div className="App">
      <div className='title'>
        Upp-Int Articles
      </div>
      <div className="main">
        {display === "quiz" && <Quiz score={score} setScore={setScore} questionNum={questionNum} setQuestionNum={setQuestionNum}/>}
      </div>
    </div>
  );
}

export default App;
