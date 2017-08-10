export default function byId(state = {}, action) {
    if (action.response) {
        var nextState = {
            ...state,
            ...action.response.entities.todos,
        };
        console.log("byId ");
        console.log("action ", JSON.stringify(action));
        console.log("next state " , JSON.stringify(nextState));
        return nextState;
    }
    return state;
}

export function getTodo(state, id) {
    return state[id];
}
