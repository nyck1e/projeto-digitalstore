import { Link, NavLink } from "react-router-dom";
import tenis from '../assets/tenis.png'
import './Section.css';

const ProductCards = () => {
    return ( 
        <>
        
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
        </>
     );
}
 
export default ProductCards;