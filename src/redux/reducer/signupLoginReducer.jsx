const initialState = {
    saving: false,
    logging: false,
    firebaseError: null,
    firebaseCodeError:null,
    firebaseCodeSucces:null,
    token: null,
    userId: null
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case "SIGNUP_USER_START":
        return {
          ...state,
          saving: true //saving is loader spinner
        };
  
      case "SIGNUP_USER_ERROR":
        return {
          ...state,
          saving: false,
          firebaseError: action.error.response.data.error.message
        };
  
      case "SIGNUP_USER_SUCCESS":
        return {
          ...state,
          saving: false,
          token: action.idToken,
          userId: action.userId,
        };

      case "LOGIN_USER_SUCCESS":
        return {
          ...state,
          logging: false,
          token: action.idToken,
          userId: action.userId,
        };

      case "LOGIN_USER_ERROR":
        return {
          ...state,
          logging: false,
          firebaseError: action.error.response.data.error.message,
          firebaseCodeError: action.error.response.data.error.code,
        };

      case "LOGIN_USER_START":
        return {
          ...state,
          logging: true,
        };

      case "LOG_OUT":
        return {
          ...state,
          token: null,
          userId: null,
          firebaseError: null,
          firebaseCodeError: null,
        }
  
      default:
        return state;
    }
  };
  
  export default reducer;
  