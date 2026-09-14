const Filter = (props) => {

  return (
        <div>
          filter shown with a <input value={props.value} onChange={props.handleFilterChange}/>
        </div>
         )
}

export default Filter