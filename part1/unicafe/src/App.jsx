import { useState } from 'react'

function FeedbackButton({ onClick, text }) {
  return (
    <button onClick={onClick}>{text}</button>
  )
}

function Statistics({ good, neutral, bad }) {
  const all = good + neutral + bad
  const average = (good - bad) / all
  const positive = good * 100 / all
  return (
    <>
      <h1>statistics</h1>
      {
        all > 0
          ? (
          <table>
            <tbody>
              <tr>
                <td>good</td>
                <td>{good}</td>
              </tr>
              <tr>
                <td>neutral</td>
                <td>{neutral}</td>
              </tr>
              <tr>
                <td>bad</td>
                <td>{bad}</td>
              </tr>
              <tr>
                <td>all</td>
                <td>{all}</td>
              </tr>
              <tr>
                <td>average</td>
                <td>{average}</td>
              </tr>
              <tr>
                <td>positive</td>
                <td>{positive}</td>
              </tr>
            </tbody>
          </table>
          ) : ('No feedback given')
      }
    </>
    
  )
}

function App() {
  const [ good, setGood ] = useState(0)
  const [ neutral, setNeutral ] = useState(0)
  const [ bad, setBad ] = useState(0)
  
  function handleClick(feedback) {
    switch (feedback) {
      case 'good':
        setGood(good + 1)
        break
      case 'neutral':
        setNeutral(neutral + 1)
        break;
      case 'bad':
        setBad(bad + 1)
        break
      default:
        break
    }
  }

  return (
    <>
      <h1>give feedback</h1>
      <FeedbackButton onClick={() => handleClick('good')} text='Good' />
      <FeedbackButton onClick={() => handleClick('neutral')} text='Nutral' />
      <FeedbackButton onClick={() => handleClick('bad')} text='Bad' />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  )
}

export default App
