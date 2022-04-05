import { Button } from "react-bootstrap";
import React, { useState } from 'react'
import Cards from 'react-credit-cards'
import 'react-credit-cards/es/styles-compiled.css'
import '../Creditcard/Creditcard.css'
import axios from "axios";


export default function Debitcard() {

  const [number, setNumber] = useState('')
  const [name, setName] = useState('')
  const [expiry, setExpiry] = useState('')
  const [cvv, setCvv] = useState('')
  const [focus, setFocus] = useState('')


  function savedebitcard(e){
    e.preventDefault();
    

    const newDebitcard={

    number,
    name,
    expiry,
    cvv
    }
    axios.post("http://localhost:5000/debitcard/add",newDebitcard).then(()=>{
      alert("Card Saved");
    }).catch((err)=>{
      alert(err);
    })
    console.log(newDebitcard);
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
      <form onSubmit={savedebitcard}>
      <br/><br/>
        <input 
         type='tel'
         name='number' 
         placeholder='Debit Card Number' 
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
         type='text'
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
        <Button onClick={reset}  >Clear</Button>
       <Button type="submit">Save</Button>
      </form><br/>
      <Button href="savedcards">View Saved Cards</Button>
    </div>
    
  )
}
