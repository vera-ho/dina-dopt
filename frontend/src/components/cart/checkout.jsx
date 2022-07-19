import React from 'react';

const Checkout = props => {

    return (
        <div className="checkout-popup-container">
            <div className="checkout-popup-header">
                <h1>
                    You're all set!
                </h1>
            </div>
            <div className="checkout-popup-thanks">
                <p>Thank you for your purchase.</p>
                <p>Please visit the about page to get to know our amazing team members!</p>
            </div>
        </div>
    )
}

export default Checkout;