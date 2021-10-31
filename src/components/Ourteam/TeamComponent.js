import styled from "styled-components";

export const TeamCardContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  flex-direction: column;
  margin-bottom: 140px;
`;
export const OurTeamTitle = styled.h2`
  font-family: "Gilroy-Regular";
  text-transform: capitalize;
  color: #03989e;
`;

export const OurTeamSub = styled.h2`
  font-family: "Gilroy-Regular";
  text-transform: capitalize;
  color: #424242;
  font-size: 35px;
  font-weight: 700;
  letter-spacing: 5px;
  text-align: center;
`;

export const TeamDiv = styled.div`
  margin-top: 20px;
  display: grid;
  display: grid;
  height: 100%;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(1, 1fr);
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
export const ProfileCard = styled.div`
  height: 375px;
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
  :hover {
    border-color: #03989e;
    box-shadow: 1px 6px 21px -12px rgba(0, 0, 0, 0.96);
    -webkit-box-shadow: 1px 6px 21px -12px rgba(0, 0, 0, 0.96);
    -moz-box-shadow: 1px 6px 21px -12px rgba(0, 0, 0, 0.96);
  }
  :not(:last-child){
    margin-right: 10px;
  }
  @media screen and (max-width: 500px) {
    width: 80vw;
  }
`;

export const ProfileDetails=styled.div`
  flex:0.5;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const ProfileImg = styled.img`
  border-radius: 50%;
  height: 175px;
  width: 175px;
  box-shadow: -12px -11px 0px -1px rgba(207,200,200,0.75);
-webkit-box-shadow: -12px -11px 0px -1px rgba(207,200,200,0.75);
-moz-box-shadow: -12px -11px 0px -1px rgba(207,200,200,0.75);
  object-fit: cover;
  margin-bottom: 10px;
  :first-child{
    transform: rotate(5deg);
  }
`
export const Name=styled.label`
  font-family: 'ABeatByKaiRegular';
  font-size: 24px;
  color: #03989e;
  letter-spacing: 2px;
  margin-bottom: 10px;
`

export const Role=styled.p`
  font-family: 'ABeatByKaiRegular';
  font-size: 18px;
  color: #424242;
  letter-spacing: 2px;
`
export const CardDescription=styled.p`
  flex: 0.5;
  font-family: 'Gilroy-Regular',sans-serif;
  font-size: 16px;
  text-align: justify;
  color: #424242;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`