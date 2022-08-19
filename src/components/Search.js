import { Form } from "./uploads/uploadStyles"
import { useState } from "react"
// import { URL } from "./photolist/PhotoLists"

const Search = ({ onSubmit }) => {
    const [value, setValue] = useState("")
    // const [filteredResults, setFilteredResults] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault()

        onSubmit(value)
    }

    const getSearchedValue = (e) => {
        setValue(e.target.value)
    }


   
    return(
        <Form onSubmit={handleSubmit} >
            <input type="text" value={value} placeholder="Enter search..." onChange={getSearchedValue}/>
            <h1>{value}</h1>
        </Form>
    )
}

export default Search