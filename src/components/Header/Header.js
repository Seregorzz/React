
import './Header.scss'
import { Link } from 'react-router-dom'
import Carrito from '../CartWidget.js/Carrito'


export const Header = () => {


    return (
        <header className="bg-header">
            <div className="header-container">

                

                <nav className="header-navbar">
                    <ul className='ordena'>

                    <li className='ordena' >  <Carrito/>  </li>

                    <li className='ordena' ><Link to="/" className="titulo">HORROR STREET</Link></li>

                    <li className='ordena'><Link to='/productos/remeras' className="header-navlink">Slasher</Link></li>
                    <li className='ordena'><Link to='/productos/zapatillas' className="header-navlink">Thriller</Link></li>
                    <li className='ordena'><Link to='/productos/gorros' className="header-navlink">Halloween</Link></li>
                    
                    </ul>
                    
                </nav>
            </div>
        </header>
    )
}