import React from 'react';
import './Work.css'
import { Link } from "react-router-dom";
import p1 from "./Components/project-1.JPG"
import p2 from "./Components/project-2.JPG"
import p3 from "./Components/project-3.png"
import p4 from "./Components/project-4-2.png"
import p1g from "./Components/project-1.gif"
import p2g from "./Components/project-2.gif"
import p3g from "./Components/project-3.gif"
import r1 from "./Components/Code-Compiler.png"
import r2 from "./Components/PreviewMusic.png"


const  Work = () => {
  return (
  <>
    <div className='line3'></div>
    <h1 className='work-title'> <strong className='work-main'>03.</strong> &ensp; Some Things I’ve Built</h1>


    <a href="https://my-online-code-compiler.netlify.app/" target="_blank">
    <div className="project-container">
      <div className="project">
        <div className="project-content">
          <div className="project-label">React</div>
          <h4 className="project-title">Online Code Compiler</h4>
          <div className="project-details" id='row1'>
            <p>A Online code Compiler built in React, with support of many standar programming languages like python, c, c++, Java etc. Also you can choose a theme as per your liking. Use this app to quickly check a code and its output</p>
            <ul>
              <li>React</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>Netlify</li>
            </ul>
          </div>
        </div>
        
        <div className="project-img" >
          <img className='img-work' src={r1} alt="" />
        </div>     
      </div>
    </div>
    </a>
    

    <a href="https://online-music-preview.netlify.app/" target="_blank">
    <div className="project-container">
      <div className="project">
        <div className="project-content">
          <div className="project-label">React</div>
          <h4 className="project-title">Music Preview</h4>
          <div className="project-details" id='row1'>
            <p>A React app where you can search Songs and Artist and lets you listen the preview of a wide range of variety of Songs from all over the World for free. This app is based on Deezer Api to fetch music details.</p>
            <ul>
              <li>React</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>Netlify</li>
            
            </ul>
          </div>
        </div>
        
        <div className="project-img" >
          <img className='img-work' src={r2} alt="" />
        </div>     
      </div>
    </div>
    </a>

    
    <a href="https://www.youtube.com/embed/Y2mf2Z48ECQ" target="_blank">
    <div className="project-container">
      <div className="project">
        <div className="project-content">
          <div className="project-label">IOT and Web Development</div>
          <h4 className="project-title">Automatic Fire Alerting System</h4>
          <div className="project-details">
            <p>An automated system that can detect fire incidents and alert its users like the House Owner, Fire Department and Ambulances via text message and phone call. Also it sends a notification contaning the address and username to the Web portal specifically designed for fire department. This system also turns off the electricity and gas connection to prevent fire. (Final Year College Project)</p>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>PHP</li>
              <li>Arduino</li>
            </ul>
          </div>
        </div>
        
        <div className="project-img">
            <img className='img-work' src={p4} alt="" />
            {/* <iframe className = "img-work" src="https://www.youtube.com/embed/Y2mf2Z48ECQ"></iframe> */}
        </div>
      
        
      </div>
    </div>
    </a>
    
    <a href={p1g} target="_blank">
    <div className="project-container">
      <div className="project">
        <div className="project-content">
          <div className="project-label">Python GUI</div>
          <h4 className="project-title">Sorting Visualizer</h4>
          <div className="project-details" id='row1'>
            <p>A GUI tool that helps in visualizing the actual working of the some of the most common sorting algorithms like Selection Sort, Bubble Sort, Merge Sort and Quick Sort.</p>
            <ul>
              <li>Python</li>
              <li>Tkinter</li>
            </ul>
          </div>
        </div>
        
        <div className="project-img" >
          <img className='img-work' src={p1} alt="" />
        </div>     
      </div>
    </div>
    </a>

    <a href={p2g} target="_blank">
    <div className="project-container">
      <div className="project">
        <div className="project-content">
          <div className="project-label">Python GUI</div>
          <h4 className="project-title">Pathfinder</h4>
          <div className="project-details">
            <p>A python GUI tool that helps in Visualization the common Search algorithms. 
              This tools show the actual working and comparisons of the different searching algorithms like BFS(Breadth First Search), DFS(Depth First Search),A-star. Similar kinds of algoritghms powers some very popular apps like Google maps and Apple Maps.
            </p>
            <ul>
              <li>Python</li>
              <li>Pygame</li>
            </ul>
          </div>
        </div>
        
        <div className="project-img">
          <img className='img-work' src={p2} alt="" />
        </div>  
      </div>
    </div>
    </a>


    <a href={p3g} target="_blank">
    <div className="project-container">
      <div className="project">
        <div className="project-content">
          <div className="project-label">Python GUI</div>
          <h4 className="project-title">Graph Treversal</h4>
          <div className="project-details">
            <p>A python GUI that helps in visualizing the working of two graph traversal algorithms like BFS(Breadth First Search), DFS(Depth First Search)</p>
            <ul>
              <li>Shadow</li>
              <li>Demon</li>
              <li>Baby</li>
            </ul>
          </div>
        </div>
        
        <div className="project-img">
         <img className='img-work' src={p3} alt="" />
        </div>
      </div>
    </div>
    </a>

    <a href="https://rohannirmalextraprojects.netlify.app/" target="_blank" className='more-prj'><h1>More Projects</h1></a>
    <br />
  </>
  );
}

export default Work