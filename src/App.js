import Prompt from './Prompt';
import data from './data.json'
import { getNextQuestionAndAnswers } from './utils';


function App() {
  const { question, answers, correctAnswer } = getNextQuestionAndAnswers(data, null)
  return (
    <Prompt
      question={question}
      options={answers}
      correctAnswer={correctAnswer}
    />
  );
}

export default App;
