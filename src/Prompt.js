import React from 'react'
import PropTypes from 'prop-types';

const promptStyle = {
  height: '100vh',
  width: 'min(500px, 100vw)',
  fontSize: '30px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'stretch',
  flexDirection: 'column',
  margin: 'auto',
  fontFamily: 'Merriweather, serif'
}
const optionsStyle = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'stretch',
  paddingBottom: '120px'
}
const buttonStyle = {
  boxSizing: 'border-box',
  margin: '5px',
  width: 'max(250px, 100vw)',
  border: '3px solid black',
  display: 'flex',
  alignItems: 'baseline',
  justifyContent: 'center',
}

const meaningStyle = {
  fontSize: '40px',
  color: 'blue',
  border: '5px solid blue',
  width: '80%', 
  margin: 'auto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '30px'
}

const Prompt = props => {
  const makeClickHandler = (index) => {
    return () => {
      props.onComplete(index)
    }
  }
  const getButtonStyle = (i) => {
    if (props.answerClicked !== null) {
      if (i === props.answerClicked && props.answerClicked !== props.correctAnswer) {
        return {...buttonStyle, backgroundColor: 'red', color: 'white' }
      }
      if (i === props.correctAnswer) {
        return {...buttonStyle, backgroundColor: 'green', color: 'white' }
      }
    }
    return buttonStyle
  }
  return (
    <div style={promptStyle}>
      <h4>Phrasal Verbs</h4>
      <div>{props.question}</div>
      {(props.answerClicked !== null && props.answerClicked !== props.correctAnswer) && <div style={meaningStyle}>
        {props.options[props.correctAnswer]}: {props.meaning}
      </div>}
      <div style={optionsStyle}>
        {
          props.options.map((option, i) => 
            <div key={i} style={getButtonStyle(i)} onClick={makeClickHandler(i)}>{option}</div>
          )
        }
      </div>
    </div>
  )
}

Prompt.propTypes = {
  question: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string),
  correctAnswer: PropTypes.number,
  meaning: PropTypes.string,
  onComplete: PropTypes.func
};

export default Prompt