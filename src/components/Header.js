import React from 'react';
import logo from '../../public/images/Vector-2.svg';
import { NavLink } from 'react-router-dom';

function Header () {
  return(
    <div className='wrap_header'>
        <div className='header'>
            <img src={logo} id='logo' />
            <p id='under_logo'>International EmTech Investment Association</p>
            <NavLink to="#" className="nav_header" id="ass">Association</NavLink>
            <NavLink to="#" className="nav_header" id="event">Events</NavLink>
            <NavLink to="#" className="nav_header" id="member">Members</NavLink>
            <NavLink to="#" className="nav_header" id="new">News</NavLink>
            <NavLink to="#" className="nav_header" id="cont">Contacts</NavLink>
            <NavLink to="#" className="nav_header" id='login'>Log in</NavLink>
        </div>
    </div>
 )
}

export default Header;
