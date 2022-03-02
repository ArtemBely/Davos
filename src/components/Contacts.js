import React from 'react';
import Header from './Header';
import Footer from './Footer';
import logo from "../../public/images/Strategic_logo.png";
import arrowBtn from '../../images/download-arrow.svg';
import blackArr from '../../public/images/Vector (1).svg';

function Contacts() {
  return(
    <div>
        <Header />
             <div itemScope itemType="http://schema.org/Organization" className="strategic str_cont">
               <link itemProp='url' href='https://emtechassociation.com/'/>
                  <h3 className="strategic__title spec_cont">Contacts</h3>
                  <div className="startegic__wrap">
                    <img src={logo} itemProp="logo"  alt="logo" className="startegic__logo" />
                  </div>
                  <div className="strategic__contact">
                    <p className="strategic__contact-name">Alena Yudina</p>
                    <p className="strategic__contact-position" itemProp="name">
                      Managing Director, Quantum Leap Strategy
                    </p>
                      <p className="strategic__contact-email">
                        <span className="info">E-mail</span> <a href="mailto:A.Yudina@qlstrategy.ch" itemProp="email" style={{color: 'white'}}> a.yudina@qlstrategy.ch</a>
                      </p>
                      <p className="strategic__contact-phone">
                        <span className="info">Mobile</span><a href="tel:+41 79 269 5360" itemProp="telephone" style={{color: 'white'}}>+41 79 269 53 60</a>
                      </p>
                   </div>
                </div>
        <Footer />
    </div>
  )
}

export default Contacts
