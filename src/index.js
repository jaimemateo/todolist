import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import firebase from 'firebase';
import BaseContainer from './containers/BaseContainer';
import './style.css';
import store from './store.js'

firebase.initializeApp({
  apiKey: "AIzaSyBCxIP0kW4idSIYMZw3pRCm5BWVbAFCH0Q",
  authDomain: "pseudogram-80721.firebaseapp.com",
  databaseURL: "https://pseudogram-80721.firebaseio.com",
  projectId: "pseudogram-80721",
  storageBucket: "pseudogram-80721.appspot.com",
  messagingSenderId: "300787229028"
});

render(
  <Provider store={store}>
    <BaseContainer />
  </Provider>,
  document.getElementById('root')
)
