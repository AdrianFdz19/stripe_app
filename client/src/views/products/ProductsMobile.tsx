// ProductMobile.tsx

import './ProductsMobile.scss';
import { useEffect, useState } from 'react';
import { ProductItemProps } from '../../types/products';
import { useAppContext } from '../../context/AppProvider';
import ProductItem from './ProductItem';

export default function ProductsMobile() {
    const [products, setProducts] = useState<[] | ProductItemProps[]>([]);
    const { apiUrl } = useAppContext();

    useEffect(() => {
        const getAllProducts = async () => {
            try {
                const response = await fetch(`${apiUrl}/products`);
                const data = await response.json();
                setProducts(data.products);
            } catch (err) {
                console.error(err);
            }
        };
        getAllProducts();
    }, []);

    return (
        <div className="mobileproducts">
            <div className="mobileproducts__header">
                <h1 className="mobileproducts__title">Products</h1>
            </div>
            <div className="mobileproducts__list">
                {products.length > 0 && products.map((product) => (
                    <ProductItem key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}

