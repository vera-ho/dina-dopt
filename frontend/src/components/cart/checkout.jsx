import React from 'react';

const Checkout = props => {

    return (
        <div className="checkout-popup-container">
            <div className="checkout-popup-content">
                <div className="checkout-popup-header">
                    <h1>
                        You're all set!
                    </h1>
                </div>
                <div className="checkout-popup-thanks">
                    <p>
                        Thank you for your purchase. Please visit the about page to get to know our amazing team members!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Checkout;