// import npm i react-router-dom
import React, { useState } from 'react'
// { inside of these brackets you will define what you want 'react=router-dom' to render }
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
// these are the "page links" for your application 
import About from './pages/About'
import Home from './pages/Home'
import { 
  Collapse, 
  Navbar, 
  NavbarToggler, 
  NavbarBrand, 
  Nav, 
  NavItem, 
  NavLink } from 'reactstrap';
  import './App.css'

const App = () => {

  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);
  
  return (
    // recommend by ReactRouter.com to start with the 'Router' tag, followed by a 'div tag'
    <Router>
      <div>
      <Navbar color="faded" light>
        <NavbarBrand>Nicholas Paul Ruiz Dallas ~ Full Stack Web Developer</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink> <Link className="link" to="/">Home</Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink> <Link className="link" to="/About">Contact Page</Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="link" href="https://github.com/nicholasd-uci">GitHub</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>

{/* This is a switch elem that define routes for our application- On line 4 its being called  */}
      <Switch>
{/* These are the routs that we will be defining */}
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </Switch>
      </div>
    </Router>
  )
}

export default App
