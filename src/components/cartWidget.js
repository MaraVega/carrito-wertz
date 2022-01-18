import react from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';

export default function CartWidget(){
    return(
        <div className="carrito">
            <FontAwesomeIcon icon={faShoppingCart}/>
            <p>2</p>
        </div>
    )
}