import { useState, useEffect } from "react";
import Axios from "axios";
import Card from "./Card"
import { PhotoList } from "./styles"

export const URL = "https://picture-searches.herokuapp.com/api/pictures/"

const PhotoLists = () => {
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        Axios.get(URL)
            .then((res) => setPhotos(res.data.results))
            .catch(
                console.log("failed to fetch data")
            );
    }, [])


    return (
        <PhotoList>
            {photos.map((photo) => {
                return(
                    <Card photo={photo} />
                )
            })
            }
        </PhotoList>
    )
}

export default PhotoLists