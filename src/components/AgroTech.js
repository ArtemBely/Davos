import React from 'react';
import { NavLink } from 'react-router-dom';
import eachTech from '../../public/images/Group 505.png';

function AgroTech () {
  return(
    <div className='wrap_of_tech'>
        <div className="tech_0">
            <h1 className='title_of_tech'>AgroTech</h1>
            <p className='text_of_tech'>Biotechnology, often abbreviated to biotech,
             is the area of biology that uses living processes, organisms or systems
             to manufacture products intended to improve the quality of human life.
             It is a science-driven industry sector that uses living organisms and
             molecular biology to produce healthcare-related products.
            </p>
             <div className='to_be_cont'>The content of the page will be updated</div>
             <p className='wrap_tech_img'><img src={eachTech} className='tech_img'/></p>
        </div>
    </div>
 )
}

export default AgroTech;
