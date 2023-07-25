import { Link } from 'react-router-dom';
import React from 'react'
import Kundali_form from './Kundali_form';
import K_team from './K_team';
import Online_kundali from './Online_kundali';
import Ask_question from './Ask_question';
import Header from './Header';
import Footer from './Footer';
import Header1 from './Header1';
import Live from './Live';




function Kundali() {
  return (
    <div>
      <Header1 />
    <Kundali_form /> 
    <K_team />
    <Online_kundali />
   <Ask_question /> 
   <Live/>

      <br/>
      <br/>
   <Footer />
      

    </div>
  )
}

export default Kundali;