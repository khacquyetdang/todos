import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { FILTER_ALL } from '../constants';
import TodoList from '../components/TodoList.js';
import * as actions from '../actions';
import { getVisibleTodos, getIsFetching, getErrorMessage } from '../reducers'
import FetchError from '../components/FetchError';

class VisibleTodoList extends Component {

    constructor(props)
    {
        super(props);
        this.fetchData = this.fetchData.bind(this);
    }
    componentDidMount() {
        this.fetchData();
    }
    componentDidUpdate(prevProps) {
        if (this.props.filter !== prevProps.filter)
        {
            this.fetchData();
        }
    }
    fetchData(){
        const { filter, fetchTodos } = this.props;
        fetchTodos(filter);
        //fetchTodos(filter).then(() => console.log("done"));
    }

    render(){
        const { toggleTodo, errorMessage, todos, isFetching } = this.props;
        if (isFetching && !todos.length) {
            return <p>Loading...</p>;
            }
            if (errorMessage && !todos.length)
            {
                return (
                    <FetchError
                        message={errorMessage}
                        onRetry={() => this.fetchData()}
                        />
                )
            }
            return (
                <TodoList
                    todos={todos}
                    onTodoClick={toggleTodo}
                    />
            );
        }
    }



    function mapStateToProps(state, ownProps)
    {
        const filter = ownProps.match.params.filter || FILTER_ALL;
        return {
            todos : getVisibleTodos(state, ownProps.match.params.filter || FILTER_ALL),
            errorMessage: getErrorMessage(state, filter),
            isFetching: getIsFetching(state, filter),
            filter,
        };
    }

    export default withRouter(connect(mapStateToProps, actions ) (VisibleTodoList));
