import React from 'react'
import {TeamCardContainer, OurTeamTitle, OurTeamSub,TeamDiv} from './TeamComponent'
import sharaizimg from '../../assets/sharaiz.png'
import rehanimg from '../../assets/rehanshakir.png'
import sobanimg from '../../assets/muhammadsoban.png'
import Card from './Card'
const OurTeam = () => {
    const description={
        sharaiz:'Full stack developer who is proficient with MERN stack , ReactJS, Bootstrap, HTML5, CSS3, React Native. Additional skillset includes NodeJs, MySQL, PostgreSQL.',
        rehan:'Web Developer with experience in NodeJs, ExpressJs, MongoDB WordPress, HTML, CSS3, JavaScript, React, etc.',
        soban:'Full Stack Developer with experience in MERN stack. Proficient in NodeJS, ExpressJS and MongoDB with great opimization and performance'
    }
    return (
        <TeamCardContainer id="ourteam">
            <OurTeamTitle>
                Our Team
            </OurTeamTitle>
            <OurTeamSub>
                Equipped with latest technologies
            </OurTeamSub>
            <TeamDiv>
                <Card src={sharaizimg} name="Sharaiz Khan" description={description.sharaiz} role="Full-Stack Developer"/>
                <Card src={rehanimg} name="Rehan Shakir" description={description.rehan} role="Full-Stack Developer"/>
                <Card src={sobanimg} name="Muhammad Soban" description={description.soban} role="Full-Stack Developer"/>
            </TeamDiv>
        </TeamCardContainer>
    )
}

export default OurTeam