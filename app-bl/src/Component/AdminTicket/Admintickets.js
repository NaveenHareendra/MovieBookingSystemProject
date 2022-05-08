import React, {useState,useEffect} from 'react'
import axios from 'axios'
import '../Creditcard/Creditcard.css'
import './search.css'


export default function Admintickets() {

const [savedtickets,setSavedtickets]=useState([]);
const [input,setInput]=useState("");
const [output,setOutput]=useState([]);



useEffect(()=>{
  axios
  .get('http://localhost:5000/ticket')
  .then(res=>{
    console.log(res)
    setSavedtickets(res.data)
  })
  .catch(err=>{
    console.log(err)
  })
},[])

     
             

 return (
  <div >

<div className='wrap'>
  <div className='search'>
  <input className='searchTerm' onChange={e=>setInput(e.target.value)} type="text" placeholder="Search"/>
  </div>
</div>
<br/><br/><br/><br/><br/>

<div   >
  {output.map(tickets=> (<div className='searchtickets'>
                 <h5>{tickets.movieName}</h5>
                 <h5>{tickets.price}</h5>
                 <h5>{tickets.seatsNoBooked}</h5>
                 <h5>{tickets.bookingDate}</h5>
                 <h5>{tickets.customerName}</h5>
                 <h5>{tickets.customerId}</h5>
                 
             </div>))}
</div>


    {savedtickets.map(tickets=>(
            
             <div className='tickets'>
               <label>Movie Name :</label>
                 <h5>{tickets.movieName}</h5>
                 <label>Price :</label>
                 <h5>{tickets.price}</h5>
                 <label>Number Of Seats :</label>
                 <h5>{tickets.seatsNoBooked}</h5>
                 <label>Date :</label>
                 <h5>{tickets.bookingDate}</h5>
                 <label>Customer Name :</label>
                 <h5>{tickets.customerName}</h5>
                 <label>Customer ID :</label>
                 <h5>{tickets.customerId}</h5>
                 
                 
             </div>
             
            
 ))}
      </div>   )

    


 
}
