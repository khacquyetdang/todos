import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo, toggleTodo } from '../actions';
import AddTodo from './AddTodo.js';
import Footer from './Footer.js';
import VisibleTodoList from '../containers/VisibleTodoList.js';
import './App.css';

class App extends Component {

    render() {

        return (
            <div className="App">
                <div className="container">
                    <AddTodo
                        onAddClick={text => { this.props.addTodo(text) } }
                        />
                    <VisibleTodoList />
                    <Footer visibilityFilter={this.props.visibilityFilter}/>
                </div>
            </div>
        );
    }
}
function mapStateToProps(state)
{
    const {  visibilityFilter } = state;
    return {
        visibilityFilter
    };
}

export default connect(mapStateToProps, {addTodo, toggleTodo}) (App);
