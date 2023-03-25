import React from 'react';
import {Brand,Feature, Navbar,CTA} from '../../components';
// import '../../App.css';
import { Cases, Header, Intro, Team } from '../../containers';
const Home = (props) => {
  return (
    <div className='App'>
        <div className='gradient__bg'>
          <Header />
        </div>
        {/* <Brand/> */}
        <Intro/>
        <Team/>
        <Cases/>
    </div>
  )
}

export default Home;