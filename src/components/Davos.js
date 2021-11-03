import React from 'react';
import Header from './Header';
import DavosSection from './DavosSection';
import DavosMain from './DavosMain';
import Footer from './Footer'
import DavosDection2 from './DavosSection2'


class Davos extends React.Component{
  render() {
    return(
      <div className='wrap_davos'>
          <Header />
          <DavosSection />
          <DavosMain />
          <DavosDection2 />
          <Footer />
      </div>
    )
  }
}

export default Davos;
