import { useState } from "react"
import { Navigate } from "react-router-dom"
import { useCartContext } from "../../Context/CartContext"
import { addDoc,collection, doc, getDoc, updateDoc } from "firebase/firestore"
import { db } from "../Firebase/config"
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

    
    const handleSubmit = (e) => {

        e.preventDefault()

        const orden = {

            comprador:values,
            item:cart,
            total:carTotal()
        }
        
        
        if(values.nombre.length < 2){
            alert("Nombre incorrecto")
            return}

        if(values.email.length < 2) {
            alert("email incorrecto")
            return}

         const oredenesRef = collection(db,'ordenes')

         cart.forEach((item) => {

            const docRef = doc(db,'productos',item.id)

            getDoc(docRef)
            .then((doc) => {

                if(doc.data().stock >= item.cantidad){
                    updateDoc(docRef,{

                        stock: doc.data().stock- item.cantidad
                    })
                    }else{

                        alert("No hay stock suficiente")
                }
                
            })

         })

         addDoc(oredenesRef,orden)
         .then((doc) => {

            console.log(doc.id)
            setOrderId(doc.id)
            terminarCompraConSwal()
         })
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
        <div className="container my-5">
            <h2>Checkout</h2>
            <hr/>

            <form onSubmit={handleSubmit}>
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

                <button type="submit" className="btn btn-primary">Enviar</button>
            </form>


        </div>


    )



} 

export default Checkout