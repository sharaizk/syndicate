import styled from "styled-components";

export const ServicesContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  flex-direction: column;
  margin-bottom: 140px;
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
  margin-top: 20px;
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
  padding: 20px;
  cursor: pointer;
  transition: 0.2s all ease;
  :hover{
        border-color: #03989e;
        box-shadow: 1px 6px 21px -12px rgba(0,0,0,0.96);
        -webkit-box-shadow: 1px 6px 21px -12px rgba(0,0,0,0.96);
        -moz-box-shadow: 1px 6px 21px -12px rgba(0,0,0,0.96);
  }
  @media screen and (max-width:500px){
    width: 80vw;
  }

`;

export const CardTitleIconContainer=styled.div`
  flex:0.5;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const CardTitle=styled.h3`
  font-family: 'Gilroy-Regular',sans-serif;
  font-size: 30px;
  margin-bottom: 10px;
  color: #424242;
`

export const CardDescription=styled.p`
flex: 0.5;
  font-family: 'Gilroy-Regular',sans-serif;
  font-size: 16px;
  text-align: justify;
  color: #424242;
`

