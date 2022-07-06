import React from 'react';

const CartSidebar = (props) => {

    const handleCloseSidebar = (e) => {
        e.preventDefault();

        const cartSidebar = document.getElementById("cart-sidebar-container")
        cartSidebar.classList.remove('active')
    }
    
    return (
        <div id="cart-sidebar-container">
            <div className="sidebar-close-header">
                <button onClick={handleCloseSidebar} className="close-sidebar-button">&times;</button>
            </div>
        </div>
    )
}

export default CartSidebar;