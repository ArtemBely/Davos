import React from 'react';
import { NavLink } from 'react-router-dom';
import eachTech from '../../public/images/Mask Group — копия.png';

function Ai () {
  return(
    <div className='wrap_of_tech'>
        <div className="tech_0_ai">
            <p className='title_of_tech title_of_tech_ai'>Ai</p>
            <p className='text_of_tech text_of_tech_ai'>According to McKinsey, "AI could potentially deliver an additional economic
             output of around $13 trillion by 2030, boosting global GDP by about 1.2% per year."
            AI/ML applications bring about the convergence of analytics, data science and automation
            that accelerate successful digital transformations and fuel business outcomes.
            Every organization is challenged to remain competitive in the market, increasing
            revenue and reducing operating costs. AI is the single most powerful tool that organizations are using to
            make informed decisions, drive new lines of revenue, attract new customers and optimize costs of business operations.
            </p>
             <div className='to_be_cont_ai'>The content of the page will be updated</div>
             <p className='wrap_tech_img'><img src={eachTech} className='tech_img_ai'/></p>
        </div>
    </div>
 )
}

export default Ai;
