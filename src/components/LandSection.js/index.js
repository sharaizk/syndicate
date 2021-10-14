import React from "react";
import {
  LandSectionContainer,
  LandSectionImage,
  LandSectionText,
  ContactUs,
} from "./LandSectionElements";
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
          params={particlesConfig}
        />
        
          <LandSectionImage src={SyndicateDesktop} />
          <LandSectionText>
            At Syndicate, we aim to serve the latest technologies with
            efficiency, environment, relationships and perfection. Our Team is
            passionate about it's customers and is keen to solve their problems.
            Here at Synidcate, We believe in Team Work
          </LandSectionText>
        <ContactUs to="contactus">
          <span>Contact Us</span>
          <svg width="15px" height="10px" viewBox="0 0 13 10">
            <path d="M1,5 L11,5"></path>
            <polyline points="8 1 12 5 8 9"></polyline>
          </svg>
        </ContactUs>
      </LandSectionContainer>
    </>
  );
};

export default LandSection;
