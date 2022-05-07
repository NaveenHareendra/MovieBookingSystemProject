import { Button } from "react-bootstrap";
import React, { useState,useEffect } from 'react'
import 'react-credit-cards/es/styles-compiled.css'
import '../Creditcard/Creditcard.css'
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom"

export default function Updatedebitcard(props) {

  let history=useNavigate()
  
  
  const [data,setData]=useState({
      number:"",
      name:"",
      expiry:"",
      cvv:""
  })

  function submit(e){
    e.preventDefault()
    const id=userid
    axios.put('http://localhost:5000/debitcard/updatecard/'+id,data)
    .then(res=>{
      console.log(res.data)
      history("/saveddebitcards")

    }).catch(err=>{console.error(err)})
  }

 const {userid}= useParams();

  // function handle(e){
  //     const newdata={...data}
  //     newdata[e.target.id]=e.target.value
  //     setData(newdata)
      
  // }

  
 
  useEffect(()=>{
      
     const id=userid
     
    axios
    .get('http://localhost:5000/debitcard/updatecard/'+id)
    .then(res=>{
      console.log(res.data)
      setData(res.data)
    })
    .catch(err=>{
      console.log(err)
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])


  return (
    
    <div className='creditcard'>
      
     
      <form onSubmit={submit} >
      <br/><br/>
        <input 
         type='tel'
         name='number' 
         
         value={data.number}
         onChange={(e)=>{setData({number:e.target.value})}} 
         
         /><br/><br/>
           <input 
         type='text'
         name='name' 
         
         value={data.name} 
         onChange={(e)=>{setData({name:e.target.value})}}

         /><br/><br/>
           <input 
         type='tel'
         name='expiry' 
         value={data.expiry} 
         onChange={(e)=>{setData({expiry:e.target.value})}}

         /><br/><br/>
           <input 
         type='tel'
         name='cvv' 
         value={data.cvv} 
         onChange={(e)=>{setData({cvv:e.target.value})}}
         /><br/><br/>
       
       <Button type="submit">Update</Button>
      </form><br/>
      
    </div>
    
  )
}
