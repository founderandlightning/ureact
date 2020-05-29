import { BREAKPOINTS } from "styles";
import { SET_SCREEN_SIZE } from "./constants";

const screenSizeMap = Object.keys(BREAKPOINTS).reduce(
  (acc, key) => ({ ...acc, [key]: false }), {},
);

const initialState = {
  screenSizeMap,
};

export const screenSize = (state = initialState, action) => {
  switch (action.type) {
    case SET_SCREEN_SIZE:
      return { ...state, screenSizeMap: action.screenSizeMap };

    default:
      return state;
  }
};
