import React from 'react';
import { NavLink } from 'react-router-dom';
import eachTech from '../../public/images/Group 502.png';

function Vr () {
  return(
    <div className='wrap_of_tech'>
        <div className="tech_0">
            <p className='title_of_tech'>VR, AR, Mixed Reality(MR)</p>
            <p className='text_of_tech'>An interactive experience of a real-world environment
             where objects that reside in the real world are enhanced by computer-generated perceptual
             information, sometimes across multiple sensory modalities, including visual, auditory, haptic,
             somatosensory and olfactory. MR consists of both Augmented and Virtual Reality, and allows users
             to blend their real-world environment with digital data. The technology is used worldwide,
             and provides solutions for a range of industries.
             </p>
             <div className='to_be_cont'>The content of the page will be updated</div>
             <p className='wrap_tech_img'><img src={eachTech} className='tech_img' id='vr_img'/></p>
        </div>
    </div>
 )
}

export default Vr;
