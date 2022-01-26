import React from 'react';
import sponsorships_Img from "../../public/images/image 13.png";
import cross from '../../public/images/cross.svg';



class AssociationSection2 extends React.Component {
    state = {
        isOpen: false,
    }
    render() {
  return(
    <div className="wrap__association2">
        <div className="association2">
            <div className="association2__sponsorships">
                <h2 className="association2__sponsorships-title">Sponsorships</h2>
                <p className="association2__sponsorships-pargraph">
                    Fill out an application to become a sponsor <br />
                    <br />
                    <br />
                </p>
                <button className="association2__sponsorships-btn" onClick={()=>this.setState({isOpen:true})}>Become a sponsor</button>
            </div>
            <img src={sponsorships_Img} className="association2__sponsorships-img"></img>
        </div>
        {this.state.isOpen && (
                <div className="popup">
                    <div className="popup__body">
                        <div className="popup__content">
                            <div className="popup__header">
                                <h2 className="popup-title">Become an investing member</h2>
                                <img src={cross} className="popup__close" onClick={()=>this.setState({isOpen:false})}></img>
                            </div>
                            <p className="popup__main-paragraph">
                                Fill out the form, our <br />
                                manager will contact you
                            </p>
                            <form action='/association/send' method='POST' className="popup__form">
                                <input type="text" name="name" className="popup__input" placeholder="Company or name" required/>
                                <input type="text" name="tech" className="popup__input" placeholder="Interest in tech" required/>
                                <input type="text" name="stage" className="popup__input" placeholder="Investment stage" required/>
                                <input type="text" name="jurisdiction" className="popup__input" placeholder="Jurisdiction" required/>
                                <input type="text" name="phone" className="popup__input" placeholder="Phone number" required/>
                                <input type="text" name="email" className="popup__input" placeholder="Email" required/>
                                <div className="popup__checkbox-container">
                                    <input type="checkbox" id="invest" name="scales" className="popup__checkbox"/>
                                    <label for="invest" className="popup__label">Ready to invest</label>
                                </div>
                                <div className="popup__footer">
                                    <button type='submit' className="popup__footer-btn">Send</button>
                                    <p className="popup__footer-paragraph">
                                        By clicking on the «Send» button you <br />
                                        confirm your consent to the processing <br />
                                        of data and agree to the privacy policy
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>)}
    </div>
 )
}
}

export default AssociationSection2;
