import UserActionTypes from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
  isLoadingUserAuth: false,
  error: null
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.EMAIL_SIGN_IN_START:
    case UserActionTypes.SIGN_UP_START:
      return {
        ...state,
        isLoadingUserAuth: true
      };
    case UserActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state, 
        currentUser: action.payload,
        isLoadingUserAuth: false,
        error: null
      };
    case UserActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state, 
        currentUser: null,
        error: null
      };
    case UserActionTypes.SIGN_IN_FAILURE:
    case UserActionTypes.SIGN_OUT_FAILURE:
    case UserActionTypes.SIGN_UP_FAILURE:
      return {
        ...state,
        isLoadingUserAuth: false,
        error: action.payload
      };
    default:
      return state;
  }
}

export default userReducer;