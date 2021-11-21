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
                    <NavLink to="#" className='footer__link1 footer-link'>Association</NavLink>
                </li>
                <li className='footer__item1 footer-item'>
                    <NavLink to="#" className='footer__link1 footer-link'>Events</NavLink>
                </li>
                <li className='footer__item1 footer-item'>
                    <NavLink to="#" className='footer__link1 footer-link'>Members</NavLink>
                </li>
                <li className='footer__item1 footer-item'>
                    <NavLink to="#" className='footer__link1 footer-link'>News</NavLink>
                </li>
            </ul>
            <ul className='footer__list2'>
                <li className='footer__item2 footer-item'>
                    <NavLink to="#" className='footer__link2 footer-link'>Events</NavLink>
                </li>
                <li className='footer__item2 footer-item'>
                    <NavLink to="#" className='footer__link2 footer-link'>→ Dubai</NavLink>
                </li>
                <li className='footer__item2 footer-item'>
                    <NavLink to="#" className='footer__link2 footer-link'>→ Davos</NavLink>
                </li>
            </ul>
            <ul className='footer__list3'>
                <li className='footer__item3 footer-item'>
                    <NavLink to="#" className='footer__link3 footer-link'>Contacts</NavLink>
                </li>
                <li className='footer__item3 footer-item'>
                    <NavLink to="#" className='footer__link3 footer-link'>+41792695360</NavLink>
                </li>
                <li className='footer__item3 footer-item'>
                    <NavLink to="#" className='footer__link3 footer-link'>A.Yudina@qlstrategy.ch</NavLink>
                </li>
                <li className='footer__item3 footer-item'>
                    <NavLink to="#" className='footer__link3' id="social_networks">
                        <img src={Instagram} className='footer__link3-img'></img>
                        <img src={Facebook} className='footer__link3-img'></img>
                    </NavLink>
                </li>
            </ul>
            <ul className='footer__list4'>
                <li className='footer__item4 footer-item'>
                    <NavLink to="#" className='footer__link4 footer-link'>Log in</NavLink>
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
