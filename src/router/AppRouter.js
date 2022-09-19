import { BrowserRouter } from "react-router-dom"
import { useLoginContext } from "../Context/LoginContext"
import PrivateRoutes from "./PrivateRoutes"
import PublicRoutes from "./PublicRoues"



const AppRouter = () => {



    const {user} = useLoginContext() 

    return(

        <BrowserRouter>
        {
          user.logged
          ? <PrivateRoutes/>
           
          :
          <PublicRoutes/>
         
          
          

        }
        
        </BrowserRouter>
    )

}

export default AppRouter