import { normalize } from 'normalizr';
import * as schema from './schema';
import { ADD_TODO_SUCCESS, ADD_TODO_FAILURE, TOGGLE_TODO_SUCCESS, FETCH_TODOS_REQUEST, FETCH_TODO_SUCCESS, FETCH_TODO_FAILURE } from '../constants';
import * as api from '../api';
import { getIsFetching } from '../reducers';

export function fetchTodosRequest(filter) {
    return {
        type: FETCH_TODOS_REQUEST,
        filter,
    }
};
//

export function fetchTodosSuccess(filter, response) {
    return {
        type: FETCH_TODO_SUCCESS,
        filter,
        response
    }
};

export function fetchTodosFailure(filter, message) {
    return {
        type: FETCH_TODO_FAILURE,
        filter,
        message
    }
};

export const fetchTodos = (filter) => (dispatch, getState) => {
    if (getIsFetching(getState(), filter)) {
        return Promise.resolve();
    }

    dispatch(fetchTodosRequest(filter));
    api.fetchTodos(filter).then(response => {
        dispatch(fetchTodosSuccess(filter, normalize(response, schema.arrayOfTodos)));
        //dispatch()
    },
    error => {
        dispatch(fetchTodosFailure(filter, error.message || 'Something went wrong.'));
    });
}

export const addTodo = (text) => (dispatch) => {
    api.addTodo(text).then(response => {
        dispatch({
            type: ADD_TODO_SUCCESS,
            response: normalize(response, schema.todo),
        })
    });
}

export const toggleTodo = (id) => (dispatch) => {
    api.toggleTodo(id).then(response => {
        dispatch ({
            type: TOGGLE_TODO_SUCCESS,
            response: normalize(response, schema.todo)
        })
    });
};
