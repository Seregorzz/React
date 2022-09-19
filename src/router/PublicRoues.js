
import LoginScreen from "../components/LoginScreen/LoginScreen"
import { Routes,Route,Navigate } from "react-router-dom"
import './PublicRoutes.scss'

const PublicRoutes = () => {


    return(


        <div className="entrada">
           <Routes >
            
            <Route path='/login' element={<LoginScreen/>}/>
            <Route path="*" element={<Navigate to="/login"/>}/>
  
            </Routes>

            <div>
                
            </div>
        </div>

         
        
    )
}

export default PublicRoutes