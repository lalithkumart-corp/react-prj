import React, { Component } from 'react';
import { connect } from 'react-redux';

class Comments extends Component{
    constructor(props){
        super(props);
        this.handleAddCommentClick = this.handleAddCommentClick.bind(this);
    }
    handleAddCommentClick(e){
        this.props.addComments(this.refs['comment-input-box'].value);
    }
    getMyComments(){
        return this.props.comments.map(function(aComment, index){
            return (
                <p key={index}>{aComment}</p>
            )
        });
    }
    render(){
        var myDOM = this.getMyComments();
        console.log('Rendering the Comments container...');
        return (
            <div>
                <input type='text' ref='comment-input-box' placeholder='Add New comments...'/>
                <input type='button' value='Submit comment' onClick={this.handleAddCommentClick}/>
                {myDOM}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        comments    : state.commentStore.comments
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addComments: function(text){
            dispatch({type: 'ADD_COMMENT', text: text});
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Comments);