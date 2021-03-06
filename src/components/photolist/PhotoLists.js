// import { useState, useEffect } from "react";
// import Axios from "axios";
import Card from "../card/Card"
import { PhotoList } from "./photolistStyles"
import { pictures } from "../../Data"

export const URL = "https://picture-searches.herokuapp.com/api/pictures/"

const PhotoLists = () => {
    // const [photos, setPhotos] = useState([]);

    // useEffect(() => {
    //     Axios.get(URL)
    //         .then((res) => setPhotos(res.data.results))
    //         .catch(
    //             console.log("failed to fetch data")
    //         );
    // }, [])


    return (
        <PhotoList>
            {pictures.map((pic) => {
                return(
                    <Card pic={pic} key={pic.id}/>
                )
            })
            }
        </PhotoList>
    )
}

export default PhotoLists