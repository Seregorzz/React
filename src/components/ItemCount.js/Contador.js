import Button from 'react-bootstrap/Button';








const Contador = ({max,counter,setCounter,handleAgregar}) => {
   
   

   
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
    

    <button onClick={restar} className={counter === 0 ? "btn btn-outline-danger" : "btn btn-outline-primary" }
    disabled={counter === 0} >-</button>

    <span className="mx-2">{counter}</span>

    <button onClick={sumar} className="btn btn-primary" >+</button>
    <section>

    <br></br>

    <Button disabled={counter=== 0} onClick={handleAgregar} >Agregar</Button>

        
    </section>
   
     
   </div>
 
    )
}


export default Contador
