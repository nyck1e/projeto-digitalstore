import { Link } from "react-router-dom";

const ProducListing = () => {
    return ( 
        <>
        <h1>PRODUTOS</h1>
        <ul>
            <li><Link to={"/produto/1/Camiseta"}>Camiseta</Link></li>
            <li><Link to={"/produto/2/Calça"}>Calça</Link></li>
            <li><Link to={"/produto/3/Boné"}>Boné</Link></li>
            <li><Link to={"/produto/4/Tênis"}>Tênis</Link></li>
            <li><Link to={"/produto/5/Heaphones"}>Headphones</Link></li>
        </ul>
        </>
     );
}
 
export default ProducListing;