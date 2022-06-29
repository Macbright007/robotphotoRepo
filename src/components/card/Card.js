import { CardContainer, CardContent, ImgCard } from "./cardStyles"

const Card = ({pic}) => {
    return (
        <CardContainer>
            <ImgCard>
                <img src={pic.img} alt="pic"/>
            </ImgCard>
            <CardContent>
                <p>{pic.title}</p>
            </CardContent>
        </CardContainer>
    )
}
export default Card