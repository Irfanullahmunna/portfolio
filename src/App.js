import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import AboutMe from './components/AboutMe/AboutMe';
import Works from './components/Works/Works';
import Blogs from './components/Blogs/Blogs';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/about">
            <AboutMe></AboutMe>
          </Route>
          <Route path="/works">
            <Works></Works>
          </Route>
          <Route path="/blogs">
            <Blogs></Blogs>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
        </Switch>
    </Router>
    // <div>
    //   <Home></Home>
    // </div>
  );
}

export default App;
