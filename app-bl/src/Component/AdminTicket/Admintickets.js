import React, {useState,useEffect} from 'react'
import axios from 'axios'
import '../Creditcard/Creditcard.css'

export default function Admintickets() {

const [savedtickets,setSavedtickets]=useState([]);




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
    {savedtickets.map(tickets=>(
            
             <div>
                 <h5>{tickets.movieName}</h5>
                 <h5>{tickets.price}</h5>
                 <h5>{tickets.seatsNoBooked}</h5>
                 <h5>{tickets.bookingDate}</h5>
                 <h5>{tickets.customerId}</h5>
                 
                 
             </div>
             
            
 ))}
      </div>   )

    


 
}
