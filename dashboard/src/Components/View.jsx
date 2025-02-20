import React from 'react'
import { IoMenu } from "react-icons/io5";
import '../Styles/view.css'
import { AiOutlineTranslation } from "react-icons/ai";
import { IoSettings } from "react-icons/io5";
import { MdWbSunny } from "react-icons/md";
import { LuMoonStar } from "react-icons/lu"
import { useEffect } from 'react';
import { useState } from 'react';
import { AiTwotoneThunderbolt } from "react-icons/ai";
import { IoNotifications } from "react-icons/io5";
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
      
      
      <div className='view-content'>
      <IoMenu className='view-menu'/>
      <input type="text" placeholder='ctrl + k' />
      </div>

      <div className='view-icons'>
     
         {isDarkTheme ? <MdWbSunny onClick={toggleTheme}/> : <LuMoonStar onClick={toggleTheme}/>}
       
          <div className="dropdown">
           
              <AiOutlineTranslation  onClick={toggleDropdown}/>
         

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