/**
 * @author: LalithKumar
 * @name: App.js
 * @desc: This is main landing page. Using router, based on the URL match, the specific component wll be rendered.
 */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';

import Header from './components/header/Header';
import Toolbar from './components/toolbar/Toolbar';
import Myhome from './components/home/Myhome';
import Accounts from './components/accounts/Accounts';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="App">
        <header>
            <Header />
        </header>
        <div class='toolbar-container'>
            <Toolbar />
        </div>
        <div class='page-content'>
            <Router>
              <Switch>
                  <Route exact path='/' component={Myhome} />
                  <Route path='/accounts' component={Accounts} />
                </Switch>
            </Router>
        </div>
      </div>
    );
  }
}


export default App;