import { useState } from "react";

import {Despesas} from '../../types/Despesas';

import imgadd from '../../img/Add-Materia-Prima.svg';


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
                                <span>
                                    Despesa
                                </span>
                                <input 
                                    type="text"
                                    className="input-control"
                                    placeholder='Energia Elétrica'
                                    onChange={e => changeNome(despesa.id ,e.target.value)} 
                                />
                            </div>
                            <div className="container-input container-input-w21">
                                <span>
                                    Custo
                                </span>
                                <input 
                                    type="text"
                                    className="input-control"
                                    placeholder='20,00' 
                                    onChange={e => changeCusto(despesa.id, parseFloat(e.target.value.replace(",", ".")))}
                                />
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
            <div className="row-form">
                    <div className="container-calc-insumo">
                        <div className="container-result-insumo">
                            <p>Custo Total das Despesas </p>
                            <p>{'R$ '+somaDespesas.toFixed(3).replace(".",",")}</p>
                            <div className="clear"></div>
                        </div>
                        <img 
                            src={imgadd} 
                            alt="ADD"
                            onClick={addNewDespesa}  
                        />
                    </div>
                            
                </div>
        </div>
    );
}

export default AddDespesas;