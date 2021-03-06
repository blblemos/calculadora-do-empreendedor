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
    const [rendimento, setRendimento] = useState<number>(1);
    const [margem, setMargem] = useState<number>(0);
    const [custos, setCustos] = useState<number>(0); 

    const setarTotalInsumo=(total:number) => {
        setTotalInsumo(total);
        calcValorMinimo()
    }

    const setarTotalDespesas=(total:number) => {
        setTotalDespesas(total);
        calcValorMinimo()
    }

    const setarTotalMaodeObra=(total:number) => {
        setTotalMaodeobra(total);
        calcValorMinimo()
    }

    const setarRendimento = (total: number) => {
        if (isNaN(total)) {
            setRendimento(1);
            
        } else {
            setRendimento(total);
        }
        
    }

    const setarMargem = (total: number) => {
        if (isNaN(total)) {
            setMargem(0);
            
        } else {
            setMargem(total);
        }
        
    }

    const setarCustos = (total: number) => {
        if (isNaN(total)) {
            setCustos(0);
            
        } else {
            setCustos(total);
        }
        
    }

    const calcValorMinimo = () => {
        const valor = ((totalInsumo + totalDespesas + totalMaodeobra)/rendimento);
        if (isNaN(valor)) {
            return 0;
            
        } else {
            return valor;
        }
        
    }

    const calcValorComMargem = () => {
        const valor = ((calcValorMinimo())/(100-margem))*100;
        return valor;
    }

    const calcValorcomCustos = () => {
        var valor = ((totalInsumo + totalDespesas + totalMaodeobra)/(100-custos))*100;
        valor = valor / rendimento; 
        return valor;
    }

    const calcValorcomCustoseMargem = () => {
        var valor = (calcValorComMargem()/(100-custos))*100;
        return valor;
    }

    const calcPontodeEquilibrio = () => {
        for (let i = 1; i<=rendimento; i++) {
            if ((calcValorcomCustoseMargem() * i) > (calcValorcomCustos()*rendimento)) {
                return 'R$ '+(calcValorcomCustos()*rendimento).toFixed(2)+' |  Preciso vender: '+ i;
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
                                    onChange={e => setarRendimento(parseFloat(e.target.value.replace(",", ".")))}
                                    defaultValue={1}
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
                                    onChange={e => setarMargem(parseFloat(e.target.value.replace(",", ".")))}
                                />
                            </div>
                            <div className="container-input container-input-w33">
                                <div className="container-help">
                                    <div className="hover-info">
                                        <p>S??o aqueles custos que ser??o inseridos no valor final do produto. Ex: Impostos, taxas de cart??o de cr??dito, comiss??es e etc.</p>
                                    </div>
                                </div>
                                <span className="span-help">
                                    Custos que Incidem Sobre o Produto (%)
                                </span>
                                <input 
                                    type="text"
                                    className="input-control"
                                    placeholder='2%' 
                                    onChange={e => setarCustos(parseFloat(e.target.value.replace(",", ".")))}
                                />
                            </div>
                        </div>
                        <div
                            className="row-form"
                        >
                            <div className="container-input container-input-w33">
                                <div className="container-help">
                                    <div className="hover-info">
                                        <p>O valor m??nimo de venda ?? o custo total de produ????o do produto, voc?? nunca deve vender o seu produto abaixo dessa 
                                            valor, caso contr??rio, estar?? tendo preju??zo.</p>
                                    </div>
                                </div>
                                <span className="span-help">
                                    Valor M??nimo de Venda
                                </span>
                                <input 
                                    type="text"
                                    className="input-control input-disabled"
                                    disabled
                                    value={'R$ '+calcValorcomCustos().toFixed(2)}
                                />
                            </div>
                            <div className="container-input container-input-w33">
                                <div className="container-help">
                                    <div className="hover-info">
                                        <p>?? o valor considerando a margem de lucro desejada. Para calcularmos o valor do produto com a margem, utilizamos a f??rmula: 
                                            <br/><br/>
                                            <b>Pre??o de Venda = (Gastos vari??veis unit??rios (em R$) / (100% - Margem Desejada)(em %)) x 100</b>
                                            <br/><br/>
                                            Nem sempre a margem que voc?? quer ?? a que se pode praticar, pois dependendo do quanto de margem voc?? definir, o seu produto pode encarecer demais, afugentando os clientes.</p>
                                    </div>
                                </div>
                                <span className="span-help">
                                    Valor com Margem
                                </span>
                                <input 
                                    type="text"
                                    className="input-control input-disabled"
                                    disabled
                                    value={'R$ '+calcValorcomCustoseMargem().toFixed(2)}
                                />
                            </div>
                            <div className="container-input container-input-w33">
                                <div className="container-help">
                                    <div className="hover-info">
                                        <p>?? a quantidade do produto que voc?? precisa, ou o valor total que ?? necess??rio receber para cobrir os custos de produ????o.</p>
                                    </div>
                                </div>
                                <span className="span-help">
                                    Ponto de Equil??brio
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