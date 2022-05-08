export const cartReducer=(state={cartItems :[]},action)=>{
    switch(action.type)

    {
        case 'ADD_TO_CART':
            //if item already exit to change quantity(update)
            const alreadyExits = state.cartItems.find(item=>item._id===action.payload._id)
            if(alreadyExits){
                return{
                    ...state,
                    cartItems:state.cartItems.map(item=>item._id===action.payload._id?action.payload:item)
                }
            }
            //if not exits add as a new one 
            else{
        
        return{
            
            ...state,
            cartItems:[...state.cartItems,action.payload]
        }
        
    }
    case 'DELETE_FROM_CART':return{
            ...state,
            cartItems:state.cartItems.filter(item=>item._id !==action.payload._id)
    }
        default:return state
    }
}