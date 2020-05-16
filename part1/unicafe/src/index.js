import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Display = props => <div> <h1>{props.text}</h1> </div>

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Statistic = (props) => (
  <tr>
    <td>{props.name}</td>
    <td>{props.value}</td>
  </tr>
)

const Statistics = (props) => {
  const all = props.good + props.neutral + props.bad
  if (props.good + props.neutral + props.bad > 0) {
    return (
      <table>
        <tbody>
          <Statistic name="good" value={props.good} />
          <Statistic name="neutral" value={props.neutral} />
          <Statistic name="bad" value={props.bad} />
          <Statistic name="all" value={all} />
          <Statistic name="average" value={(props.good - props.bad) / (all)} />
          <Statistic name="positive" value={((props.good / all) * 100) + " %"} />
        </tbody>
      </table>
    )
  }
  return (
    <p>No feedback given</p>
  )
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setToGood = newValue => {
    setGood(newValue)
  }

  const setToNeutral = newValue => {
    setNeutral(newValue)
  }

  const setToBad = newValue => {
    setBad(newValue)
  }

  return (
    <div>
      <Display text="give feedback" />
      <Button handleClick={() => setToGood(good + 1)} text="good" />
      <Button handleClick={() => setToNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setToBad(bad + 1)} text="bad" />
      <Display text="statistics" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)