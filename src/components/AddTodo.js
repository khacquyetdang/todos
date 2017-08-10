import React, { Component } from 'react';
class AddTodo extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      text: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

 handleSubmit() {
   this.props.onAddClick(this.state.text);
   this.setState({ text: ''});
 }

 render() {
   return (
     <form className="form-horizontal" onSubmit={this.handleSubmit}>
     <div className="controls form-inline">
     <input type="text" className="form-control" onChange={ event => { this.setState({text : event.target.value}) }}
     value={this.state.text}></input>
     <button type="submit" className="btn btn-default">Add todo</button>
     </div>
     </form>
   );
 }
}

export default (AddTodo);
