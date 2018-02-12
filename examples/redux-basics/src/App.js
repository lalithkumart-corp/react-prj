import React, { Component } from 'react';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger'

import Todo from './components/Todo';
import todoReducer from './reducers/todo-reducer';

import Comments from './components/Comments';
import commentReducer from './reducers/comments-reducer';



const middleware = applyMiddleware(logger);
const theReducers = combineReducers({
  todoStore     :  todoReducer,
  commentStore  : commentReducer
});
const myStore = createStore(theReducers, middleware);

class App extends Component {
  render() {
    return (
      <div>
        <Provider store={myStore}>
          <div>
            <Comments />
            <Todo />
            {/* <button onClick={myStore.dispatch({type: 'ADD_TODO', todo:'take pushups'})}>Click me man</button> */}
            {/* <button onClick={myStore.dispatch({type: 'INCREAMENT'})}>Click me man</button> */}
          </div>
        </Provider>      
      </div>
    );
  }
}

export default App;
