import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import reducers from "./../reducers";

// import handleNewMessage from "./../sagas";
// import username from "./../utils/name";

export const sagaMiddleware = createSagaMiddleware();

export const store = createStore(reducers, applyMiddleware(sagaMiddleware));





// export default {sagaMiddleware,socket};
// export default store;