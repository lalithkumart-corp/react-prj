import React, { Component } from 'react';
import './toolbar.css';

class Toolbar extends Component {
  render() {
    return (
      <div class='toolbar'>
         <ul class='menu-list'>
           <li class='menu-list-item home'><a href='/'><i class="fa fa-home" aria-hidden="true" title="Home"></i></a></li>
           <li class='menu-list-item my-account'><a href='/accounts'><i class="fa fa-university" aria-hidden="true" title="My Accounts"></i></a></li>
           <li class='menu-list-item balance'><i class="fa fa-inr" aria-hidden="true" title="My Balance"></i></li>
           <li class='menu-list-item my-portfolio'><i class="fa fa-folder-o" aria-hidden="true" title='Portfolio'></i></li>
           <li class='menu-list-item settings'><i class="fa fa-cog" aria-hidden="true" title="More Tools"></i></li>
         </ul>
      </div>
    );
  }
}

export default Toolbar;