import React from 'react'
import PropTypes from 'prop-types';

const promptStyle = {
  height: '100vh',
  width: '500px',
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
  justifyContent: 'stretch'
}
const buttonStyle = {
  boxSizing: 'border-box',
  margin: '5px',
  width: '48%',
  border: '3px solid',
  display: 'flex',
  alignItems: 'baseline',
  justifyContent: 'center',
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
        return {...buttonStyle, backgroundColor: 'red'}
      }
      if (i === props.correctAnswer) {
        return {...buttonStyle, backgroundColor: 'green'}
      }
    }
    return buttonStyle
  }
  return (
    <div style={promptStyle}>
      <h4>Phrasal Verbs</h4>
      <div>{props.question}</div>
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
  onComplete: PropTypes.func
};

export default Prompt