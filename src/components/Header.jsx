import { NavLink } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.header `
    background-color: #FFFFFF;
    padding: 0 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: Arial, Helvetica, sans-serif;
    & h1{
        color: #C92071;
    }
    & nav ul{
        display: flex;
        gap: 36px;
        list-style: none;
        flex-flow: row wrap;
        & li a{
            color: #474747;
            font-size: 16px;
            text-decoration: none;
            &:hover, &.active {
                color: #C92071;
            }
        }
    }
`;

const Header = () => {
    return ( 
        <HeaderContainer>
            <h1>Digital Store</h1>
            <nav>
                <ul>
                    <li><NavLink to={"/"}>Home</NavLink></li>
                    <li><NavLink to={"/produtos"}>Produtos</NavLink></li>
                    <li><NavLink to={"*"}>Categorias</NavLink></li>
                    <li><NavLink to={"*"}>Meus Pedidos</NavLink></li>
                </ul>
            </nav>
        </HeaderContainer>
     );
}
 
export default Header;