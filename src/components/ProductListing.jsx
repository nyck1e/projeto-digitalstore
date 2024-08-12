import { Link } from "react-router-dom";
import './Section.css'
import ProductCards from "./ProductCard";
import tenis from '../assets/tenis.png'
import FilterGroup from "./FilterGroup";

import React, { useState } from 'react';


const ProducListing = () => {


    const [order, setOrder] = useState('low-to-high');

    const handleOrderChange = (e) => {
      setOrder(e.target.value);
    };



    return ( 
        <>
            <div className="background-productlisting">
                <div className="org">
                    <div className="filtro">
                        <h4>Resultados para "Tênis" - 15 produtos</h4>

                        
                <div className="product-page">
                    <div className="sidebar">
                        <div className="order-by-container">
                        <label htmlFor="order-by-select" className="order-by-label">Ordenar por</label>
                        <select 
                            id="order-by-select" 
                            className="order-by-select" 
                            onChange={handleOrderChange}
                        >
                            <option value="low-to-high">Menor preço</option>
                            <option value="high-to-low">Maior preço</option>
                        </select>
                        </div>
                        {}
                    </div>
                    <div className="product-list">
                        {}
                    </div>
                    </div>


                    </div>

                    <div className="sections">

                        <div className="section-filtergroup">
                            <FilterGroup/>
                        </div>

                        <div className="section-productlisting">
                            <div className="productlisting-card">
                            <a><Link to={"/produto"}>
                                <img className="productlisting-image" src={tenis} alt="Tênis" />
                                <h6 className="productlisting-category">Tênis</h6>
                                <h4 className="productlisting-name">K-Swiss V8 - Masculino</h4>
                                <div className="price-container-productlisting">
                                    <h4 className="original-price-productlisting">R$200</h4>
                                    <h4 className="discounted-price-productlisting">$100</h4>
                                </div>
                            </Link></a>
                            </div>

                            <div className="productlisting-card">
                            <a><Link to={"/produto"}>
                                <img className="productlisting-image" src={tenis} alt="Tênis" />
                                <h6 className="productlisting-category">Tênis</h6>
                                <h4 className="productlisting-name">K-Swiss V8 - Masculino</h4>
                                <div className="price-container-productlisting">
                                    <h4 className="original-price-productlisting">R$200</h4>
                                    <h4 className="discounted-price-productlisting">$100</h4>
                                </div>
                            </Link></a>
                            </div>

                            <div className="productlisting-card">
                            <a><Link to={"/produto"}>
                                <img className="productlisting-image" src={tenis} alt="Tênis" />
                                <h6 className="productlisting-category">Tênis</h6>
                                <h4 className="productlisting-name">K-Swiss V8 - Masculino</h4>
                                <div className="price-container-productlisting">
                                    <h4 className="original-price-productlisting">R$200</h4>
                                    <h4 className="discounted-price-productlisting">$100</h4>
                                </div>
                            </Link></a>
                            </div>

                            <div className="productlisting-card">
                            <a><Link to={"/produto"}>
                                <img className="productlisting-image" src={tenis} alt="Tênis" />
                                <h6 className="productlisting-category">Tênis</h6>
                                <h4 className="productlisting-name">K-Swiss V8 - Masculino</h4>
                                <div className="price-container-productlisting">
                                    <h4 className="original-price-productlisting">R$200</h4>
                                    <h4 className="discounted-price-productlisting">$100</h4>
                                </div>
                            </Link></a>
                            </div>

                            <div className="productlisting-card">
                            <a><Link to={"/produto"}>
                                <img className="productlisting-image" src={tenis} alt="Tênis" />
                                <h6 className="productlisting-category">Tênis</h6>
                                <h4 className="productlisting-name">K-Swiss V8 - Masculino</h4>
                                <div className="price-container-productlisting">
                                    <h4 className="original-price-productlisting">R$200</h4>
                                    <h4 className="discounted-price-productlisting">$100</h4>
                                </div>
                            </Link></a>
                            </div>

                            <div className="productlisting-card">
                            <a><Link to={"/produto"}>
                                <img className="productlisting-image" src={tenis} alt="Tênis" />
                                <h6 className="productlisting-category">Tênis</h6>
                                <h4 className="productlisting-name">K-Swiss V8 - Masculino</h4>
                                <div className="price-container-productlisting">
                                    <h4 className="original-price-productlisting">R$200</h4>
                                    <h4 className="discounted-price-productlisting">$100</h4>
                                </div>
                            </Link></a>
                            </div>

                            <div className="productlisting-card">
                            <a><Link to={"/produto"}>
                                <img className="productlisting-image" src={tenis} alt="Tênis" />
                                <h6 className="productlisting-category">Tênis</h6>
                                <h4 className="productlisting-name">K-Swiss V8 - Masculino</h4>
                                <div className="price-container-productlisting">
                                    <h4 className="original-price-productlisting">R$200</h4>
                                    <h4 className="discounted-price-productlisting">$100</h4>
                                </div>
                            </Link></a>
                            </div>

                            <div className="productlisting-card">
                            <a><Link to={"/produto"}>
                                <img className="productlisting-image" src={tenis} alt="Tênis" />
                                <h6 className="productlisting-category">Tênis</h6>
                                <h4 className="productlisting-name">K-Swiss V8 - Masculino</h4>
                                <div className="price-container-productlisting">
                                    <h4 className="original-price-productlisting">R$200</h4>
                                    <h4 className="discounted-price-productlisting">$100</h4>
                                </div>
                            </Link></a>
                            </div>

                            <div className="productlisting-card">
                            <a><Link to={"/produto"}>
                                <img className="productlisting-image" src={tenis} alt="Tênis" />
                                <h6 className="productlisting-category">Tênis</h6>
                                <h4 className="productlisting-name">K-Swiss V8 - Masculino</h4>
                                <div className="price-container-productlisting">
                                    <h4 className="original-price-productlisting">R$200</h4>
                                    <h4 className="discounted-price-productlisting">$100</h4>
                                </div>
                            </Link></a>
                            </div>

                            <div className="productlisting-card">
                            <a><Link to={"/produto"}>
                                <img className="productlisting-image" src={tenis} alt="Tênis" />
                                <h6 className="productlisting-category">Tênis</h6>
                                <h4 className="productlisting-name">K-Swiss V8 - Masculino</h4>
                                <div className="price-container-productlisting">
                                    <h4 className="original-price-productlisting">R$200</h4>
                                    <h4 className="discounted-price-productlisting">$100</h4>
                                </div>
                            </Link></a>
                            </div>

                            <div className="productlisting-card">
                            <a><Link to={"/produto"}>
                                <img className="productlisting-image" src={tenis} alt="Tênis" />
                                <h6 className="productlisting-category">Tênis</h6>
                                <h4 className="productlisting-name">K-Swiss V8 - Masculino</h4>
                                <div className="price-container-productlisting">
                                    <h4 className="original-price-productlisting">R$200</h4>
                                    <h4 className="discounted-price-productlisting">$100</h4>
                                </div>
                            </Link></a>
                            </div>

                            <div className="productlisting-card">
                            <a><Link to={"/produto"}>
                                <img className="productlisting-image" src={tenis} alt="Tênis" />
                                <h6 className="productlisting-category">Tênis</h6>
                                <h4 className="productlisting-name">K-Swiss V8 - Masculino</h4>
                                <div className="price-container-productlisting">
                                    <h4 className="original-price-productlisting">R$200</h4>
                                    <h4 className="discounted-price-productlisting">$100</h4>
                                </div>
                            </Link></a>
                            </div>

                            <div className="productlisting-card">
                            <a><Link to={"/produto"}>
                                <img className="productlisting-image" src={tenis} alt="Tênis" />
                                <h6 className="productlisting-category">Tênis</h6>
                                <h4 className="productlisting-name">K-Swiss V8 - Masculino</h4>
                                <div className="price-container-productlisting">
                                    <h4 className="original-price-productlisting">R$200</h4>
                                    <h4 className="discounted-price-productlisting">$100</h4>
                                </div>
                            </Link></a>
                            </div>

                            <div className="productlisting-card">
                            <a><Link to={"/produto"}>
                                <img className="productlisting-image" src={tenis} alt="Tênis" />
                                <h6 className="productlisting-category">Tênis</h6>
                                <h4 className="productlisting-name">K-Swiss V8 - Masculino</h4>
                                <div className="price-container-productlisting">
                                    <h4 className="original-price-productlisting">R$200</h4>
                                    <h4 className="discounted-price-productlisting">$100</h4>
                                </div>
                            </Link></a>
                            </div>

                            <div className="productlisting-card">
                            <a><Link to={"/produto"}>
                                <img className="productlisting-image" src={tenis} alt="Tênis" />
                                <h6 className="productlisting-category">Tênis</h6>
                                <h4 className="productlisting-name">K-Swiss V8 - Masculino</h4>
                                <div className="price-container-productlisting">
                                    <h4 className="original-price-productlisting">R$200</h4>
                                    <h4 className="discounted-price-productlisting">$100</h4>
                                </div>
                            </Link></a>
                            </div>


                        </div>
                    </div>

                </div>

            </div>
        </>
     );
}
 
export default ProducListing;