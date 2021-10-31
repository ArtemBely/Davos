import React from 'react';
import Header from './Header';
import DavosSection from './DavosSection';
import DavosMain from './DavosMain';


class Davos extends React.Component{
  render() {
    return(
      <div className='wrap_davos'>
          <Header />
          <DavosSection />
          <DavosMain />
      </div>
    )
  }
}

export default Davos;
