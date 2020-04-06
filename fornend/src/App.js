import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import Homepage from './components/Homepage';
import Login from './components/Login';
import Emergency from './components/Emergency'
import Contact from './components/Contact'
import Team from './components/Team'
import Check from './components/Check'

function App() {
  return (
    <Router>

      <Switch>

      <Route path='/' exact component={Homepage}/>
      <Route path='/Team' exact component={Team}/>
      <Route path='/Check' exact component={Check}/>
      <Route path='/Contact' exact component={Contact}/>
      <Route path='/Emergency' exact component={Emergency}/>
      <Route path='/login' exact component={Login}/>
      </Switch>
    </Router>
  );
}

export default App;
