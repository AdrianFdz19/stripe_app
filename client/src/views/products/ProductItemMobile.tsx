import React, { useState } from 'react'
import { ProductItemProps } from '../../types/products'
import { useAppContext } from '../../context/AppProvider';
import './ProductItemMobile.scss';
import AddedToCart from '../../mod/AddedToCart';
import { BsCartPlusFill } from "react-icons/bs";

export default function ProductItemMobile({product} : { product: ProductItemProps } ) {

    const [showActions, setShowActions] = useState(false);
    const {addToCart, cart} = useAppContext();
    const [showAddedMessageModal, setShowAddedMessageModal] = useState(false);

    const alreadyOnCart = cart.includes(product.id);

    const handleAddToCart = () => {
        addToCart(product.id);
        setShowAddedMessageModal(true);
    };

  return (
    <div className="moproditem">
        { showAddedMessageModal && <AddedToCart handleShow={true} /> }
        <div className="moproditem__content">
            <div className="moproditem__content__img">
                <img src={product.url} alt="product_image" />
            </div>
            <div className="moproditem__content__info">
                { !alreadyOnCart && 
                    <div className="moproditem__content__add"
                        onClick={handleAddToCart}
                    >
                        <BsCartPlusFill className='moproditem__content__add__icon' />
                    </div>
                }
              <h3 className='moproditem__content__info__title' >{product.title}</h3>
              <p className='moproditem__content__info__description' >{product.description}</p>
              <p className='moproditem__content__info__price' >{product.price}</p>
            </div>
        </div>
    </div>
  )
}
