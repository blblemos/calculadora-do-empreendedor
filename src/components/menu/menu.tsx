import '../../components/menu/menu.css';
import { Link } from 'react-router-dom';

function Menu(){
    return (
        <nav>
            <div className="container-logo-img">
            <div className="logo-img"></div>
            </div>
            <ul>
            <li><Link to="">HOME</Link></li>
            <li><Link to="/calc-produtos">CALCULADORA</Link></li>
            <li><Link to="">SOBRE</Link></li>
            </ul>
        </nav>
    );
}

export default Menu;