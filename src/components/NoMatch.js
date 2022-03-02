import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { NavLink } from 'react-router-dom';

class NoMatch extends React.Component {

  render() {
    return(
      <p>
         <p className='wrap_noMatch_header'><Header /></p>
           <p className='wrap_alert'>
              <p className='oops'>Sorry, but we can't find this page. Try going back to the &nbsp;
              <a href='/' className='main_page_return'>home page</a></p>
            <p className='mistake404'>404</p>
          </p>
        <p className='wrap_noMatch_footer'><Footer /></p>
      </p>
    )
  }
}

export default NoMatch;
