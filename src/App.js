import { useState } from 'react';
import './App.css';
import Foooter from './components/Foooter';
import Header from './components/Header';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import { Route, Routes } from 'react-router-dom';
import Openbox from './pages/Openbox';
import Header2 from './components/Header2';
import Footer2 from './components/Foother2';

function App() {
  const [light, setLight] = useState(false)
  const [data, setData] = useState()
  const [name, setName] = useState('')
  
  return (
    <>{name===''?<Header light={light} setLight={setLight}/>:<Header2 light={light} setLight={setLight} setName={setName} data={data}/>}
    
    <Routes>
      <Route path='/' element={<SignUp light={light} setData={setData} setName={setName}/>}/>
      <Route path='/sign-in' element={<SignIn light={light} setData={setData} setName={setName}/>}/>
      <Route path='/openbox' element={<Openbox light={light} data={data}/>}/>
    </Routes>
    {name===''?<Foooter light={light}/>:<Footer2 light={light}/>}
    </>
  );
}

export default App;
