import React, { Component } from 'react';
import { Router, Redirect, NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

import Myhome from '../home/Myhome';
import Accounts from '../accounts/Accounts';
import './toolbar.css';

class Toolbar extends Component {
  render() {
    return (
      <div className='toolbar'>
         <ul className='menu-list'>
           <li className='menu-list-item home'><Link to='/'><i className="fa fa-home" aria-hidden="true" title="Home"></i></Link></li>
           <li className='menu-list-item my-account'><Link to='/accounts'> <i className="fa fa-university" aria-hidden="true" title="My Accounts"></i> </Link> </li>
           <li className='menu-list-item demo form-comp'> 
              <Link to='/demo/formcomp'>
                  <i class='fa fa-pencil' title='demo-Form component'></i> 
              </Link>
           </li>
           <li className='menu-list-item balance'><i className="fa fa-inr" aria-hidden="true" title="My Balance"></i></li>
           <li className='menu-list-item my-portfolio'><i className="fa fa-folder-o" aria-hidden="true" title='Portfolio'></i></li>
           <li className='menu-list-item settings'><i className="fa fa-cog" aria-hidden="true" title="More Tools"></i></li>
         </ul>
      </div>
    );
  }
}

export default Toolbar;