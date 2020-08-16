/**
* @Developed by @VishnuVijayasankar
*/


import { userConstants } from "../constants";

var initialState = {
  users: "",
  user: "",
  errors: [],
  loading: false
};


export function users(state = initialState, action) {
  switch (action.type) {
    case userConstants.REGISTER_USER_REQUEST:
      return {
        ...state,
        loading: true
      };
    case userConstants.REGISTER_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.user
      };
    case userConstants.REGISTER_USER_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
}
