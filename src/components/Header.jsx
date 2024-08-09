import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Logo from "./Logo";

import './Header.css'

import { InputText } from 'primereact/inputtext';
import { InputIcon } from 'primereact/inputicon';
        

const Header = () => {
    return (
        <>
        <header>
            <div>
                <Logo/>
            </div>
            
            <div className="search">
                <InputText 
                    type="text" 
                    className="p-inputtext-lg" 
                    placeholder="Pesquisar produtos..."
                />
                <InputIcon className="pi pi-search"> </InputIcon>
                
            </div>

            <div className="cadastro">
                <h4><a href="*">Cadastre-se</a></h4>
            </div>

            <div className="entrar">
                <button><a href="">Entrar</a></button>
            </div>

            <nav>
                <ul>
                    <li><NavLink to={"/"}>Home</NavLink></li>
                    <li><NavLink to={"/produtos"}>Produtos</NavLink></li>
                    <li><NavLink to={"*"}>Categorias</NavLink></li>
                    <li><NavLink to={"*"}>Meus Pedidos</NavLink></li>
                </ul>
            </nav>

        </header>
        </>
     );
}
 
export default Header;