export const selectAllPets = (state) => {
    let arr = Object.values(state.pets)
    return arr.reverse()
}

export const selectAllPetsByPrice = (state) => {
    let arr = Object.values(state.pets).slice(0).sort( (a,b) => a.price - b.price)
    return arr.reverse()
}

export const filterAllPetsByType = (state, petType) => {
    let arr = Object.values(state.pets).filter(pet => pet.petType.toUpperCase() === petType.toUpperCase())
    return arr.reverse()
}

export const cartItemsArray = (state) => {
    let result = [];

    if (!state.entities.cart?.items) {
        return null
    }
    const cartItems = state.entities.cart.items;
    cartItems.forEach(item => {
        result.push(item.petId)
    })
    return result;
}



// export const selectAllPets = (state) => {
//     let arr = Object.values(state.pets)
//     return arr.reverse()
// }
