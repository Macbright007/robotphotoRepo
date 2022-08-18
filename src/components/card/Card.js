import { CardContainer, CardContent, ImgCard } from "./cardStyles"
import { MdDeleteForever } from "react-icons/md"

const Card = ({pic, handleDelete}) => {
    return (
        <CardContainer>
            <ImgCard>
                <img src={pic.image} alt="pic"/>
                <MdDeleteForever style={{position: "absolute", top: 20, right: 5, fontSize: 33, color: "#AB263A", cursor: "pointer"}} onClick={()=>handleDelete(pic)}/>
            </ImgCard>
            <CardContent>
                <p>{pic.title}</p>
            </CardContent>
        </CardContainer>
    )
}
export default Card