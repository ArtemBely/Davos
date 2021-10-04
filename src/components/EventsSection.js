import React from 'react';
import { NavLink } from 'react-router-dom';
import eventImg from "../../public/images/EventsImg.svg"
import MainSection4 from './MainSection4';



function EventsSection () {
  return(
    <div className="wrap__event-section">
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
                    <NavLink to='#' className="event__section2-link">Submit your event</NavLink>
                </div>
                <MainSection4 />
            </div>
        </div>
    </div>
 )
}

export default EventsSection;
