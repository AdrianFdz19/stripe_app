// CheckoutForm.tsx

import { useState } from 'react';
import { useStripe, useElements, CardElement, Elements } from '@stripe/react-stripe-js';
import './CheckoutForm.scss';
import { useAppContext } from '../context/AppProvider';

const CARD_ELEMENT_OPTIONS = {
    style: {
        base: {
            color: '#32325d', // Color del texto
            fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
            fontSize: '16px',
            '::placeholder': {
                color: '#aab7c4', // Color del texto del placeholder
            },
        },
        invalid: {
            color: '#fa755a', // Color del texto cuando hay error
            iconColor: '#fa755a',
        },
    },
};

export function CheckoutForm({ total, setShowCheckout }: { total: number; setShowCheckout: (boolean: boolean) => void }) {
    const stripe = useStripe();
    const elements = useElements();
    const [loading, setLoading] = useState(false);
    const { apiUrl } = useAppContext();

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setLoading(true);

        const response = await fetch(`${apiUrl}/create-payment-intent`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ amount: total }),
        });

        const { clientSecret } = await response.json();

        const result = await stripe?.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements?.getElement(CardElement)!,
            },
        });

        if (result?.error) {
            console.error(result.error.message);
        } else {
            console.log('Payment succeeded!');
            setShowCheckout(false);
        }

        setLoading(false);
    };

    return (
        <div className="checkout-overlay">
            <div className="checkout-box">
                <button className="checkout__modal__close" onClick={() => setShowCheckout(false)}>Close</button>
                <form onSubmit={handleSubmit}>
                    <h2>Checkout Form</h2>
                    {/* <CardElement />
                    <button type="submit" disabled={!stripe || loading}>
                        {loading ? 'Processing...' : 'Pay'}
                    </button> */}
                    <div className="stripe-form-group">
                        <label htmlFor="cardholder-name">Cardholder Name</label>
                        <input
                            type="text"
                            id="cardholder-name"
                            name="cardholderName"
                            placeholder="John Doe"
                            className="stripe-input"
                        />
                    </div>

                    <div className="stripe-form-group">
                        <label htmlFor="card-element">Card Details</label>
                        <CardElement id="card-element" /* options={CARD_ELEMENT_OPTIONS} */ />
                    </div>

                    <button type="submit" disabled={!stripe || loading}>
                        {loading ? 'Processing...' : 'Pay'}
                    </button>
                </form>
            </div>
        </div>
    );
}
