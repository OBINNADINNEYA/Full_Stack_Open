import { useState } from 'react'
import Person from './components/Person'
import Header from './components/Header'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'

// const App = () => {

  

//   const courses = [
//       {
//         name: 'Half Stack application development',
//         id: 1,
//         parts: [
//           {
//             name: 'Fundamentals of React',
//             exercises: 10,
//             id: 1
//           },
//           {
//             name: 'Using props to pass data',
//             exercises: 7,
//             id: 2
//           },
//           {
//             name: 'State of a component',
//             exercises: 14,
//             id: 3
//           },
//           {
//             name: 'Redux',
//             exercises: 11,
//             id: 4
//           }
//         ]
//       }, 
//       {
//         name: 'Node.js',
//         id: 2,
//         parts: [
//           {
//             name: 'Routing',
//             exercises: 3,
//             id: 1
//           },
//           {
//             name: 'Middlewares',
//             exercises: 7,
//             id: 2
//           }
//         ]
//       }
//     ]


//   return (
  
//   <Course courses={courses} />

// )
// }


// const App = (props) => {
//   const [notes, setNotes] = useState(props.notes)
//   const [newNote, setNewNote] = useState('a new note...') 
//   const [showAll, setShowAll] = useState(true)

//   //variable that == notes when showall is true and when false shows only important ones
//   const notesToShow = showAll
//   ? notes
//   : notes.filter(note => note.important)

//   //event handler for the submit 
//   const addNote = (event) => {
//     event.preventDefault()
//     console.log('button clicked', event.target)

//     //create the new note to save 
//     const noteObject = {
//     content: newNote,
//     important: Math.random() < 0.5,
//     id: String(notes.length + 1),
//     }

//     //update the notes with new note and set new note back to empty string
//     setNotes(notes.concat(noteObject))
//     setNewNote('')
  

//   }

//     const handleNoteChange = (event) => {
//     console.log(event.target.value)
//     setNewNote(event.target.value)
//   }

//   const handleFilterClick = () => setShowAll(!showAll)

//   return (
//     <div>
//       <h1>Notes</h1>
//       <div>
//         <button onClick={() => setShowAll(!showAll)}>
//           show {showAll ? 'important' : 'all'}
//         </button>
//       </div>
//       <ul>
//         {notesToShow.map(note => 
//           <Note key={note.id} note={note} />
//         )}
//       </ul>
//       <form onSubmit={addNote}>
//         <input value={newNote} onChange={handleNoteChange}/>
//         <button type="submit">save</button>
//       </form> 
//     </div>
//   )
// }




const App = () => {
  const [persons, setPersons] = useState([
     { name: 'Arto Hellas', number: '647888787', id: 1 },
    { name: 'Ada Lovelace', number: '647888783', id: 2 },
    { name: 'Dan Abramov', number: '647888784', id: 3 },
    { name: 'Mary Poppendieck', number: '647888785', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newQuery, setnewQuery] = useState('')
  const [filteredPersons,setfilteredPersons]  = useState([])

   const handlePersonChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
    }

    const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
    }

    const handleFilterChange = (event) => {
      const query = event.target.value
      console.log(query)
      setnewQuery(query)
      setfilteredPersons(
        persons.filter((person) =>
          person.name.toLowerCase().includes(query.toLowerCase())
        )
      )
      console.log(filteredPersons)
    }

    const addPerson = (event) => {
      event.preventDefault()
      console.log('button clicked', event.target)

      //create the new person to save 
      const personObject = {
      name : newName,
      number: newNumber
      }

      // append person to persons or number only if the person doesnt already exist and if none are empty 
      const nameExists = persons.some(person => person.name.toLowerCase().trim() == personObject.name.toLowerCase().trim())
      const numberExists = persons.some(person => person.number.toLowerCase().trim() == personObject.number.toLowerCase().trim())

      if (!nameExists && !numberExists){
        setPersons(persons.concat(personObject)) 
      }
      else {
        alert(`${personObject.name} or ${personObject.number} is already added to the phonebook`);
      }
      setNewName('')
      setNewNumber('')

    }

  

  
  return (
    <div>
      <Header title='Phonebook'/>
        <Filter value={newQuery} handleFilterChange={handleFilterChange}/>
        <PersonForm addPerson={addPerson} handleNumberChange={handleNumberChange} handlePersonChange={handleNumberChange} newName={newName} newNumber={newNumber}/>
      
      <Header title='Numbers'/>
        {filteredPersons.length > 0 ? (
          filteredPersons.map(person => <Person key={person.id} person={person}/>)) :
          persons.map(person => <Person key={person.id} person={person}/>)
        }
      {/* <div>debug: {newName} : {newNumber}</div> */}
    </div>
  )
}

export default App 
