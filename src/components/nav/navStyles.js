import styled from "styled-components"

export const Navcontainer = styled.div`
    border: 2px solid #0f0033;
    background: rgba(0, 0, 0, 0.803);
    padding: 30px;
    position: fixed;
    top: 0;
    width: 100%;
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