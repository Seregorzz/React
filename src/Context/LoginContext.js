import { createContext, useContext, useState } from "react";


export const LoginContext = createContext()


const usuarios = [

    {
        email:'hola6@gmail.com',
        password:'1234'
    },
    {
        email:'hola5@gmail.com',
        password:'1234'
    },
    {
        email:'hola4@gmail.com',
        password:'1234'
    },
] 

export const LoginProvider = ({children}) => {

    const [user,setUser] = useState('email')
    


    const login = (values) => {

        const match = usuarios.find(user => (user.email === values.email))

       if (match) {
          if(match.password === values.pass){

            setUser ({
               user:match.email,
               logged:true,
               error:''

            })
          }else{

            alert("Password Incorrecto")
          }

       }else {

        alert("Usuario Incorrecto")
       }


    }

    const logout = () => {

       setUser({
          user:'',
          logged:false


       })


       
    }

    return(

        <LoginContext.Provider value={{user,login,logout}}>

            {children}


        </LoginContext.Provider>
    )
}

export const useLoginContext = () => {

    return useContext(LoginContext)
}