const initialUserState = {
    
}

const userReducer = (state = initialUserState, action) =>{
    switch (action.type) {

        case  "SAVE_USER":
          return {...state, ...action.user}
    }
}