import { useState } from 'react'
import Note from './components/Notes'

const Header = ({title}) => <h1>{title}</h1>
const Display = ({counter}) => <div>{counter}</div>

const Button = (props) => {
  const {onClick,text} = props
  console.log('props value is', props)
  return(
  <button onClick={onClick}> {text} </button>)
}

const StatisticLine = (props) => {
  return (
    <tr>
      <td> 
      {props.statsname} : {props.value} 
      </td>
    </tr>
  )
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

const Statistic = (props) => {
  const total = props.good + props.neutral + props.bad
  const average = total > 0 ? (total / 3) : 0
  const positivePercentage = total > 0 ? (props.good / total) * 100 : 0

  if (total === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }

  return (
    <table>
      <tbody>
      <StatisticLine statsname='good' value={props.good}/>
      <StatisticLine statsname='neutral' value={props.neutral}/>
      <StatisticLine statsname='bad' value={props.bad}/>
      <StatisticLine statsname='all' value={total}/>
      <StatisticLine statsname='average' value={average}/>
      <StatisticLine statsname='positive' value={`${positivePercentage.toFixed(1)} %`} />
      </tbody>
    </table>
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


// const App = () => {
//   // save clicks of each button to its own state
//   const [good, setGood] = useState(0)
//   const [neutral, setNeutral] = useState(0)
//   const [bad, setBad] = useState(0)

//   const handleGoodClick = () => {
//     const newValue = good + 1
//     setGood(newValue)
//   }
//   const handleNeutralClick = () => {
//     const newValue = neutral + 1
//     setNeutral(newValue)
//   }
//   const handleBadClick = () => {
//     const newValue = bad + 1
//     setBad(newValue)
//   }
  
  

//   return (
//     <div>
//       <>
//       <Header title='give feedback' />
//       </>

//       <div>
//         <Button onClick={handleGoodClick} text="good"/>
//         <Button onClick={handleNeutralClick} text="neutral"/>
//         <Button onClick={handleBadClick} text="bad"/>
//       </div>
      
//       <>
//       <Header title='statistics' />
//       </>
//       <Statistic good={good} neutral={neutral} bad={bad}/>

//     </div>
//   )
// }

// const App = () => {

//   function indexOfMax(arr) {
//       if (arr.length === 0) {
//           return -1;
//       }

//       var max = arr[0];
//       var maxIndex = 0;

//       for (var i = 1; i < arr.length; i++) {
//           if (arr[i] > max) {
//               maxIndex = i;
//               max = arr[i];
//           }
//       }

//       return maxIndex;
//   }
//   //get the list of anecdotes
//   const anecdotes = [
//     'If it hurts, do it more often.',
//     'Adding manpower to a late software project makes it later!',
//     'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
//     'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
//     'Premature optimization is the root of all evil.',
//     'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
//     'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
//     'The only way to go fast, is to go well.'
//   ]
  
//   // save clicks of each button to its own state
//   const [selected, setSelected] = useState(0)
//   const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))
//   const [mostVotes, setMaxVotes] = useState(0)

//   const handleAnecdoteClick = () => {
//     const newValue = Math.floor(Math.random() * anecdotes.length)
//     setSelected(newValue)
//   }

//   const handleVoteClick = () => {
//     //take in selected number and increase its corresponing vote by 1
//     const votesCopy = [...votes] 
//     votesCopy[selected] += 1
//     setVotes(votesCopy)

//     const newMostVotes = indexOfMax(votes)
//     setMaxVotes(newMostVotes)
//   }


//   return (
//     <div>
//       <>
//       <Header title="Anecdote of the Day"/>
//       </>

//       <p>{anecdotes[selected]}</p>
//       <p>has {votes[selected]} votes</p>
//       <Button onClick={handleAnecdoteClick} text="Next Anecdote" ></Button>
//       <Button onClick={handleVoteClick} text="Add Vote" ></Button>

//       <>
//       <Header title="Anecdote with most votes"/>
//       </>
//       <p>{anecdotes[mostVotes]}</p>
//     </div>
//   )


// }

const App = ({notes}) => {

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map(note => <Note key={note.id} note={note}/>)}
      </ul>
    </div>
  )
}

export default App