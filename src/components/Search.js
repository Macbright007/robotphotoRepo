import { Form } from "./uploads/uploadStyles"
import { useState } from "react"

const Search = ({ onSubmit }) => {
    const [value, setValue] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit(value)
    }

    const handleSearchValueChange = (e) => {
        setValue(e.target.value)
    }

    return(
        <Form onSubmit={handleSubmit} >
            <input type="text" value={value} placeholder="Enter search..." onChange={handleSearchValueChange}/>
            <h1>{value}</h1>
        </Form>
    )
}

export default Search