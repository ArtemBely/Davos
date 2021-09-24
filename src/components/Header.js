import React from 'react';
import logo from '../../public/images/Vector-2.svg';
import { NavLink } from 'react-router-dom';

function Header () {
  return(
    <div className='wrap_header'>
        <div className='header'>
            <div className="nanigation">
              <img src={logo} id='logo' />
              <div className="header__burger">
                <span></span>
              </div>
              <ul className="nanigation-list">
                <li className="nanigation-item">
                  <NavLink to="#" className="nanigation-link">Association</NavLink>
                </li>
                <li className="nanigation-item">
                  <NavLink to="#" className="nanigation-link">Events</NavLink>
                </li>
                <li className="nanigation-item">
                  <NavLink to="#" className="nanigation-link">Members</NavLink>
                </li>
                <li className="nanigation-item">
                  <NavLink to="#" className="nanigation-link">News</NavLink>
                </li>
                <li className="nanigation-item">
                  <NavLink to="#" className="nanigation-link">Contacts</NavLink>
                </li>
                <li className="nanigation-item nav-login">
                  <NavLink to="#" className="nanigation-link" id='login'>Log in</NavLink>
                </li>
              </ul>
            </div>
            <p id='under_logo'>International EmTech Investment Association</p>
        </div>
    </div>
 )
}

export default Header;
