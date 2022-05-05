import "./App.css";
import { Button } from "react-bootstrap";

import { BrowserRouter,Routes,Link,Route, Navigate, NavLink } from 'react-router-dom';

import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import Home from "./Component/Home/Home";
import {NowShowingMovies} from "./Component/Movies/NowShowingMovies";
import Aboutus from "./Component/Aboutus/Aboutus";
import Contactus from "./Component/Contactus/Contactus";
import logo from './assets/Images/logo.png'
import { Navbar,NavDropdown } from "react-bootstrap";
import MovieCards from "./Component/MovieCards/MovieCards";
import Selectcard from "./Component/Selectcard/Selectcard";
import Creditcard from "./Component/Creditcard/Creditcard";
import Debitcard from "./Component/Debitcard/Debitcard";
import Savedcards from "./Component/Savedcards/Savedcards";
import '../src/assets/JS/Custom.js'
import { Register } from "./Component/userRegistration/userRegistration";
import {UserLogin} from "./Component/UserLogin/UserLogin";
import changButton from "./Component/changeButton/changeButton";
import  {UserProfile}  from "./Component/userProfile/userProfile";
import {PersonIcon} from '@primer/octicons-react';
import {BookNow} from "./Component/BookNow/BookNow";
import { AdvanceUserProfile } from "./Component/AdvanceUserProfile/AdvanceUserProfile";
function App() {
  let button=new changButton();
	// let value='1';
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
                <Nav.Link href="/selectcard">
                  {
                    button.state.isTokenAvailable?'Payments':null
                  }
                  </Nav.Link>
                  <Nav.Link href="">
                  {
                    button.state.isTokenAvailable?'Snacks':null
                  }
                  </Nav.Link>  
                <Nav.Link href="/aboutus">About</Nav.Link>
                <Nav.Link href="/contact">Contact us</Nav.Link>
                <Button variant="primary" className="navbr-btn">Buy Tickets</Button>
                <Button href={button.state.path} onClick={button.onChangeText} variant="warning" value={button.state.changeButton}>{button.state.changeButton}</Button>
                <div >
                  {
                    button.state.isTokenAvailable?
                    <Button  href="/Profile" variant="danger" style={{width:'50px'}}><PersonIcon size={24} /></Button>:null
                  }
                </div>
               </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>

</div>	


    <Routes>
       <Route exact path="/" element={<Home/>} />
       <Route  path="/movies" element={<NowShowingMovies/>}/>
       <Route path='/aboutus' element={<Aboutus/>}/>
       <Route path='/contact' element={<Contactus/>}/>
       <Route path='/Login' element={<UserLogin/>}/>
       <Route path='/selectcard' 
       element={button.state.isTokenAvailable?<Selectcard/>:null}
       />
			 <Route path='/creditcard' element={<Creditcard/>}/>
			 <Route path='/debitcard' element={<Debitcard/>}/>
			 <Route path='/savedcards' element={<Savedcards/>}/>
       <Route path='/registration' element={<Register/>}/>
       <Route path='/changeButton' element={<changButtonComponent/>}/>
       <Route path='/Profile'
       element={button.state.isTokenAvailable?<UserProfile/>:null}
       />
       <Route path='/BookNow' element={<BookNow/>}/>
       <Route path='/AdvancedProfileSettings' element={<AdvanceUserProfile/>}/>
    </Routes>
    

</BrowserRouter>
</div>

	);
}

export default App;
