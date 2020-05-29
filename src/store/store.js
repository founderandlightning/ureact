import {
  combineReducers,
  createStore,
  applyMiddleware,
} from "redux";
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from "redux-devtools-extension";
import { screenSize } from "./screenSize";
import { usersReducer } from "./users";

const reducers = combineReducers({
  screenSize,
  usersReducer,
});

const sagaMiddleware = createSagaMiddleware();

const middlewares = composeWithDevTools(
  applyMiddleware(sagaMiddleware),
);

export const store = createStore(
  reducers,
  middlewares,
);
