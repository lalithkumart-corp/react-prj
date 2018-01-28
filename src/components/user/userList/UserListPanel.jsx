import React, { Component } from 'react';
import _ from 'lodash';

import './userList.css';

export default class UserListPanel extends Component{
    constructor(props){
        super(props);
        this.getMyDom           = this.getMyDom.bind(this);
    }

    getCardClassName(userDetail, e){
        var className = '';
        if(userDetail.selected)
            className = 'selected';
        return className;        
    }
    
    getMyDom(){
        var theDOM = ''; var self = this;
        if(!_.isUndefined(this.props.userData) && this.props.userData.length > 0){
            theDOM = this.props.userData.map(function(anUserDetail, key){
                return (
                    <div className={self.getCardClassName(anUserDetail) + ' a-card'} onClick={( (e) => self.props.switchActiveUser(anUserDetail.uniqueId))}>
                        <p className='user-name text-left'>{anUserDetail.firstName} {anUserDetail.lastName}</p>
                    </div>
                )
            });
        }
        return theDOM;
    }

    render(){        
        var theDOM = this.getMyDom();
        return(
            <div class = 'col-xs-12 user-list-container'>
                {theDOM}
            </div>
        );
    }
}