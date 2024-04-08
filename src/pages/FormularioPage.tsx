import { useState } from "react"


const FormularioPage = () =>{

    const [token,setToken] = useState("")

    const handleChange = ({target}:React.ChangeEvent<HTMLInputElement>) =>{
        
        const {value} = target
        setToken(value)
    }   

    return(
        <>
            <h1>Formulario</h1>
            <form method="post" action="https://webpay3gint.transbank.cl/webpayserver/initTransaction">
                <input type="text" name="token" value={token} onChange={(e)=>handleChange(e)} />
                <input type="submit" value="Ir a pagar" />
            </form>
        </>
    )

}

export default FormularioPage