import React from 'react';
import './App.css';
import { 
  Container, 
  Navbar, 
  Nav
} from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import {
  Home,
  Category,
  Favorite,
  Detail
} from './pages'
import SearchForm from './components/SearchForm';
import { Provider } from "react-redux"
import store from "./store"

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App container-sm">
          <Navbar expand="md" variant="light" bg="light" className="sticky-top mt-4">
            <Container className="justify-content-between">
              <Navbar.Brand href="#" to="/" className=""><b>RECIPOLOGY</b></Navbar.Brand>
              <Nav className="mr-auto">
                <Link className="nav-link text-dark" to="/">Home</Link>
                <Link className="nav-link text-dark" to="/categories">Category</Link>
                <Link className="nav-link text-dark" to="/favorites">Favorite</Link>
              </Nav>
              <SearchForm />
            </Container>
          </Navbar>
        </div>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/categories"><Category/></Route>
          <Route path="/favorites"><Favorite/></Route>
          <Route path="/recipe/:id"><Detail/></Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
