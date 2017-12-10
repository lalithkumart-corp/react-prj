/**
 * @author: LalithKumar
 * @name: Header.js
 * @desc: This is the header component. Header stuffs can be updated here.
 */

import React, { Component } from 'react';
import './header.css';

class Header extends Component {
  render() {
    return (
      <div class='app-header'>
          <img class='avatar-container' src='/images/default-avatar.png'>

          </img>
          <div class='breadcrumb-section'>
              <h4>FINANCIAL ENGINE</h4>
           </div>
      </div>
    );
  }
}

export default Header;