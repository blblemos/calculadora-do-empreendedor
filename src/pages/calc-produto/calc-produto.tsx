import {  useState } from 'react';

import Menu from '../../components/menu/menu';
import Calc from '../../components/calc/calc';
import AddInsumo from '../../components/add-insumo/add-insumo';
import AddDespesas from '../../components/add-despesas/add-despesas';
import AddMaodeObra from '../../components/add-maodeobra/add-maodeobra';


import '../calc-produto/calc-produto.css';
import '../../styles/form.css';

function Produto(){
    const [totalInsumo, setTotalInsumo] = useState<number>(0);
    const [totalDespesas, setTotalDespesas] = useState<number>(0);
    const [totalMaodeobra, setTotalMaodeobra] = useState<number>(0);
    const [rendimento, setRendimento] = useState<number>(0);
    const [margem, setMargem] = useState<number>(0);

    const setarTotalInsumo=(total:number) => {
        setTotalInsumo(total);
    }

    const setarTotalDespesas=(total:number) => {
        setTotalDespesas(total);
    }

    const setarTotalMaodeObra=(total:number) => {
        setTotalMaodeobra(total);
    }

    const calcValorMinimo = () => {
        return (totalInsumo + totalDespesas + totalMaodeobra)/rendimento;
    }

    const calcValorComMargem = () => {
        return ((calcValorMinimo())/(100-margem))*100;
    }

    const calcPontodeEquilibrio = () => {
        for (let i = 1; i<rendimento; i++) { 
            if ((calcValorComMargem() * i) >= (totalInsumo + totalDespesas + totalMaodeobra)) {
                return 'R$ '+(totalInsumo + totalDespesas + totalMaodeobra).toFixed(2)+' |  Preciso vender: '+ i;
            }
        }
        
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
                    <fieldset>
                        <AddMaodeObra 
                            onChangeTotal={setarTotalMaodeObra}
                        />
                    </fieldset>
                    <fieldset>
                        <div
                            className="row-form"
                        >
                            <div className="container-input container-input-w33">
                                <span>
                                    Rendimento do Produto
                                </span>
                                <input 
                                    type="text"
                                    className="input-control"
                                    placeholder='100' 
                                    onChange={e => setRendimento(parseFloat(e.target.value.replace(",", ".")))}
                                />
                            </div>
                            <div className="container-input container-input-w33">
                                <span>
                                    Margem de Lucro Desejada (%)
                                </span>
                                <input 
                                    type="text"
                                    className="input-control"
                                    placeholder='30%' 
                                    onChange={e => setMargem(parseFloat(e.target.value.replace(",", ".")))}
                                />
                            </div>
                            <div className="container-input container-input-w33">

                            </div>
                        </div>
                        <div
                            className="row-form"
                        >
                            <div className="container-input container-input-w33">
                                <div className="container-help">
                                    <div className="hover-info">
                                        <p></p>
                                    </div>
                                </div>
                                <span className="span-help">
                                    Valor Mínimo de Venda
                                </span>
                                <input 
                                    type="text"
                                    className="input-control input-disabled"
                                    disabled
                                    value={'R$ '+calcValorMinimo().toFixed(2)}
                                />
                            </div>
                            <div className="container-input container-input-w33">
                                <div className="container-help">
                                    <div className="hover-info">
                                        <p></p>
                                    </div>
                                </div>
                                <span className="span-help">
                                    Valor com Margem
                                </span>
                                <input 
                                    type="text"
                                    className="input-control input-disabled"
                                    disabled
                                    value={'R$ '+calcValorComMargem().toFixed(2)}
                                />
                            </div>
                            <div className="container-input container-input-w33">
                                <div className="container-help">
                                    <div className="hover-info">
                                        <p></p>
                                    </div>
                                </div>
                                <span className="span-help">
                                    Ponto de Equilíbrio
                                </span>
                                <input 
                                    type="text"
                                    className="input-control input-disabled"
                                    disabled 
                                    value={calcPontodeEquilibrio()}
                                />
                            </div>
                        </div>
                    </fieldset>

                </form>
            </div>
        </div>
        
    );
}

export default Produto;