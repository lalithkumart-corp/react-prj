import React, { Component } from 'react';

class Statistics extends Component{
  render(){
    return(
      <div class='a-component balance-component'>
        <h4 class='header'>Balance</h4>
        <div class='col-sm-6 sub-section'>
          <Etherum {...this.props} getCurrentData={this.props.getCurrentData}/>
        </div>
        <div class='col-sm-6 sub-section'>
            <MyActions />
        </div>
        <div class='clearfix'></div>
        <div class='col-sm-6 sub-section'>
          <Revenue {...this.props} getCurrentData={this.props.getCurrentData} />
        </div>
        <div class='col-sm-6 sub-section'>
          <Volume {...this.props} getCurrentData={this.props.getCurrentData} />
        </div>
      </div>
    )
  }
}


class Etherum extends Component{
  constructor(){
    super();
    this.getMyDom = this.getMyDom.bind(this);
  }

  getMyDom(){
    var activeData = this.props.getCurrentData();
    var htmlBuffer = activeData.map(function(value, index){
      return(
        <div>
          <span>{value.platform}</span><span class='amt-28'>{value.Balance}</span> 
          <div class='clearfix'></div>
          <span>{value.currencySymbol}</span><span class="amt-22">{value.BalanceConverted}</span>          
        </div>
      )
    });
    return htmlBuffer;
  }

  render(){
    var theDom = this.getMyDom();
    return(
      <div>
        {theDom}
      </div>
    )
  }
}

class MyActions extends Component{
  render(){
    return(
      <div>
        <div class='col-sm-3 an-action'>
          <p class='action-icon'><i class="fa fa-arrow-up" aria-hidden="true"></i></p>
          <p class='action-text'>Sell</p>
        </div>
        <div class='col-sm-3 an-action'>
          <p class='action-icon'><i class="fa fa-arrow-down" aria-hidden="true"></i></p>
          <p class='action-text'>Buy</p>
        </div>
        <div class='col-sm-3 an-action'>
          <p class='action-icon'><i class="fa fa-first-order" aria-hidden="true"></i></p>
          <p class='action-text'>Order</p>
        </div>
      </div>
    )
  }
}


class Revenue extends Component{
  constructor(){
    super();
    this.getMyDom = this.getMyDom.bind(this);
  }

  getMyDom(){
    var activeData = this.props.getCurrentData();
    var htmlBuffer = activeData.map(function(value, index){
      return(
        <div>
          <p>Your today revenue </p> 
          <span>{'+' + value.currencySymbol + ' '}</span><span class='amt-22'>{value.todayRevenue}</span> 
        </div>
      )
    });
    return htmlBuffer;
  }

  render(){
    var theDom = this.getMyDom();
    return(
      <div>{theDom}</div>
    )
  }
}


class Volume extends Component{
  constructor(){
    super();
    this.getMyDom = this.getMyDom.bind(this);
  }

  getMyDom(){
    var activeData = this.props.getCurrentData();
    var htmlBuffer = activeData.map(function(value, index){
      return(
        <div>
          <p>Current order volume </p> 
          <span>{value.currencySymbol + ' '}</span><span class='amt-24'>{value.volume}</span> 
        </div>
      )
    });
    return htmlBuffer;
  }

  render(){
    var theDom = this.getMyDom();
    return(
      <div>{theDom}</div>
    )
  }

}


export default Statistics;