import { BrowserRouter, Switch , Route} from 'react-router-dom';

import Home from './pages/home/home';
import Produtos from './pages/calc-produto/calc-produto';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/calc-produtos" exact component={Produtos}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;