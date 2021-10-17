import React from 'react'
import {ServicesContainer,ServicesTitle,OurServices,CardContainer} from './ServicesElements'
import Card from './Card'
import { RiLayout5Line } from "react-icons/ri";
import { FaConnectdevelop } from "react-icons/fa";
import { AiOutlineMobile } from "react-icons/ai";
import {IoIosDesktop} from 'react-icons/io'
import {MdOutlineDesignServices,MdOutlineAutoFixNormal} from "react-icons/md"

const Services = () => {
    const description={
        uiux:"Our team of UX/UI designers works hard to understand your business, culture and technology. We then transform your vision into an experience that is not only beautiful but meaningful.",
        design:"We are a team of professional web designers and graphic designers. Our work is not only limited within designing but we also provide you with the best solutions to make your business look more professional.",
        development:"Our passion is to create fast, secure, and scalable websites for our clients. If you are looking for a website that is user friendly then you have come to the right place!",
        seo:"Our innovative search engine optimization (SEO) techniques increase organic traffic, improve rankings and get more customers.",
        desktop:"We develop desktop apps that are cost-effective, quick to build and integrate with all platforms. Apps that have been developed using ElectronJS can be deployed on Windows, Mac OSX and Linux.",
        mobile:"With over 200 million active users, the Mobile Apps team is focused on making world-class mobile experiences. We are an exceptionally talented and passionate group of technologists building cutting edge apps across iOS, Android"
    }
    return (
        <ServicesContainer id="services">
            <ServicesTitle>What we do</ServicesTitle>
            <OurServices>Our Services</OurServices>
            <CardContainer>
            <Card Icon={RiLayout5Line} description={description.design} title="Web Design"/>
            <Card Icon={FaConnectdevelop} description={description.development} title="Web Development"/>
            <Card Icon={AiOutlineMobile} description={description.mobile} title="Mobile Apps"/>
            <Card Icon={MdOutlineAutoFixNormal} description={description.seo} title="SEO"/>
            <Card Icon={IoIosDesktop} description={description.desktop} title="Desktop Apps"/>
            <Card Icon={MdOutlineDesignServices} description={description.uiux} title="UI/UX Design"/>
            </CardContainer>
            
        </ServicesContainer>
    )
}

export default Services
