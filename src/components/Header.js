import React from 'react';
import logo from '../../public/images/Vector-2.svg';
import { NavLink } from 'react-router-dom';

// let burger = document.querySelector(".header__burger");
// let list = document.querySelector(".nanigation-list");
// let body = document.querySelector("body");

// function AddClass() {
//     burger.classList.toggle("active");
//     list.classList.toggle("active");
//     body.classList.toggle("lock");
// }
// burger.addEventListener("click", AddClass);
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
      <div className='wrap_header'>
          <div className='header'>
              <div className="nanigation">
                <img src={logo} id='logo' />
                <div className="header__burger" ref={this.head} onClick={this.addClass}>
                  <span></span>
                </div>
                <ul className="nanigation-list" ref={this.nan}>
                  <li className="nanigation-item">
                    <NavLink to="/association" className="nanigation-link">Association</NavLink>
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
}

export default Header;
