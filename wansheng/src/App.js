import React from 'react';
import {Navbar} from './components';
import {Footer} from './containers';
import {
  BrowserRouter as Router, useRoutes,
} from "react-router-dom";

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
        <Footer/>
    </div>
    </React.Fragment>
  )
}

export default AppWrapper;
// import React from 'react';
// import {Brand,Feature, Navbar,CTA} from './components';
// import {Footer,Header,Intro,Contanct,Cases,Team} from './containers';
// import './App.css';
// const App = () => {
//   return (
//     <div className='App'>
//         <div className='gradient__bg'>
//           <Navbar/>
//           <Header />
//         </div>
//         {/* <Brand/> */}
//         <Intro/>
//         <Team/>
//         <Cases/>
//         <Contanct/>
//         <Footer/>
//     </div>
//   )
// }

// export default App;