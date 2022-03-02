import React from 'react';
import { NavLink } from 'react-router-dom';
import eachTech from '../../public/images/Group 503.png';

function MedTech () {
  return(
    <div className='wrap_of_tech'>
        <div className="tech_0">
            <h1 className='title_of_tech'>MedTech</h1>
            <p className='text_of_tech'>MedTech, or medical technology, is every product,
             service or solution using medical technology to improve people's health by preventing,
             diagnosing, monitoring, and treating disease.
             It encompasses a wide range of healthcare products and is used to treat diseases and medical
             conditions affecting humans.
             The use of technology increases provider capabilities and patient access whilst improving
             the quality of life for some patients and saving the lives of others.
             </p>
             <p className='to_be_cont'>The content of the page will be updated</p>
             <p className='wrap_tech_img'><img src={eachTech} className='tech_img'/></p>
        </div>
    </div>
 )
}

export default MedTech;
