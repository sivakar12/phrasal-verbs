import React from 'react'
import PropTypes from 'prop-types';

const promptStyle = {
  height: '100vh',
  width: '500px',
  fontSize: '50px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'stretch',
  flexDirection: 'column',
  margin: 'auto'
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
  return (
    <div style={promptStyle}>
      <h4>Phrasal Verbs</h4>
      <div>{props.question}</div>
      <div style={optionsStyle}>
        {props.options.map(option => <div style={buttonStyle}>{option}</div>)}
      </div>
    </div>
  )
}

Prompt.propTypes = {
  question: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string),
  showAnswer: PropTypes.bool,
};

export default Prompt