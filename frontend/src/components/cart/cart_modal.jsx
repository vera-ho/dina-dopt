// import React from 'react';
// import { connect } from "react-redux";
// import { closeModal } from "../../actions/modal_actions";
// import CartSidebar from './cart_sidebar';

// const CartModal = ({modal, closeModal}) => {

//     const handleCloseSidebar = (e) => {
//         e.preventDefault();
//         closeModal();

//         const cartSidebar = document.getElementById("cart-sidebar-container")
//         console.log(cartSidebar)
//     }

//     if (!modal) {
//         return null;
//     }
//     let component;
//     switch (modal) {
//         case 'cart':
//             component = <CartSidebar />;
//             break;
//         default:
//             return null;
//     }
//     return (
//         <div className="modal-background" onClick={handleCloseSidebar}>
//             { component }
//         </div>
//     )
// }

// const mSTP = (state) => {
//     return {
//         modal: state.ui.modal
//     }
// }

// const mDTP = (dispatch) => {
//     return {
//         closeModal: () => dispatch(closeModal())
//     }
// }

// export default connect(mSTP, mDTP)(CartModal);