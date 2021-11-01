import '../../components/calc/calc.css';

function Calc(){
    return (
        <div className="container-calc">
            <div className="container-title-calc">
                <span>Calculadora de Preço</span>
            </div>
            <div className="container-calc-pages">
                <div className="calc-pages">
                    <span>Produto</span>
                </div>
                <div className="calc-pages">
                    <span>Serviço</span>
                </div>
            </div>
        </div>
    );
}

export default Calc;