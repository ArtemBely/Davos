import React from 'react';
import cross from '../../public/images/cross.svg';


class AssociationSection3 extends React.Component {
  state = {
      isOpen2: false,
  }
  render() {
  return(
    <div className="wrap__association3">
        <div className="association3">
          <div className="association3__container">
            <div className="association3__container-card">
              <div className="association3__card">
                <h2 className="association3__card-title">Why</h2>
                <p className="association3__card-paragraph">
                  Support emerging <br />
                  technologies adoption <br />
                  and investments rounds
                </p>
              </div>
              <div className="association3__card">
                <h2 className="association3__card-title">Who</h2>
                <p className="association3__card-paragraph">
                  Tech companies <br />
                  and investment communities <br />
                  patronized by governments <br />
                  and international organizations
                </p>
              </div>
              <div className="association3__card">
                <h2 className="association3__card-title">What</h2>
                <p className="association3__card-paragraph">
                  Platform with EmTech <br />
                  showrooms and Association <br />
                  Forum for real-life experience
                </p>
              </div>
            </div>s
            <button className="association3__container-btn" onClick={()=>this.setState({isOpen2:true})}>Become a member</button>
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
                      <form className="popup__form">
                          <input type="text" name="Company name" className="popup__input" placeholder="Company name" required/>
                          <input type="text" name="Address" className="popup__input" placeholder="Address" required/>
                          <input type="text" name="The technology used" className="popup__input" placeholder="The technology used" required/>
                          <input type="text" name="Contact person" className="popup__input" placeholder="Contact person" required/>
                          <input type="text" name="Attachments" className="popup__input" placeholder="Attachments" required/>
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
    </div>
 )
}
}

export default AssociationSection3;
