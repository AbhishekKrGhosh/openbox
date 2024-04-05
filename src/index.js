import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId='292059736330-9ptkt6issoah2rqp4b9oujo2lohlirii.apps.googleusercontent.com'>
    <BrowserRouter>
    <Routes>
      <Route path='/*' element={<App />}/>
    </Routes>
    </BrowserRouter>
    </GoogleOAuthProvider>
  </React.StrictMode>
);

