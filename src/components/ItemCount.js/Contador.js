import Button from 'react-bootstrap/Button';
import { useState } from "react"






const Contador = ({onAdd, initial, stock}) => {
   //let counter = 1
   const [counter,setCounter] = useState(initial)

   
   const sumar = () => {

      setCounter(counter + 1);
      
    
    console.log(counter)
    
   }
const restar = () => {

    
    if (counter > 0) {

        setCounter(counter - 1)
    }
    console.log(counter)
}

    return(
   <div className="cuenta">
    

    <button onClick={restar} className="btn btn-outline-primary" >-</button>

    <span className="mx-2">{counter}</span>

    <button onClick={sumar} className="btn btn-primary" disabled={counter === stock}>+</button>
    <section>

    <br></br>

    <Button onClick={() => {
          onAdd(counter);
          console.log("Agregaste productos")
        }}
        disabled={counter === 0 ? true : null} className='agregar' 
        
        
        variant="danger">Agregar</Button>

        
    </section>
   
     
   </div>
 
    )
}


export default Contador
