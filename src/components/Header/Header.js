
import './Header.scss'
import { Link } from 'react-router-dom'
import Carrito from '../CartWidget.js/Carrito'

//import { useLoginContext } from '../../Context/LoginContext'


export const Header = () => {

//const {user,logout} = useLoginContext()
    return (
        <header className="bg-header">
            <div className="header-container">

                

                <nav className="header-navbar">
                    <ul className='ordena'>

                    <li className='ordena' >  <Carrito/>  </li>

                    <li className='ordena' ><Link to="/" className="titulo">HORROR STREET</Link></li>

                    <li className='ordena'><Link to='/Slasher' className="header-navlink">Slasher</Link></li>
                    <li className='ordena'><Link to='/Thriller' className="header-navlink">Thriller</Link></li>
                    <li className='ordena'><Link to='/Suspense' className="header-navlink">Suspense</Link></li>
                    
                    </ul>
                    
                </nav>

               
            </div>
        </header>
    )
}