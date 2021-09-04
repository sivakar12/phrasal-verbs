const getNextQuestionAndAnswers = (data, history) => {
  const totalItems = data.length;

  for (let i = 0; i < 4; i++) {
    let answersIndices = new Set()
    while (answersIndices.size < 4) {
      answersIndices.add(Math.floor(Math.random() * totalItems))
    }
    answersIndices = Array.from(answersIndices)
    const questionIndex = answersIndices[Math.floor(Math.random() * 4)]

    const question = data[questionIndex]['example_with_blanks']
    const answers = answersIndices.map(i => data[i]['example_answer'])
    return {
      question,
      answers,
      correctAnswer: questionIndex
    }
  }
}

export { getNextQuestionAndAnswers }