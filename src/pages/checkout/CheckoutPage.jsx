import './CheckoutPage.css';
import './CheckoutHeader.css';
import { CheckoutHeader } from './CheckoutHeader';
import { useState, useEffect } from 'react';
import { OrderSummary } from './OrderSummary';
import { PaymentSummary } from './PaymentSummary';
import axios from 'axios';


export function CheckoutPage({ cart }) {
    const [delivaryOptions, setDeliveryOptions] = useState([]);
    const [paymentSummary, setPaymentSummary] = useState(null);

    useEffect(() => {
        const fetchCheckoutData = async () => {
            let response = await axios.get('/api/delivery-options?expand=esitmatedDeliveryTime');
            setDeliveryOptions(response.data);

            response = await axios.get('api/payment-summary');
            setPaymentSummary(response.data);
        }
        fetchCheckoutData();
    }, []);

    return (
        <>
            <title>Checkout</title>
            <link rel="icon" type="image/svg+xml" href="cart-favicon.png" />
            <CheckoutHeader />

            <div className="checkout-page">
                <div className="page-title">Review your order</div>

                <div className="checkout-grid">
                    <OrderSummary cart={cart} delivaryOptions={delivaryOptions} />

                    <PaymentSummary paymentSummary={paymentSummary} />
                </div>
            </div>
        </>
    );
}