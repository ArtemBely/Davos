import React from 'react';
import Header from './Header'; 
import MembersSection1 from './MembersSection1'; 
import MembersSection2 from './MembersSection2'; 
import MembersSection3 from './MembersSection3'; 
import Footer from './Footer'; 






class MainMembers extends React.Component {
  render() {
    return(
      <div>
          <Header />
          <MembersSection1 />
          <MembersSection2 />
          <MembersSection3 />
          <Footer />
      </div>
    )
  }
}

export default MainMembers;
