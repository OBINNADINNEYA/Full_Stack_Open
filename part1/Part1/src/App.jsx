import { useState } from 'react'

const Header = ({title}) => <h1>{title}</h1>
const Display = ({counter}) => <div>{counter}</div>
const Statistic = (props) => <p>{props.feedback} : {props.count}</p>
const Button = (props) => {
  const {onClick,text} = props
  console.log('props value is', props)
  return(
  <button onClick={onClick}> {text} </button>)
}

const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}

// const App = () => {
//   const [left, setLeft] = useState(0)
//   const [right, setRight] = useState(0)
//   const [allClicks, setAll] = useState([])
//   const [total, setTotal] = useState(0)

//   const handleLeftClick = () => {
//     const updatedTotal = total + 1
//     const updatedLeft = left + 1
//     setLeft(updatedLeft)
//     setTotal(updatedTotal)
//     setAll(allClicks.concat('L'))
    
//   }

//   const handleRightClick = () => {
//     const updatedRight = right + 1
//     const updatedTotal = total + 1
//     setTotal(updatedTotal)
//     setAll(allClicks.concat('R'))
//     setRight(updatedRight)
//   }

//   //debugger

//   return (
//     <div>
//       {left}
//       <Button onClick={handleLeftClick} text="left"/>
//       <Button onClick={handleRightClick} text="right"/>
//       {right}
//       <History allClicks={allClicks} />
//     </div>
//   )
// }


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    const newValue = good + 1
    setGood(newValue)
  }
  const handleNeutralClick = () => {
    const newValue = neutral + 1
    setNeutral(newValue)
  }
  const handleBadClick = () => {
    const newValue = bad + 1
    setBad(newValue)
  }
  
  

  return (
    <div>
      <>
      <Header title='give feedback' />
      </>

      <div>
        <Button onClick={handleGoodClick} text="good"/>
        <Button onClick={handleNeutralClick} text="neutral"/>
        <Button onClick={handleBadClick} text="bad"/>
      </div>
      
      <>
      <Header title='statistics' />
      </>
      <Statistic feedback="good" count={good} />
      <Statistic feedback="neutral" count={neutral} />
      <Statistic feedback="bad" count={bad} />

    </div>
  )
}


export default App