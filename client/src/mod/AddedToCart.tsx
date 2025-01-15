// AddedToCart.tsx
import { useEffect, useState } from 'react';
import './AddedToCart.scss';

interface AddedModalProps {
    handleShow: boolean;
}

export default function AddedToCart({handleShow} : AddedModalProps) {

    const [show, setShow] = useState(false);
    const [hide, setHide] = useState(false);

    useEffect(() => {
        if (handleShow) {
            setShow(true);
        }
    }, [handleShow]);

    useEffect(() => {
        if (show) {
            setTimeout(() => {
                setHide(true);
            }, 3000);
            setTimeout(() => {
                setHide(false);
                setShow(false);
            }, 4000);
        }
    }, [show]);

    if (!show) return null;

  return (
    <div className={`overlay ${hide && 'hide' }`}>
        <div className="added-modal">
            <div className="added-modal__content">
                <p>You have added this product to the cart</p>
            </div>
        </div>
    </div>
  )
}
