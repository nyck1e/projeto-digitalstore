import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <>
            <h2>Página não encontrada</h2>
            <Link to={"/"}>Voltar para página principal</Link>
        </>
     );
}
 
export default NotFound;