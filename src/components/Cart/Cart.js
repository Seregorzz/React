import { useContext } from "react"
import { BsTrashFill } from "react-icons/bs";

import { CartContext } from "../../Context/CartContext"
import './Cart.scss'


const Cart = () => {

    const {cart,carTotal,emptyCart, removeItem} = useContext(CartContext)
    return(
         <section className="ses">
            <section className="container my-5">

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


</section>

         </section>
        


    )
}

export default Cart