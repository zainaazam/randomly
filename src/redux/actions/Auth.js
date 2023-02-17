import { LOGOUT, LOGIN, SIGNUP } from "../constants/Auth";

export const logout = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: LOGOUT });
    } catch (error) {
      console.log(error);
    }
  };
};

export const login = (data) => {
  return async (dispatch) => {
    try {
      dispatch({ type: LOGIN, payload: data });
    } catch (error) {
      console.log(error);
    }
  };
};

export const signUp = (data) => {
  return async (dispatch) => {
    try {
      await dispatch({ type: SIGNUP, payload: data });
    } catch (error) {
      console.log(error);
    }
  };
};
