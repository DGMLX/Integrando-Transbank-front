import axios from "axios"
import {useNavigate} from "react-router-dom"

const HomePage = () =>{
   
    const navigate = useNavigate();

        const accionPagar = async() => {
            const respuesta = await axios.post('http://localhost:3001/pago') 
            const {url,token} = respuesta.data
            console.log(url)
            console.log(token)
            navigate("/formulario")
        }

        return (
            <>
            <button onClick={accionPagar}>Pagar</button>

            
            </>
        )
        
}

export default HomePage;