import {  createContext, useContext,  } from "react";
import { useState } from "react";
import Swal from 'sweetalert2'




export const CartContext = createContext()




export const CartProvider = ({children}) => {
    const [cart,setCart] = useState ([])

    const addToCart = (item) => {
    
      setCart([...cart,item])
      
    }
    
    const isInCart = (id) => {
    
      return cart.some((item) => item.id===id)
    }
    
    
    const cartQuantity = () => {
    
      return cart.reduce ((acc,item) => acc + item.cantidad  , 0)
    }

    const carTotal = () => {

        return cart.reduce((acc,item) => acc + item.cantidad * item.precio ,0)

        
    }

    const removeItem = (id) => {
       setCart (cart.filter ((item) => item.id !== id))
       
    }



    const emptyCart = () => {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          setCart([])
        }
      })

      
    }

    const terminarCompra = () => {
      
      setCart([])
      
    }

    const terminarCompraConSwal = (id) => {
      Swal.fire({
        title: 'Gracias por comprar con nosotros',
        
        icon: 'success',
        
        confirmButtonColor: '#3085d6',
        
        confirmButtonText: 'Perfecto'
      })
      setCart([])
      
    }


    return(

        <CartContext.Provider  value={{
            cart,
            addToCart,
            isInCart,
            cartQuantity,
            carTotal,
            emptyCart,
            removeItem ,
            terminarCompra,
            terminarCompraConSwal
          }}>
          
          {children}



        </CartContext.Provider>
    )
}

export const useCartContext = () => {

  return useContext (CartContext)
}