import React from "react";
import { LandSectionContainer, LandSectionImage,LandSectionText, InfoWrapper } from "./LandSectionElements";
import Particles from "react-particles-js";
import particlesConfig from "./ParticlesConfig";
import SyndicateDesktop from "../../assets/SyndicateMediumT.png";
import "./style.css";
const LandSection = () => {
  return (
    <>
      <LandSectionContainer id="home">
        <Particles
          className="particleAnimation"
          height="84.29926238145416vh"
          width="100vw"
          params={particlesConfig}
        />
        <InfoWrapper>
        <LandSectionImage src={SyndicateDesktop} />
        <LandSectionText>At Syndicate, 
            we aim to serve the latest technologies 
            <br/>with efficiency, 
            environment, relationships and perfection. 
            <br/>
            Our Team is passionate about it's customers
            <br/>and is keen to solve their problems.
            <br/>
            Here at Synidcate, We believe in Team Work</LandSectionText>
        </InfoWrapper>
        contact us
      </LandSectionContainer>
    </>
  );
};

export default LandSection;
