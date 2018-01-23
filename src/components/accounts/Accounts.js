/**
 * @author: LalithKumar
 * @name: Accounts.js
 * @desc: This is the Accounts page component. Its a root for accounts related sub-modules. https://dribbble.com/shots/3978177-Animation-Cryptocurrency-Marketplace-Light
 */
import React, { Component } from 'react';
import './accounts.css';
import _ from 'lodash';
import axios from 'axios';

import MyAccounts from './MyAccounts';
import Statistics from './Statistics';
import ChartView from './ChartView';

class Accounts extends Component{
  constructor(props){
      super(props);
        this.state = {
          data:[]
        };
        this.switchData = this.switchData.bind(this);
        this.getCurrentData = this.getCurrentData.bind(this);  
  }

  componentDidMount(){
    this.fetchData();
  }

  fetchData(){
    axios.get('./accounts.json')
      .then(res => {
        this.setState({ data: res.data });
      });
  }

  switchData(myParam){
    this.state.data.map(function(value, index){
      if(value.identifier == myParam)
        value.isActive= true;
      else
        value.isActive = false;
    });
    this.setState([{
      data: this.state.data
    }])
  }

  getCurrentData(identifier){
      return _.filter(this.state.data, function(o) { 
          return o.isActive; 
      });
  }

  render(){
    var options = this.state;
    return(
      <div className='row'>
        <div className='col-sm-6'>
          <Statistics {...this.state}  getCurrentData= {this.getCurrentData}/>
        </div>
        <div className='col-sm-6'>
          <MyAccounts {...this.state} switchData={this.switchData} />
        </div>
        <div className='col-sm-12'>
          <ChartView {...this.state} getCurrentData= {this.getCurrentData}/>
        </div>
      </div>      
    )
  }
}


export default Accounts;