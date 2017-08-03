import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import BaseContainer from './containers/BaseContainer';
import './index.css';

firebase.initializeApp({
  apiKey: "AIzaSyBCxIP0kW4idSIYMZw3pRCm5BWVbAFCH0Q",
  authDomain: "pseudogram-80721.firebaseapp.com",
  databaseURL: "https://pseudogram-80721.firebaseio.com",
  projectId: "pseudogram-80721",
  storageBucket: "pseudogram-80721.appspot.com",
  messagingSenderId: "300787229028"
});

ReactDOM.render(<BaseContainer />, document.getElementById('root'));
