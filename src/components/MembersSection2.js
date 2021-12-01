import React from 'react';
import membersImg from "../../public/images/members_img.svg"
import cross from '../../public/images/cross.svg';

class MembersSection2 extends React.Component{

  constructor() {

    super()

    this.state = {
        isOpen3: false,
    }
  }

  popap7 = () => {
    this.setState({ isOpen3: true });
  }

  render() {
    return(
        <div className='wrap__members-section2'>

            <div className="popup" style={{
              display: this.state.isOpen3 == false ? 'none' : 'block'
            }}>
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
                            <input type="text" name="Name" className="popup__input" placeholder="Name" required/>
                            <input type="text" name="Purpose" className="popup__input" placeholder="Purpose" required/>
                            <input type="text" name="Phone number" className="popup__input" placeholder="Phone number" required/>
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


            <div className='members__section2'>
                <h2 className='members__section2-title'>About our members</h2>
                <p className='members__section2-paragraph'>
                    On the other hand, we denounce with righteous indignation <br />
                    and dislike men who are so beguiled and demoralized by <br />
                    the charms of pleasure of the moment.
                </p>
                <ul className='members__section2-list'>
                    <li className='members__section2-item'>
                        <img src={membersImg} className='members__section2-img'></img>
                    </li>
                    <li className='members__section2-item'>
                        <img src={membersImg} className='members__section2-img'></img>
                    </li>
                    <li className='members__section2-item'>
                        <img src={membersImg} className='members__section2-img'></img>
                    </li>
                    <li className='members__section2-item'>
                        <img src={membersImg} className='members__section2-img'></img>
                    </li>
                    <li className='members__section2-item'>
                        <img src={membersImg} className='members__section2-img'></img>
                    </li>
                    <li className='members__section2-item'>
                        <img src={membersImg} className='members__section2-img'></img>
                    </li>
                </ul>
                <button className='members__section2-btn' onClick={this.popap7}>Register</button>
            </div>
        </div>
    )
  }
}

export default MembersSection2;
