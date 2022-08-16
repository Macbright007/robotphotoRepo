import { Form } from "./uploads/uploadStyles"
import { useState } from "react"
// import { URL } from "./photolist/PhotoLists"

const Search = () => {
    const [searchWord, setSearchWord] = useState("")
    // const [filteredResults, setFilteredResults] = useState([]);

    const getSearchedValue = (e) => {
        setSearchWord(e.target.value)

        // if (searchWord !== '') {
        //     const filteredData = photos.filter((item) => {
        //         return Object.values(item).join('').toLowerCase().includes(searchWord.toLowerCase())
        //     })
        //     setFilteredResults(filteredData)
        // }
        // else{
        //     setFilteredResults(photos)
        // }
    }


   
    return(
        <Form>
            <input type="text" value={searchWord} placeholder="Enter search..." onChange={getSearchedValue}/>
            <h1>{searchWord}</h1>
        </Form>
    )
}

export default Search