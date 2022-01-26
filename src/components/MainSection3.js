import React from 'react';
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
import cross from '../../public/images/cross.svg';
import { NavLink } from 'react-router-dom';
import MainSection4 from './MainSection4';

class MainSection3 extends React.Component{

  constructor() {

    super()

    this.state = {
        isOpen5: false,
    }
  }

  popap2 = () => {
    this.setState({ isOpen5: true });
  }

  render() {
    return(
      <div className='wrap__main-section3'>

      <div className="popup" style={{
        display: this.state.isOpen5 == false ? 'none' : 'block'
      }}>
          <div className="popup__body">
              <div className="popup__content">
                  <div className="popup__header">
                      <h2 className="popup-title">Contact us for more</h2>
                      <img src={cross} className="popup__close" onClick={()=>this.setState({isOpen5:false})}></img>
                  </div>
                  <p className="popup__main-paragraph">
                      Fill out the form, our <br />
                      manager will contact you
                  </p>
                  <form action='/events/send' method='POST' className="popup__form">
                      <input type="text" name="name" className="popup__input" placeholder="Name" required/>
                      <input type="text" name="phone" className="popup__input" placeholder="Phone number" required/>
                      <input type="text" name="email" className="popup__input" placeholder="Email" required/>
                      <div className="popup__footer">
                          <button type='submit' className="popup__footer-btn">Send</button>
                          <p className="popup__footer-paragraph">
                              By clicking on the «Send» button you <br />
                              confirm your consent to the processing <br />
                              of data and agree to the privacy policy
                          </p>
                      </div>
                  </form>
              </div>
          </div>
      </div>


          <div className='main__section3'>
              <h2 className='section3-title'>Technologies</h2>
              <div className='section3__container-img'>
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
              <div className='section3__events'>
                  <div className='events__title-container'>
                      <h2 className='section3-title'>Events</h2>
                      <NavLink to="#" className='events__title-link' onClick={this.popap2}>Submit your event</NavLink>
                  </div>
                  <MainSection4 />
              </div>
          </div>
      </div>
   )
  }
}

export default MainSection3;
