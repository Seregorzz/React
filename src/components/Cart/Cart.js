import { useContext } from "react"
import { BsTrashFill } from "react-icons/bs";
import { Link } from "react-router-dom";

import { CartContext } from "../../Context/CartContext"
import './Cart.scss'


const Cart = () => {

    const {cart,carTotal,emptyCart, removeItem} = useContext(CartContext)

    if(cart.length === 0 ) {

      return(

        <div className="ses">
           <h2 className="espa">Tu carrito esta vacio</h2>
           
            <hr/>
            <Link to='/' className="btn btn-primary">Ir a comprar</Link>


        </div>
      )
    }


    return(
         <div className="ses">

             <h1 className="titi">CARRITO</h1>
              <hr/>

             {cart.map((item) => (
    
            <div className="carrito" key={item.id}>
              <h2 className="car">{item.nombre}</h2>
           <p>Precio:{item.precio}</p>
           <p>Version:{item.version}</p>
           <p>Cantidad:{item.cantidad}</p>
       
        
        
            <img className="po" alt="" src={item.img}/>
         
        
            <hr/>
           <div className="elimi">
           <button onClick={() =>  removeItem(item.id) } className="btn btn-danger mx-2"><BsTrashFill/></button>
           </div>
        
        
    </div>

    
    
))}

  <h4 className="total">Total: ${carTotal()}</h4>
  <button onClick={emptyCart} className="btn btn-danger">Vaciar Carrito</button>
            
            
          
        
         </div>
        


    )
}

export default Cart