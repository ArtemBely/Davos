import React from 'react';
import Header from './Header';
import Footer from './Footer';
import FinTech from './FinTech';
import Wearables from './Wearables';
import MedTech from './MedTech';
import BioTech from './BioTech';
import AgroTech from './AgroTech';
import EduTech from './EduTech';
import FoodTech from './FoodTech';
import Dlt from './Dlt';
import Vr from './Vr';
import Ai from './Ai';
import { Route } from 'react-router-dom';

function Technologies () {

    return(
      <p className='wrap_techno'>
          <Header />
             <Route exact path='/technologie/FinTech' component={FinTech} />
             <Route exact path='/technologie/Wearables' component={Wearables} />
             <Route exact path='/technologie/VR' component={Vr} />
             <Route exact path='/technologie/MedTech' component={MedTech} />
             <Route exact path='/technologie/BioTech' component={BioTech} />
             <Route exact path='/technologie/AgroTech' component={AgroTech} />
             <Route exact path='/technologie/EduTech' component={EduTech} />
             <Route exact path='/technologie/AI' component={Ai} />
             <Route exact path='/technologie/Blockchain' component={Dlt} />
             <Route exact path='/technologie/FoodTech' component={FoodTech} />
          <Footer />
      </p>
    )
  }

export default Technologies;
