import './Footer.css'

const Footer = () => {
    return ( 
<>
        <footer >
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
        
        </footer>
        </>

     );
}
 
export default Footer;