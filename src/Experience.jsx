import React from 'react';
import './Experience.css'
import Sidebar from './Sidebar';


function hide1() {
  document.getElementById("li1").style.display="block";
  document.getElementById("li2").style.display="none";
  document.getElementById("li3").style.display="none";
  // document.getElementById("li4").style.display="none";


  document.getElementById("1").style.background="#03f7d615";
  document.getElementById("3").style.background="none";
  // document.getElementById("4").style.background="none";
  document.getElementById("2").style.background="none";


}
function hide2() {
  document.getElementById("2").style.background="#03f7d615";
  document.getElementById("3").style.background="none";
  // document.getElementById("4").style.background="none";
  document.getElementById("1").style.background="none";


  document.getElementById("li2").style.display="block";
  document.getElementById("li1").style.display="none";
  document.getElementById("li3").style.display="none";
  // document.getElementById("li4").style.display="none";
}
function hide3() {

  document.getElementById("3").style.background="#03f7d615";
  document.getElementById("2").style.background="none";
  // document.getElementById("4").style.background="none";
  document.getElementById("1").style.background="none";

  document.getElementById("li2").style.display="none";
  document.getElementById("li1").style.display="none";
  document.getElementById("li3").style.display="block";
  // document.getElementById("li4").style.display="none";


}
// function hide4() {

//   document.getElementById("4").style.background="#03f7d615";
//   document.getElementById("3").style.background="none";
//   document.getElementById("3").style.background="none";
//   document.getElementById("1").style.background="none";


//   document.getElementById("li4").style.display="block";
//   document.getElementById("li2").style.display="none";
//   document.getElementById("li3").style.display="none";
//   document.getElementById("li1").style.display="none";

  
// }


const  Experience = () => {

  return (
    <>
      <Sidebar />
      <div className='container_exp'>
        <h1 className='title_exp'>02. <strong className='title_main_exp'>&ensp; Experience and Skills</strong></h1><div className='line4'></div>
        <div className='container_main_exp'>
          <ul className='listitem_container_exp'>
            <li id='1' className='listItem_exp' onClick={hide1} style={{background:"#03f7d615"}}>Data Engineer</li>
            <li id='2' className='listItem_exp' onClick={hide2} >Programming Languages and tools</li>
            <li id='3' className='listItem_exp' onClick={hide3} >Achievements</li>
          </ul>
          <div className="project_Description_exp" id='li1'>
            <h1 className="project_title_exp"> Data Engineer</h1>
            <div className='project_Content_exp' >
              <ul>
              <li className='lists'>Worked as a Data Engineer at Tata Consukltancy Services for 1.5 years</li>
                <li className='lists'>Microsoft Certified Azure Data Engineering Associate</li>
                <li className='lists'>Completed 3 Microsoft Certifications Dp200, Dp201 and Az900</li>
                <li className='lists'>Created and maintained ADF pipeline for data migration and other automation tasks.</li>
                <li className='lists'>Developed and maintained Azure databricks notebooks in python to perform data validation</li>
                <li className='lists'>Modified the exsisting ETL framework purely built in python to support more features and Added Unit Testing with Good Code Coverage</li>
                <li className='lists'>Implemented several scripts which reduced the manual effort and time spent of team members by 80% in several tasks such as creating config files, Updating table data in SQLDB directly through Databrciks notebook</li>
              </ul>
              </div>
          </div>
          <div className="project_Description_exp" id='li2'>
            <h1 className="project_title_exp">Programming Languages and Tools</h1>
            <div className='project_Content_exp'>
              <ul>
                <li className='lists' >Python : Flask, Django, Numpy, Pandas, Pygame</li>
                <li className='lists' >HTML, CSS, Javasrcipt and React</li>
                <li className='lists' >Java and PHP</li>
                <li className='lists' >Embedded System and IOT - Arduino CC</li>
                <li className='lists' >Tools : git, netlify, Arduino CC</li>
              </ul>
              </div>
          </div>
          <div className="project_Description_exp" id='li3'>
            <h1 className="project_title_exp">Achievements</h1>
            <div className='project_Content_exp'>
              <ul>
              <li className='lists'>HackerRank Certified in Basic Java and Python</li>
              <li className='lists'>Achieved 5 ⭐ badge in Python Programming</li>
              <li className='lists'>Got 2nd Place in Innovative Prototype Development at National Level Techfest in College</li>
              <li className='lists'>Taught baisc Java and Python to 100+ Students</li>
              </ul>
              </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Experience;
