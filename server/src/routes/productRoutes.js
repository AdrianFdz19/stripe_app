import express from 'express'
import { getAllProducts, getCartProducts } from '../controllers/productControllers.js';

const products = express.Router();

products.get('/', getAllProducts);

products.post('/cart', getCartProducts);

export default products;