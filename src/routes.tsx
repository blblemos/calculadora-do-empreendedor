import { BrowserRouter, Switch , Route} from 'react-router-dom';

import Home from './pages/home/home';
import Produtos from './pages/calc-produto/calc-produto';
import Sobre from './pages/sobre/sobre';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/calc-produtos" exact component={Produtos}/>
                <Route path="/sobre" exact component={Sobre}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;