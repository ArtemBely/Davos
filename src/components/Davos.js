import React from 'react';
import Header from './Header';
import DavosSection from './DavosSection';

class Davos extends React.Component{
  render() {
    return(
      <div className='wrap_davos'>
          <Header />
          <DavosSection/>
      </div>
    )
  }
}

export default Davos;
