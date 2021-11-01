import Menu from '../../components/menu/menu';
import Calc from '../../components/calc/calc';

import '../calc-produto/calc-produto.css';

function Produto(){
    return (
        <div>
            <Menu/>
            <div className="container-div-calc">
                <Calc/>
                <h1>Ficha do produto</h1>
            </div>
        </div>
        
    );
}

export default Produto;