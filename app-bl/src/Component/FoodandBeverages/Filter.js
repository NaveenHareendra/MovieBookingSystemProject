import React, { useState,useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux'; 
import { filterFoods } from './actions/foodActions'

export default function Filter() {
    const dispatch =useDispatch()
    const[searchkey , setsearchkey]=useState('')
    const[category , setcategory]=useState('all')
  return (
    <div>
        <div className="row justify-content-center shadow-lg p-3 mb-5 bg-white rounded">
            <div className="col-md-2 w-80">
               <input  
                 onChange={(e)=>{setsearchkey(e.target.value)}}
                value={searchkey} type="text" className="form-control w-100" placeholder="search"/>
            </div>
            <div className="col-md-2 w-80">
                 <select className="form-control w-100" value={category} onChange={(e)=>setcategory(e.target.value)}>
                     <option value="all">All</option>
                     <option value="food">Food</option>
                     <option value="beverages">Beverages</option>
                 </select>
            </div> 
            <div className="col-md-2 w-80">
                  <button className='fb-btn-filter w-100' onClick={()=>{dispatch(filterFoods(searchkey, category))}}>Search</button>
            </div>
        </div>
    </div>
  )
}

