import React from 'react';
import membersImg from "../../public/images/members_img.svg"
import cross from '../../public/images/cross.svg';
import sponsor1 from '../../public/images/9.png';
import sponsor2 from '../../public/images/8.png';
import sponsor3 from '../../public/images/7.png';
import sponsor4 from '../../public/images/4.png';
import sponsor5 from '../../public/images/10.png';
import sponsor6 from '../../public/images/6.png';


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
                Our members are leaders in tech industries,
                investment structures, <br /> international organizations and governmental bodies.
                </p>
                <ul className='members__section2-list'>
                    <li className='members__section2-item'>
                        <img src={sponsor1} className='members__section2-img'></img>
                    </li>
                    <li className='members__section2-item'>
                        <img src={sponsor2} className='members__section2-img'></img>
                    </li>
                    <li className='members__section2-item'>
                        <img src={sponsor3} className='members__section2-img'></img>
                    </li>
                    <li className='members__section2-item'>
                        <img src={sponsor4} className='members__section2-img'></img>
                    </li>
                    <li className='members__section2-item'>
                        <img src={sponsor5} className='members__section2-img'></img>
                    </li>
                    <li className='members__section2-item'>
                        <img src={sponsor6} className='members__section2-img'></img>
                    </li>
                </ul>
                <button className='members__section2-btn' onClick={this.popap7}>Register</button>
            </div>
        </div>
    )
  }
}

export default MembersSection2;
