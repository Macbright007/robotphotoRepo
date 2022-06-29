import styled from "styled-components"

export const CardContainer = styled.div`
    // border: 2px solid black;
    margin-top: 30px;
    padding: 10px;
    width: 100%;
    max-width: 250px;
`
export const ImgCard = styled.div`
    border: 2px solid rgba(0, 0, 0, 0.803);
    border-radius: 25px;
    border-top: 0;
    border-bottom: 0;
    padding: 7px;
    height: 40vh;

    img{
        height: 40vh;
        width: 100%;
        border-radius: 25px;
    }
`
export const CardContent = styled.div`
    border: 2px solid rgba(0, 0, 0, 0.803);
    text-align: center;
    font-weight: 700;
    margin-top: 15px;
    border-radius: 25px;
    border-left: 0;
    border-right: 0;
    border-top: 0;
`