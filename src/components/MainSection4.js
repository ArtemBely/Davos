import React from 'react';
import  { NavLink } from 'react-router-dom';


function MainSection4 () {
  return(
        <div className='events__button-container'>
            <a href='https://emtechinvest.com/' className='events__button'>
                <p className='events__button-davos event-paragraph'>Davos</p>
                <p className='events__button-date event-paragraph' id='text_of_event1'>16-23 January 2022</p>
                <p className='events__button-date event-paragraph' id='text_of_event2'>International EmTech Investment Forum Association Forum</p>
            </a>
            <a href='https://dfisx.com/' className='events__button dubai_link'>
                <p className='events__button-davos event-paragraph'>Dubai</p>
                <p className='events__button-date event-paragraph' id='text_of_event3'>13-14 October 2021</p>
                <p className='events__button-date event-paragraph' id='text_of_event4'></p>
            </a>
        </div>
 )
}

export default MainSection4;
