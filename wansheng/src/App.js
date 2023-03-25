import React from 'react';
import { BrowserRouter as Router, useRoutes,} from "react-router-dom";
import { Divider } from '@chakra-ui/react';
// import './App.css';
import ErrorBoundary from './ErrorBoundary';
import Home from './view/Home';
import Navbar from './components/navbar';
import Footer from './containers/footer';

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
          <Navbar/ >
        </div>
        <ErrorBoundary>
          <Router>
            <App/>
          </Router>
        </ErrorBoundary>
        <Divider mt="24px"/>
        <Footer />
    </div>
    </React.Fragment>
  )
}

export default AppWrapper;
