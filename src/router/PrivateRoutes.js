
import { Header } from '../components/Header/Header'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer';
import Cart from '../components/Cart/Cart';
import Slasher from '../components/Categorias/Slasher/Slasher';
import   Suspense  from '../components/Categorias/Suspense/Suspense';
import Thriller from '../components/Categorias/Thriller/Thriller';
import { Routes,Route,Navigate } from "react-router-dom"
import Checkout from '../components/Checkout/Checkout';


  const PrivateRoutes = () => {


    return<>
    <main>
          <Header/>

          <Routes>
            <Route path='/' element={ <ItemListContainer/> }/>
            <Route path='/productos/:categoryId' element={<ItemListContainer/>} />
            <Route path='/item/:itemId' element={<ItemDetailContainer />}/>
            <Route path='/Checkout' element={<Checkout/>}/>
            
            <Route path='/Cart' element={<Cart/>}/>
            <Route path='/Slasher' element={<Slasher/>}/>
            <Route path='/Suspense' element={<Suspense/>}/>
            <Route path='/Thriller' element={<Thriller/>}/>
            
            
            <Route path='*' element={ <Navigate to="/"/>} />
          </Routes>
          <div>

<img alt=''></img>
</div>
          
          </main>
    </>
  } 

  export default PrivateRoutes