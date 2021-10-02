import React from 'react';
import logo from '../../public/images/Vector-2.svg';
import { NavLink } from 'react-router-dom';

class Header extends React.Component {

  constructor() {
    super()

    this.head = React.createRef();
    this.nan = React.createRef();
  }

  addClass = () => {
    this.head.current.classList.toggle("active");
    this.nan.current.classList.toggle("active");
  }

  render() {
    return(
      <div className='wrap__header'>
          <div className='header'>
              <div className="navigation">
                <img src={logo} id='logo' />
                <div className="header__burger" ref={this.head} onClick={this.addClass}>
                  <span></span>
                </div>
                <ul className="navigation-list" ref={this.nan}>
                  <li className="navigation-item">
                    <NavLink to="/association" className="navigation-link">Association</NavLink>
                  </li>
                  <li className="navigation-item">
                    <NavLink to="/events" className="navigation-link">Events</NavLink>
                  </li>
                  <li className="navigation-item">
                    <NavLink to="#" className="navigation-link">Members</NavLink>
                  </li>
                  <li className="navigation-item">
                    <NavLink to="#" className="navigation-link">News</NavLink>
                  </li>
                  <li className="navigation-item">
                    <NavLink to="#" className="navigation-link">Contacts</NavLink>
                  </li>
                  <li className="navigation-item nav-login">
                    <NavLink to="#" className="navigation-link" id='login'>Log in</NavLink>
                  </li>
                </ul>
              </div>
              <p id='under_logo'>International EmTech Investment Association</p>
          </div>
      </div>
   )
  }
}

export default Header;
