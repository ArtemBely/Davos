import React from 'react';
import membersImg from "../../public/images/membersPlanets.svg"


function MembersSection3 () {
    return(
        <div className='wrap__members-section3'>
            <div className='members__section3'>
                <div className="members__section3-technologies">
                    <h2 className="members__technologies-title">Different technologies. Rooms. Showcases.</h2>
                    <p className="members__technologies-paragraph">
                        Best showcases of emerging technologies and professional <br /> 
                        investment community. Our members can see each other <br /> 
                        and communicate through a personal account after login.
                    </p>
                    <button className="members__technologies-btn">Apply for participation</button>
                    <img src={membersImg} className="members__technologies-img"></img>
                </div>
                <div className="members__section3-report">
                    <h2 className="members__report-title">Report on Emerging technologies investment trends</h2>
                    <button className="members__report-btn">Subscribe</button>
                </div>
            </div>
        </div>
    )
}

export default MembersSection3;
