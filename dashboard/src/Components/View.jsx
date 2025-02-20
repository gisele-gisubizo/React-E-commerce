import React from 'react'
import { IoMenu } from "react-icons/io5";
import '../Styles/view.css'

import { IoSettings } from "react-icons/io5";
import { MdWbSunny } from "react-icons/md";
import { LuMoonStar } from "react-icons/lu"
import { useEffect } from 'react';
import { useState } from 'react';
import { AiTwotoneThunderbolt } from "react-icons/ai";
import { IoNotifications } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { PiTranslateFill } from "react-icons/pi";
import admin from '../assets/admin.jpg';

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
      
      </div>
</div>
  )
}

export default View