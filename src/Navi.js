import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import CartSummary from "./CartSummary";

const Navi = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Zeki Ünyıldız</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="https://www.linkedin.com/in/zekiunyildiz/">Linkedin</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/zekiunyildiz">
                GitHub Hesabım
              </NavLink>
            </NavItem>
            <CartSummary removeFromCart={props.removeFromCart} cart = {props.cart}/>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Navi;
