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
import FormComponent from './components/demo/FormComponent';
import './App.css';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <header>
                <Header />
            </header>
            <div className='toolbar-container'>
                <Toolbar />
            </div>
            <div className='page-content'>
                  <Route exact path='/' component={Myhome} />
                  <Route path='/accounts' component={Accounts} />
                  <Route path='/demo/formcomp' component={FormComponent} />
            </div>
          </div>
        </Router>
      </div>
    );
  }
}


export default App;