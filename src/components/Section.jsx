import ProducListing from "./ProductListing";
import './Section.css'
import Collection1 from "../assets/collection-1.png";
import Collection2 from "../assets/collection-2.png";
import Collection3 from "../assets/collection-3.png";

const Section = () => {
    return ( 
        <>

        <div className="section">
            <div className="collections">
                <img className="collection" src={Collection1} alt="Novo drop Supreme" />
                <img className="collection" src={Collection2} alt="Coleção Adidas" />
                <img className="collection" src={Collection3} alt="Novo Beat Bass" />
            </div>

            <div>
                <ProducListing/>
            </div>
        </div>
        </>
     );
}
 
export default Section;