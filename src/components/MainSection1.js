import React from 'react';
import Davos from '../../public/images/Davos.svg';
import Dubai from '../../public/images/Dubai.svg';

function MainSection1 () {
  return(
    <div className='wrap__main-section1'>
        <div className='main__section1'>
            <div className='section1__description'>
                <h1 className='section1__title'>International EmTech <br /> Investment Association</h1>
                <p className='section1__paragraph'>
                In the heart of Crypto Valley & Swiss Innovation <br />
                hub with the purpose to unite like-minded people <br />
                to build a better future leveraging emerging <br />
                technologies
                </p>
                <a href="##" className='section1__link'>More →</a>
            </div>
            <div className='section1__img-container'>
                <h2 className='section1__img-title'>Coming soon</h2>
                <img src={Davos} className='section1__img-davos'></img>
                <img src={Dubai} className='section1__img-dubai'></img>
            </div>
        </div>
    </div>
 )
}

export default MainSection1;
