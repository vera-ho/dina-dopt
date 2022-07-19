import { connect } from 'react-redux';
import { requestAllPets } from '../../actions/pet_actions';
import { cartItemPets } from '../../reducers/selector';
import CartSidebar from './cart_sidebar';

const mSTP = (state) => {
  return {
    cartItemPets: state.entities.cart.items,
  };
};

export default connect(mSTP)(CartSidebar);
