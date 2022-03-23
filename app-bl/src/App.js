import "./App.css";
import { Button } from "react-bootstrap";

import { BrowserRouter,Routes,Link,Route, Navigate, NavLink } from 'react-router-dom';

import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import Home from "./Component/Home/Home";
import Movies from "./Component/Movies/Movies";
import Aboutus from "./Component/Aboutus/Aboutus";
import Contactus from "./Component/Contactus/Contactus";
import logo from './assets/Images/logo.png'
import { Navbar,NavDropdown } from "react-bootstrap";
import MovieCards from "./Component/MovieCards/MovieCards";
import '../src/assets/JS/Custom.js'

function App() {
	return (
		<div className="App">
			 <BrowserRouter>
        <div id="navbar">
			 <Navbar collapseOnSelect expand="lg" bg="white" variant="white" className='nav-bar animation'>
  <Container>
  <Navbar.Brand href="/"><img className='logo' src={logo}/></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
     
    </Nav>
    <Nav>
      <Nav.Link className="nav-link" href="/">Home</Nav.Link>
	  <Nav.Link href="/movies">Movies</Nav.Link>
	  <Nav.Link href="/aboutus">About</Nav.Link>
	  <Nav.Link href="/contact">Contact us</Nav.Link>
	  <Button variant="primary" className="navbr-btn">Buy Tickects</Button>
	  <Button variant="warning">Login</Button>

    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
</div>	
		  <Routes>
			 <Route exact path="/" element={<Home/>} />
			 <Route  path="/movies" element={<Movies/>}/>
			 <Route path='/aboutus' element={<Aboutus/>}/>
			 <Route path='/contact' element={<Contactus/>}/>
			 
		  </Routes>
  
		  </BrowserRouter>

		
		 
		</div>
	);
}

export default App;
