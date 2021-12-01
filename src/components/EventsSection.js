import React from 'react';
import { NavLink } from 'react-router-dom';
import eventImg from "../../public/images/EventsImg.svg"
import foneEvents from '../../public/images/Group 417.png';
import cross from '../../public/images/cross.svg';
import MainSection4 from './MainSection4';



class EventsSection extends React.Component{

  constructor() {

    super()

    this.state = {
        isOpen4: false,
    }
  }

  popap = () => {
    this.setState({ isOpen4: true });
  }

  render() {
    return(
      <div className="wrap__event-section">


      <div className="popup" style={{
        display: this.state.isOpen4 == false ? 'none' : 'block'
      }}>
          <div className="popup__body">
              <div className="popup__content">
                  <div className="popup__header">
                      <h2 className="popup-title">Contact us for more</h2>
                      <img src={cross} className="popup__close" onClick={()=>this.setState({isOpen4:false})}></img>
                  </div>
                  <p className="popup__main-paragraph">
                      Fill out the form, our <br />
                      manager will contact you
                  </p>
                  <form className="popup__form">
                      <input type="text" name="Name" className="popup__input" placeholder="Name" required/>
                      <input type="text" name="Phone_number" className="popup__input" placeholder="Phone number" required/>
                      <input type="text" name="Email" className="popup__input" placeholder="Email" required/>
                      <div className="popup__footer">
                          <button className="popup__footer-btn">Send</button>
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

            <img src={foneEvents} className="event-img2" />

          <div className="event__container">
            <img src={eventImg} className="event-img" />
              <div className="event__section">
                  <h2 className="event__section-title">Events</h2>
                  <p className="event__section-paragraph">
                      Every Association member can create an online <br />
                      or offline event/meet up and let other members know. <br />
                      The Association will support such initiatives, publish <br />
                      them in our Calendar and notify subscription list.
                  </p>
              </div>
              <div className="event__section2">
                  <div className="event__title-container">
                      <h2 className="event__section2-title">Events</h2>
                      <NavLink to='#' className="event__section2-link" onClick={this.popap}>Submit your event</NavLink>
                  </div>
                  <MainSection4 />
              </div>
          </div>
      </div>
    )
  }
}

export default EventsSection;
