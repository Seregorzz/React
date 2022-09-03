
import './ItemDetail.scss'


const ItemDetail = ({item}) => {

    return (
        <div className="container my-5">
            <img src={item.img} alt="bueno"/>
            <h3>{item.nombre}</h3>
            <p>{item.desc}</p>
            <p>{item.category}</p>
            <h4>{item.precio}</h4>
            <p> {item.sinopsis}</p>
            <p> {item.trailer}</p>
        </div>
    )
}

export default ItemDetail