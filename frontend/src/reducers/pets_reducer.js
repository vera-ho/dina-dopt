import { RECEIVE_ALL_PETS, RECEIVE_PET } from '../actions/pet_actions';

const petsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign( {}, state);
    
    switch(action.type) {
        case RECEIVE_ALL_PETS:
            let pets = {};
            action.pets.data.map(pet => {
                pets[pet._id] = pet;
            })
            Object.assign(nextState, pets);

            nextState = Object.keys(nextState).sort().reduce(
                (obj, key) => { 
                  obj[key] = nextState[key]; 
                  return obj;
                }, 
                {}
            );
            return nextState;
        case RECEIVE_PET:
            nextState[action.pet.data._id] = action.pet.data;

            nextState = Object.keys(nextState).sort().reduce(
                (obj, key) => { 
                  obj[key] = nextState[key]; 
                  return obj;
                }, 
                {}
            );

            return nextState;
        default:
            return state;
    }
}

export default petsReducer;