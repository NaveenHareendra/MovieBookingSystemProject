import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { Button, Image } from 'react-bootstrap';
import Foodlist from './Foodlist';
import AddFood from './AddFood';
import { BrowserRouter,Routes,Link,Route,Switch, Navigate, NavLink } from 'react-router-dom';
import eat1 from '../../.././assets/Images/eat1.png';
export default function Adminscreen() {

    
  return (
      <div className='bgimg'>
         {/* <div style={{background: `url(${eat1})`}}/> */}
        {/* <div className='row justify-content-center'>
          <div className='col-md-10'>
          <h2 style={{fontStyle:'35px'}}>Adminscreen</h2>
    <ul className='foodadminfunction'>
        <li>
          <a href="/foodadmin/foodlist">Food list</a>
          </li>
        <li>
          <a href="/foodadmin/addfood">Add new food</a>
          </li>

          <br/>
          <img className='eat1' src={eat1}></img>
       
    </ul>
    
  
          </div>

        </div> */}
        
        
          {/* <img className='eat1' src={eat1}></img> */}
          <br/>
        <Button className='fb-btn-choose' href="/foodadmin/foodlist">See Food List</Button>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/><br/>
        <br/>
        <br/>
        <br/>

       
        

        <br/>
        <Button className='fb-btn-choose' href="/foodadmin/addfood">Add Food</Button>

       
    
    </div>

  )
}
