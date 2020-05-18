import UserActionTypes from "./user.types";

export const googleSignInStart = () => ({
  type: UserActionTypes.GOOGLE_SIGN_IN_START
});

export const emailSignInStart = credentials => ({
  type: UserActionTypes.EMAIL_SIGN_IN_START,
  payload: credentials
});

export const signInSuccess = user => ({
  type: UserActionTypes.SIGN_IN_SUCCESS,
  payload: user
});

export const signInFailure = error => ({
  type: UserActionTypes.SIGN_IN_FAILURE,
  payload: error
});

