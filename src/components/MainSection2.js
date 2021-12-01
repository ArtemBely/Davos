import React from 'react';
import facebook from '../../public/images/9.png';
import spacex from '../../public/images/8.png';
import tesla from '../../public/images/7.png';
import visa from '../../public/images/4.png';
import google from '../../public/images/10.png';
import amazon from '../../public/images/6.png';

function MainSection2 () {
  return(
    <div className='wrap__main-section2'>
        <div className='main__section2'>
            <h2 className='section2-title'>About our members</h2>
            <p className='section2-paragraph'>
            Our members are leaders in tech industries, investment structures, <br />
            international organizations and governmental bodies.
            </p>
            <div className='section2__logo-container'>
                <ul className='section2__logo-list'>
                    <li className='section2__logo-item' id='eagle'>
                        <img src={facebook} className='section2__logo-img' id="facebook"></img>
                    </li>
                    <li className='section2__logo-item'>
                        <img src={spacex} className='section2__logo-img' id="spacex"></img>
                    </li>
                    <li className='section2__logo-item' id='vrt'>
                        <img src={tesla} className='section2__logo-img' id="tesla"></img>
                    </li>
                    <li className='section2__logo-item' id='goweb'>
                        <img src={visa} className='section2__logo-img' id="visa"></img>
                    </li>
                    <li className='section2__logo-item' id='curio'>
                        <img src={google} className='section2__logo-img' id="google"></img>
                    </li>
                    <li className='section2__logo-item' id='smart_eye'>
                        <img src={amazon} className='section2__logo-img' id="amazon"></img>
                    </li>
                </ul>
            </div>
        </div>
    </div>
 )
}

export default MainSection2;
