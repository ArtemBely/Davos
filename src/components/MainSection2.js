import React from 'react';
import facebook from '../../public/images/facebook.svg';
import spacex from '../../public/images/spacex.svg';
import tesla from '../../public/images/tesla.svg';
import visa from '../../public/images/visa.svg';
import google from '../../public/images/google.svg';
import amazon from '../../public/images/amazon.svg';
import ibm from '../../public/images/ibm.svg';
import samsung from '../../public/images/samsung.svg';

function MainSection2 () {
  return(
    <div className='wrap__main-section2'>
        <div className='main__section2'>
            <h2 className='section2-title'>About our members</h2>
            <p className='section2-paragraph'>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem <br />
            accusantium doloremque laudantium, totam rem aperiam.
            </p>
            <div className='section2__logo-container'>
                <ul className='section2__logo-list'>
                    <li className='section2__logo-item'>
                        <img src={facebook} className='section2__logo-img'></img>
                    </li>
                    <li className='section2__logo-item'>
                        <img src={spacex} className='section2__logo-img'></img>
                    </li>
                    <li className='section2__logo-item'>
                        <img src={tesla} className='section2__logo-img'></img>
                    </li>
                    <li className='section2__logo-item'>
                        <img src={visa} className='section2__logo-img'></img>
                    </li>
                    <li className='section2__logo-item'>
                        <img src={google} className='section2__logo-img'></img>
                    </li>
                    <li className='section2__logo-item'>
                        <img src={amazon} className='section2__logo-img'></img>
                    </li>
                    <li className='section2__logo-item'>
                        <img src={ibm} className='section2__logo-img'></img>
                    </li>
                    <li className='section2__logo-item'>
                        <img src={samsung} className='section2__logo-img'></img>
                    </li>
                </ul>
            </div>
        </div>
    </div>
 )
}

export default MainSection2;
