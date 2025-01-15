// CartProductItem.tsx
import { ProductItemProps } from '../../types/products';
import './CartProductItem.scss';

interface CartProductItem {
    product: ProductItemProps;
}

export default function CartProductItem({product} : CartProductItem) {
  return (
    <div className="cart-product">
        <div className="cart-product__content">
            <img src={product.url} alt="product_image" />
            <div className="cart-product__content__info">
                <div className="cart-product__content__info__header">
                    <h3>{product.title}</h3>
                    <h3 >{`$${product.price}`}</h3>
                </div>
                <p>{product.description}</p>
            </div>
        </div>
    </div>
  )
}
