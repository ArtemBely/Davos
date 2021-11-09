import React from "react";
import logo from "../../public/images/strategic_logo.png";
import mainImage from "../../public/images/Group467.jpg";
import ArrowBtn from '../../images/download-arrow.svg';

function DavosSection2() {
  return (
    <div>
      <div className="strategic">
        <h3 className="strategic__title">Strategic partnerships</h3>
        <p className="strategic__text">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint
        </p>
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
        <button className="download__strategic">
                <div className="download-wrap__strategic">
                    <img className="arrow-button__strategic" src={ArrowBtn} alt="Download"/>
                    <div className="strategic-donwload__text">Download presentation of sponsorship packages</div>
                </div>
            </button>
      </div>
    </div>
  );
}

export default DavosSection2;
