import './FilterGroup.css'

const FilterGroup = () => {
    return ( 
        <>
        <div className="filter-container">

            <h4>Filtrar por</h4>
            <hr className="separator"/>

                <div className="filter-options">
                    <h5 className="section-title">Marca</h5>
                    
                    <div className="filter-item">
                    <input type='checkbox' id="adidas" value="marca"/>
                    <label className="label" htmlFor="adidas">Adidas</label>
                    </div>
                    
                    <div className="filter-item">
                    <input type='checkbox' id="balenciaga" value="marca" />
                    <label className="label" htmlFor="calenciaga">Balenciaga</label>
                    </div>

                    <div className="filter-item">
                    <input type='checkbox' id="k-swiss" value="marca" />
                    <label className="label" htmlFor="k-swiss">K-Swiss</label>
                    </div>

                    <div className="filter-item">
                    <input type='checkbox' id="nike" value="marca" />
                    <label className="label" htmlFor="nike">Nike</label>
                    </div>

                    <div className="filter-item">
                    <input type='checkbox' id="puma" value="marca" />
                    <label className="label" htmlFor="puma">Puma</label>
                    </div>

                    <h5 className="section-title">Categoria</h5>
                    
                    <div className="filter-item">
                    <input type='checkbox' id="esporte" />
                    <label className="label" htmlFor="esporte">Esporte e Lazer</label>
                    </div>

                    <div className="filter-item">
                    <input type='checkbox' id="casual" />
                    <label className="label" htmlFor="casual">Casual</label>
                    </div>

                    <div className="filter-item">
                    <input type='checkbox' id="ultilitario" />
                    <label className="label" htmlFor="ultilitario">Utilitário</label>
                    </div>

                    <div className="filter-item">
                    <input type='checkbox' id="corrida" />
                    <label className="label" htmlFor="corrida">Corrida</label>
                    </div>

                    <h5 className="section-title">Gênero</h5>
                    
                    <div className="filter-item">
                    <input type='checkbox' id="masculino" />
                    <label className="label" htmlFor="masculino">Masculino</label>
                    </div>

                    <div className="filter-item">
                    <input type='checkbox' id="feminino" />
                    <label className="label" htmlFor="feminino">Feminino</label>
                    </div>

                    <div className="filter-item">
                    <input type='checkbox' id="unisex" />
                    <label className="label" htmlFor="unisex">Unisex</label>
                    </div>

                    <h5 className="section-title">Estado</h5>
                    
                    <div className="filter-item">
                    <input type='radio' id="novo" name="estado"/>
                    <label className="label" htmlFor="novo">Novo</label>
                    </div>

                    <div className="filter-item">
                    <input type='radio' id="usado" name="estado" />
                    <label className="label" htmlFor="usado">Usado</label>
                    </div>
                </div>
        </div>
        </>
     );
}
 
export default FilterGroup;