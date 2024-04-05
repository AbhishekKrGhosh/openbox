import { useState } from 'react';
import './App.css';
import Foooter from './components/Foooter';
import Header from './components/Header';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import { Route, Routes } from 'react-router-dom';
import Openbox from './pages/Openbox';

function App() {
  const [light, setLight] = useState(false)
  const [signIn, setSignIn] = useState(true)
  const [data, setData] = useState()
  
  return (
    <>
    <Header light={light} setLight={setLight}/>
    <Routes>
      <Route path='/' element={<SignUp light={light} setData={setData}/>}/>
      <Route path='/sign-in' element={<SignIn light={light} setData={setData}/>}/>
      <Route path='/openbox' element={<Openbox light={light} data={data}/>}/>
    </Routes>
    <Foooter light={light}/>
    </>
  );
}

export default App;
