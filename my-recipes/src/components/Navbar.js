import React from "react"
import { Container, Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'


const Header = (props) => {
  return (
    <>
      <Navbar expand="md" variant="light" bg="light" className="sticky-top">
        <Container>
          <Navbar.Brand href="#"><b>RECIPOLOGY</b></Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">Category</Nav.Link>
            <Nav.Link href="#">Favorite</Nav.Link>
          </Nav>
          <Form inline onSubmit={props.onSubmit}>
            <FormControl 
              type="text" 
              placeholder="Search for a Recipe" 
              className="mr-sm-2" 
              value={props.input} 
              onChange={props.onChange} 
            />
            <Button variant="danger" type="submit">Search</Button>
          </Form>
        </Container>
      </Navbar>
    </>
  )
}

export default Header;