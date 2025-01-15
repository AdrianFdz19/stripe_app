import express from 'express'
import cors from 'cors'
import products from './routes/productRoutes.js';
import Stripe from 'stripe';
import { config } from 'dotenv';
config();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const app = express();

app.use(express.json());
app.use(cors());

app.use('/products', products);

app.get('/', (req,res) => res.send('Server is active.'));

app.post('/create-payment-intent', async (req, res) => {
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

export default app;