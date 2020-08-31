import React, { Component } from "react"
import { Container, Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'

class Header extends Component {
  render () {
    return (
      <>
        <Navbar expand="md" variant="light" bg="light">
          <Container>
            <Navbar.Brand href="#"><b>Recipology</b></Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#">Category</Nav.Link>
              <Nav.Link href="#">Favorite</Nav.Link>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-primary">Search</Button>
            </Form>
          </Container>
        </Navbar>
      </>
    )
  }
}

export default Header;