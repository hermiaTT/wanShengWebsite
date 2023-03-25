import React from 'react';
import {Navbar} from './components';
import {Footer} from './containers';
import { BrowserRouter as Router, useRoutes,} from "react-router-dom";
import { Divider } from '@chakra-ui/core';
import './App.css';
import ErrorBoundary from './ErrorBoundary';
import Home from './view/Home';

const App = ()=>{
  let routes = useRoutes([
    { path: "/", element: <Home /> },
  ]);
  return routes;
}

const AppWrapper = (props) => {
  return (
    <React.Fragment>
    <div className='App'>
        <div className='gradient__bg'>
          <Navbar/>
        </div>
        <ErrorBoundary>
          <Router>
            <App/>
          </Router>
        </ErrorBoundary>
        <Divider mt="24px"/>
        <Footer/>
    </div>
    </React.Fragment>
  )
}

export default AppWrapper;
