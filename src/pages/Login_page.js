import React from 'react'


import Footer from './Footer';
import Header from './InHeader';
import Setting from './Setting';
import Login from './Login';
import Header1 from './Header1';


function Login_page() {
  return (
    <div>
      <Header1/>
      <Login />
       <Footer/>
      <Setting /> 

    </div>
  )
}

export default Login_page;