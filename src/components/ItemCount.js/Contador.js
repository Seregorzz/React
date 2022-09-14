import Button from 'react-bootstrap/Button';








const Contador = ({onAdd,max,counter,setCounter,handleAgregar}) => {
   //let counter = 1
   

   
   const sumar = () => {

      if(counter < max){

        setCounter(counter + 1)
      }
    
   }
const restar = () => {

    
    if (counter > 1) {

        setCounter(counter - 1)
    }
    
}


    return(
   <div className="cuenta">
    

    <button onClick={restar} className="btn btn-outline-primary" >-</button>

    <span className="mx-2">{counter}</span>

    <button onClick={sumar} className="btn btn-primary" >+</button>
    <section>

    <br></br>

    <Button onClick={handleAgregar} >Agregar</Button>

        
    </section>
   
     
   </div>
 
    )
}


export default Contador
