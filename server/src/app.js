import express from 'express'
import cors from 'cors'
import products from './routes/productRoutes.js';
import { config } from 'dotenv';
import payment from './routes/payment.js';
config();

const app = express();

app.use(express.json());
app.use(cors());

app.use('/products', products);
app.use('/', payment);

app.get('/', (req,res) => res.send('Server is active.'));


export default app;