import React from 'react'
import { Link } from 'react-router-dom';

const NavbarComponent = () => {
  return (
    <div className="App container-sm">
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top mt-4">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand text-danger"><b>RECIPOLOGY</b></Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link text-dark" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" to="/categories">Category</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" to="/favorites">Favorite</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavbarComponent
