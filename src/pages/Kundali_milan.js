
import React from 'react'
import Header from './Header'
import Kundali_milan_banner from './Kundali_milan_banner'
import Kundali_milan_content from './Kundali_milan_content'
import Live from './Live';
import Footer from './Footer';
import Header1 from './Header1';

function Kundali_milan () {
  return (
    <div>
      <Header1 />
      <Kundali_milan_banner />
      <Kundali_milan_content />
      <Live/>
      <br/>
      <br/>
      <Footer />
    </div>
  )
}

export default Kundali_milan