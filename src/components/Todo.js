import React, { Component } from 'react';

class Todo extends Component {
  constructor(props)
  {
    super(props);
    this.state = { todo: this.props.todo };
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ todo: nextProps.todo });
  }


  render() {
    const item = this.state.todo;
    return (
      <li onClick={() => {
          this.props.onClick(item.id)
        }
      }
      style={{ textDecoration: item.completed ? 'line-through' : 'none'}}
      >
      { item.text }
    </li>
    );
  }
}

export default Todo;
