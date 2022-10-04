import { useState } from "react"
import { Navigate } from "react-router-dom"
import { useCartContext } from "../../Context/CartContext"
import { addDoc,collection,  getDocs,writeBatch,query,where,documentId} from "firebase/firestore"
import { db } from "../Firebase/config"
import Swal from 'sweetalert2'

import './Checkout.scss'








const Checkout = ()=> {

    

    const{cart,carTotal, terminarCompraConSwal} = useCartContext()

    const[orderId,setOrderId] = useState (null)

    const[values,setValues] = useState({

        nombre:'',
        email:'',
        direccion:'',
        
    })
    
    const handleinputChange = (e) => {
        setValues({
           ...values,
           [e.target.name]:e.target.value
        })


    }

    
    const handleSubmit = async (e) => {

        e.preventDefault()

        const orden = {

            comprador:values,
            item:cart,
            total:carTotal()
        }
        
        
        if(values.nombre.length < 2){
            Swal.fire('Nombre Incorrecto')
            return}

        if(values.email.length < 2) {
            Swal.fire('Email Incorrecto')
            return}
         const batch = writeBatch(db)
         const oredenesRef = collection(db,'ordenes')
         const productosRef = collection(db,'productos')

         const q = query(productosRef,where(documentId(),'in',cart.map(item => item.id)))

         const productos = await getDocs(q)

         const outOfStock = []

         productos.docs.forEach((doc) => {
            const itemInCart = cart.find(item => item.id === doc.id)

            if(doc.data().stock >= itemInCart.cantidad){

                batch.update(doc.ref, {

                    stock:doc.data().stock - itemInCart.cantidad
                })
            }else{
                outOfStock.push(itemInCart)
            }
         })

         if (outOfStock.length === 0){
            batch.commit()
            .then(() => {
                addDoc(oredenesRef,orden)
         .then((doc) => {

            
            setOrderId(doc.id)
           terminarCompraConSwal()
         })

            })
         }else {
            Swal.fire('Item sin stock')
         }

         

         

         
    }

    if(orderId){
        return (

            <div className="container my-5">
            <h2 className="com">Compra Exitosa</h2>
            <hr/>

            
            

            <p className="com">Tu numeo de orden es: <strong>{orderId}</strong> </p>

        </div>
        )

        
    }

    if(cart.length === 0 ){

        return <Navigate to ="/"></Navigate>
    }
    

    return (
        <div className="ultimo">
            <h2>Checkout</h2>
            <hr/>
             
             <p className="end">Total de productos `{cart.length}`</p>
             
             <p className="end">COMPLETA ESTE FORMULARIO PARA TERMINAR CON TU COMPRA</p>
             
             <div className="contain">
                
            <form className="ancho" onSubmit={handleSubmit}>
                <div>
                <input 
                name="nombre"
                onChange={handleinputChange}
                value={values.nombre} 
                type={'text'} 
                className="my-3 form-control" 
                placeholder="Tu Nombre"
                ></input>

                <input 
                name="email"
                value={values.email}
                onChange={handleinputChange}
                type={'email'} 
                className="my-3 form-control" 
                placeholder="Tu Correo"></input>

                <input 
                name="direccion"
                onChange={handleinputChange}
                value={values.direccion}
                type={'text'}
                 className="my-3 form-control" 
                 placeholder="Direccion"></input>

<button type="submit" className="btn btn-danger">Comprar</button>

                </div>
                
                    
                   
            </form>
            
              <div className="asi">
              <h4 className="totali">Total: ${carTotal()}</h4>
            {cart.map((item) => (
    
    <div className="carr" key={item.id}>
        <div className="el">
        <h2 >{item.nombre}</h2>
   <p>Precio:{item.precio}</p>
   <p>Version:{item.version}</p>
   <p>Cantidad:{item.cantidad}</p>
   

        </div>
        <img className="po" alt="" src={item.img}/>
   <hr/>
   
</div>

))}
</div>
    
        </div>
        </div>
    )



} 

export default Checkout