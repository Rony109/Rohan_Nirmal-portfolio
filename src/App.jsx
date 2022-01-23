import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Work from './Work';
import Contact from './Contact'; 
import Experience from './Experience';
import { Routes, Route } from 'react-router-dom';
import RingLoader from "react-spinners/RingLoader";
import { useState , useEffect} from "react";
import './App.css'


const App = () => {

  const [initLoading,setInitLoading]  = useState(false);
  useEffect(()=>{
    setInitLoading(true);
    setTimeout(() => {
      setInitLoading(false)
    }, 4000);
  },[])
  return (
    <>
    {
    initLoading ?
    <div className='loader'>
    <RingLoader color={"#06F7C7"} loading={initLoading}size={150} />
    </div>
    :
    <>
      <Navbar/>
      <Routes classname="Routes">
      <Route path='/' element={<Home  />}  />
      <Route path='/about' element={<About />} />
      <Route path='/work' element={<Work />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/experience' element={<Experience />} />
      </Routes> 
      </>
    }
    </>
    
  );
}

export default App;
