import {Routes,Route} from "react-router-dom"
import HomePage from "../pages/HomePage";
import FormularioPage from "../pages/FormularioPage";

const AppRouter = () =>{
    return(
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/formulario" element={<FormularioPage/>} />
        </Routes>
    )
}

export default AppRouter;