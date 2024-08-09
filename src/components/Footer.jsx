import styled from "styled-components";

const FooterContainer = styled.footer `
    max-width: 1170px;
    margin: auto;
    background-color: #1F1F1F;
    padding: 70px 0;
    
        & h4{
        font-size: 18px;
        color: #FFFFFF;
        text-transform: capitalize;
        margin-bottom: 30px;
        }
        & ul{
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        width: 25%;
        padding: 0 15px;
        
        }

        & li{
        font-size: 15px;
        color: #FFFFFF;
        }

`;

const Footer = () => {
    return ( 

        <FooterContainer>
            <h1>rodapé</h1>

            <div classname="container">
                <div classname="linhas">
                    <div classname="coluna">
                        <div classname="logo">
                            <a href="/">
                                <img src="/src/assets/logofooter.svg" classname="logofooter" alt="Digital Store Logo" />
                            </a>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore.
                            </p>
                    </div>
                    <div classname="coluna">
                        <h4>Informação</h4>
                        <ul>
                            <li>Sobre Drip Store</li>
                            <li>Segurança</li>
                            <li>Wishlist</li>
                            <li>Blog</li>
                            <li>Trabalho Conosco</li>
                            <li>Meus Pedidos</li>
                        </ul>
                    </div>
                    <div classname="coluna">
                        <h4>Categorias</h4>
                        <ul>
                            <li>Camisetas</li>
                            <li>Calças</li>
                            <li>Bonés</li>
                            <li>Headphones</li>
                            <li>Tênis</li>
                        </ul>
                    </div>
                    <div classname="coluna">
                        <h4>Contato</h4>
                        <ul>
                            <li>Av. Santos Dumont, 1510 - 1 andar
                            Aldeota, Fortaleza - CE, 60150-161</li>
                            <li>(85) 3051-3411</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div classname="retangulo">
                <p>© 2024 Digital College</p>
            </div>

        </FooterContainer>

     );
}
 
export default Footer;