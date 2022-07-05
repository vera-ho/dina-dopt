import * as PetUtil from "../util/pet_util";

export const RECEIVE_ALL_PETS = "RECEIVE_ALL_PETS";
export const RECEIVE_PET = "RECEIVE_PET";
export const REMOVE_PET = "REMOVE_PET";
export const RECEIVE_PET_ERRORS = "RECEIVE_PET_ERRORS";

export const receiveAllPets = pets => {
    return {
        type: RECEIVE_ALL_PETS,
        pets
    }
}

export const receiveSinglePet = pet => {
    return {
        type: RECEIVE_PET,
        pet 
    }
}

export const removePet = () => {
    return {
        type: REMOVE_PET
    }
}

export const receivePetErrors = errors => {
    return {
        type: RECEIVE_PET_ERRORS,
        errors
    }
}

// index show page
export const requestAllPets = () => dispatch => {
    return PetUtil.getPets()
        .then( pets =>  dispatch(receiveAllPets(pets)),
        errors => dispatch(receivePetErrors(errors)))
}

// pet show page
export const requestSinglePet = petId => dispatch => {
    return PetUtil.getPet(petId)
        .then( pet => dispatch(receiveSinglePet(pet)),
        errors => dispatch(receivePetErrors(errors)))
}

// *********** Internal Use Only *********** //

export const createPet = pet => dispatch => {
    return PetUtil.addPet(pet)
        .then( pet => dispatch(receiveSinglePet(pet)),
        errors => dispatch(receivePetErrors(errors)))
}

export const editPet = pet => dispatch => {
    return PetUtil.updatePet(pet)
        .then (pet => dispatch(receiveSinglePet(pet)), 
        errors => dispatch(receivePetErrors(errors)))
}

export const deletePet = petId => dispatch => {
    return PetUtil.removePet(petId)
        .then( () => dispatch(removePet()),
        errors => dispatch(receivePetErrors(errors)))
}