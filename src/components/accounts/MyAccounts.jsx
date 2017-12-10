import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';

class MyAccounts extends Component{
  constructor(){
    super();
    this.getMyDom = this.getMyDom.bind(this);
  }

  clickHandler(identifier){
    this.props.switchData(identifier);
  }

  getMyDom(){
    var that = this;
    var htmlDom = this.props.data.map(function(value, index){
      var className = (value.isActive)?'active-card':'a-card';
        return(
          <div class={'card-block col-sm-4 ' + className} onClick={that.clickHandler.bind(that, value.identifier)}>
            <p class='name'>{value.name}</p>
            <p class='acc-field'><span class='acc-prefix'>{value.accountPrefix}</span><span class='account-no'>{value.accountNo}</span></p>
            <span class='platform-currency'>{value.platform}/{value.currencyNotation}</span>
            <span className='legend'>Legend {' ' + index}</span>
          </div>
        )
    });
    return htmlDom;
  }

  render(){
    var myDom = this.getMyDom();
    return(
      <div class='a-component'>
        <h4 class='header'>My Accounts</h4>
        <div class=''>
              {myDom}
          </div>  
      </div>
      
    )
  }
}


export default MyAccounts;