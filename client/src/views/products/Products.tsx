import './Products.scss';
/* import { ProductItemProps } from '../../types/products'; */
import ProductItem from './ProductItem';
import { useEffect, useState } from 'react';
import { ProductItemProps } from '../../types/products';
import { useAppContext } from '../../context/AppProvider';
import useMobileSize from '../../hooks/useMobileSize';
import ProductsMobile from './ProductsMobile';

export default function Products() {

    const [products, setProducts] = useState<[] | ProductItemProps[]>([]);
    const { apiUrl } = useAppContext();
    const isMobile = useMobileSize();

    useEffect(() => {
      console.log(isMobile);
    }, [isMobile]);

    useEffect(() => {
        const getAllProducts = async () => {
            try {
                const response = await fetch(`${apiUrl}/products`);
                const data = await response.json();
                console.log(data);
                setProducts(data.products);
            } catch(err) {
                console.error(err);
            }
        };
        getAllProducts();
    }, []);

  return (
    <>
      { isMobile ? (
        <ProductsMobile />
      ) : (
        <div className="products">
          <div className="products__box">
            <h1>Products</h1>

            <div className="products__list">
                { products.length > 0 && products.map((product) => (
                    <ProductItem key={product.id} product={product} />
                )) }
            </div>
          </div>
        </div>
      )}
    </>
  )
}
