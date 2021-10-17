import styled from 'styled-components'
import Lottie from 'react-lottie-player'
export const PortfolioContainer=styled.div`
    height: 84.29926238145416vh;
    width: 100%;
    display: flex;

    align-items: center;
    flex-direction: column;
    margin-bottom: 130px;
`
export const PortfolioTitle = styled.h2`
  font-family: "Gilroy-Regular";
  text-transform: capitalize;
  color: #03989e;
`;

export const OurWork = styled.h2`
  font-family: "Gilroy-Regular";
  text-transform: capitalize;
  color: #424242;
  font-size: 35px;
  font-weight: 700;
  letter-spacing: 5px;
  text-align: center;
`;


export const PortfolioUnderConstruction = styled(Lottie)`
    height: 52.68703898840885vh;
    width: 52.68703898840885vh;
`