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