

const userReducer = (state , action) => {
  let user = action.user;

  // console.log(user);
  switch (action.type) {
    case "SAVE_USER":
      return {
        ...state,
        user: action.user
      };
      break
 
    
    case "FAIL_LOGIN":
      return{
        ...state,
        errorMessage: action.errorMessage
      }
      break


    case "LOG_OUT":
        return{
            ...state, user: undefined, cartItems: []
        }
        break
    case "SIGNUP":
      return{
        ...state,
        message: action.errorMessage
      }
  }
  return state;
};
export default userReducer;
