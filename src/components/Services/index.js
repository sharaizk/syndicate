import React from 'react'
import {ServicesContainer,ServicesTitle,OurServices,CardContainer,Servicesdivider} from './ServicesElements'
import Card from './Card'
import { RiLayout5Line } from "react-icons/ri";
import { FaConnectdevelop } from "react-icons/fa";
import { AiOutlineMobile } from "react-icons/ai";
import {IoIosDesktop} from 'react-icons/io'
import {MdOutlineDesignServices,MdOutlineAutoFixNormal} from "react-icons/md"
const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesTitle>What we do</ServicesTitle>
            <OurServices>Our Services</OurServices>
            <CardContainer>
            <Card Icon={RiLayout5Line} title="Web Design"/>
            <Card Icon={FaConnectdevelop} title="Web Development"/>
            <Card Icon={AiOutlineMobile} title="Mobile Apps"/>
            <Card Icon={MdOutlineAutoFixNormal} title="SEO"/>
            <Card Icon={IoIosDesktop} title="Desktop Apps"/>
            <Card Icon={MdOutlineDesignServices} title="UI/UX Design"/>
            {/* <Card />
            <Card />
            <Card />
            <Card />
            <Card /> */}
            </CardContainer>
            
        </ServicesContainer>
    )
}

export default Services
