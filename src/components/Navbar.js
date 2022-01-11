import React from 'react'
import {Nav,Container,Navbar} from 'react-bootstrap';
import Netflix from './Netflix.png'

function NavBar() {
    return (
        <div>
         <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home"><img className="Net" src={Netflix}/> </Navbar.Brand>
    <Navbar.Brand href="#home">Ciné</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Movies</Nav.Link>
      <Nav.Link href="#features">Series</Nav.Link>
      <Nav.Link href="#pricing">Anime</Nav.Link>
    </Nav>
    </Container>
  </Navbar>   
        </div>
    )
}

export default NavBar
