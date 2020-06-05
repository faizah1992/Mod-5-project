export const saveUserToState = (user) =>{
    return {
      type: "SAVE_USER",
      user: user
    }
}