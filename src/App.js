import { useState } from 'react';
import './App.css';
import Foooter from './components/Foooter';
import Header from './components/Header';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import { Route, Routes } from 'react-router-dom';

function App() {
  const [light, setLight] = useState(false)
  const [signIn, setSignIn] = useState(true)
  return (
    <>
    <Header light={light} setLight={setLight}/>
    <Routes>
      <Route path='/' element={<SignUp light={light}/>}/>
      <Route path='/sign-in' element={<SignIn light={light}/>}/>
    </Routes>
    <Foooter light={light}/>
    </>
  );
}

export default App;
