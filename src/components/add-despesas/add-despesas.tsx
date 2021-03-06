import { useState } from "react";

import {Despesas} from '../../types/Despesas';

import imgadd from '../../img/Add-Materia-Prima.png';


type Props = {
    onChangeTotal: (total: number ) => void;
}

function AddDespesas ({ onChangeTotal}: Props) {
    const [despesas,setDespesas] = useState<Despesas[]>([{
        id: 1,
        nome: '',
        valor: 0.0
    }]);
    const [somaDespesas,setSomaDespesas] = useState<number>(0.0);

    function addNewDespesa(){
        let newDespesa = [...despesas];
        newDespesa.push({
            id: Math.random() * 99,
            nome: '',
            valor: 0.0,
        });
        
        setDespesas(newDespesa);
    }

    function changeTotalp(id: number) {
        var somaTotal = 0; 
        despesas.map(despesa => {
            if (id !== despesa.id) {
                somaTotal = somaTotal + despesa.valor;
            }
        });
        setSomaDespesas(somaTotal);
        onChangeTotal(somaTotal); 
    }

    function changeTotal() {
        var somaTotal = 0; 
        despesas.map(despesa => {
            return somaTotal = somaTotal + despesa.valor;
        });
        setSomaDespesas(somaTotal);
        onChangeTotal(somaTotal); 
    }

    function deleteDespesa(id: number){
        let newDespesa = despesas.filter((despesa) => despesa.id !== id);

        setDespesas(newDespesa); 
        changeTotalp(id)
    }

    function changeNome(id: number ,nome: string){
        let newDespesa = [...despesas];
        for(let i in newDespesa) {
            if(newDespesa[i].id === id) {
                newDespesa[i].nome = nome;
            }
        }
        setDespesas(newDespesa);
    }

    function changeCusto(id: number ,custo: number) {
        let newDespesa = [...despesas];
        for(let i in newDespesa) {
            if(newDespesa[i].id === id) {
                newDespesa[i].valor = custo;
            }
        }
        setDespesas(newDespesa);
        changeTotal();
    }



    return (
        <div>
            {
                despesas.map(despesa => {
                    return (
                        <div
                            key={despesa.id}
                            className="row-form"
                        >
                            <div className="container-input container-input-w76">
                                <div className="container-help">
                                    <div className="hover-info">
                                        <p>Tamb??m chamados ???custos indiretos de fabrica????o??? ou ???gastos gerais de fabrica????o???, compreendem aqueles incorridos no processo de fabrica????o, mas n??o identificados diretamente a cada unidade produzida. Como exemplos: m??o-de-obra indireta, energia, deprecia????o e manuten????o dos edif??cios, instala????es, m??quinas e equipamentos, do custo da dire????o e administra????o da f??brica e outros vinculados ao processo produtivo.</p>
                                    </div>
                                </div>
                                <span className="span-help">
                                    Despesa
                                </span>
                                <input 
                                    type="text"
                                    className="input-control"
                                    placeholder='Energia El??trica'
                                    onChange={e => changeNome(despesa.id ,e.target.value)} 
                                />
                            </div>
                            <div className="container-input container-input-w21">
                                <span>
                                    Custo
                                </span>
                                <input 
                                    type="text"
                                    className="input-control input-init-35"
                                    placeholder='20,00' 
                                    onChange={e => changeCusto(despesa.id, parseFloat(e.target.value.replace(",", ".")))}
                                />
                                <div className="input-txt-ini">
                                    <p>R$</p>
                                </div>
                            </div>
                            <div 
                                 className='container-img-delete'
                                 onClick={e => deleteDespesa(despesa.id)  } 
                            >
                            </div>
                        </div>
                        
                    );
                })
            }
            <div className="row-form-total">
                    <div className="container-calc">
                        <div className="container-result">
                            <p>Custo Total das Despesas </p>
                            <p>{'R$ '+somaDespesas.toFixed(3).replace(".",",")}</p>
                            <div className="clear"></div>
                        </div>
                        <div
                            className="container-result-img"
                            onClick={addNewDespesa}
                        >
                            <img 
                                src={imgadd} 
                                alt="ADD"
                                onClick={addNewDespesa}  
                            />
                        </div>
                    </div>
                            
                </div>
        </div>
    );
}

export default AddDespesas;