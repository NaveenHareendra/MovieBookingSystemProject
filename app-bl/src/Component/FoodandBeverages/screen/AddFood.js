import React,{useState,useEffect} from 'react';
import { useSelector,useDispatch } from 'react-redux'
import { addFood } from '../actions/foodActions';
import Error  from '../Error';
import Loading from '../../Loading';
import Success from '../Success';

export default function AddFood() {

  const[name,setname]=useState('')
  const [smallprice,setsmallprice]=useState()
  const [mediumprice,setmediumprice]=useState()
  const [largeprice,setlargeprice]=useState()
  const [image,setimage]=useState('')
  const [description,setdescription]=useState('') 
  const [category,setcategory]=useState('') 
  
  const dispatch=useDispatch();

  const addfoodstate = useSelector(state=>state.addFoodReducers )
  const {success, error, loading} = addfoodstate

  function formHandler(e){
      e.preventDefault();

      const food={
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
      console.log(food); 
      dispatch(addFood(food));
  }


  return (
    <div>
        <div className='text-left'>
          <h1>Add Food</h1>

          {loading &&(<Loading/>)}
          {error && (<Error error='something went wrong'/>)}
          {success && (<Success success='New Food added succesfully'/>)}

           
          <form onSubmit={formHandler}>
            <input className="form-control" type="text" placeholder="name" value={name} onChange={(e)=>{setname(e.target.value)}}/>
            <input className="form-control" type="text" placeholder="small varient price" value={smallprice} onChange={(e)=>{setsmallprice(e.target.value)}}/>
            <input className="form-control" type="text" placeholder="medium varient price" value={mediumprice} onChange={(e)=>{setmediumprice(e.target.value)}}/>
            <input className="form-control" type="text" placeholder="large varient price" value={largeprice} onChange={(e)=>{setlargeprice(e.target.value)}}/>
            <input className="form-control" type="text" placeholder="category" value={category} onChange={(e)=>{setcategory(e.target.value)}}/>
            <input className="form-control" type="text" placeholder="description" value={description} onChange={(e)=>{setdescription(e.target.value)}}/>
            <input className="form-control" type="text" placeholder="image" value={image} onChange={(e)=>{setimage(e.target.value)}}/>

            <button className='fb-btn mt-3' type="submit">ADD FOOD</button>
          </form>
        </div>
    </div>
  )
}
