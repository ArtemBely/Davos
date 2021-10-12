import React from 'react';
import dlt from '../../public/images/DLT.svg';
import img1 from '../../public/images/Group 46.png';
import img2 from '../../public/images/image 23.svg';
import img3 from '../../public/images/Group 48.png';
import img4 from '../../public/images/Group 51.png';
import img5 from '../../public/images/Group 53.png';
import img6 from '../../public/images/Group 370.png';
import img7 from '../../public/images/Group 373.png';
import img8 from '../../public/images/Group 421.png';
import img9 from '../../public/images/Group 49.png';
import foodTech from '../../public/images/FoodTech.svg';
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
                        <img src={img1} className='section3-img'></img>
                    </li>
                    <li className='section3-item'>
                        <img src={img8} className='section3-img' />
                    </li>
                    <li className='section3-item'>
                        <img src={img3} className='section3-img section3-big-img'></img>
                    </li>
                    <li className='section3-item'>
                        <img src={img9} className='section3-img'></img>
                    </li>
                    <li className='section3-item'>
                        <img src={img6} className='section3-img'></img>
                    </li>
                    <li className='section3-item'>
                        <img src={img4} className='section3-img'></img>
                    </li>
                    <li className='section3-item'>
                        <img src={img7} className='section3-img'></img>
                    </li>
                    <li className='section3-item'>
                        <img src={img5} className='section3-img section3-big-img'></img>
                    </li>
                    <li className='section3-item'>
                        <img src={dlt} className='section3-img'></img>
                    </li>
                    <li className='section3-item'>
                        <img src={foodTech} className='section3-img'></img>
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
