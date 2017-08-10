import React, { Component } from 'react';
import Todo from './Todo.js';

class TodoList extends Component {

  componentWillReceiveProps(nextProps) {
    this.setState({ todo: nextProps.todo });
  }


  render() {
    const todos = this.props.todos;
    return (
      <ul>
        {
          todos.map((item, index) => {
            return <Todo key={index} todo={item}
              onClick={() => this.props.onTodoClick(item.id) }
               />
          })
        }
      </ul>);
  }
}

export default TodoList;
