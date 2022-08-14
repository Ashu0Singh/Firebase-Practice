import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/index';
import Firebase from './components/FireBase'
import { FirebaseContext } from './components/FireBase';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <FirebaseContext.Provider value = {Firebase}>
    <App />
  </ FirebaseContext.Provider >
);