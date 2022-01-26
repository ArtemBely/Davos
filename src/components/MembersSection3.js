import React from 'react';
import membersImg from "../../public/images/membersPlanets.svg"
import cross from '../../public/images/cross.svg';
import wave2 from '../../public/images/2.svg';


class MembersSection3 extends React.Component {
  constructor() {
     super()

     this.state = {
         isOpen2: false,
         isOpen6: false
     }
  }

  popap5 = () => {
    this.setState({ isOpen6: true });
  }

    render() {
    return(
        <div className='wrap__members-section3'>

        <div className="popup" style={{
          display: this.state.isOpen6 == false ? 'none' : 'block'
        }}>
            <div className="popup__body">
                <div className="popup__content">
                    <div className="popup__header">
                        <h2 className="popup-title">Contact us for more</h2>
                        <img src={cross} className="popup__close" onClick={()=>this.setState({isOpen6:false})}></img>
                    </div>
                    <p className="popup__main-paragraph">
                        Fill out the form, our <br />
                        manager will contact you
                    </p>
                    <form action='/members/for_more' method='POST' className="popup__form">
                        <input type="text" name="name" className="popup__input" placeholder="Name" required/>
                        <input type="text" name="phone" className="popup__input" placeholder="Phone number" required/>
                        <input type="text" name="email" className="popup__input" placeholder="Email" required/>
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
        </div>

            <div className='members__section3'>
                <div className="members__section3-technologies">
                    <h2 className="members__technologies-title">Different technologies. Rooms. Showcases.</h2>
                    <p className="members__technologies-paragraph">
                        Best showcases of emerging technologies and professional <br />
                        investment community. Our members can see each other <br />
                        and communicate through a personal account after login.
                    </p>
                    <button className="members__technologies-btn" onClick={()=>this.setState({isOpen2:true})}>Apply for participation</button>
                    <img src={membersImg} className="members__technologies-img"></img>
                </div>
                <div className="members__section3-report">
                    <h2 className="members__report-title">Report on Emerging technologies investment trends</h2>
                    <button className="members__report-btn" onClick={this.popap5}>Subscribe</button>
                </div>
            </div>
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
                            <form action='/members/attachment' method='POST' className="popup__form">
                                <input type="text" name="name" className="popup__input" placeholder="Company name" required/>
                                <input type="text" name="address" className="popup__input" placeholder="Address" required/>
                                <input type="text" name="tech" className="popup__input" placeholder="The technology used" required/>
                                <input type="text" name="contact" className="popup__input" placeholder="Contact person" required/>
                                <input type="text" name="attachments" className="popup__input" placeholder="Attachments" required/>
                                <div className="popup__checkbox-container">
                                    <input type="checkbox" id="showcase" name="scales" className="popup__checkbox"/>
                                    <label for="showcase" className="popup__label">Ready to showcase</label>
                                </div>
                                <div className="popup__checkbox-container">
                                    <input type="checkbox" id="round" name="scales" className="popup__checkbox"/>
                                    <label for="round" className="popup__label">Ready for new investment round</label>
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
                <div className='wrap_wave2'>
                   <img src={wave2} id='wave_big2'/>
                </div>
        </div>
    )
    }
}

export default MembersSection3;
