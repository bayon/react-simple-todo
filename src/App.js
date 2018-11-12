import React, { Component } from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';

class App extends Component {
  state = {
    todos:[
      {id: 1, content: 'buy some milk'},
      {id : 2, content: 'play a game'}
    ]
  }
   deleteTodo = (id) => {
     //console.log(id);
     // The filter function expects a function as its argument.
     //The filter returns every element that does NOT == the id sent in, thus removing it.
     const todos = this.state.todos.filter(todo => {
       return todo.id !== id;
     });
     this.setState({
       todos: todos
     })
   }
   addTodo = (todo) => {
    todo.id  = Math.random();
    let todos = [...this.state.todos, todo]
    this.setState({
      todos: todos
    })
   }
  render() {
    return (
      <div className="todo-app container">
        <h1 className = "center blue-text">Todos</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
        <AddTodo addTodo = {this.addTodo} />
      </div>
    );
  }
}

export default App;
