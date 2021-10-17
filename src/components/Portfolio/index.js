import React from 'react'
import {PortfolioContainer, PortfolioTitle,PortfolioUnderConstruction,OurWork} from './PortfolioElements'
import UnderConstruction from '../../assets/animations/Underconstruction.json'
const Portfolio = () => {
    return (
        <PortfolioContainer id="portfolio">
            <PortfolioTitle>Portfolio</PortfolioTitle>
            <OurWork>
            Some of Our Recent Works
            </OurWork>
            <PortfolioUnderConstruction 
                  loop
                  animationData={UnderConstruction}
                  play
               
            />
        </PortfolioContainer>
    )
}

export default Portfolio
