import './Footer.css'
import './Header.css'
import Facebook from './icons/Facebook';
import Instagram from './icons/Instagram';
import Twitter from './icons/Twitter';
import LogoF from './LogoF';

const Footer = () => {
    return ( 
        <>

        <footer>
        <div className='sectionf'>
                <div className='containers'>
                    <div className='box'>
                        <div>
                            <LogoF/>
                        </div>
                        <h4 className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</h4>
                        <div className='icons'>
                            <Facebook/>
                            <Instagram/>
                            <Twitter/>
                        </div>
                    </div>
            
                    <div className='box'>
                        <h3 className='title'>Informação</h3>
                        <div className='informations'>
                            <h4>Sobre Drip Store</h4>
                            <h4>Segurança</h4>
                            <h4>Wishlist</h4>
                            <h4>Blog</h4>
                            <h4>Trabalhe Conosco</h4>
                            <h4>Meus Pedidos</h4>
                        </div>
                    </div>

                    <div className='box'>
                        <h3 className='title'>Categorias</h3>
                        <div className='informations'>
                            <h4>Camisetas</h4>
                            <h4>Calças</h4>
                            <h4>Bonés</h4>
                            <h4>Headphones</h4>
                            <h4>Tênis</h4>
                        </div>
                    </div>

                    <div className='box'>
                        <h3 className='title'>Contato</h3>
                        <div className='informations'>
                            <h4>Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161</h4>
                            <h4>(85) 3051-3411</h4>
                        
                        </div>
                    </div>

                </div>
                <hr />
                <div className='below'>
                    <div className='copyright'>
                        <p>© {new Date().getFullYear()} Digital Store</p>
                    </div>
                </div>
            </div>
        </footer>
        </>

     );
}
 
export default Footer;