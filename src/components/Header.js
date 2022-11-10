import React, {useState} from "react";
import {
  Button,
  Navbar,
  Container,
  Nav,
} from "react-bootstrap";
import logo from "../img/marvel-logo.png";
import "./header.css";
import "bootstrap/dist/css/bootstrap.min.css";
const Header = () => {


  return (
    <div>
      <Navbar bg="dark" expand="lg">
        <Container>
          {/* <header className="center">
            <h1 >DARSHAN</h1>
        </header> */}
          <header className="center">
            <h1>FirstShow</h1>
          </header>

          {/* <Nav className="me-auto">
            <Nav.Link href="/charcters"><h5>Characters</h5></Nav.Link>
            <Nav.Link href="/comics"><h5>Comics</h5></Nav.Link>
            <Nav.Link href="/series"><h5>Series</h5></Nav.Link>
            <Nav.Link href="/stories"><h5>Stories</h5></Nav.Link>
          </Nav> */}
         
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
