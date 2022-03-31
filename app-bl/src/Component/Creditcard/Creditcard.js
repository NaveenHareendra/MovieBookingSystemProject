import { Button } from "react-bootstrap";
import React, { useState } from 'react'
import Cards from 'react-credit-cards'
import 'react-credit-cards/es/styles-compiled.css'
import './Creditcard.css'

export default function Creditcard() {

  const [number, setNumber] = useState('')
  const [name, setName] = useState('')
  const [expiry, setExpiry] = useState('')
  const [cvv, setCvv] = useState('')
  const [focus, setFocus] = useState('')
  return (
    <div className='creditcard'>
      <Cards
      number={number}
      name={name}
      expiry={expiry}
      cvv={cvv}
      focused={focus}
      />
      <form>
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
       <Button onClick={()=>
       (setNumber(()=>"")) 
       (setName(()=>"")) 
       (setExpiry(()=>""))
       (setCvv(()=>""))
        }>Clear</Button>
       <Button>Save</Button>
      </form><br/>
      <Button href="savedcards">View Saved Cards</Button>
    </div>
    
  )
}
