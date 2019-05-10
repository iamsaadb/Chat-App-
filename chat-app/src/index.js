import React from "react";
import ReactDOM from "react-dom";
// import './index.css';
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import reducers from "./reducers";
import setupSocket from "./sockets";
import handleNewMessage from "./sagas";
import username from "./utils/name";
import UsernameForm from "./utils/UsernameForm";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, applyMiddleware(sagaMiddleware));

const socket = setupSocket(store.dispatch, username);

sagaMiddleware.run(handleNewMessage, { socket, username });

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
    <Switch>
		<Route component= {App} path="/app"/>
		<Route component= {UsernameForm} path="/login"/>
	</Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
