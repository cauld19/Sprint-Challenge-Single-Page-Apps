import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem, NavbarBrand } from "reactstrap";


const Header = props => {



  return (
    <div className="header-nav">
      <header className="ui centered">
        <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      </header>
      <Navbar>
      <NavbarBrand tag={NavLink} to={"/"}>Home</NavbarBrand>
        <Nav>
          <NavItem>
            <NavLink to="/CharacterList" activeStyle={{color: "red"}} style={{textDecoration: "none"}}>Character List</NavLink>
          </NavItem>
        </Nav>
      </Navbar>

    </div>
  );
}

export default Header;