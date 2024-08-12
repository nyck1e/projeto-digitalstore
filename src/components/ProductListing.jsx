import { Link } from "react-router-dom";
import './Section.css'
import ProductCards from "./ProductCard";

const ProducListing = () => {
    return ( 
        <>
            <div className="informations">
                <h4>Resultados para "Tênis" - 12 produtos</h4>

                <h>Ordernar por: Mais relevantes</h>
            </div>

            <div className="section-productlisting">
                <ProductCards/>
            </div>
            
        </>
     );
}
 
export default ProducListing;