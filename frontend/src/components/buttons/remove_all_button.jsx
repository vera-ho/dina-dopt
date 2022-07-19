import React from 'react';
import { useDispatch } from 'react-redux';
import { receiveCart } from '../../actions/cart_actions';
import { removeAllFromCart } from '../../util/cart_api_util';

const RemoveAllButton = (props) => {

    const dispatch = useDispatch();

    const { petId } = props;

    const handleRemoveAllButton = async (e) => {
        e.preventDefault();

        let newCart = await removeAllFromCart(petId);
        dispatch(receiveCart(newCart.data));
    }

    return (
        <div className='remove-pet-item-container'>
            <div className="remove-pet-item-button" onClick={handleRemoveAllButton}>
                <div>&times;</div>
            </div>
        </div>
    )
}

export default RemoveAllButton;