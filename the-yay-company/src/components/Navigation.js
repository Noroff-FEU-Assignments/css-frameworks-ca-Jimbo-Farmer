import React from 'react'
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import {
    BrowserRouter,
    Routes,
    Route,
    NavLink
  } from "react-router-dom";

import Home from '../elements/Home';
import News from '../elements/News';
import Contact from '../elements/Contact';

function Navigation() {
    return(
        <BrowserRouter>
        <Navbar expand="md">
          <Container>
            <Navbar.Brand href="#home">The YAY Company</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link><NavLink to="/">Home</NavLink></Nav.Link>
                    <Nav.Link><NavLink to="news">News</NavLink></Nav.Link>
                    <Nav.Link><NavLink to="contact">Contact</NavLink></Nav.Link> 
                </Nav>
                <Form className="d-flex nav-search">
                    <FormControl type="search" placeholder="Search" className="" aria-label="Search"/>
                    <Button variant="outline-success">Go</Button>
                </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Routes>
          <Route path="/" element={<Home />}>Home</Route>
          <Route path="news/*" element={<News />}>News</Route>
          <Route path="contact/*" element={<Contact />}>Contact</Route>
        </Routes>
      </BrowserRouter>    
    )
}

export default Navigation 