import React, {useState,useEffect} from 'react'
import axios  from 'axios'
import {useNavigate} from "react-router-dom"

import './modal.css'
import Cards from 'react-credit-cards'
import {  Button} from 'react-bootstrap'
import '../Creditcard/Creditcard.css'

export default function Saveddebitcards(props) {

const [saveddebitcards,setSaveddebitcards]=useState([]);



let history=useNavigate()

useEffect(()=>{
  axios
  .get('http://localhost:5000/debitcard')
  .then(res=>{
    console.log(res)
    setSaveddebitcards(res.data)
  })
  .catch(err=>{
    console.log(err)
  })
},[])

function Updatecard(id){
  console.log(id)
  history("/updatedebitcard/"+id)
}

function removecard(id){
console.log(id)
axios.delete('http://localhost:5000/debitcard/delete/'+id)
.then(res=>{
  console.log(res.data)
  const mycards=saveddebitcards.filter(card=>card._id !==id)
  setSaveddebitcards(mycards)
}).catch(err=>console.error(err))
}

  return (
    
    <div >
      
        
          <div className='cardlist'>
        {saveddebitcards.map(cards=>(
         <div className='savedcards'>

            <Cards
              number={cards.number}
              name={cards.name}
              expiry={cards.expiry}
              cvv={cards.cvv} />
              <Button onClick={()=>{Updatecard(cards._id)}}>Update</Button>
              <Button onClick={()=>{removecard(cards._id)}}>Delete</Button></div>
              
        ))}
        
      </div>
     
     
    </div>
    
  )
}
