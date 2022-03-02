import React from 'react';
import { NavLink } from 'react-router-dom';
import eachTech from '../../public/images/Group 501.png';

function Wearables () {
  return(
    <div className='wrap_of_tech'>
        <div className="tech_0">
            <h1 className='title_of_tech'>Wearables</h1>
            <p className='text_of_tech'>Wearable technology, also known as "wearables",
             is a category of electronic devices that can be worn as accessories, embedded in clothing,
              implanted in the user's body, or even tattooed on the skin. Wearable technology provides us
               with the ability to monitor our fitness levels, track our location with GPS, and view text messages
                more quickly. What is more, these devices are present in moments of a patient's life when another technology isn't.</p>
             <p className='to_be_cont'>The content of the page will be updated</p>
             <p className='wrap_tech_img'><img src={eachTech} className='tech_img'/></p>
        </div>
    </div>
 )
}

export default Wearables;
