import { combineReducers } from 'redux';
import {  FILTER_ALL, FILTER_ACTIVE, FILTER_COMPLETED } from '../constants.js';
import byId, * as fromById from './byId';
import createList, * as fromList from './createList';


const listByFilter = combineReducers({
    all: createList(FILTER_ALL),
    active: createList(FILTER_ACTIVE),
    completed: createList(FILTER_COMPLETED)
});

const todos = combineReducers({
    byId,
    listByFilter,
});

export default todos;


export function getVisibleTodos(state, filter) {
    const ids = fromList.getIds(state.listByFilter[filter]);
    return ids.map(id => fromById.getTodo(state.byId, id));
}

export function getIsFetching(state, filter) {
  return fromList.getIsFetching(state.listByFilter[filter]);
}

export function getErrorMessage(state, filter){
    return fromList.getErrorMessage(state.listByFilter[filter]);
}
