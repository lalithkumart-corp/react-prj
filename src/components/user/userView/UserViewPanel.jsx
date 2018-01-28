import React, { Component } from 'react';
import _ from 'lodash';
import { FormGroup, ControlLabel, FormControl, HelpBlock, DropdownButton, MenuItem, Form, Col, Row, Grid } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import moment from 'moment';

//import '../../../../node_modules/react-datepicker/dist/react-datepicker.css';
import 'react-datepicker/dist/react-datepicker.css';
import './userView.css';

export default class UserViewPanel extends Component{
    constructor(props){
        super(props);
        this.getMyDOM   = this.getMyDOM.bind(this);
        this.getCurrentUserData = this.getCurrentUserData.bind(this);
        this.getSelectedUser    = this.getSelectedUser.bind(this);
        this.handleDateChange   = this.handleDateChange.bind(this);
        this.state = {
            startDate: moment()
        }
    }

    handleDateChange(date){
        this.setState({
            startDate: date
          });
    }

    getCurrentUserData(){
        var returnObj = [];
        if(!_.isUndefined(this.props.userData))
            returnObj = this.props.userData;        
        return returnObj;
    }

    getSelectedUser(){
        var userJson = this.getCurrentUserData();
        //var selectedUser = _.pickBy(userJson, function(anUser){return (anUser.selected)});
        var selectedUser;
        _.each(userJson, function(anUserObj, index){
            if(anUserObj.selected)
                selectedUser = anUserObj;
        });
        return selectedUser;
    }
          
    getMyDOM(){
        var theDOM = '', selectedUser = this.getSelectedUser(), self = this;
        if(!_.isUndefined(selectedUser)){
            theDOM = function(){
                return(
                    <div>
                        {/* 
                        <form>
                            <div class='form-group'>
                                <label>First name: </label>
                                <input type='text' value={selectedUser.firstName}/>
                            </div>
                        </form> */}
                        <Form className='user-form'>
                            <Row>
                                <Col xs={3} xs-offset={9}>
                                    <FormGroup controlId="formControlsSelect">
                                        <ControlLabel>Status</ControlLabel>
                                        <FormControl componentClass="select" placeholder="select status">
                                            <option value="active">Active</option>
                                            <option value="inactive">Inactive</option>
                                        </FormControl>
                                    </FormGroup>
                                </Col>
                            </Row>

                            <Row>
                                <Col xs={6}>
                                    <FormGroup>
                                        <ControlLabel>User Name</ControlLabel>{' '}
                                        <FormControl type='text' placeholder='User name' value={selectedUser.userName}/>
                                    </FormGroup>                             
                                </Col>

                                <Col xs={6}>
                                    <FieldGroup
                                        id="formControlsText"
                                        type="password"
                                        label="Password"
                                        placeholder="Password"
                                        className="new-class"
                                        value= {selectedUser.password}
                                    />
                                </Col>
                            </Row>

                            <Row>
                                <Col xs={6}>
                                    <FormGroup>
                                        <ControlLabel>Role</ControlLabel>
                                        <FormControl componentClass='select'>
                                            <option value='admin'>Admin</option>
                                            <option value='trainer'>Trainer</option>
                                        </FormControl>
                                    </FormGroup>
                                </Col>
                                <Col xs={6}>
                                    <FormGroup>
                                        <ControlLabel>Device Id</ControlLabel>{' '}
                                        <FormControl type='text' placeholder='Devie Id' value={selectedUser.deviceId}/>
                                    </FormGroup>
                                </Col>
                            </Row>

                            <Row>
                                <Col xs={6}>
                                    <FormGroup>
                                        <ControlLabel>Fisrt Name</ControlLabel>{' '}
                                        <FormControl type='text' placeholder='First name' value={selectedUser.firstName}/>
                                    </FormGroup>
                                </Col>

                                <Col xs={6}>
                                    <FormGroup>
                                        <ControlLabel>Last Name</ControlLabel>{' '}
                                        <FormControl type='text' placeholder='First name' value={selectedUser.lastName}/>
                                    </FormGroup>
                                </Col>
                            </Row>

                            <Row>
                                <Col xs={3} className='dob-container'>
                                    <FormGroup>
                                        <ControlLabel className='dob-label'>DOB</ControlLabel>{' '}
                                        <DatePicker 
                                            selected    = {self.state.startDate}
                                            onChange    = {self.handleDateChange}
                                            className   = 'my-date-picker form-control'
                                        />
                                    </FormGroup>
                                </Col>
                                <Col xs={3}>
                                    <FormGroup>
                                        <ControlLabel>GENDER</ControlLabel>
                                        <FormControl componentClass='select'>
                                            <option value='male'>Male</option>
                                            <option value='female'>Female</option>
                                        </FormControl>
                                    </FormGroup>
                                </Col>
                            
                                <Col xs={6}>
                                    <FormGroup>
                                        <ControlLabel>Education</ControlLabel>
                                        <FormControl type='text' value={selectedUser.education}/>
                                    </FormGroup>
                                </Col>
                            </Row>

                            <Row>
                                <Col xs={6}>
                                    <FormGroup>
                                        <ControlLabel>E-Mail</ControlLabel>
                                        <FormControl type='email' value={selectedUser.email}/>
                                    </FormGroup>
                                </Col>
                                <Col xs={6}>
                                    <FormGroup>
                                        <ControlLabel>Mobile Number</ControlLabel>
                                        <FormControl type='number' value={selectedUser.phone}/>
                                    </FormGroup>
                                </Col>    
                            </Row>

                        </Form>
                    </div>
                )
            }();
        }
        return theDOM;
    }

    render(){
        var theDOM = this.getMyDOM();
        return(
            <div class = 'col-xs-12 user-view'>
                {theDOM}
            </div>
        )
    }
}

// function FieldGroup({ id, label, help, ...props }) {
//     return (
//       <FormGroup controlId={id}>
//         <ControlLabel>{label}</ControlLabel>
//         <FormControl {...props} />
//         {help && <HelpBlock>{help}</HelpBlock>}
//       </FormGroup>
//     );
//   }

class FieldGroup extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <FormGroup controlId={this.props.id}>
                <ControlLabel>{this.props.label}</ControlLabel>{' '}
                <FormControl {...this.props} />
                {this.props.help && <HelpBlock>{this.props.help}</HelpBlock>}
            </FormGroup>
        );
    }
}