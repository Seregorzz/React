
import './ItemDetail.scss'
import Contador from '../ItemCount.js/Contador';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import { useContext, useState } from 'react';

import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Select from '../Select/Select';
import { CartContext } from '../../Context/CartContext';





const ItemDetail = ({item}) => {

  //////////
  
  

  
        const[version,setVersion] = useState (item.options[0].value)

        const{cart,addToCart, isInCart}= useContext (CartContext)
        console.log(cart)

      //////////
      const [cantidad,setCantidad] = useState(0)

      const handleAgregar = () => {
        const itemtoCart =  {

          id: item.id,
          precio: item.precio,
          nombre:item.nombre,
          img:item.img,
          version,
          cantidad

        } 
        console.log(isInCart(item.id))
        addToCart( itemtoCart )
        
      }

    return (
        <div>


      

      
     <h3>{item.nombre}</h3>
<div className="conta " >
            <img className='imagen' src={item.img} alt="bueno"/>
            <div className='tit'> { item.sinopsis}
            <Carousel >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={item.img1}
          alt="First slide"
        />
        
        <Carousel.Caption>
          
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={item.img2}
          alt="Second slide"
        />

        <Carousel.Caption>
          
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src  ={item.img3}
          alt=""
        />

        <Carousel.Caption>

          
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel></div>
              <div className='precio'>
              <Card style={{ width: '22rem' }}>
      <Card.Img variant="top" src={item.amazon} />
      <h1>{item.precio}</h1>
      <Card.Body>
      <Select options={item.options} onSelect={setVersion}/>
      {
          isInCart(item.id)
          ? <Link to="/Cart"   className="d-grid gap-2">
          <Button variant="primary" size="lg">
            Finalizar Compra
          </Button>
         
            </Link>
            : <Contador className="non" 
             
            max={item.stock}
            counter={cantidad}
            setCounter={setCantidad}
            handleAgregar={handleAgregar}/>
       }
        
        
        <br></br>
        
      
        <Card.Title> </Card.Title>
        <Card.Text>
          
        </Card.Text>
        
      </Card.Body>
    </Card>

   
              </div>
             

             
             
            
        </div>
         
        </div>
       
        
        
    )
}

export default ItemDetail