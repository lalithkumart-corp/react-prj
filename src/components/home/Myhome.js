import React, { Component } from 'react';

class Myhome extends Component {
    componentWillMount(){
        this.state = {
            welcomeMsg: 'Welcome!'
        };
    }
    updateState(){

    }
    render(){
        return(
            <div>
                <h2>{this.state.welcomeMsg}</h2>
            </div>
        )
    }
}
export default Myhome;