import { SET_LOADING } from "./constants";

export const initialState = {
  loading: false,
  message: 'This message is from redux',
};

export const usersReducer = (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case SET_LOADING:
      return { ...state, loading: payload };

    default: return state;
  }
};
