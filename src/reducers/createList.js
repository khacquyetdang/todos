import { FETCH_TODO_SUCCESS, FETCH_TODOS_REQUEST, FETCH_TODO_FAILURE,
     ADD_TODO_SUCCESS,
      TOGGLE_TODO_SUCCESS,
  FILTER_COMPLETED, FILTER_ACTIVE } from '../constants';
import { combineReducers } from 'redux';

export default function createList(filter) {
    const handleToggle = (state, action) => {
        const { result: toggleId, entities } = action.response;
        const { completed } = entities.todos[toggleId];
        //const shoud
        const shouldRemove = (filter === FILTER_COMPLETED && completed === false)
        || (filter === FILTER_ACTIVE && completed === true);
        return (shouldRemove ?
            state.filter(id => id !== toggleId)
            : state);
    };
    const ids = (state= [], action) => {

        switch (action.type) {
            case FETCH_TODO_SUCCESS: {
                if (action.filter !== filter)
                {
                    return state;
                }
                return action.response.result;
            }
            case ADD_TODO_SUCCESS: {
                //return state;
                return [action.response.result, ...state];
            }
            case TOGGLE_TODO_SUCCESS: {
                //return state;
                return  handleToggle(state, action);
            }

            default: {
                return state;
            }
        }
    };
    const isFetching = (state = false, action) => {
        if (action.filter !== filter)
        {
            return state;
        }
        switch (action.type) {
            case FETCH_TODO_SUCCESS: {
                return false;
            }
            case FETCH_TODOS_REQUEST: {
                return true;
            }
            case FETCH_TODO_FAILURE: {
                return false;
            }

            default: {
                return state;
            }
        }
    }

    const errorMessage = (state = null, action) => {
        if (action.filter !== filter)
        {
            return state;
        }
        switch (action.type) {
            case FETCH_TODO_SUCCESS: {
                return null;
            }
            case FETCH_TODOS_REQUEST: {
                return null;
            }
            case FETCH_TODO_FAILURE: {
                return action.message;
            }

            default: {
                return state;
            }
        }
    }
    return combineReducers({
        ids,
        isFetching,
        errorMessage,
    });
}

export function getIds(state){
    return state.ids;
}

export function getIsFetching(state) {
    return state.isFetching;
};

export function getErrorMessage(state){
    return state.errorMessage;
}
