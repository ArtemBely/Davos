import React from 'react';
import { NavLink } from 'react-router-dom';
import Footerlogo from '../../public/images/Vector-2.svg';
import Instagram from '../../public/images/inst_ico.svg';
import Facebook from '../../public/images/facebook_ico.svg';

function Footer () {
  return(
    <div className='wrap__footer'>
        <div className='footer'>
            <div className='footer__logo'>
                <img src={Footerlogo} className='footer__logo-img'></img>
            </div>
            <ul className='footer__list1'>
                <li className='footer__item1 footer-item'>
                    <NavLink to="/association" className='footer__link1 footer-link'>Association</NavLink>
                </li>
                <li className='footer__item1 footer-item'>
                    <NavLink to="/events" className='footer__link1 footer-link' style={{display: 'none'}}>Events</NavLink>
                </li>
                <li className='footer__item1 footer-item'>
                    <NavLink to="/members" className='footer__link1 footer-link'>Members</NavLink>
                </li>
                <li className='footer__item1 footer-item news_hide'>
                    <NavLink to="#" className='footer__link1 footer-link'>News</NavLink>
                </li>
            </ul>
            <ul className='footer__list2'>
                <li className='footer__item2 footer-item'>
                    <NavLink to="/events" className='footer__link2 footer-link'>Events</NavLink>
                </li>
                <li className='footer__item2 footer-item'>
                    <a rel="nofollow" href='https://dfisx.com/' className='footer__link2 footer-link'>→ Dubai</a>
                </li>
                <li className='footer__item2 footer-item'>
                    <a rel="nofollow" href="https://emtechinvest.com/" className='footer__link2 footer-link'>→ Davos</a>
                </li>
            </ul>
            <ul className='footer__list3'>
                <li className='footer__item3 footer-item'>
                    <NavLink to="/contacts" className='footer__link3 footer-link'>Contacts</NavLink>
                </li>
                <li className='footer__item3 footer-item'>
                    <a href="tel:+41 79 269 5360" className='footer__link3 footer-link'>+41 79 269 5360</a>
                </li>
                <li className='footer__item3 footer-item'>
                    <a rel="nofollow" href="mailto:A.Yudina@qlstrategy.ch" className='footer__link3 footer-link'>A.Yudina@qlstrategy.ch</a>
                </li>
                <li className='footer__item3 footer-item'>
                    <NavLink to="#" className='footer__link3' id="social_networks">
                        <img src={Instagram} className='footer__link3-img'></img>
                        <a rel="nofollow" href='https://www.facebook.com/International-EmTech-Investment-Association-101085159068669'>
                        <img src={Facebook} className='footer__link3-img'></img>
                        </a>
                    </NavLink>
                </li>
            </ul>
            <ul className='footer__list4'>
                <li className='footer__item4 footer-item'>
                    <NavLink to="#" className='footer__link4 footer-link' id='login_foot'>Log in</NavLink>
                </li>
                <li className='footer__item4 footer-item'>
                    <NavLink to="#" className='footer__link4 footer-link'>En</NavLink>
                </li>
            </ul>
        </div>
    </div>
 )
}

export default Footer;
