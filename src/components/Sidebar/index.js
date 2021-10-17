import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarBtnLink,
} from "./SidebarElements";
const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink
            to="home"
            onClick={toggle}
            spy={true}
            smooth={true}
            duration={500}
          >
            Home
          </SidebarLink>
          <SidebarLink
            spy={true}
            smooth={"easeInOutCubic"}
            duration={500}
            to="services"
            onClick={toggle}
            offset={-60}
          >
            Services
          </SidebarLink>
          <SidebarLink 
          to="portfolio" 
          onClick={toggle}
          spy={true} 
          smooth={'easeInOutCubic'} 
          offset={-110}
          duration={500}
          >
            Portfolio
          </SidebarLink>
          <SidebarLink to="about" onClick={toggle}>
            About
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
  );
};

export default Sidebar;
