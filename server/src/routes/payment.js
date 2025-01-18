import express from 'express';
import {Stripe} from 'stripe'
const payment = express.Router();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

payment.post('/create-payment-intent', async (req, res) => {
    try {
        const { amount } = req.body;

        // Convertir el monto a entero
        const amountInCents = Math.round(amount * 100); // Convertir a centavos

        const paymentIntent = await stripe.paymentIntents.create({
            amount: amountInCents, // Stripe usa centavos, por eso multiplicamos por 100
            currency: 'usd',
        });

        res.send({
            clientSecret: paymentIntent.client_secret,
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error creating payment intent');
    }
});

export default payment;