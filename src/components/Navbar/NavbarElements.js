import styled from "styled-components";
import { Link as LinkS } from "react-scroll";
export const Nav = styled.nav`
  background: #fff;
  height: ${({ scrollNav }) => (!scrollNav ? "80px" : "75px")};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 10;
  transition: 0.2s height ease;
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
    transition: 0.2s height ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavBanner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.75rem;
  font-family: "ABeatByKaiRegular";
  letter-spacing: 7px;
  color: #03989e;

  @media screen and (max-width: 400px) {
    font-size: 1.25rem;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 870px) {
    display: block;
    position: absolute;
    color: #424242;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: 24px;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  @media screen and (max-width: 870px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: ${({ scrollNav }) => (!scrollNav ? "80px" : "70px")};
  transition: 0.2s height ease;
`;

export const NavLinks = styled(LinkS)`
  color: #424242;
  font-family: "Gilroy-Medium";
  display: flex;
  align-items: center;
  text-decoration: none;
  white-space: nowrap;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #03989e;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 870px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkS)`
  border-radius: 50px;
  background-color: #03989e;
  white-space: nowrap;
  padding: 10px 22px;
  color: #ffff;
  font-size: 1rem;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  font-family: "Gilroy-Regular";

  &:hover {
    transition: all 0.2s ease-in-out;
    background-color: #424242;
    color: #ffff;
  }
`;
