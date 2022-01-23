import React from 'react';
import './About.css'
import img from './Components/rohan3.jpeg'
import Sidebar from './Sidebar';

const  About = () => {
  return (
    <>
      <Sidebar/>
      <div className='text-container'>
      <div className='line1'></div>
        <h1 className='title_About'>01. <strong className='title-main'>&ensp; About Me</strong></h1>
        <p className='context'><br /> 
          Hello! My name is Rohan and I am Microsoft Certified Auzre Data Engineer.
          I enjoy creating things with programming. I have knowldege and experience in Web Dev, Data Engineering, Cloud Computing, Automation and IOT<br /> <br />
          
          The thing I love most about building projects is the problem solving part. I relish solving logical probklems and making intresting projects that make the life easier for everyone<br /> <br />
           
          I also have been a part time teacher during my undergrad, I have taught 100+ students basic Java and Python programming.
        </p>
      </div>
      <div className='img-container'>
          <div className='Background'>

            <img src={img} alt="User"  className='img-user'/> 
          </div>
      </div>
    </>
  );
}

export default About