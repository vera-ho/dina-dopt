import { RECEIVE_ALL_PETS, RECEIVE_PET } from '../actions/pet_actions';

const petsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign( {}, state);
    
    switch(action.type) {
        case RECEIVE_ALL_PETS:
            // Object.assign(nextState, action.pets.data);
           let pets = {}
           action.pets.data.map(pet => {
            //    debugger
               pets[pet._id] = pet
           })
            
            Object.assign(nextState, pets)
            // debugger
            return nextState;
        case RECEIVE_PET:

            nextState[action.pet._id] = action.pet.data;
            return nextState;
        default:
            return state;
    }
}

export default petsReducer;