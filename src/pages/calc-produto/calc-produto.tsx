import {  useState } from 'react';

import Menu from '../../components/menu/menu';
import Calc from '../../components/calc/calc';
import AddInsumo from '../../components/add-insumo/add-insumo';
import AddDespesas from '../../components/add-despesas/add-despesas';


import '../calc-produto/calc-produto.css';
import '../../styles/form.css';

function Produto(){
    const [totalInsumo, setTotalInsumo] = useState<number>(0.0);
    const [totalDespesas, setTotalDespesas] = useState<number>(0.0);

    const setarTotalInsumo=(total:number) => {
        setTotalInsumo(total);
    }

    const setarTotalDespesas=(total:number) => {
        setTotalDespesas(total);
    }

    return (
        <div>
            <Menu/>
            <div className="container-div-calc">
                <Calc/>
                <h1>Ficha do produto</h1>
                <form className="container-form">
                    <fieldset>
                        <AddInsumo 
                            onChangeTotal={setarTotalInsumo}
                        />
                    </fieldset>
                    <fieldset>
                        <AddDespesas 
                            onChangeTotal={setarTotalDespesas}
                        />
                    </fieldset>

                </form>
            </div>
        </div>
        
    );
}

export default Produto;