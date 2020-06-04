const initialItemState = {
    items: []
}

const itemsReducer = (state = initialItemState, action) =>{
    switch (action.type) {
      case  "RENDER_ITEMS":
        console.log(state.items)
      return {...state, items: action.items}
    }
    return state;
}

export default itemsReducer;