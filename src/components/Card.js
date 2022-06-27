import { CardContainer, CardContent, ImgCard } from "./styles"

const Card = ({photo}) => {
    console.log(photo.image)
    return (
        <CardContainer>
            <ImgCard>
                <img src={photo.image} alt="pic"/>
            </ImgCard>
            <CardContent>
                <p>{photo.title}</p>
            </CardContent>
        </CardContainer>
    )
}

export default Card