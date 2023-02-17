import { LOGIN, SIGNUP, LOGOUT } from "../constants/Auth";

const initialState = {
  token: null,
  userId: null,
  isLoggedin: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLoggedin: true,
        token: action.payload.token,
        userId: action.payload.userId,
      };
    case SIGNUP: {
      return {
        ...state,
        isLoggedin: true,
        token: action.payload.token,
        userId: action.payload.userId,
      };
    }
    case LOGOUT: {
      return { state: initialState };
    }
    default:
      return state;
  }
};

export default authReducer;
