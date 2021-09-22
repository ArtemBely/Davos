import React from 'react';
import Header from './Header'; 
import MainSection1 from './MainSection1'; 
import MainSection2 from './MainSection2'; 
import MainSection3 from './MainSection3';
import Footer from './Footer';

class Main extends React.Component{
  render() {
    return(
      <div>
          <Header />
          <MainSection1 />
          <MainSection2 />
          <MainSection3 />
          <Footer />
      </div>
    )
  }
}

export default Main;
