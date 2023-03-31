import React from "react";
import { Outlet,Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import logo from "../../photos/GNAL.png";

const Navbar = () => {
  return (
    <nav style={{position:'sticky', zIndex:'2'}}>
      <NavWrapper>
        <NavLogo src={logo} ></NavLogo>
        <NavLinks>
          {/* <li> */}
            <Link to="/" style={{textDecoration: 'none',
                                color:'white'}}>Home</Link>
          {/* </li> */}
          {/* <li> */}
            <Link to="/about" style={{textDecoration: 'none',color:'white' }}>ABOUT</Link>
          {/* </li> */}
          {/* <li> */}
            <Link to="/services" style={{textDecoration: 'none', color:'white'}}>SERVICES</Link>
          {/* </li> */}
          {/* <li> */}
            <Link to="/contact" style={{textDecoration: 'none', color:'white' }}>CONTACT</Link>
          {/* </li> */}
        </NavLinks>
      {/* <Outlet /> */}
      </NavWrapper>
    </nav>
  );
};

const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: center; */
  background-color: black;
  width: 100vw;
  height: 15vh;
  /* position: sticky; */
  position: fixed;
  top: 0;
  width: 100%;
`;

// const Logo =styled.img`
//     width: 10%;
// `
// const Components=styled.ul`
//     text-decoration: none;

// `
// const Linkz =styled(Link)`
//     color: black;

const NavLogo=styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 11vw;
  height: 5vh;
  padding-left: 3vw ;
`

const NavLinks = styled.ul`
  padding: 10vw;
  margin-left: auto;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;


  /* a {
    text-decoration: none;
  } */

  /* li {
    color: red;
    margin: 0 0.8rem;
    font-size: 1.3rem;
    position: relative;
    list-style: none;
  } */
`;

export default Navbar;
