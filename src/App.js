import React, { useState, useEffect } from 'react' 
import Prompt from './Prompt';
import data from './data.json'
import { getNextQuestionAndAnswers } from './utils';


function App() {
  const [{ question, answers, correctAnswer }, setQuestion] = useState(getNextQuestionAndAnswers(data, null))

  const [correctCount, setCorrectCount] = useState(0)
  const [doneCount, setDoneCount] = useState(0)
  const [answerClicked, setAnswerClicked] = useState(null)

  const handleOnComplete = (answerClicked) => {
    setAnswerClicked(answerClicked)
    if (correctAnswer) {
      setCorrectCount(correctCount + 1)
    }
    setDoneCount(doneCount + 1)
    
  }
  
  useEffect(() => {
    let waitTime;
    if (correctAnswer === answerClicked) {
      waitTime = 1000;
    } else {
      waitTime = 4000;
    }
    setTimeout(() => {
      setAnswerClicked(null)
      setQuestion(getNextQuestionAndAnswers(data, null))
    }, waitTime)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [doneCount])

  return (
    <Prompt
      question={question}
      options={answers}
      correctAnswer={correctAnswer}
      answerClicked={answerClicked}
      onComplete={handleOnComplete}
    />
  );
}

export default App;
