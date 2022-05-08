import React, { useEffect , useState } from 'react'
import { useParams } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { getFoodById } from '../actions/foodActions';
import { getFoodByIdReducers } from '../reducers/foodReducers';
import { updateFood } from '../actions/foodActions';
import Error  from '../Error';
import Loading from '../../Loading';
import Success from '../Success';
import { setSelectionRange } from '@testing-library/user-event/dist/utils';

export default function EditFood({match}) {

  const dispatch = useDispatch()
  const[name,setname]=useState('')
  const [smallprice,setsmallprice]=useState()
  const [mediumprice,setmediumprice]=useState()
  const [largeprice,setlargeprice]=useState()
  const [image,setimage]=useState('')
  const [description,setdescription]=useState('') 
  const [category,setcategory]=useState('') 

  const {foodid} =useParams();

  const getfoodbyidstate = useSelector(state=>state.getFoodByIdReducers)

  const {food , error , loading}=getfoodbyidstate

  const editfoodstate = useSelector((state)=>state.editFoodReducers)
  const{editloading,editerror,editsuccess}=editfoodstate;
  
  useEffect(()=>{
      if(food){
          if(food._id==foodid){
            setname(food.name)
            setdescription(food.description)
            setcategory(food.category)
            setsmallprice(food.prices[0]['small'])
            setmediumprice(food.prices[0]['medium'])
            setlargeprice(food.prices[0]['large'])
            setimage(food.image)
          }else{
            dispatch(getFoodById(foodid)) 
          }
          
      }else{
          dispatch(getFoodById(foodid))
      }
  },[food, dispatch ])

  function formHandler(e){
    e.preventDefault();

    const editedfood={
        _id:foodid,
      name,
      image,
      description,
      category,
      prices:{
        small:smallprice,
        medium:mediumprice,
        large:largeprice
      }
    }
    dispatch(updateFood(editedfood))
     
} 
    
  return (
  
    <div>
        <h1>Edit food</h1>  
        <h1>Food Id = {foodid}</h1>

        <div className='text-left'>
          

          {loading &&(<Loading/>)}
          {error && (<Error error='something went wrong'/>)}
          {editsuccess && (<Success success='food details updated successfully'/>)}
          {editloading &&(<Loading/>)}

           
          <form onSubmit={formHandler}>
            <input className="form-control" type="text" placeholder="name" value={name} onChange={(e)=>{setname(e.target.value)}}/>
            <input className="form-control" type="text" placeholder="small varient price" value={smallprice} onChange={(e)=>{setsmallprice(e.target.value)}}/>
            <input className="form-control" type="text" placeholder="medium varient price" value={mediumprice} onChange={(e)=>{setmediumprice(e.target.value)}}/>
            <input className="form-control" type="text" placeholder="large varient price" value={largeprice} onChange={(e)=>{setlargeprice(e.target.value)}}/>
            <input className="form-control" type="text" placeholder="category" value={category} onChange={(e)=>{setcategory(e.target.value)}}/>
            <input className="form-control" type="text" placeholder="description" value={description} onChange={(e)=>{setdescription(e.target.value)}}/>
            <input className="form-control" type="text" placeholder="image" value={image} onChange={(e)=>{setimage(e.target.value)}}/>

            <button className='fb-btn mt-3' type="submit">EDIT FOOD</button>
          </form>
        </div>
    </div>
  )
}
