import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavbarMenu from './components/NavbarMenu';
import Aboutme from './pages/Aboutme';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Project from './pages/Project';

export default function App() {
  return (
    <>
      <Router>
        <NavbarMenu />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
        <Switch>
          <Route path="/aboutme">
            <Aboutme />
          </Route>
        </Switch>
        <Switch>
          <Route path="/projects">
            <Project />
          </Route>
        </Switch>
        <Switch>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
