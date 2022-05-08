import React, { useState,useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
//import foods from '../../../foodData'
import { getAllFoods } from '../actions/foodActions'
import Food from '../Food'
import Filter from '../Filter';
import Loading from '../../Loading';
import Error from '../Error';
import Success from '../Success';

export default function Foodscreen() {


    
    const dispatch = useDispatch()

    const foodsstate = useSelector(state=>state.getAllFoodsReducers)
    
    const {foods, error, loading} = foodsstate

    useEffect(() => {
        dispatch(getAllFoods())
    }, [])
    
  return (
    <div>
         <Filter/>
        <div className="row justify-content-center">
              
              {loading ? (<Loading/>) :error?(<Error error='something went wrong'/>):(

                  foods.map(food=>{


                return <div className="col-md-3 m-3" key={food._id}>
                 <div>
                 <Food food={food}/>
                </div>
               </div>
                    })
              )}

              
        </div>
         
        </div>
  )
}
