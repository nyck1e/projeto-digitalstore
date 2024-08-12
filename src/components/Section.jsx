import ProducListing from "./ProductListing";
import './Section.css'
import Collection1 from "../assets/collection-1.png";
import Collection2 from "../assets/collection-2.png";
import Collection3 from "../assets/collection-3.png";
import shirt from "../assets/shirt.png";
import pants from "../assets/pants.png";
import headphone from "../assets/headphone.png";
import shoes from "../assets/shoes.png";
import Gallery from "./Gallery";
import ProductCards from "./ProductCard";
import Oferta from '../assets/oferta.png'

import React, { useState } from 'react';

const Section = () => {

    return ( 
        <>

        <Gallery/>
       
        <div className="section">

            <div className="text">
                <h4>Coleções em destaque</h4>

            </div>

            <div className="collections">
                <img className="collection" src={Collection1} alt="Novo drop Supreme" />
                <img className="collection" src={Collection2} alt="Coleção Adidas" />
                <img className="collection" src={Collection3} alt="Novo Beat Bass" />
            </div>

            <div className="section-featured">
                <h4>Coleções em destaque</h4>

                <div className="featured-collections">

                    <div className="featured-card">
                        <div className="circle">
                            <img className="featured-icons" src={shirt} alt="" />
                        </div>
                        <h5 className="card-name">Camisetas</h5>
                    </div>
                    
                    <div className="featured-card">
                        <div className="circle">
                            <img className="featured-icons" src={pants} alt="calças" />
                        </div>
                        <h5 className="card-name">Calças</h5>
                    </div>
                    
                    <div className="featured-card">
                        <div className="circle">
                            <img className="featured-icons" src={pants} alt="bones" />
                            </div>
                        <h5 className="card-name">Bonés</h5>
                    </div>
                    
                    <div className="featured-card">
                        <div className="circle">
                            <img className="featured-icons" src={headphone} alt="headphone" />
                        </div>
                        <h5 className="card-name">Headphones</h5>
                    </div>

                    <div className="featured-card">
                        <div className="circle">
                            <img className="featured-icons" src={shoes} alt="tenis" />
                        </div>
                        <h5 className="card-name">Tênis</h5>
                    </div>
                </div>
            </div>

            <div className="text">
                <h4>Produtos em alta</h4>

                <h5> Ver todos  →</h5>
            </div>

            <div>
                <ProductCards/>
            </div>

            
        </div>

        <div className="oferta-bg">
            <img src={Oferta} alt={Oferta} />
        </div>


        </>
     );
}
 
export default Section;