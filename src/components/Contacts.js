import React from 'react';
import Header from './Header';
import Footer from './Footer';
import logo from "../../public/images/Strategic_logo.png";
import mainImage from "../../public/images/Group467.jpg";
import arrowBtn from '../../images/download-arrow.svg';
import blackArr from '../../public/images/Vector (1).svg';

function Contacts() {
  return(
    <div>
        <Header />
             <div className="strategic str_cont">
                  <h3 className="strategic__title spec_cont">Contacts</h3>
                  <div className="startegic__wrap">
                    <img src={logo} alt="logo" className="startegic__logo" />
                  </div>
                  <div className="strategic__contact">
                    <p className="strategic__contact-name">Alena Yudina</p>
                    <p className="strategic__contact-position">
                      Managing Director, Quantum Leap Strategy
                    </p>
                      <p className="strategic__contact-email">
                        <span className="info">E-mail</span>a.yudina@qlstrategy.ch
                      </p>
                      <p className="strategic__contact-phone">
                        <span className="info">Mobile</span>+41 79 269 53 60
                      </p>
                   </div>
                </div>
        <Footer />
    </div>
  )
}

export default Contacts
