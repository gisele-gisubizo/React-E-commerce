import React from 'react'
import { IoMenu } from "react-icons/io5";
import '../Styles/view.css'
import { CiWallet } from "react-icons/ci";
import { IoSettings } from "react-icons/io5";
import { MdWbSunny } from "react-icons/md";
import { LuMoonStar } from "react-icons/lu"
import { useEffect } from 'react';
import { useState } from 'react';
import { AiTwotoneThunderbolt } from "react-icons/ai";
import { IoNotifications } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { PiTranslateFill } from "react-icons/pi";
import plane from '../assets/plane.png'
import admin from '../assets/admin.jpg';
import { FaRegFileAlt } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { MdOutlineDownloadForOffline } from "react-icons/md";

function View() {


  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme === 'dark') {
          setIsDarkTheme(true);
          document.body.classList.add('dark-theme');
      }
      else {
          setIsDarkTheme(false);
          document.body.classList.add('light-theme');
      }
  }, []);
  const toggleTheme = () => {
      setIsDarkTheme((previous) => {
          const newTheme = !previous;
          document.body.classList.toggle('dark-theme', newTheme);
          document.body.classList.toggle('light-theme', !newTheme);
          localStorage.setItem('theme', newTheme ? 'dark' : 'light');
          return newTheme
      });
  };


     const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);

    }


const Array=[
  {
    id:1,
    name:"All Earnings",
    icon :[<CiWallet/>],
    numbers:"$30200",
    rate:" 30.6%",
    // graph:,

  },

  {
    id:2,
    name:"All Earnings",
    icon:[<FaRegFileAlt/>],
    numbers:"$30200",
    rate:" 30.6%",
    // graph:,

  },

  {
    id:3,
    name:"All Earnings",
    numbers:"$30200",
    icon:[<SlCalender/>],
    rate:" 30.6%",
    // graph:,

  },

  {
    id:4,
    name:"All Earnings",
  icon:[<MdOutlineDownloadForOffline/>],
    numbers:"$30200",
    rate:" 30.6%",
    // graph:,

  }
]

  return (
 <div className={`container-sidebar ${isDarkTheme ? 'dark' : 'light'}`}>
      <div className='view-container'>
      
      
      <div className='view-top-left'>
      <IoMenu className='view-menu'/>
      <div className='search-bar'>
      <IoSearchOutline  className="search-icon"/>
        <input type="text" placeholder='ctrl + k' />
      
      </div>
      </div>

      <div className='view-icons'>
     
         <div className='mode-icons'>{isDarkTheme ? <LuMoonStar onClick={toggleTheme} className='moon'/> : <MdWbSunny  onClick={toggleTheme} className='sun'/>}</div>
       
          <div className="dropdown">
           
              <div className='translation'>
                <PiTranslateFill  onClick={toggleDropdown}/>
              </div>
         

            {isOpen && (
                <div className="dropdown-menu">
                    <div className="dropdown-item">English</div>
                    <div className="dropdown-item">French</div>
                    <div className="dropdown-item">Spanish</div>
                    <div className="dropdown-item">German</div>
                </div>
            )}
        </div>

   <div className='settings-icon'><IoSettings/></div>
   <div className='thunder-icon'><AiTwotoneThunderbolt/></div>
   <div className='notification-icon'><IoNotifications/></div>
   <div className='view-admin-image'><img src={admin} alt="admin's image"  className='view-image'/></div>
      </div>
      

<div className='board'>

<div className='board-content'>
  <h5>Explore Redesigned Able <br /> Pro</h5>
  
  <p>The Brand new User Interface with power of Bootstrap <br /> Components. Explore the Endless possibilities with Able <br />Pro.</p>
  
  <button type='submit'>Exclusive on Themeforest</button>
</div>

<div className='image-board' ><img src={plane} alt="board image"/></div>

</div>

 


{
             Array.map((value) => (
                <>
              <div key={value.id} className='box'>
                     
             <div className='array-box'>
             <div >{value.icon}  </div>
               <div >{value.name}  </div>
               <div>{value.numbers}</div>                  
                           <div>{value.rate}</div>
               
             </div>
                  
              </div>
                    
                    
           
                </>
             ))
             }


      </div>
</div>
  )
}

export default View