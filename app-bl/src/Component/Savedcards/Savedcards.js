import React, {useState,useEffect} from 'react'
import axios from 'axios'
import Cards from 'react-credit-cards'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../Creditcard/Creditcard.css'

export default function Savedcards() {

const [savedcards,setSavedcards]=useState([])

useEffect(()=>{
  axios
  .get('http://localhost:5000/creditcard')
  .then(res=>{
    console.log(res)
    setSavedcards(res.data)
  })
  .catch(err=>{
    console.log(err)
  })
},[])

  return (
    
    <div className='cardlist'>
      
        {savedcards.map(cards=>(
         <div className='savedcards'>
           <Link to={''}>
         <Cards
          number={cards.number}
          name={cards.name}
          expiry={cards.expiry}
          cvv={cards.cvv}
          /></Link></div>
        ))}
      
    </div>
    
  )
}
