

import { useContext } from "react";
import { BsFillCartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import './Carrito.scss'

const Carrito = () => {


     const { cartQuantity} = useContext(CartContext)


    return(

        <Link to="/cart">
        
        <BsFillCartFill className="compra"/>
        <span>{cartQuantity()}</span>

        </Link>
    )
}

export default Carrito