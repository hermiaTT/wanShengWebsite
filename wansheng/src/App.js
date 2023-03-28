import {React} from 'react';
import { useRef, useEffect } from "react";
import { Route, Routes} from "react-router-dom";
import { Divider } from '@chakra-ui/react';
// import './App.css';
import ErrorBoundary from './ErrorBoundary';
import Home from './view/Home';
import AI from './view/AI';
import Navbar from './components/navbar';
import Footer from './containers/footer';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const animateFrom = (elem,x,y) => {
  elem.style.transform = "translate(" + x + "px, " + y + "px)";
  elem.style.opacity = "0";
  gsap.fromTo(elem, {x: x, y: y, autoAlpha: 0}, {
    duration: 1.25, 
    x: 0,
    y: 0, 
    autoAlpha: 1, 
    ease: "expo", 
    overwrite: "auto"
  });
}

const hide=(elem)=> {
  gsap.set(elem, {autoAlpha: 0});
}

const AppWrapper = (props) => {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);
  useEffect(() => {
    const element = ref.current;
    gsap.utils.toArray(".wrapper").forEach((elem, index) => {

        hide(elem);
        const [x, y] = (index % 2) ? [-100,0] : [100, 0];
        ScrollTrigger.create({
          trigger: elem,
          onEnter: function() { animateFrom(elem,x,y) }, 
          onEnterBack: function() { animateFrom(elem, x,y) },
          onLeave: function() { hide(elem) } // assure that the element is hidden when scrolled into view
        });  
    });

  }, []);
  return (
    // <React.Fragment>
    <div className='App' ref={ref} >
        <div className='gradient__bg'>
          <Navbar/ >
        </div>
        <ErrorBoundary>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/ai' element={<AI/>}/>
          </Routes>
        </ErrorBoundary>
        <Divider mt="24px"/>
        <Footer />
    </div>
    // </React.Fragment>
  )
}

export default AppWrapper;
