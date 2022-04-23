import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// Firebase sedang dalam pengembangan
// import { FirebaseContext } from './context/FireBaseContext';
// import { firebase } from './firebase/config';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // Firebase sedang dalam pengembangan
  // <React.StrictMode>
  //   <FirebaseContext.Provider value={{ firebase }}>
      <App />
  //   </FirebaseContext.Provider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
