// ShoppingCart.tsx

import { useState, useEffect } from 'react';
import { ProductItemProps } from '../../types/products';
import './ShoppingCart.scss';
import CartProductItem from './CartProductItem';
import { useAppContext } from '../../context/AppProvider';
import { CheckoutForm } from '../../components/CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

export default function ShoppingCart() {
    const [products, setProducts] = useState<[] | ProductItemProps[]>([]);
    const [showCheckout, setShowCheckout] = useState(false);
    const { cart, apiUrl, stripeKey } = useAppContext();
    const [subtotal, setSubtotal] = useState(0); // Inicializamos como número
    const [tax, setTax] = useState(15); // Porcentaje de impuesto
    const [total, setTotal] = useState<number>(0); // Inicializamos como número

    const stripePromise = loadStripe(stripeKey);

    console.log(apiUrl);

    useEffect(() => {
        if (cart.length === 0) return;

        const getCartProducts = async () => {
            try {
                const response = await fetch(`${apiUrl}/products/cart`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ cartItems: cart }),
                });
                const data = await response.json();

                const productsList = Array.isArray(data.products) ? data.products : [];
                setProducts(productsList);

                // Convertimos los precios a números y calculamos el subtotal
                const calculatedSubtotal = productsList.reduce((acc: number, product: any) => {
                    const price = parseFloat(product.price) || 0; // Convertimos a número
                    return acc + price;
                }, 0);

                setSubtotal(calculatedSubtotal);

                // Calculamos el total incluyendo impuestos
                const calculatedTotal = calculatedSubtotal + (calculatedSubtotal * tax) / 100;
                setTotal(calculatedTotal);
            } catch (err) {
                console.error(err);
            }
        };

        getCartProducts();
    }, [cart, tax]);

    return (
        <div className="cart">
            <div className="cart__container">
                <div className="cart__items">
                    <h1>Products</h1>
                    <div className="cart__item-list">
                        {products.length > 0 &&
                            products.map((product) => (
                                <CartProductItem key={product.id} product={product} />
                            ))}
                    </div>
                </div>
                <div className="cart__summary">
                    <h1>Details</h1>
                    <h3>Summary</h3>
                    <div className="cart__totals">
                        <p className="cart__totals__label">Subtotal</p>
                        <p>${subtotal.toFixed(2)}</p>
                    </div>
                    <div className="cart__totals">
                        <p className="cart__totals__label">Tax ({tax}%)</p>
                        <p>${((subtotal * tax) / 100).toFixed(2)}</p>
                    </div>
                    <div className="cart__totals">
                        <p className="cart__totals__label">Total</p>
                        <p>${total.toFixed(2)}</p>
                    </div>
                    <button onClick={()=>setShowCheckout(true)} >Checkout</button>
                </div>
            </div>

            {showCheckout && (
                <div className="checkout-modal">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm total={total} setShowCheckout={setShowCheckout} />
                    </Elements>
                </div>
            )}
        </div>
    );
}


