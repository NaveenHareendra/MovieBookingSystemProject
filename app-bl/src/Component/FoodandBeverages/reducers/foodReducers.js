export const getAllFoodsReducers=(state={foods :[]},action)=>{

    switch(action.type)
    {
        case 'GET_FOODS_REQUEST':return {
            loading:true,
            ...state
        }
        case 'GET_FOODS_SUCCESS':return{
            loading:false,
            foods:action.payload
        }
        case 'GET_FOODS_FAILED':return{
            error:action.payload,
            loading:false
        }
        default:return state
    }
}
//get one food by ID

export const getFoodByIdReducers=(state={},action)=>{

    switch(action.type)
    {
        case 'GET_FOODBYID_REQUEST':return {
            loading:true,
            ...state
        }
        case 'GET_FOODBYID_SUCCESS':return{
            loading:false,
            food:action.payload
        }
        case 'GET_FOODBYID _FAILED':return{
            error:action.payload,
            loading:false
        }
        default:return state
    }
}
//addfood
export const addFoodReducers=(state={},action)=>{

    switch(action.type)
    {
        case 'ADD_FOODS_REQUEST':return {
            loading:true,
            ...state
        }
        case 'ADD_FOODS_SUCCESS':return{
            loading:false,
            success:true,
        }
        case 'ADD_FOODS_FAILED':return{
            error:action.payload,
            loading:false
        }
        default:return state
    }
}

export const editFoodReducers=(state={},action)=>{

    switch(action.type)
    {
        case 'EDIT_FOODS_REQUEST':return {
            editloading:true,
            ...state
        }
        case 'EDIT_FOODS_SUCCESS':return{
            editloading:false,
            editsuccess:true,
        }
        case 'EDIT _FOODS_FAILED':return{
            editerror:action.payload,
            editloading:false
        }
        default:return state
    }
}