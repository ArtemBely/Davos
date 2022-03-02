import React from 'react';
import { NavLink } from 'react-router-dom';
import dlt from '../../public/images/Group 498.png';
import img1 from '../../public/images/Group 491.png';
import img2 from '../../public/images/Group 490.png';
import img3 from '../../public/images/Group 492.png';
import img4 from '../../public/images/Group 51.png';
import img5 from '../../public/images/Group 497.png';
import img6 from '../../public/images/Group 370.png';
import img7 from '../../public/images/Group 373.png';
import img8 from '../../public/images/Group 490.png';
import img9 from '../../public/images/Group 493.png';
import foodTech from '../../public/images/Group 499.png';

class AllTechno extends React.Component{
  render() {
    return(
      <div className='section3__container-img inside_cont_img'>
       <h2 className='section3-title title_inside_techno'>Technologies</h2>
          <ul className='section3-list'>

              <li className='section3-item'>
              <NavLink to='/technologie/FinTech' className='tech_link'>
                  <img src={img1} className='section3-img'></img>
                  </NavLink>
              </li>
              <li className='section3-item'>
              <NavLink to='/technologie/Wearables' className='tech_link'>
                  <img src={img8} className='section3-img' />
                  </NavLink>
              </li>
              <li className='section3-item'>
              <NavLink to='/technologie/VR' className='tech_link'>
                  <img src={img3} className='section3-img section3-big-img'></img>
                  </NavLink>
              </li>
              <li className='section3-item'>
              <NavLink to='/technologie/MedTech' className='tech_link'>
                  <img src={img9} className='section3-img'></img>
                  </NavLink>
              </li>
              <li className='section3-item'>
              <NavLink to='/technologie/BioTech' className='tech_link'>
                  <img src={img6} className='section3-img'></img>
                  </NavLink>
              </li>
              <li className='section3-item'>
              <NavLink to='/technologie/AgroTech' className='tech_link'>
                  <img src={img4} className='section3-img'></img>
                  </NavLink>
              </li>
              <li className='section3-item'>
              <NavLink to='/technologie/EduTech' className='tech_link'>
                  <img src={img7} className='section3-img'></img>
                  </NavLink>
              </li>
              <li className='section3-item'>
              <NavLink to='/technologie/AI' className='tech_link'>
                  <img src={img5} className='section3-img section3-big-img'></img>
                  </NavLink>
              </li>
              <li className='section3-item'>
              <NavLink to='/technologie/Blockchain' className='tech_link'>
                  <img src={dlt} className='section3-img'></img>
                  </NavLink>
              </li>
              <li className='section3-item'>
              <NavLink to='/technologie/FoodTech' className='tech_link'>
                  <img src={foodTech} className='section3-img'></img>
                  </NavLink>
              </li>

          </ul>
      </div>
    )
  }
}

export default AllTechno;
