import React from 'react';
import logo from '../../public/images/Group300.svg';
import mainImage from '../../public/images/Group467.jpg';

function DavosSection() {
  return (
    <div>
      <div className="blur"></div>
      <div className="wrap__lead">
        <img src={mainImage} alt="main-image" className="lead__image" />
        <div className="lead__container">
          <img src={logo} alt="logo" className="lead__logo" />
          <p className="lead__logo-description">
            International EmTech Investment Association Forum
          </p>
        </div>
      </div>
      <div className="wrap__sections">
        <div className="description">
          <p className="description__title">The future is now</p>
          <p className="description__paragraph">January 16-23, 2022</p>
          <p className="description__paragraph">Davos, Switzerland</p>
        </div>
      </div>
    </div>
  )
}

export default DavosSection;
