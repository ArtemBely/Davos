import React from 'react';
import { NavLink } from 'react-router-dom';
import eachTech from '../../public/images/Group 506.png';

function EduTech () {
  return(
    <div className='wrap_of_tech'>
        <div className="tech_0">
            <p className='title_of_tech'>EduTech</p>
            <p className='text_of_tech'>Educational Technologies - a step towards transformations of teaching and learning.
              More than 90% of teachers believe tech is going to have a major impact on the way they educate in the near future.
              For that reason, it’s vital to understand the benefits EdTech brings in the form of increased communication,
              collaboration and overall quality of education.
            </p>
             <div className='to_be_cont'>The content of the page will be updated</div>
             <p className='wrap_tech_img'><img src={eachTech} className='tech_img'/></p>
        </div>
    </div>
 )
}

export default EduTech;
