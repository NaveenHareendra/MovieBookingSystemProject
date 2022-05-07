import { Button } from "react-bootstrap";
import React, { useState } from 'react'
import Cards from 'react-credit-cards'
import 'react-credit-cards/es/styles-compiled.css'
import './Creditcard.css'
import axios from "axios";

export default function Creditcard() {

  const [number, setNumber] = useState("")
  const [name, setName] = useState("")
  const [expiry, setExpiry] = useState("")
  const [cvv, setCvv] = useState("")
  const [focus, setFocus] = useState("")

  function savecreditcard(e){
    e.preventDefault();
    

    const newCreditcard={

    number,
    name,
    expiry,
    cvv
    }
    axios.post("http://localhost:5000/creditcard/add",newCreditcard).then(()=>{
      alert("Card Saved");
    }).catch((err)=>{
      alert(err);
    })
    console.log(newCreditcard);
  }
function reset(){

  setNumber("");
  setName("");
  setExpiry("");
  setCvv("");
}
  return (
    
    <div className='creditcard'>
      
      <Cards
      number={number}
      name={name}
      expiry={expiry}
      cvv={cvv}
      focused={focus}
      />
      <form onSubmit={savecreditcard} >
      <br/><br/>
        <input 
         type='tel'
         name='number' 
         placeholder='Credit Card Number' 
         value={number} 
         onChange={e=>setNumber(e.target.value)}
         onFocus={e=>setFocus(e.target.name)}
         /><br/><br/>
           <input 
         type='text'
         name='name' 
         placeholder=' Cardholder Name' 
         value={name} 
         onChange={e=>setName(e.target.value)}
         onFocus={e=>setFocus(e.target.name)}
         /><br/><br/>
           <input 
         type='tel'
         name='expiry' 
         placeholder='MM/YY Expiry' 
         value={expiry} 
         onChange={e=>setExpiry(e.target.value)}
         onFocus={e=>setFocus(e.target.name)}
         /><br/><br/>
           <input 
         type='tel'
         name='cvv' 
         placeholder='CVV' 
         value={cvv} 
         onChange={e=>setCvv(e.target.value)}
         onFocus={e=>setFocus(e.target.name)}
         /><br/><br/>
       <Button onClick={reset}>Clear</Button>
       <Button type="submit">Save</Button>
      </form><br/>
      <Button  href="savedcreditcards">View Saved Cards</Button>
    </div>
    
  )
}
