import React, { Component } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import _ from 'lodash';
import axios from 'axios';
import { Col, Row } from 'react-bootstrap';

import './users.css';
import UserListPanel from './userList/UserListPanel';
import UserViewPanel from './userView/UserViewPanel';

//import '../../../node_modules/react-datepicker/dist/react-datepicker.css';

export default class UserComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            userData: []
        };
        this.switchActiveUser   = this.switchActiveUser.bind(this);
    }

    componentDidMount(){
        this.fetchData();
    }

    fetchData(){
        axios.get('./users.json')
            .then(res => {
                var parsedResponse = this.parseResponse(res.data);                
                this.setState({userData : parsedResponse});
            });
    }
    
    parseResponse(response){
        _.each(response, function(val, index){
            val.uniqueId = index+1;
        });
        return response;
    }

    switchActiveUser(uniqueId){
        if(!_.isUndefined(this.state.userData)){
            _.each(this.state.userData, function(anUser, index){
                if(anUser.uniqueId == uniqueId)
                    anUser.selected = true;
                else
                    anUser.selected = false;
            });
            this.setState({userData: this.state.userData});
        }
    }

    render(){
        return(
            <Row>
                <Col xs={3}>
                    <UserListPanel {...this.state} switchActiveUser={this.switchActiveUser} />
                </Col>
                <Col xs={9}>
                    <UserViewPanel {...this.state} switchActiveUser={this.switchActiveUser} />
                </Col>
            </Row>
        )
    }
}