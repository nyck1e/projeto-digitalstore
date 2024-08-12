import Stars from '../assets/Stars.png'
import Review from '../assets/Review.png'
import './BuyBox.css'

const BuyBox = () => {
    return ( 
        <>
            <div className='buybox'>

                <div className='unit-0'>
                    <h1>Tênis Nike Revolution 6 Next Nature Masculino</h1>
                    <h4>Casual | Nike | REF:38416711</h4>
                </div>

                <div className='review'>
                    <div><img src={Stars} alt="estrelas" /></div>
                    <div><img src={Review} alt="nota total" /></div>
                    <h4>(90 avaliações)</h4>
                </div>

                <div className='prices'>
                    <h4 className='moeda'>R$</h4>
                    <h4 className="discounted-price-bb">219,00</h4>
                    <h6 className="original-price-bb">219,00</h6>
                </div>

                <div className='unit-1'>
                    <h4>Descrição do produto</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                </div>

                <div className='unit-2'>
                    <h4>Tamanho</h4>
                    <div className='box-bb'>
                            <div className='sizebox'><h3>39</h3></div>
                            <div className='sizebox'><h3>40</h3></div>
                            <div className='sizebox'><h3>41</h3></div>
                            <div className='sizebox'><h3>42</h3></div>
                            <div className='sizebox'><h3>43</h3></div>
                        </div>
                </div>

                <div className='unit-3'>
                    <h4>Tamanho</h4>
                    <div className='circles-bb'>
                        <div className='bluecircle'></div>
                        <div className='redcircle'></div>
                        <div className='blackcircle'></div>
                        <div className='purplecircle'></div>
                    </div>
                </div>

                <div className='comprar'>
                    <button>COMPRAR</button>
                </div>

            </div>
        </>
     );
}
 
export default BuyBox;