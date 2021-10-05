import React from 'react';

function MembersSection1 () {
    return(
        <div className='wrap__members-section1'>
            <div className='members__section1'>
                <h1 className="members__section1-title">Members and Partners</h1>
                <div className='members__section1-container'>
                    <div className="members__container-block">
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
                    <div className="members__container-block members__special-block">
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
                    <div className="members__container-block">
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
                    <div className="members__container-block members__last-block">
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
                    <button className="members__section1-btn">Become a sponsor</button>
                    <button className="members__section1-btn">Contact us for more</button>
                </div>
            </div>
        </div>
    )
}

export default MembersSection1;
