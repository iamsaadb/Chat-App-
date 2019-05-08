import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'



import reducers from './reducers';
import  setupSocket  from './sockets'
import handleNewMessage from './sagas'
import username from './utils/name'

const sagaMiddleware = createSagaMiddleware()
 
const store = createStore(
    reducers,
    applyMiddleware(sagaMiddleware));

const socket = setupSocket(store.dispatch, username)

sagaMiddleware.run(handleNewMessage, {socket, username})

<<<<<<< HEAD:chat-app/src/index.js
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, 
	document.getElementById('root')
	);
registerServiceWorker();
=======

serviceWorker.unregister();
>>>>>>> 3f0d470df8227af3855cae946b174dbb73399370:chat-app/client/index.js
