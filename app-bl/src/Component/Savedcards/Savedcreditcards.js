import React, {useState,useEffect} from 'react'
import axios from 'axios'
import {useNavigate} from "react-router-dom"
import Cards from 'react-credit-cards'
import {  Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../Creditcard/Creditcard.css'

export default function Savedcreditcards(props) {

const [savedcreditcards,setSavedcreditcards]=useState([]);



let history=useNavigate()

useEffect(()=>{
  axios
  .get('http://localhost:5000/creditcard')
  .then(res=>{
    console.log(res)
    setSavedcreditcards(res.data)
  })
  .catch(err=>{
    console.log(err)
  })
},[])

function Updatecard(id){
  console.log(id)
  history("/updatecreditcard/"+id)
}

function removecard(id){
console.log(id)
axios.delete('http://localhost:5000/creditcard/delete/'+id)
.then(res=>{
  console.log(res.data)
  const mycards=savedcreditcards.filter(card=>card._id !==id)
  setSavedcreditcards(mycards)
}).catch(err=>console.error(err))
}

  return (
    
    <div >
      
        
          <div className='cardlist'>
        {savedcreditcards.map(cards=>(
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
