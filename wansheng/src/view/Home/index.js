import React from 'react';
import Cases from '../../containers/cases';
import Intro from '../../containers/intro';
import Team from '../../containers/team';
import Headers from '../../containers/header';
// import '../../App.css';
const Home = (props) => {
  return (
    <div className='App'>
        <div className='gradient__bg'>
          <Headers />
        </div>
        {/* <Brand/> */}
        <Intro />
        <Team />
        <Cases />
    </div>
  )
}

export default Home;