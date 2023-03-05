import React from 'react';
// import { NavLink } from 'react-router-dom';
// import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



function Navigation() {
  return (
    <div>
      <Navbar expand="lg" className="nav nav-pills nav-justified bg-light">
      <Nav.Link
        href="/"
        exact
        style={{color: 'black'}}
      >Home</Nav.Link>

      <Nav.Link
        href="/listings"
        exact
        style={{color: 'black'}}
      >Listings</Nav.Link>

      <Nav.Link
        href="/listings/new"
        exact
        style={{color: 'black'}}
      >New Listing</Nav.Link>
      </Navbar>
    </div>
  )
}
 
export default Navigation;