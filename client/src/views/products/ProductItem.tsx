import './ProductItem.scss';
import { ProductItemProps } from '../../types/products';

export default function ProductItem({product} : { product: ProductItemProps } ) {
  return (
    <div className="product-item" >
      <div className="product-item__content">
        <div className="product-item__content__img">
          <img src={product.imgs[0]} alt="product_image" />
        </div>
        <div className="product-item__content__info">
          <h3 className='product-item__content__info__title' >{product.title}</h3>
          <p className='product-item__content__info__description' >{product.description}</p>
          <p className='product-item__content__info__price' >{product.price}</p>
        </div>
      </div>
    </div>
  )
}
