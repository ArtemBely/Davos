import React from 'react';
import Header from './Header'; 
import EventsSection from './EventsSection'; 
import Footer from './Footer';




class MainEvents extends React.Component {
  render() {
    return(
      <div>
          <Header />
          <EventsSection />
          <Footer />
      </div>
    )
  }
}

export default MainEvents;
