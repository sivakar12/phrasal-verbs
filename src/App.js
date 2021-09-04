import data from './data.json'
import Prompt from './Prompt';

console.log(data)

function App() {
  return (
    <Prompt
      question="fill in the blanks"
      options={['one', 'two', 'three', 'four']}
    />
  );
}

export default App;
