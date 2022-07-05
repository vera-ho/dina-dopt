import { RECEIVE_ALL_PETS, RECEIVE_PET } from '../actions/pet_actions';

const petsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign( {}, state);
    
    switch(action.type) {
        case RECEIVE_ALL_PETS:
            Object.assign(nextState, action.pets.data);
            return nextState;
        case RECEIVE_PET:
            nextState[action.pet.id] = action.pet.data;
            return nextState;
        default:
            return state;
    }
}

export default petsReducer;