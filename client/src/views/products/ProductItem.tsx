import './ProductItem.scss';
import { ProductItemProps } from '../../types/products';
import { useState } from 'react';
import { useAppContext } from '../../context/AppProvider';
import AddedToCart from '../../mod/AddedToCart';

export default function ProductItem({product} : { product: ProductItemProps } ) {

  const [showActions, setShowActions] = useState(false);
  const {addToCart, cart} = useAppContext();
  const [showAddedMessageModal, setShowAddedMessageModal] = useState(false);

  const alreadyOnCart = cart.includes(product.id);

  const handleAddToCart = () => {
    addToCart(product.id);
    setShowAddedMessageModal(true);
  };

  return (
    <div className="product-item"
      onMouseOver={() => setShowActions(true)}
      onMouseLeave={() => setShowActions(false)}
    >
      { showAddedMessageModal && <AddedToCart handleShow={true} /> }
      <div className="product-item__content">
        { (showActions && !alreadyOnCart) && 
          <button className='product-item__content__addbtn' onClick={handleAddToCart} >Add to cart</button>
        } 
        <div className="product-item__content__img">
          <img src={product.url} alt="product_image" />
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
