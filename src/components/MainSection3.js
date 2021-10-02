import React from 'react';
import FinTech from '../../public/images/FinTech.svg';
import Variables from '../../public/images/Variables.svg';
import VirtualReality from '../../public/images/VirtualReality.svg';
import MedTech from '../../public/images/MedTech.svg';
import BioTech from '../../public/images/BioTech.svg';
import AgroTech from '../../public/images/AgroTech.svg';
import EduTech from '../../public/images/EduTech.svg';
import Artificial_intelligence from '../../public/images/Artificial_intelligence.svg';
import DLT from '../../public/images/DLT.svg';
import FoodTech from '../../public/images/FoodTech.svg';
import { NavLink } from 'react-router-dom';
import MainSection4 from './MainSection4';

function MainSection3 () {
  return(
    <div className='wrap__main-section3'>
        <div className='main__section3'>
            <h2 className='section3-title'>Technologies</h2>
            <div className='section3__container-img'>
                <ul className='section3-list'>
                    <li className='section3-item'>
                        <img src={FinTech} className='section3-img'></img>
                    </li>
                    <li className='section3-item'>
                        <img src={Variables} className='section3-img'></img>
                    </li>
                    <li className='section3-item'>
                        <img src={VirtualReality} className='section3-img section3-big-img'></img>
                    </li>
                    <li className='section3-item'>
                        <img src={MedTech} className='section3-img'></img>
                    </li>
                    <li className='section3-item'>
                        <img src={BioTech} className='section3-img'></img>
                    </li>
                    <li className='section3-item'>
                        <img src={AgroTech} className='section3-img'></img>
                    </li>
                    <li className='section3-item'>
                        <img src={EduTech} className='section3-img'></img>
                    </li>
                    <li className='section3-item'>
                        <img src={Artificial_intelligence} className='section3-img section3-big-img'></img>
                    </li>
                    <li className='section3-item'>
                        <img src={DLT} className='section3-img'></img>
                    </li>
                    <li className='section3-item'>
                        <img src={FoodTech} className='section3-img'></img>
                    </li>
                </ul>
            </div>
            <div className='section3__events'>
                <div className='events__title-container'>
                    <h2 className='section3-title'>Events</h2>
                    <NavLink to="##" className='events__title-link'>Submit your event</NavLink>
                </div>
                <MainSection4 />
            </div>
        </div>
    </div>
 )
}

export default MainSection3;
