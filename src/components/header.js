import React, {useState} from 'react';

import { Navbar, Nav, NavLink, NavItem, NavbarToggler, Collapse, Row, Col, Button } from 'reactstrap';

const HeaderNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <Navbar className="App-header" style={{flexDirection: "row"}} color="dark" dark={true} expand="md">
          <NavbarToggler onClick={toggle} className="mr-2"/>
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-sm-auto" navbar>
              <NavItem>
                <NavLink className="header-nav-links" href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="header-nav-links" href="/cases">cases</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
      
    </Navbar>
  )
}

export default HeaderNav;