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
