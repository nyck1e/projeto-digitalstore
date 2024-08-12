import GalleryView from "./GalleryView";
import './ProductDetails.css'
import tenis from '../assets/tenis.png'
import { Link, NavLink } from "react-router-dom";
import BuyBox from "./BuyBox";

const ProductDetails = () => {
    return ( 
        <>
        <div className="viewpage-bg">

            <div className="minitext">
                <h5>Home / Produtos / Tênis / Nike / Tênis Nike Revolution 6 Next Nature Masculino</h5>
            </div>
        
            <div className="content">

                <div className="slides-size">
                    <GalleryView/>
                </div>

                <div className="buybox-size">
                    <BuyBox/>
                </div>

            </div>

            
            <div className="text-viewpage">
                <h4>Produtos em alta</h4>
                
                <h5> Ver todos  →</h5>
            </div>

            <div className="allcards">

                <div className="product-card">
                <a><Link to={"/produto"}>
                    <img className="product-image" src={tenis} alt="Tênis" />
                    <h6 className="product-category">Tênis</h6>
                    <h4 className="product-name">K-Swiss V8 - Masculino</h4>
                    <div className="price-container">
                        <h4 className="original-price">R$200</h4>
                        <h4 className="discounted-price">$100</h4>
                    </div>
                </Link></a>
                </div>

                <div className="product-card">
                <a><Link to={"/produto"}>
                    <img className="product-image" src={tenis} alt="Tênis" />
                    <h6 className="product-category">Tênis</h6>
                    <h4 className="product-name">K-Swiss V8 - Masculino</h4>
                    <div className="price-container">
                        <h4 className="original-price">R$200</h4>
                        <h4 className="discounted-price">$100</h4>
                    </div>
                </Link></a>
                </div>

                <div className="product-card">
                <a><Link to={"/produto"}>
                    <img className="product-image" src={tenis} alt="Tênis" />
                    <h6 className="product-category">Tênis</h6>
                    <h4 className="product-name">K-Swiss V8 - Masculino</h4>
                    <div className="price-container">
                        <h4 className="original-price">R$200</h4>
                        <h4 className="discounted-price">$100</h4>
                    </div>
                </Link></a>
                </div>

                <div className="product-card">
                <a><Link to={"/produto"}>
                    <img className="product-image" src={tenis} alt="Tênis" />
                    <h6 className="product-category">Tênis</h6>
                    <h4 className="product-name">K-Swiss V8 - Masculino</h4>
                    <div className="price-container">
                        <h4 className="original-price">R$200</h4>
                        <h4 className="discounted-price">$100</h4>
                    </div>
                </Link></a>
                </div>


            </div>
            
        </div>
        </>
     );
}
 
export default ProductDetails;