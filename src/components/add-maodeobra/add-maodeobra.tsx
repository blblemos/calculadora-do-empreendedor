import { useState} from 'react';

import {MaodeObra} from '../../types/MaodeObra';

import imgadd from '../../img/Add-Materia-Prima.png';

type Props = {
    onChangeTotal: (total: number ) => void;
}

function AddMaodeObra ({onChangeTotal}: Props) {
    const [maodeobra,setMaodeobra] = useState<MaodeObra[]>([{
        id: 1,
        nome:'',
        valor:0,
        minutos_trabalhados: 0,
        total: 0.0
    }])
    const [totalMaodeobra,setTotalmaodeobra] = useState<number>(0.0);

    function addNewMaodeObra() {
        let newMaodeobra = [...maodeobra];
        newMaodeobra.push({
            id: Math.random() * 99,
            nome: '',
            valor: 0,
            minutos_trabalhados: 0,
            total:0.0, 

        });
        
        setMaodeobra(newMaodeobra);
    }

    function deleteMaodeObra(id: number) {
    let newMaodeobra = maodeobra.filter((maodeobra) => maodeobra.id !== id);

    setMaodeobra(newMaodeobra); 
    changeTotalp(id)
    }

    function changeTotal() {
        var somaTotal = 0; 
        maodeobra.map(maodeobra => {
            return somaTotal = somaTotal + maodeobra.total;
        });
        setTotalmaodeobra(somaTotal);
        onChangeTotal(somaTotal); 
    }

    function changeTotalp(id: number) {
        var somaTotal = 0; 
        maodeobra.map(maodeobra => {
            if (id !== maodeobra.id) {
                somaTotal = somaTotal + maodeobra.total;
            }
        });
        setTotalmaodeobra(somaTotal);
        onChangeTotal(somaTotal); 
    }

    function calcMaodeobra(id: number){
        let newMaodeobra = [...maodeobra];
        maodeobra.map(maodeobra => {
            for(let i in newMaodeobra) {
                if (id === newMaodeobra[i].id) {
                    newMaodeobra[i].total = (((maodeobra.valor/220)/60)*maodeobra.minutos_trabalhados);
                }
            }
        });
        setMaodeobra(newMaodeobra);
        changeTotal()
    }

    function changeNome(id: number ,nome: string) {
        let newMaodeobra = [...maodeobra];
        for(let i in newMaodeobra) {
            if(newMaodeobra[i].id === id) {
                newMaodeobra[i].nome = nome;
            }
        }
        setMaodeobra(newMaodeobra);
    }

    function changeMinutos(id: number ,minutos: number) {
        let newMaodeobra = [...maodeobra];
        for(let i in newMaodeobra) {
            if(newMaodeobra[i].id === id) {
                newMaodeobra[i].minutos_trabalhados = minutos;
            }
        }
        setMaodeobra(newMaodeobra);
        calcMaodeobra(id);
    }

    function changeValor(id: number ,valor: number) {
        let newMaodeobra = [...maodeobra];
        for(let i in newMaodeobra) {
            if(newMaodeobra[i].id === id) {
                newMaodeobra[i].valor = valor;
            }
        }
        setMaodeobra(newMaodeobra);
        calcMaodeobra(id);
    }
    return (
        <div>
            {
                maodeobra.map(maodeobra => {
                    return (
                        <div
                            key={maodeobra.id}
                            className="row-form"
                        >
                            <div className="container-input container-input-w30">
                                <div className="container-help">
                                    <div className="hover-info">
                                        <p>É o trabalho manual empregado na produção. Por que é importante incluir a mão de obra no produto? Pois "tempo é dinheiro", quando 
                                            não é considerado, você pode estar recebendo menos do que deveria, uma vez que dedicou esforço e tempo. Muitas vezes apenas aplicando 
                                            a margem o valor recebido é inferior ao "custo do seu tempo e esforço".</p>
                                    </div>
                                </div>
                                <span className="span-help">
                                    Mão de Obra 
                                </span>
                                <input 
                                    type="text" 
                                    className="input-control"
                                    placeholder='Salário'
                                    onChange={e => changeNome(maodeobra.id ,e.target.value)}
                                />
                            </div>
                            <div className="container-input container-input-w21">
                                <span>
                                    Minutos Trabalhados
                                </span>
                                <input 
                                    type="text"
                                    className="input-control"
                                    placeholder='120' 
                                    onChange={e => changeMinutos(maodeobra.id ,parseFloat(e.target.value.replace(",", ".")))}
                                />
                            </div>
                            <div className="container-input container-input-w21">
                                <span>
                                    Valor (Mensal)
                                </span>
                                <input 
                                    type="text"
                                    className="input-control input-init-35"
                                    placeholder='1039,00' 
                                    onChange={e => changeValor(maodeobra.id ,parseFloat(e.target.value.replace(",", ".")))}
                                />
                                <div className="input-txt-ini">
                                    <p>R$</p>
                                </div>
                            </div>
                            <div className="container-input container-input-w21">
                                <span>
                                    Total
                                </span>
                                <input 
                                    type="text" 
                                    className="input-control input-disabled" 
                                    disabled
                                    value={'R$ '+maodeobra.total.toFixed(3).replace(".", ",")}
                                />
                            </div>
                            <div 
                                 className='container-img-delete'
                                 onClick={e => deleteMaodeObra(maodeobra.id)  }
                            >
                            </div>
                        </div>
                    );
                })
            }
            <div className="row-form-total">
                <div className="container-calc">
                    <div className="container-result">
                        <p>Custo Total com Mão de Obra </p>
                        <p>{'R$ '+totalMaodeobra.toFixed(3).replace(".", ",")}</p>
                        <div className="clear"></div>
                    </div>
                   <div 
                        className="container-result-img"
                        onClick={addNewMaodeObra}
                   >
                    <img 
                        src={imgadd} 
                        alt="ADD" 
                        onClick={addNewMaodeObra} 
                    />
                   </div>
                </div>
                        
            </div>
        </div>
    );
}

export default AddMaodeObra;