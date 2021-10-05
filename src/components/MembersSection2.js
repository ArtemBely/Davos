import React from 'react';
import membersImg from "../../public/images/members_img.svg"


function MembersSection2 () {
    return(
        <div className='wrap__members-section2'>
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
                <button className='members__section2-btn'>Register</button>
            </div>
        </div>
    )
}

export default MembersSection2;
