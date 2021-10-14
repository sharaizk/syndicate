import React from 'react'
import { SidebarContainer,Icon, CloseIcon,SidebarWrapper,SidebarMenu,SidebarLink,SideBtnWrap,SidebarBtnLink } from './SidebarElements'
const Sidebar = ({isOpen,toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} >
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="home" onClick={toggle}>
                        Home
                    </SidebarLink>
                    <SidebarLink to="about" onClick={toggle}>
                        About
                    </SidebarLink>
                    <SidebarLink to="services" onClick={toggle}>
                        Services
                    </SidebarLink>
                    <SidebarLink to="portfolio" onClick={toggle}>
                        Portfolio
                    </SidebarLink>
                    <SidebarLink to="ourteam" onClick={toggle}>
                        Our Team
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarBtnLink to="contactus">Contact US</SidebarBtnLink>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
