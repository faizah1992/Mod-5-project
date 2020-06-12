

const itemsReducer = (state ,action) =>{
  
    switch (action.type) {
      case  "RENDER_ITEMS":
        console.log(state.items)
      return {...state, items: action.items}
      break

      case "ADD_ITEM":
        console.log(action.cartItems)
        let item = {item: state.items.find(item => item.id == action.cartItems.item_id)}
        // debugger
     return{
       ...state, cartItems: [...state.cartItems, {...action.cartItems,...item}]
     }
     break

     case "UPDATE_ITEM":
      //  let updateItem = {item: state.items.find(item => item.id == action.cartItem.item_id)}
       let cartItemIndex = state.cartItems.findIndex(cartItem => cartItem.id == action.cartItem.id )
       
       return{
         
        ...state, cartItems: [...state.cartItems.slice(0,cartItemIndex),  action.cartItem, ...state.cartItems.slice(cartItemIndex+1)]
       }
       break 

      case "CURRENT_USER_CART":
        return{...state, cartItems: action.cartItems}
      break

      case "REMOVE_ITEM":
       
        return{
          ...state, cartItems: action.cartItems
        }

     
    }
    return state;
}

export default itemsReducer;