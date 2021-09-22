import React from 'react';
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
                    <a className='footer__link1 footer-link'>Association</a>
                </li>
                <li className='footer__item1 footer-item'>
                    <a className='footer__link1 footer-link'>Events</a>
                </li>
                <li className='footer__item1 footer-item'>
                    <a className='footer__link1 footer-link'>Members</a>
                </li>
                <li className='footer__item1 footer-item'>
                    <a className='footer__link1 footer-link'>News</a>
                </li>
            </ul>
            <ul className='footer__list2'>
                <li className='footer__item2 footer-item'>
                    <a className='footer__link2 footer-link'>Events</a>
                </li>
                <li className='footer__item2 footer-item'>
                    <a className='footer__link2 footer-link'>→ Dubai</a>
                </li>
                <li className='footer__item2 footer-item'>
                    <a className='footer__link2 footer-link'>→ Davos</a>
                </li>
            </ul>
            <ul className='footer__list3'>
                <li className='footer__item3 footer-item'>
                    <a className='footer__link3 footer-link'>Contacts</a>
                </li>
                <li className='footer__item3 footer-item'>
                    <a className='footer__link3 footer-link'>+ 42 867 867 89</a>
                </li>
                <li className='footer__item3 footer-item'>
                    <a className='footer__link3 footer-link'>hi@emtech.eu</a>
                </li>
                <li className='footer__item3 footer-item'>
                    <a className='footer__link3' id="social_networks">
                        <img src={Instagram} className='footer__link3-img'></img>
                        <img src={Facebook} className='footer__link3-img'></img>
                    </a>
                </li>
            </ul>
            <ul className='footer__list4'>
                <li className='footer__item4 footer-item'>
                    <a className='footer__link4 footer-link'>Log in</a>
                </li>
                <li className='footer__item4 footer-item'>
                    <a className='footer__link4 footer-link'>En</a>
                </li>
            </ul>
        </div>
    </div>
 )
}

export default Footer;
