import styled from "styled-components";

export const ServicesContainer = styled.div`
  height: 91.5vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  flex-direction: column;
  margin-top: 50px;
`;

export const Servicesdivider = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
`

export const ServicesTitle = styled.h2`
  font-family: "Gilroy-Regular";
  text-transform: capitalize;
  color: #03989e;
`;

export const OurServices = styled.h2`
  font-family: "Gilroy-Regular";
  text-transform: capitalize;
  color: #424242;
  font-size: 35px;
  font-weight: 700;
  letter-spacing: 5px;
  white-space: nowrap;
`;

export const CardContainer = styled.div`

  display: grid;
  display: grid;
  height: 100%;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  
  place-items: center;
  @media screen and (max-width:1140px){
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(auto, 1fr);
  }
  @media screen and (max-width:740px){
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(auto, 1fr);
  }
`;

export const CardComponent = styled.div`
  height: 353px;
  width: 350px;
  border: 2px dashed rgb(232, 232, 232);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  @media screen and (max-width:500px){
    width: 80vw;
  }
`;

export const CardTitle=styled.h3`
  font-family: 'Gilroy-Regular',sans-serif;
  font-size: 30px;

  color: #424242;
`

