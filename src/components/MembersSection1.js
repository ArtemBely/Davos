import React from 'react';
import cross from '../../public/images/cross.svg';


class MembersSection1 extends React.Component {
    state = {
        isOpen: false,
        isOpen2: false,
        isOpen3: false,
        isOpen4: false,
    }
    render() {
    return(
        <div className='wrap__members-section1'>
            <div className='members__section1'>
                <h1 className="members__section1-title">Members and Partners</h1>
                <div className='members__section1-container'>
                    <div className="members__container-block" onClick={()=>this.setState({isOpen2:true})}>
                        <div className="members__container-special">
                            <h3 className="members__container-title">Technological companies</h3>
                            <p className="members__container-paragraph">
                                If you would like to present your <br />
                                showcase and your solution is ready <br />
                                for tech implementation and/or a new <br />
                                investment round please apply here
                            </p>
                        </div>
                    </div>
                    <div className="members__container-block members__special-block" onClick={()=>this.setState({isOpen:true})}>
                        <div className="members__container-special">
                            <h3 className="members__container-title members__special-text">Investment structures</h3>
                            <p className="members__container-paragraph members__special-text">
                                If you would like to have exclusive <br />
                                access to an extensive database <br />
                                of emerging technologies <br />
                                and the opportunity to invest first <br />
                                please apply here
                            </p>
                        </div>
                    </div>
                </div>
                <div className='members__section1-container members__special-container'>
                    <div className="members__container-block popup__link" onClick={()=>this.setState({isOpen3:true})}>
                        <div className="members__container-special">
                            <h3 className="members__container-title">International organizations</h3>
                            <p className="members__container-paragraph">
                                If you are supporting technological <br />
                                development as well as ready to <br />
                                implement it for humanity good please <br />
                                apply here
                            </p>
                        </div>
                    </div>
                    <div className="members__container-block members__last-block" onClick={()=>this.setState({isOpen4:true})}>
                        <div className="members__container-special">
                            <h3 className="members__container-title">Governmental bodies</h3>
                            <p className="members__container-paragraph">
                                If you would like to support the <br />
                                knowledge sharing of the usability and <br />
                                growth of the newest technologies <br />
                                please apply here
                            </p>
                        </div>
                    </div>
                </div>
                <div className="members__container-btn">
                    <button className="members__section1-btn" onClick={()=>this.setState({isOpen:true})}>Become a sponsor</button>
                    <button className="members__section1-btn" onClick={()=>this.setState({isOpen4:true})}>Contact us for more</button>
                </div>
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
                            <form className="popup__form">
                                <input type="text" name="Company or name" className="popup__input" placeholder="Company or name" />
                                <input type="text" name="Interest in tech" className="popup__input" placeholder="Interest in tech" />
                                <input type="text" name="Investment stage" className="popup__input" placeholder="Investment stage" />
                                <input type="text" name="Jurisdiction" className="popup__input" placeholder="Jurisdiction" />
                                <input type="text" name="Phone number" className="popup__input" placeholder="Phone number" />
                                <input type="text" name="Email" className="popup__input" placeholder="Email" />
                                <div className="popup__checkbox-container">
                                    <input type="checkbox" id="invest" name="scales" className="popup__checkbox"/>
                                    <label for="invest" className="popup__label">Ready to invest</label>
                                </div>
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
                </div>)}
                {this.state.isOpen2 && (
                <div className="popup">
                    <div className="popup__body">
                        <div className="popup__content">
                            <div className="popup__header">
                                <h2 className="popup-title">Become a member</h2>
                                <img src={cross} className="popup__close" onClick={()=>this.setState({isOpen2:false})}></img>
                            </div>
                            <p className="popup__main-paragraph">
                                Fill out the form, our <br />
                                manager will contact you
                            </p>
                            <form className="popup__form">
                                <input type="text" name="Company name" className="popup__input" placeholder="Company name" />
                                <input type="text" name="Address" className="popup__input" placeholder="Address" />
                                <input type="text" name="The technology used" className="popup__input" placeholder="The technology used" />
                                <input type="text" name="Contact person" className="popup__input" placeholder="Contact person" />
                                <input type="text" name="Attachments" className="popup__input" placeholder="Attachments" />
                                <div className="popup__checkbox-container">
                                    <input type="checkbox" id="showcase" name="scales" className="popup__checkbox"/>
                                    <label for="showcase" className="popup__label">Ready to showcase</label>
                                </div>
                                <div className="popup__checkbox-container">
                                    <input type="checkbox" id="round" name="scales" className="popup__checkbox"/>
                                    <label for="round" className="popup__label">Ready for new investment round</label>
                                </div>
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
                </div>)}
                {this.state.isOpen3 && (
                <div className="popup">
                    <div className="popup__body">
                        <div className="popup__content">
                            <div className="popup__header">
                                <h2 className="popup-title">Become a partner</h2>
                                <img src={cross} className="popup__close" onClick={()=>this.setState({isOpen3:false})}></img>
                            </div>
                            <p className="popup__main-paragraph">
                                Fill out the form, our <br />
                                manager will contact you
                            </p>
                            <form className="popup__form">
                                <input type="text" name="Name" className="popup__input" placeholder="Name" />
                                <input type="text" name="Purpose" className="popup__input" placeholder="Purpose" />
                                <input type="text" name="Phone number" className="popup__input" placeholder="Phone number" />
                                <input type="text" name="Email" className="popup__input" placeholder="Email" />
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
                </div>)}
                {this.state.isOpen4 && (
                <div className="popup">
                    <div className="popup__body">
                        <div className="popup__content">
                            <div className="popup__header">
                                <h2 className="popup-title">Contact us for more</h2>
                                <img src={cross} className="popup__close" onClick={()=>this.setState({isOpen4:false})}></img>
                            </div>
                            <p className="popup__main-paragraph">
                                Fill out the form, our <br />
                                manager will contact you
                            </p>
                            <form className="popup__form">
                                <input type="text" name="Name" className="popup__input" placeholder="Name" />
                                <input type="text" name="Phone number" className="popup__input" placeholder="Phone number" />
                                <input type="text" name="Email" className="popup__input" placeholder="Email" />
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
                </div>)}
        </div>
    )
    }
}

export default MembersSection1;
