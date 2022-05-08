import React from 'react'
import { BrowserRouter,Routes,Link,Route,Switch, Navigate, NavLink } from 'react-router-dom';
import  { useState,useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import Filter from '../Filter'
import { getAllFoods,deleteFood } from '../actions/foodActions'

export default function Foodlist() {

    const dispatch = useDispatch()

    const foodsstate = useSelector(state=>state.getAllFoodsReducers)
    
    const {foods, error, loading} = foodsstate

    useEffect(() => {
        dispatch(getAllFoods())
    }, [])
  return (
    <div> 
         <h2>Food List</h2>
         {loading && (<loading/>)}
         {error && (<error error='something went wrong'/>)}

         <table className='table table-bordered'>

             <thead className='thead-dark'>
             <tr>
                 <th>Name</th>
                 <th>Price</th>
                 <th>Category</th>
                 <th>Actions</th>
             </tr>
             </thead>
             <tbody>
                 
                 {foods && foods.map(food=>{
                     return <tr>
                     <td>{food.name}</td>
                     <td>
                         Small:{food.prices[0]['small']}<br/>
                         Medium:{food.prices[0]['medium']}<br/>
                         Large:{food.prices[0]['large']}
                     </td>
                     <td>{food.category}</td>
                     <td>
                          <i className='fa fa-trash m-1' style={{color:'brown'}} onClick={()=>{dispatch(deleteFood(food._id))}}></i>
                          <Link to={`/foodadmin/editfood/${food._id}`}><i className='fa fa-edit m-1' style={{color:'blue'}}></i></Link>
                          
                     </td>
                     </tr>

                 })}
             </tbody>
         </table>

    </div>
    
  )
}
