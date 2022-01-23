import React from 'react';
import './Sidebar.css'
import ig from  "./Components/instagram.png"
import gh from  "./Components/github.png"
import tw from  "./Components/twitter.png"
import ln from "./Components/ln.png"
const Sidebar = () => {
    return(
        <>
            <div className='sidebarA'>
                <a className='Ahref' href="https://github.com/Rony109" target="_blank"><img className='logoImg' src={gh} alt="g" /></a>
                <a className='Ahref' href="https://www.linkedin.com/in/rohan-nirmal-44185519b/" target="_blank"><img className='logoImg' src={ln} alt="l" /></a>
                <a className='Ahref' href="https://twitter.com/RohanNirmal3" target="_blank"><img className='logoImg' src={tw} alt="t" /></a>
                <a className='Ahref' href="https://www.instagram.com/rohan.4real_/" target="_blank"><img className='logoImg' src={ig} alt="i" /></a>
            </div>
            <div className='vr'></div>
        </>
    )
}

export default Sidebar;