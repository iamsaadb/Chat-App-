<<<<<<< HEAD
import React from "react";
import ReactDOM from "react-dom";
// import './index.css';
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";

// nour
// import { createStore, applyMiddleware } from "redux";
// import createSagaMiddleware from "redux-saga";
// import reducers from "./reducers";
// import setupSocket from "./sockets";
// import handleNewMessage from "./sagas";
// import username from "./utils/name";
import UsernameForm from "./utils/UsernameForm";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// const sagaMiddleware = createSagaMiddleware();

// const store = createStore(reducers, applyMiddleware(sagaMiddleware));

// const socket = setupSocket(store.dispatch, username);

// sagaMiddleware.run(handleNewMessage, { socket, username });
import {store} from './store/store';


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
=======
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import {insertMessage} from './redux/actions/messageActions';
import configureStore from './configureStore'

const store = configureStore()

const webSocket = new WebSocket('ws://localhost:4000/websocket');

//now we have to handle incoming event:
webSocket.onmessage = (event) => {
    console.log('index.js: ' +event.data)
    let data = JSON.parse(event.data)
    store.dispatch(insertMessage(data));
};

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));

serviceWorker.unregister();
>>>>>>> 30f731f90cec713894d27b8c5303059008846391
