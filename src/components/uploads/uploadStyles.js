import styled from "styled-components"

export const Form = styled.form`
    width: 100%;
    max-width: 500px;
    margin: auto;
    margin-top: 150px;


    input[type=text]{
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
export const FormCont = styled.form`
    width: 100%;
    max-width: 500px;
    box-sizing: border-box;
    margin: auto;
    padding: 20px;
    margin-top: 7rem;
    button{
        width:100%;
        max-width: 300px;
        margin: 30px 80px;
        padding: 10px;
        background: rgb(63, 54, 2);
        color: white;
        font-weight: 700;
        border: none;
        border-radius: 15px;
    }
    button:hover{
        cursor: pointer;
        background: rgb(147, 126, 3);
    }
`

export const InnerForm = styled.div`
    padding: 20px;
    margin-bottom: 20px;

    label{
        color: grey;
        font-weight: 700;
    }
    input[type=text]{
        border-radius: 7px;
        border: 2px solid grey;
        padding: 10px;
        width: 100%;
        margin-top: 7px;
    }
    input:focus{
        outline: none;
    }
`
export const InnerContent = styled.div`
    border: 3px dotted gray;
    width: 100%;
    max-width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 30px;

    label{
        color: grey;
        font-weight: 700;
        text-align: center;
    }
    input[type=file]{
        padding: 10px;
        width: 50%;
        margin: auto;
    }
    input:focus{
        outline: none;
    }
`



