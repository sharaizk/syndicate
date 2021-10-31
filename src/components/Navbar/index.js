import React, {useState,useEffect} from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavBanner,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink
} from "./NavbarElements";
const Navbar = ({toggle}) => {
  const [scrollNav,setScrollNav] = useState(false)
  const changeNav=()=>{
    if(window.scrollY >= 80){
      setScrollNav(true)
    }
    else{
      setScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll',changeNav)
  }, [])
  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
         <NavBanner>Syndicate</NavBanner>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu >
            <NavItem scrollNav={scrollNav}>
              <NavLinks to="home"
                spy={true} smooth={true} duration={500}
              >Home</NavLinks>
            </NavItem>
            <NavItem scrollNav={scrollNav}>
              <NavLinks to="services"
             
              spy={true} smooth={'easeInOutCubic'} offset={ -60} duration={500}>Services</NavLinks>
            </NavItem>
            <NavItem scrollNav={scrollNav}>
              <NavLinks to="portfolio"
              spy={true} smooth={'easeInOutCubic'} offset={-200} duration={500}>
              Portfolio</NavLinks>
            </NavItem>
            <NavItem scrollNav={scrollNav}>
            <NavLinks to="ourteam"
              spy={true} smooth={'easeInOutCubic'} offset={-325} duration={500}>Our Team</NavLinks>
            </NavItem>
            <NavItem scrollNav={scrollNav}>
              <NavLinks to="about"
              spy={true} smooth={true}  duration={500}>About</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
              <NavBtnLink to="contact">Contact US</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
