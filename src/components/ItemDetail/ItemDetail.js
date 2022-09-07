
import './ItemDetail.scss'
import Contador from '../ItemCount.js/Contador';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';


const ItemDetail = ({item}) => {
    const onAdd = (counter) => {
        alert(`Agregaste ${counter} productos`);
        
        
      };
        

    return (
        <div>
      
     <h3>{item.nombre}</h3>
<div className="conta " >
            <img className='imagen' src={item.img} alt="bueno"/>
            <p className='tit'> { item.sinopsis}
            <Carousel >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={item.img1}
          alt="First slide"
        />
        <Carousel.Caption>
          
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={item.img2}
          alt="Second slide"
        />

        <Carousel.Caption>
          
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={item.img3}
          alt=""
        />

        <Carousel.Caption>
          
          <p>
            
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel></p>
              <div className='precio'>
              <Card style={{ width: '22rem' }}>
      <Card.Img variant="top" src={item.amazon} />
      <h1>{item.precio}</h1>
      <Card.Body>

      <Contador className="non" onAdd={onAdd} initial={1} stock={item.stock}/>
        <Card.Title></Card.Title>
        <Card.Text>
          
        </Card.Text>
        
      </Card.Body>
    </Card>
              </div>
             
            
            <div className='video'>{item.trailer}</div> 
        </div>
        </div>
        
    )
}

export default ItemDetail