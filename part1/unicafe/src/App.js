import { useState } from 'react'

const StatisticLine = (props) => {
  return (
      <tr>
        <td>
          {props.text} {props.value}
        </td>
      </tr>
    )
}

const Statistics = (props) => {
    if (props.allClicks === 0) {
      return (
        <div>
          <h1>Statistics</h1>
          <p> No Feedback Given </p>
        </div>
        )
    } else {
      return (
        <div>
          <table>
          <tbody>
            <tr>
              <td>
                <h1>Statistics</h1>
              </td>
            </tr>

            <StatisticLine text="good" value={props.good} />
            <StatisticLine text="neutral" value={props.neutral} />
            <StatisticLine text="bad" value={props.bad} />

            <tr>
              <td>
                ALL {props.allClicks}
              </td>
            </tr>
            <tr>
              <td>
                AVG { (props.good - props.bad) / props.allClicks }
              </td>
            </tr>
            <tr>
              <td>
                POS { (props.good/props.allClicks) * 100 }%
              </td>
            </tr>
            </tbody>
          </table>
        </div>
        )
      }
}

const Buttons = (props) => {
  return (
    <div>
      <button onClick={props.good}>good</button>
      <button onClick={props.neutral}>neutral</button>
      <button onClick={props.bad}>bad</button>
    </div>
    )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAll] = useState(0)

  // event handler for the good button
  const handleGoodClick = () => {
    setAll(allClicks + 1)
    setGood(good + 1)
  }

  // event handler for the neutral button
  const handleNeutralClick = () => {
    setAll(allClicks + 1)
    setNeutral(neutral + 1)
  }

  // event handler for the bad button
  const handleBadClick = () => {
    setAll(allClicks + 1)
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>Give Feedback!</h1>

      <Buttons good={handleGoodClick} neutral={handleNeutralClick} bad={handleBadClick}/>

      <Statistics good={good} bad={bad} neutral={neutral} allClicks={allClicks} />
    </div>
  )
}

export default App