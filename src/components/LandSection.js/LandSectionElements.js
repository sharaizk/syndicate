import styled from "styled-components";
export const LandSectionContainer = styled.div`
    height: 84.29926238145416vh;
    width: 100%;
    background-color: #FBFBFF;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    flex-direction: column;
`

export const LandSectionImage = styled.img`
    z-index: 1;
    height: 52.68703898840885vh;
    width: auto;
    @media screen and (max-width:360px){
        height: 42.14963119072708vh;

    }
`

export const InfoWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 100%;
    @media screen and (max-width:1120px){
        flex-direction: column;
    }
`

export const LandSectionText = styled.p`
    font-size: 1.5em;
    text-align-last: justify;
    font-family: 'Gilroy-Medium';
    color:#454545;

    @media screen and (max-width: 700px){
        font-size: 1.25em;
    }
    @media screen and (max-width: 500px){
        font-size: 1em;
    }
`