const cleanAnswer = (answer) => answer.toLowerCase().replace('..', ' ')

const getNextQuestionAndAnswers = (data, history) => {
  const totalItems = data.length;

  const questionIndex = Math.floor(Math.random() * totalItems)
  const closestItems = data[questionIndex]['closest_items'] 

  let answerOptions = new Set()
  while (answerOptions.size < 3) {
    const answerIndex = closestItems[Math.floor(Math.random() * closestItems.length)]
    let answerOption = data[answerIndex]['example_answer']
    if (answerOption !== data[questionIndex]['example_answer']) {
      answerOptions.add(answerOption)
    }
  }
  answerOptions = Array.from(answerOptions)
  const correctAnswer = Math.floor(Math.random() * 4)
  answerOptions.splice(correctAnswer, 0, data[questionIndex]['example_answer'])

  const question = data[questionIndex]['example_with_blanks']
  const answers = answerOptions.map(cleanAnswer)
  const meaning = data[questionIndex]['meaning']
  return {
    question,
    answers,
    correctAnswer,
    meaning
  }
}

export { getNextQuestionAndAnswers }