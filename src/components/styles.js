import styled from "styled-components"

export const PhotoList = styled.div`
    // border: 2px solid red;
    width: 100%;
    max-width: 800px;
    margin: auto;
    padding: 20px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
`
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
    padding: 20px;
    height: 30vh;
`
export const CardContent = styled.div`
    border: 2px solid rgba(0, 0, 0, 0.803);
    text-align: center;
    font-weight: 700;
    margin-top: 15px;
    border-radius: 25px;
    border-left: 0;
    border-right: 0;
`
export const Form = styled.form`
    width: 100%;
    max-width: 500px;
    margin: auto;
    margin-top: 150px;


    input[type=search]{
        padding: 10px;
        border-color: rgba(0, 0, 0, 0.803);
        border-radius: 10px;
        border-top: 0;
        border-left: 0;
        border-right: 0;
        width: 100%;
        outline: none;
        font-size: 16px;
    }
`
export const Navcontainer = styled.div`
    border: 2px solid #0f0033;
    background: rgba(0, 0, 0, 0.803);
    padding: 30px;
    position: fixed;
    width: 100%;
    margin-top: -150px;
`

export const Navitems = styled.div`
    border: 2px solid black;
    border: none;
    position: absolute;
    left: 0;
    right: 0;
    width: 100%;
    max-width: 400px;
    margin: auto;
    text-align: center;
    padding: 10px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    
    a{
        color: black;
        font-size: 2rem;
        font-weight: 700;
        padding: 0 30px;
    }
`



