import styled from "styled-components";

export const PhotoList = styled.div`
  // border: 2px solid red;
  width: 100%;
  max-width: 1300px;
  margin: auto;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  max-width: 150px;
  margin: 20px auto;    

  button {
    border: none;
    width: 100%;
    background-color: #AB263A;
    border-radius: 5px;
    color: white;
    font-size: 17px;
    padding: 13px 20px;
    text-decoration: none;
    transition: background-color 0.3s;
  }

  button:hover:not(.active) {
    background-color: #3B0808;
    cursor: pointer;
  }
`;
