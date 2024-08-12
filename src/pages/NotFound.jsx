import { Link } from "react-router-dom";
import Erro from "../assets/errorimage.jpg";
import './Error404.css'

const NotFound = () => {
    return ( 
        <>
            <div className="section">

                <div className="img-size">
                    <img src={Erro} alt="imagem erro 404" />
                </div>
                <div className="warning">
                    <h1>Página não encontrada</h1>
                    <Link to={"/"}><button>Voltar para página principal</button></Link>
                </div>
                
            </div>
            
        </>
     );
}
 
export default NotFound;