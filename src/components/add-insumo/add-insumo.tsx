import { useState } from 'react';

import {Insumo} from '../../types/Insumo';

import imgadd from '../../img/Add-Materia-Prima.svg';

import  '../add-insumo/add-insumo.css';

type Props = {
    onChangeTotal: (total: number ) => void;
}

function AddInsumo ({ onChangeTotal}: Props) {
    const [insumo, setInsumo] = useState<Insumo[]>([
        {
            id: 1,
            nome: '',
            quantidade_utilizada: 0, 
            valor_unitário: 0, 
            total:0.0, 
            div_cust_unitario: false, 
            valor_do_produto: 0, 
            quantidade_do_produto:0
        }
        ]);
    const [totalInsumo,setTotalInsumo] = useState<number>(0.0);

    function changeNome(id: number ,nome: string) {
        let newInsumo = [...insumo];
        for(let i in newInsumo) {
            if(newInsumo[i].id === id) {
                newInsumo[i].nome = nome;
            }
        }
        setInsumo(newInsumo);
    }

    function changeQuantUtilizada(id: number ,quantidade: number) {
        let newInsumo = [...insumo];
        for(let i in newInsumo) {
            if(newInsumo[i].id === id) {
                newInsumo[i].quantidade_utilizada = quantidade;
                newInsumo[i].total = (newInsumo[i].quantidade_utilizada * newInsumo[i].valor_unitário);
            }
        }
        setInsumo(newInsumo);
        changeTotal();
    }

    function changeCustoUnitario(id: number ,valor: number) {
        let newInsumo = [...insumo];
        for(let i in newInsumo) {
            if(newInsumo[i].id === id) {
                newInsumo[i].valor_unitário = valor;
                newInsumo[i].total = (newInsumo[i].quantidade_utilizada * newInsumo[i].valor_unitário);
            }
        }
        setInsumo(newInsumo);
        changeTotal();
    }

    function changeTotal() {
        var somaTotal = 0; 
        insumo.map(insumo => {
            return somaTotal = somaTotal + insumo.total;
        });
        setTotalInsumo(somaTotal);
        onChangeTotal(somaTotal); 
    }

    function changeTotalp(id: number) {
        var somaTotal = 0; 
        insumo.map(insumo => {
            if (id !== insumo.id) {
                somaTotal = somaTotal + insumo.total;
            }
        });
        setTotalInsumo(somaTotal);
        onChangeTotal(somaTotal); 
    }

    function addNewInsumo() {
        let newInsumo = [...insumo];
        newInsumo.push({
            id: Math.random() * 99,
            nome: '',
            quantidade_utilizada: 0,
            valor_unitário: 0,
            total:0.0, 
            div_cust_unitario: false,
            quantidade_do_produto: 0,
            valor_do_produto: 0,
        });
        
        setInsumo(newInsumo);
      }

    function deleteInsumo(id: number) {
        let newInsumo = insumo.filter((insumo) => insumo.id !== id);

        setInsumo(newInsumo); 
        changeTotalp(id)
      }

      function changeDivUnitario(id: number ,status: boolean) {
        let newInsumo = [...insumo];
        for(let i in newInsumo) {
            if(newInsumo[i].id === id) {
                newInsumo[i].div_cust_unitario = status;
            }
        }
        setInsumo(newInsumo);
        changeTotal();
      }

      function changeValorProduto(id: number ,valor: number) {
        let newInsumo = [...insumo];
        for(let i in newInsumo) {
            if(newInsumo[i].id === id) {
                newInsumo[i].valor_do_produto = valor;
                if (newInsumo[i].valor_do_produto !== 0 && newInsumo[i].quantidade_do_produto !==0) {
                    changeCustoUnitario(newInsumo[i].id, (newInsumo[i].valor_do_produto / newInsumo[i].quantidade_do_produto))
                }
            }
        }
        setInsumo(newInsumo);
      }

      function changeQuantidadeProduto(id: number ,quantidade: number) {
        let newInsumo = [...insumo];
        for(let i in newInsumo) {
            if(newInsumo[i].id === id) {
                newInsumo[i].quantidade_do_produto = quantidade;
                if (newInsumo[i].valor_do_produto !== 0 && newInsumo[i].quantidade_do_produto !==0) {
                    changeCustoUnitario(newInsumo[i].id, (newInsumo[i].valor_do_produto / newInsumo[i].quantidade_do_produto));
                }
            }
        }
        setInsumo(newInsumo);
      }
    

    return (
        <div >
            {
                 insumo.map(insumo => {
                    return (
                        <div 
                            key={insumo.id} 
                            className="row-form"
                            >
                            <div className="container-input container-input-w30">
                                <div className="container-help">
                                    <div className="hover-info">
                                        <p>Os insumos de produção são os conjuntos de todos os materiais necessários para fabricar um produto. </p>
                                    </div>
                                </div>
                                <span className="span-help">
                                    Insumo
                                </span>
                                <input 
                                    type="text" 
                                    className="input-control"
                                    placeholder='Leite'
                                    onChange={e => changeNome(insumo.id ,e.target.value)}
                                />
                            </div>
                            <div className="container-input container-input-w21" >
                                <div className="container-help">
                                    <div className="hover-info">
                                        <p>É a quantidade de insumo utilizada, utilize a unidade que preferir, porém lembre-se de utilizar a mesma unidade ao calcular o custo unitário. </p>
                                    </div>
                                </div>
                                <span className="span-help">
                                    Quantidade Utilizada
                                </span>
                                <input 
                                    type="text"
                                    className="input-control"
                                    placeholder='300'
                                    onChange={e => changeQuantUtilizada(insumo.id, parseFloat(e.target.value.replace(",", ".")))}
                                />
                            </div>
                            
                            <div className="container-input container-input-w21">
                                <span 
                                    className="custo-unitario"
                                    onClick={() =>changeDivUnitario(insumo.id,true)}
                                >
                                    Custo Unitário*
                                </span>
                                <input 
                                    disabled
                                    type="text" 
                                    className="input-control" 
                                    placeholder='R$  3,00'
                                    defaultValue={insumo.valor_unitário.toString() === '0' ? ''  : 'R$  '+insumo.valor_unitário.toString() }
                                    onChange={e => changeCustoUnitario(insumo.id, parseFloat(e.target.value.replace(",", ".")))}
                                />
                                <div 
                                    className="container-calc-img"
                                    onClick={() =>changeDivUnitario(insumo.id,true)}
                                >

                                </div>

                                <div className="container-hover-custo-unitario" style={ insumo.div_cust_unitario ? { display: "block"} : { display: "none"}}>
                                    <div 
                                        className="close-mini"
                                        onClick={() =>changeDivUnitario(insumo.id,false)}
                                    ></div>
                                    <h5 className="txt-title-mini-input">Como calcular Custo Unitário?</h5>
                                    <p  className="txt-desc-mini-input">Basta pegar o valor total do produto e dividir pela quantidade total da embalagem.</p>

                                    <span className="span-mini">
                                        Valor do Produto
                                    </span>
                                    <input 
                                        type="text"
                                        className="input-control-mini"
                                        onChange={e => changeValorProduto(insumo.id, parseFloat(e.target.value.replace(",", ".")))}  
                                    />

                                    <span className="span-mini">
                                       Quantidade
                                    </span>
                                    <input 
                                        type="text"
                                        className="input-control-mini"
                                        onChange={e => changeQuantidadeProduto(insumo.id, parseFloat(e.target.value.replace(",", ".")))}  
                                    />
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
                                    value={'R$ '+insumo.total.toFixed(3).replace(".", ",")}
                                />
                            </div>
                            <div 
                                className='container-img-delete'
                                onClick={e => deleteInsumo(insumo.id)  }    
                            >
                
                            </div>
                        </div>
                
                    );
                })
            }
                <div className="row-form">
                    <div className="container-calc-insumo">
                        <div className="container-result-insumo">
                            <p>Custo Total de Insumos </p>
                            <p>{'R$ '+totalInsumo.toFixed(3).replace(".", ",")}</p>
                            <div className="clear"></div>
                        </div>
                        <img src={imgadd} alt="ADD" onClick={addNewInsumo} />
                    </div>
                            
                </div>
        </div>
    );
    

}

export default AddInsumo;