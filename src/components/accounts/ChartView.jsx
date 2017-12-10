import React, { Component } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

class ChartView extends Component{
  getChartOptions(){
      var data = this.props.getCurrentData();
      if(typeof data[0] !== 'undefined')
        return data[0].chartData;
  }

  render(){
    var options = this.getChartOptions();
    return(
      <div class='a-component chart-component'>
        <h3 class='header'>Ethereum Charts</h3>
            <LineChart width={850} data={options} height={300}>
              <XAxis dataKey="name"/>
              <YAxis/>
              <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
              <Tooltip/>
              <Legend/>
              <Line type="monotone" dataKey="amount" stroke="#8884d8" />
          </LineChart>
    </div>
      
    )
  }
}


export default ChartView;