import React from 'react';
import {Brand,Feature, Navbar,CTA} from './components';
import {Footer,Header,Intro,Contanct,Cases,Team} from './containers';
import './App.css';
const App = () => {
  return (
    <div className='App'>
        <div className='gradient__bg'>
          <Navbar/>
          <Header />
        </div>
        {/* <Brand/> */}
        <Intro/>
        <Team/>
        <Cases/>
        <Contanct/>
        <Footer/>
    </div>
  )
}

export default App;