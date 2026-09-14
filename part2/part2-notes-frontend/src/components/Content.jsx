import Part from "./Part"

const Content = (props) => {

    console.log(props)

    const courseParts = props.courseParts
        
    return(
    <div>
    {courseParts.map(part => <Part key={part.id} name={part.name} exercises={part.exercises}/>)}
    </div>
    )

    }

export default Content