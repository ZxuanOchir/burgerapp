import axios from "axios";
import * as actions from './signupActions'

export const loginUser = (email, password) => {
  return function(dispatch) {
    dispatch(loginUserStart());

    const data = {
      email,
      password,
      returnSecureToken: true
    };

    axios
      .post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAPMdgnGPkmziOiC-1s4Ugja--YNjZJPEk",
        data
      )
      .then(result => {
        // LocalStorage ruu hadgalna
        const token = result.data.idToken;
        const userId = result.data.localId;
        const expiresIn = result.data.expiresIn;
        const expireDate = new Date(new Date().getTime() + expiresIn * 1000);
        //3600 sec after timestamp

        const refreshToken = result.data.refreshToken;

        localStorage.setItem('token', token);
        localStorage.setItem('userId', userId);
        localStorage.setItem('expireDate', expireDate);
        localStorage.setItem('refreshToken', refreshToken);


        dispatch(loginUserSuccess(token, userId));
        dispatch(actions.autoLogoutAfterMillisec(expiresIn * 1000));
        //dispatch(actions.autoLogoutAfterMillisec(5000));
      })
      .catch(err => {
        dispatch(loginUserError(err));
      });
  };
};

export const loginUserStart = () => {
  return {
    type: "LOGIN_USER_START"
  };
};

export const loginUserSuccess = (token, userId) => {
  return {
    type: "LOGIN_USER_SUCCESS",
    token,
    userId,
  };
};

export const loginUserError = error => {
  return {
    type: "LOGIN_USER_ERROR",
    error
  };
};
