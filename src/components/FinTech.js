import React from 'react';
import { NavLink } from 'react-router-dom';
import eachTech from '../../public/images/shutterstock_1029251239 2.png';

function FinTech () {
  return(
    <div className='wrap_of_tech'>
        <div className="tech_0">
            <h1 className='title_of_tech'>FinTech</h1>
            <p className='text_of_tech'>Ultimately, the goal of fintech is to make financial
            services less expensive and more flexible per transaction.
            We support innovations that aim to compete with traditional
             financial methods in the delivery of financial services.</p>
             <div className='to_be_cont'>The content of the page will be updated</div>
             <p className='wrap_tech_img'><img src={eachTech} className='tech_img'/></p>
        </div>
    </div>
 )
}

export default FinTech;
