import axios from 'axios';

export const getPets = () => {
    return axios.get('/api/pets');
}

export const getPet = petId => {
    return axios.get(`/api/pets/${petId}`);
}

// internal use only
export const addPet = petData => {
    return axios.post('/api/pets', petData);
}

// internal use only
export const updatePet = petData => {
    return axios.patch(`/api/pets/${petData.id}`, petData);
}

// internal use only
export const removePet = petId => {
    return axios.delete(`/api/pets/${petId}`);
}