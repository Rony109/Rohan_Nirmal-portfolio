import React from 'react';
import './Home.css'
import Sidebar from './Sidebar';
const  Home = () => {
  return (
    <>
      <Sidebar />
      <div className='container'>
        <h1 className='title_Hi'>Hi, My Name is</h1>
        <h1 className='name'>Rohan Nirmal.</h1>
        <h2 className='intro1'> I Make Things For Web :)</h2>
        <div className='textHolder'>
        <p className='intro2'> I am a Software Engineer who loves to build projects,</p>
        <p className='intro3'> holding experience as a <strong>Data Engineer</strong> <a href="https://www.tcs.com/">@TCS</a>.
        Interested in Web Dev
        </p>
        </div>
      </div>
    </>
  );
}

export default Home