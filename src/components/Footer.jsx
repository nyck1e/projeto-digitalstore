import './Footer.css'

const Footer = () => {
    return ( 
        <>
        <footer>

            <div>
                <h1>Logo</h1>
            </div>

            <div>
                <p>lorem</p>
            </div>

            <div>
                <h2>icones redes sociais</h2>
            </div>
            
            <div className='containers'>

                <div className='box'>
                    <h2 className='title'>Titulo</h2>
                    <div className='informations'>
                        <h3>info</h3>
                        <h3>info</h3>
                        <h3>info</h3>
                        <h3>info</h3>
                        <h3>info</h3>
                    </div>
                </div>

                <div className='box'>
                    <h2 className='title'>Titulo</h2>
                    <div className='informations'>
                        <h3>info</h3>
                        <h3>info</h3>
                        <h3>info</h3>
                        <h3>info</h3>
                        <h3>info</h3>
                    </div>
                </div>

                <div className='box'>
                    <h2 className='title'>Titulo</h2>
                    <div className='informations'>
                        <h3>info</h3>
                        <h3>info</h3>
                        <h3>info</h3>
                        <h3>info</h3>
                        <h3>info</h3>
                    </div>
                </div>

            </div>
            
            <div>
                <hr />
                <p>© {new Date().getFullYear()} Digital Store</p>
            </div>
        </footer>
        </>

     );
}
 
export default Footer;