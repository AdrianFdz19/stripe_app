// Header.tsx
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../context/AppProvider';
import './Header.scss';
import { PiShoppingCartThin } from "react-icons/pi";

export default function Header() {

    const {cart} = useAppContext(); 
    const navigate = useNavigate(); 
    const redirectToShoppingCart = () => navigate('/shopping-cart');

  return (
    <header className="header">
        <div className="header__box">
            <h1>header</h1>
            <div className="header__icon-box" onClick={redirectToShoppingCart} >
                { cart.length > 0 && <div className="header__icon-box__count">{cart.length}</div> }
                <PiShoppingCartThin className='header__icon' />
            </div>
        </div>
    </header>
  )
}
