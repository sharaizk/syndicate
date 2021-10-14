import styled from "styled-components";
import { Link as LinkS } from "react-scroll";
export const LandSectionContainer = styled.div`
  height:  86.3013698630137vh;
  margin-bottom: 130px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  flex-direction: column;
  @media screen and(max-width:800px){
    height: 700px;
  }
`;

export const LandSectionImage = styled.img`
  height: 100%;
  z-index:1;    
  max-height: 100px;
  max-width: 100%;
  margin-bottom: 25px;

  @media screen and (max-width: 360px) {
    height: 42.14963119072708vh;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 100%;
  margin-bottom: 100px;
  @media screen and (max-width: 1120px) {
    flex-direction: column;
  }
`;

export const LandSectionText = styled.p`
  font-size: calc(0.75em + 1vmin);
  text-align:justify;
  width: 50%;
  font-family: "Gilroy-Medium";
  color: #454545;
  margin-bottom: 25px;

  /* @media screen and (max-width: 700px) {
    font-size: 1.25em;
  }
  @media screen and (max-width: 500px) {
    font-size: 1em;
  }*/
  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;

export const ContactUs = styled(LinkS)`
 position: relative;
 cursor: pointer;
 padding: 12px 18px;
 transition: all 0.2s ease;
 border: none;
 outline: none;
 background: none;
  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    border-radius: 50px;
    background: #424242;
    width: 45px;
    height: 45px;
    transition: all 0.3s ease;
  }
  span {
 position: relative;
 font-family: "Gilroy-Medium", sans-serif;
 font-size: 18px;
 font-weight: 700;
 letter-spacing: 0.05em;
 color: #03989E;
}
svg {
 position: relative;
 top: 0;
 margin-left: 10px;
 fill: none;
 stroke-linecap: round;
 stroke-linejoin: round;
 stroke:#03989E;
 stroke-width: 2;
 transform: translateX(-5px);
 transition: all 0.3s ease;
}
:hover:before {
 width: 100%;
 background: #424242;
}
:hover svg {
 transform: translateX(0);
}
:active {
 transform: scale(0.95);
}
`;

export const CardComponent = styled.div`
  height: 353px;
  width: 350px;
  background-color: red;
`
