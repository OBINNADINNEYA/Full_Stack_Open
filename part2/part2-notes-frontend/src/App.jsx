import { useState } from 'react'
import Person from './components/Person'

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
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

   const handlePersonChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
    }

  //add the submit handler and stop the default setting 
    const addPerson = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)

    //create the new person to save 
    const personObject = {
    name : newName,
    }

    // append person to persons only if the person doesnt already exist 
    const nameExists = persons.some(person => person.name.toLowerCase().trim() == personObject.name.toLowerCase().trim())

    //add if name doesnot exist 
    if (!nameExists){
       setPersons(persons.concat(personObject)) 
    }
    else {
      alert(`${personObject.name} is already added to the phonebook`);
    }
    setNewName('')

  }

  

  
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handlePersonChange}/>
        </div>
        <div>
          <button type="submit" >add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        {persons.map(person => <Person key={persons.indexOf(person)} person={person}/>)}



      <div>debug: {newName}</div>
    </div>
  )
}

export default App 
