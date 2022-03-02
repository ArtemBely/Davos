import React from 'react';
import { NavLink } from 'react-router-dom';
import eachTech from '../../public/images/Mask Group.png';

function FoodTech () {
  return(
    <div className='wrap_of_tech'>
        <div className="tech_0">
            <h1 className='title_of_tech'>FoodTech</h1>
            <p className='text_of_tech'>The commitment of food science and technology professionals
             to advancing the science of food, ensuring a safe and abundant food supply,
             and contributing to healthier people everywhere is integral to this evolution.
            </p>
             <div className='to_be_cont'>The content of the page will be updated</div>
             <p className='wrap_tech_img'><img src={eachTech} className='tech_img'/></p>
        </div>
    </div>
 )
}

export default FoodTech;
