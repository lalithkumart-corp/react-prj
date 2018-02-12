import React, { Component } from 'react';
import { connect } from 'react-redux';

class Todo extends Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            inputVal : ''
        }
    }
    handleChange(e){
        // this.setState({
        //     inputVal: e.target.value
        // })
    }
    handleClick(e){
        this.props.addTodo(this.refs["todo-input"].value);
        this.refs["todo-input"].value='';
    }
    getMyDom(){
        var theDom = this.props.tasks.map(function(aTask, index){
            return (
                <p key={index}>{aTask}</p>
            )
        });
        return theDom;
    }
    render(){
        console.log('Rendering Todo container...');
        var theDom = this.getMyDom();
        return(
            <div>
                <input type='text' ref='todo-input' placeholder='Add a new Todo item here...' onChange={this.handleChange}/>
                <input type='button' value='Click to submit' onClick={this.handleClick}/>
                {theDom}
            </div>
        )
    }
}

// Mapping redux store state to our props. Here, mapping redux 'store' -> 'tasks' to our 'props' -> 'tasks'
const mapStateToProps = (state) => { 
    return {
        tasks: state.todoStore.tasks
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        addTodo : (taskData) => {
            dispatch({
                type: 'ADD_TODO',
                todo: taskData
            });
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Todo);