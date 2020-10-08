import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import {
  Home,
  Category,
  Favorite,
  Detail
} from './pages'
import Navbar from './components/Navbar'
import { Provider } from "react-redux"
import store from "./store"

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar/>
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
