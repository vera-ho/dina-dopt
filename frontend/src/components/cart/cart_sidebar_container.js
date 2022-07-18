import { connect } from 'react-redux';
import { requestAllPets } from '../../actions/pet_actions';
import { cartItemPets } from '../../reducers/selector';
import CartSidebar from './cart_sidebar';

const mSTP = (state) => {
    const petsArray = Object.values(state.entities.pets)
    return {
        cartItemPets: cartItemPets(state, petsArray)
    }
}

export default connect(mSTP)(CartSidebar);