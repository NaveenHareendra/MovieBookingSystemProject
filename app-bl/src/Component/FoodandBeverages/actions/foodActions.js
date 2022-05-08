import axios from "axios";
export const getAllFoods=()=>async dispatch=>{

    dispatch({type:'GET_FOODS_REQUEST'})

    try{
      const response = await axios.get('/api/foods/getallfoods')
      console.log(response);
      dispatch({type:'GET_FOODS_SUCCESS',payload:response.data})
    }catch(error){
        dispatch({type:'GET_FOODS_FAILED',payload:error})
    }
}
//get one food by id

export const getFoodById=(foodid)=>async dispatch=>{

  dispatch({type:'GET_FOODBYID_REQUEST'})   

  try{
    const response = await axios.post('/api/foods/getfoodbyid',{foodid})
    console.log(response);
    dispatch({type:'GET_FOODBYID_SUCCESS',payload:response.data})
  }catch(error){
      dispatch({type:'GET_FOODBYID_FAILED',payload:error})
  }
}
//search function
export const filterFoods=(searchkey,category)=>async dispatch=>{
  
  var filteredfoods;
  dispatch({type:'GET_FOODS_REQUEST'})


  try{
    const response = await axios.get('/api/foods/getallfoods')
    filteredfoods=response.data.filter(food=>food.name.toLowerCase().includes(searchkey))

    if(category!='all')
    {
      filteredfoods=response.data.filter(food=>food.category.toLowerCase()==category)
    } 
    dispatch({type:'GET_FOODS_SUCCESS',payload:filteredfoods})
  }catch(error){
      dispatch({type:'GET_FOODS_FAILED',payload:error})
  }
}

//adding foods 

export const addFood=(food)=>async dispatch=>{
  dispatch({type:'ADD_FOOD_REQUEST'})
  try{
    const response=await axios.post('/api/foods/addfood',{food})
    console.log(response);
    dispatch({type:'ADD_FOOD_SUCCESS'})

  }
  catch (error){
    dispatch({type:'ADD_FOOD_FAILED',payload:error})
  }
}

//edit

export const updateFood=(editedfood)=>async dispatch=>{
  dispatch({type:'EDIT_FOOD_REQUEST'})
  try{
    const response=await axios.post('/api/foods/editfood',{editedfood})
    console.log(response);
    dispatch({type:'EDIT_FOOD_SUCCESS'})

  }
  catch (error){
    dispatch({type:'EDIT_FOOD_FAILED',payload:error})
  }
}

//delete action

export const deleteFood=(foodid)=>async dispatch=>{
  try{
    const response =await axios.post('/api/foods/deletefood',{foodid})
    alert('food deleted successfully')
    console.log(response);
    window.location.reload()
  }catch(error){
    alert('something went wrong')
    console.log(error);
  }
}