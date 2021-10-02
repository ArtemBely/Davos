import React from 'react';
import Header from './Header'; 
import AssociationSection1 from "./AssociationSection1";
import AssociationSection2 from "./AssociationSection2";
import AssociationSection3 from "./AssociationSection3";
import Footer from './Footer';


class MainAssociation extends React.Component {
  render() {
    return(
      <div>
          <Header />
          <AssociationSection1 />
          <AssociationSection2 />
          <AssociationSection3 />
          <Footer />
      </div>
    )
  }
}

export default MainAssociation;
