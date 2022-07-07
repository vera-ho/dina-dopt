export const RECEIVE_CART = 'RECEIVE_CART';

export const receiveCart = (cart) => {
    return {
        type: RECEIVE_CART,
        cart
    }
}