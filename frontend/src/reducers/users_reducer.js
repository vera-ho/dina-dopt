import { RECEIVE_ALL_USERS } from '../actions/user_actions';

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign( {}, state);
    
    switch(action.type) {
        case RECEIVE_ALL_USERS:
            return Object.assign( {}, action.users.data, state);
        default:
            return state;
    }

}

export default usersReducer;