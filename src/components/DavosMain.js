import React from 'react';
import DavosCard from './DavosCard';
import arrowButton from '../../images/download-arrow.svg';
import blackArr from '../../public/images/Vector (1).svg';
import worldEconomicForum from '../../images/WorldEconomicForum.png';
import ieee from '../../images/IEEE.png';
import idaxa from '../../images/IDAXA.png';
import cryptoValley from '../../images/CryptoValley.png';
import theWorldBank from '../../images/TheWorldBank.png';
import cambridge from '../../images/CambridgeUniversity.png';
import worldMaskGroup from '../../images/WorldMaskGroup.png';
import sheikhOffice from '../../images/OfficeOfSheikh.png';
import cross from '../../public/images/cross.svg';
import img1 from '../../public/images/Group 465.svg';
import img2 from '../../public/images/Москва (2) 1.svg';
import img3 from '../../public/images/Frame.svg';
import img4 from '../../public/images/Mask Group.svg';
import img5 from '../../public/images/Vector-2 — копия.svg';
import img6 from '../../public/images/Group 18.svg';
import img7 from '../../public/images/vrt logo 1.svg';
import img8 from '../../public/images/Mask Group — копия.svg';
import img9 from '../../public/images/Mask Group-2.svg';
import img10 from '../../public/images/agau-logo-white-300x110-1 1.svg';
import img11 from '../../public/images/logo2.5bde4dd1 1.svg';
import img12 from '../../public/images/Union.svg';
import img13 from '../../public/images/polygon-logo 1.svg';

class DavosMain extends React.Component{

  constructor() {

    super()

    this.state = {
        isOpen4: false,
    }
  }

  popup = () => {
    this.setState({ isOpen4: true });
  }

  render() {
    return (
         <>
         <div className="popup" style={{
             display: !this.state.isOpen4 ? 'none' : 'block'
           }}>
               <div className="popup__body">
                   <div className="popup__content">
                       <div className="popup__header">
                           <h2 className="popup-title">Become part of the future</h2>
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

             <div className="concept">
                 <h3 className="concept__title">Concept</h3>
                 <div className="concept__wrapper">
                     <div className="join-us">
                         <div className="join-us__header">7 days — 7 trends</div>
                         <div className="join-us__descr">Emerging Technologies are a part of our life. It is time to SHOW it: Rising stars. Investors. Corporates.</div>
                         <button className="join-us__btn" onClick={this.popup}>Become part of the future</button>
                     </div>
                     <DavosCard />
                 </div>
                 <a href='https://drive.google.com/file/d/1S6EndxHWm9mfPW_4zTt9wLch--16fk6z/view?usp=sharing' className="concept-download">
                     <div className="download-wrap">
                         <img className="arrow-button" src={arrowButton} alt="Download"/>
                         <img className="arrow-button3" src={blackArr} alt="Download"/>
                         <div className="concept-donwload__text">Download Concept Presentation</div>
                     </div>
                 </a>
             </div>
          <div className='wrap_partners'>
             <div className="partners">
                 <h3 className="partners__title">Partners</h3>
                 <p id='img1'><img src={img1} /></p>
                 <p id='img2'><img src={img2} /></p>
                 <p id='img3'><img src={img3} /></p>
                 <p id='img4'><img src={img4} /></p>
                 <p id='img5' className='middle_top'><img src={img5} /></p>
                 <p id='img6' className='middle_top'><img src={img6} /></p>
                 <p id='img7' className='middle_top'><img src={img7} /></p>
                 <p id='img8' className='middle_top'><img src={img8} /></p>
                 <p id='img9' className='middle_top'><img src={img9} /></p>
                 <p id='img10' className='down_center'><img src={img10} /></p>
                 <p id='img11' className='down_center'><img src={img11} /></p>
                 <p id='img12' className='down_center'><img src={img12} /></p>
                 <p id='img13' className='down_center'><img src={img13} /></p>

                 {/*<div className="partners__logos newPartners">
                     <img className="supporters one" src={worldEconomicForum} alt="World Economic Forum"/>
                     <img className="supporters two" src={ieee} alt="IEEE"/>
                     <img className="supporters three" src={idaxa} alt="IDAXA"/>
                     <img className="supporters four" src={cryptoValley} alt="Crypto Valley"/>
                     <img className="supporters supporters-2 five" src={theWorldBank} alt="The World Bank"/>
                     <img className="supporters supporters-2 six" src={cambridge} alt="Cambridge University"/>
                     <img className="supporters supporters-2 seven" src={worldMaskGroup} alt="WorldMaskGroup"/>
                 </div>

                <div className="dekstop">
                     <div className="dekstop__wrapper">
                         <div className="dekstop__logo">
                         <div className="OfficeDescr">
                             <img className="supportersOffice" src={SheikhOffice} alt="Office of Sheikh"/>
                             <div className="supported-descr">The conference is supported by The Private Office of Sheikh Saqer Bin Mohamed Al Qasimi</div>
                         </div>
                         <img className="supportersCypro" src={CryptoValley} alt="Crypto Valley"/>
                         </div>
                         <div className="dekstop__logo newPartnersForTablet">
                         <img className="supportersIdaxa" src={IDAXA} alt="IDAXA"/>
                         <img className="supportersUni" src={Cambridge} alt="Cambridge University"/>
                         <img className="supportersWorld" src={WorldMaskGroup} alt="WorldMaskGroup"/>
                         </div>
                         <div className="dekstop__logo newPartnersForTablet">
                         <img className="supportersForum" src={WorldEconomicForum} alt="World Economic Forum"/>
                         <img className="supportersIe" src={IEEE} alt="IEEE"/>
                         <img className="supportersBank" src={TheWorldBank} alt="The World Bank"/>
                         </div>
                     </div>
                  </div>*/}

              </div>
            </div>
         </>
    )
  }
}

export default DavosMain;
