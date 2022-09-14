import { Link } from 'react-router-dom'
import './Item.scss'
import Card from 'react-bootstrap/Card';




const Item = ( {producto} ) => {

    
    
        
      

    return (

       
        <div className='acomoda'>

            <Card style={{ width: '21rem' }}>
      <Card.Img variant="top" src={producto.img} />
      <Card.Body >
      
            <h4>{producto.nombre}</h4>
            <p>Precio: {producto.precio}</p>
            <small>Stock disponible: {producto.stock}</small>
            <p>{producto.desc}</p>
            <p>{producto.genero}</p>
            <br></br>
            
            
            <Link to={`/item/${producto.id}`} className="btn btn-primary my-2">Ver más</Link>
        <Card.Title></Card.Title>
        <Card.Text>
          
        </Card.Text>
        
      </Card.Body>
    </Card>
            
        </div>
    )
}

export default Item