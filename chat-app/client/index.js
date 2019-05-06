import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import messageReducer from './redux/reducers/messageReducer';
import {insertMessage} from './redux/actions/messageActions';

const rootReducer = combineReducers({
  messageReducer,
});

//we connect websocket at index because we want to create one instance that stays open:
const store = createStore(rootReducer, applyMiddleware(thunk));

//going through the gateway
const webSocket = new WebSocket('ws://localhost:4000/websocket');

//now we have to handle incoming event:
webSocket.onmessage = (message) => {
    console.log(message)
    store.dispatch(insertMessage(message.data));
};

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));


serviceWorker.unregister();
