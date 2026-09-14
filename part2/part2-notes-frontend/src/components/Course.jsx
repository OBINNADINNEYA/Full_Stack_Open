import Content from "./Content"
import Header from "./Header"

const Total = (props) => <p style={{ fontWeight: 'bold' }} >Number of exercises {props.total}</p>


const Course = (props) => {
  console.log (props)
  const courses = props.courses
 
  return (
    // for each course in props.courses we want to render below using map
    <div>
      {courses.map(course => 
        <div key={course.id}>
        <Header courseName={course.name} />
        <Content courseParts={course.parts}/>
        <Total total={course.parts.map(part => part.exercises).reduce((total, exerciseCount) => total + exerciseCount, 0)}/>
        </div>)
      }
    </div>
  
  )
}

export default Course