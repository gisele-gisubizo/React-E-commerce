import React, { useState } from 'react';
import admin from '../assets/admin.jpg';
import { Link } from 'react-router-dom';
import '../Styles/Sidebar.css'
import { FiMenu } from "react-icons/fi";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import { DiGoogleAnalytics } from "react-icons/di";
import { FaFile } from "react-icons/fa";

import { VscGraph } from "react-icons/vsc";
import { BiSolidDoughnutChart } from "react-icons/bi";
import { FaChartPie } from "react-icons/fa";
import { BsDatabaseFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { TbClock24 } from "react-icons/tb";
import { PiFlagPennantDuotone } from "react-icons/pi";
import { BiSolidComponent } from "react-icons/bi";
import { TbFlagFilled } from "react-icons/tb";
import { HiMiniCursorArrowRipple } from "react-icons/hi2";
import { TbLayoutGridAdd } from "react-icons/tb";
import { TiBatteryCharge } from "react-icons/ti";





function Sidebar() {
    const [openDropdown, setOpenDropdown] = useState(false);
    const [layout, setlayout] = useState(false);

    return (
        <div className='container-side'>
            <div className='content-side-top'>
            <div className='sup-sup'>
                <div  className='pro'><sup>pro</sup></div>
                <div className='V'><sup >v1.1.0</sup></div>
            </div>
                <h2>Able</h2>
                
            </div>

            <div className='content-side-admin'>
                <img src={admin} alt='admin john image'  className='admin-image'/>
                <div className='names-admin'>
                    <p className='name-real'>John Smith </p>
                    <p className='name-title'>Administrator</p>
                    <FiMenu size={18}  className='menu-icon'/>
                </div>
            </div>

            <div className='content-side-navigation'>
                <div className='Widgets'>
                    <h5>NAVIGATION</h5>
                    <ul>
                        <Link className='link'>
                            <li><DiGoogleAnalytics className='icon-side'/>Dashboard</li>
                        </Link>
                    </ul>

                    {/* Dropdown Section */}
                    <div className='dropDown'>
                        <div className="dropdown">
                            {/* Clickable title */}
                            <div 
                                className="dropdown-title" 
                                onClick={() => setOpenDropdown(!openDropdown)}
                                style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', padding: '10px 0' }}
                            >
                                <span className="dropdown-text" style={{ flex: 1 }}></span>
                                {openDropdown ? <MdKeyboardArrowDown className="arrow-icon" /> : <MdKeyboardArrowRight className="arrow-icon" />}
                            </div>

                            {/* Dropdown Items */}
                            <div 
  className={`dropdown-items ${openDropdown ? "show" : ""}`} 
  style={{ 
    display: openDropdown ? 'block' : 'none', 
    paddingLeft: '20px',
     // Moves it higher
  }}
>
                                <div className="dropdown-item">• Default</div>
                                <div className="dropdown-item">• Analytics</div>
                                <div className="dropdown-item disabled" style={{ color: 'gray', cursor: 'not-allowed' }}>• Finance</div>
                            </div>
                        </div>
                    </div>
                     <ul>
                            <Link className='link'>
                                <li><FaFile  className='icon-side'/>Layout</li>
                            </Link>
                        </ul>
                        {/* Dropdown Section */}
                        <div className='dropDown'>
                            <div className="dropdown">
                                {/* Clickable title */}
                                <div
                                    className="dropdown-title"
                                    onClick={() => setlayout(!layout)}
                                    style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', padding: '10px 0' }}
                                >
                                    <span className="dropdown-text" style={{ flex: 1 }}></span>
                                    {openDropdown ? <MdKeyboardArrowDown className="arrow-icons" /> : <MdKeyboardArrowRight className="arrow-icons"/>}
                                </div>
                                {/* Dropdown Items */}
                                <div className={`dropdown-items ${layout ? "show" : ""}`} style={{ display: layout ? 'block' : 'none', paddingLeft: '20px' }}>
                                    <div className="dropdown-item">• Vertical</div>
                                    <div className="dropdown-item">• Horizontal</div>
                                    <div className="dropdown-item">• Layout 2</div>
                                    <div className="dropdown-item">• Compact</div>
                                    <div className="dropdown-item disabled" style={{ color: 'gray', cursor: 'not-allowed' }}>• Tab</div>
                                </div>
                            </div>
                        </div>
                                    
                </div>

            
                    
                           </div>
                    


                <div className='Widgets'>
        <h5>WIDGET</h5>
        <ul>
     <Link className='links'>     
        <li><BiSolidDoughnutChart  className='icon-side'/>Statics</li>
        </Link>

        <Link  className='links'>     
        <li><VscGraph  className='icon-side'/>Data</li>
        </Link>

        <Link className='links'>     
        <li><FaChartPie  className='icon-side'/>Chart</li>
        </Link>

        </ul>
    </div>

    <div className='Widgets'>
        <h5>ADMIN PANEL</h5>

        <ul>
<Link  className='links'>
    <li><BsDatabaseFill  className='icon-side'/>Online Membership</li>
</Link>

<Link  className='links'>
    <li><FaUser  className='icon-side'/>Membership</li>
</Link>

<Link  className='links'>
    <li><TbClock24  className='icon-side'/>Helpdesk</li>
</Link>

<Link  className='links'>
    <li><PiFlagPennantDuotone  className='icon-side'/>Invoice</li>
</Link>

        </ul>
    </div>

 <div className='Widgets'>
<h5>UI COMPONENTS</h5>
<ul>
    <Link  className='links'>
        <li><BiSolidComponent  className='icon-side'/>Components</li>
    </Link>

    <Link  className='links'>
        <li><TbFlagFilled  className='icon-side'/>Animation</li>
    </Link>

    <Link  className='links'>
        <li><HiMiniCursorArrowRipple  className='icon-side'/>Icons</li>
    </Link>

</ul>
 </div>

 <div className='Widgets'>
    <h5>FORMS</h5>
        <ul>
            <Link  className='links'>
                <li><TbLayoutGridAdd  className='icon-side'/>Form Elements</li>
            </Link>

            <Link  className='links'>
                <li><TiBatteryCharge  className='icon-side'/>Form Plugins</li>
            </Link>

            <Link  className='links'>
                <li>Text Editor</li>
            </Link>

            <Link  className='links'>
                <li>Form Layouts</li>
            </Link>

            <Link  className='links'>
                <li>Form Layouts</li>
            </Link>

            <Link  className='links'>
                <li>Wizard</li>
            </Link>

            <Link  className='links'>
                <li>Form  Validation</li>
            </Link>

            <Link  className='links'>
                <li>Image Cropper</li>
            </Link>

        </ul>
 </div>

 <div className='Widgets'>
    <h5>TABLES</h5>

    <ul>
        <Link  className='links'>
            <li> BootStrap Table</li>
        </Link>

        <Link  className='links'>
            <li> Vanilla Table</li>
        </Link>

        <Link  className='links'>
            <li> Data Table</li>
        </Link>

        <Link  className='links'>
            <li> DT extension</li>
        </Link>
    </ul>
 </div>

 <div className='Widgets'>
 <h5>CHART AND MAPS</h5>
    <ul>
        <Link  className='links'>
            <li>Charts</li>
        </Link>

        <Link  className='links'>
            <li>Map</li>
        </Link>
    </ul>
 </div>


  <div className='Widgets'>
    <h5>APPLICATION</h5>
    <ul>
        <Link  className='links'>
            <li> Calender</li>
        </Link>


        <Link  className='links'>
            <li> Chat</li>
        </Link>

        <Link  className='links'>
            <li> Customer</li>
        </Link>

        <Link  className='links'>
            <li> Ecommerce</li>
        </Link>

        <Link  className='links'>
            <li> File Manager</li>
        </Link>


        <Link  className='links'>
            <li> Mail</li>
        </Link>

        <Link  className='links'>
            <li> User</li>
        </Link>
    </ul>
  </div>

  <div className='Widgets'>
    <h5>PAGES</h5>
    <ul>
        <Link  className='links'>
            <li>Authentication</li>
        </Link>

        <Link  className='links'>
            <li>Maintenance</li>
        </Link>

        <Link  className='links'>
            <li>Contact Us</li>
        </Link>

        <Link  className='links'>
            <li>Price</li>
        </Link>

        <Link  className='links'>
            <li>Landing</li>
        </Link>
    </ul>
  </div>


<div className='Widgets'>
<h5>OTHER</h5>
    <ul>
        <Link  className='links'>
            <li>Menu Levels</li>
        </Link>

        <Link  className='links'>
            <li>Sample Page</li>
        </Link>
    </ul>
</div>


            </div>


 
   );
}

export default Sidebar;