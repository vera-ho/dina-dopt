import React from 'react';
import { connect } from "react-redux";
import { closeModal } from "../../actions/modal_actions";
import Checkout from './checkout';

const CheckoutModal = ({modal, closeModal}) => {

    if (!modal) {
        return null;
    }
    let component;
    switch (modal) {
        case 'checkout':
            component = <Checkout />;
            break;
        default:
            return null;
    }
    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                { component }
            </div>
        </div>
    )
}

const mSTP = (state) => {
    return {
        modal: state.ui.modal
    }
}

const mDTP = (dispatch) => {
    return {
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(mSTP, mDTP)(CheckoutModal);