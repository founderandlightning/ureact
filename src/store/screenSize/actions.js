import { SET_SCREEN_SIZE } from "./constants";

export const setScreenSize = (screenSizeMap) => ({
  type: SET_SCREEN_SIZE,
  screenSizeMap,
});
