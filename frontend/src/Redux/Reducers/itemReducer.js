

const itemsReducer = (state ,action) =>{
  
    switch (action.type) {
      case  "RENDER_ITEMS":
        console.log(state.items)
      return {...state, items: action.items}

      case "ADD_ITEM":
        fetch('')
      return{
        ...state, cartItems: [...state.cartItems, action.cartItems]
      }

      
      
    }
    return state;
}

export default itemsReducer;