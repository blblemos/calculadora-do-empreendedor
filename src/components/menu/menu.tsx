import { Link } from 'react-router-dom';
import { useState } from 'react';

import '../../components/menu/menu.css';

function Menu(){
    const [menuMobile, setMenumobile] = useState(false);

    function openMobile(){
        setMenumobile(!menuMobile);
    } 
    return (
        <div>
            <nav>
                <div className="container-menu">
                    <div className="container-menu-desk">
                        <div className="container-logo-img">
                            <div className="logo-img"></div>
                        </div>
                        <ul className='menu-desk'>
                            <li><Link to="">HOME</Link></li>
                            <li><Link to="">SOBRE</Link></li>
                            <li><Link to="/calc-produtos">CALCULADORA</Link></li>
                        
                        </ul>
                    </div>
                    <div className='menu-mobile'>
                        <div 
                            className='img-menu-mobile'
                            onClick={() => openMobile()}
                        ></div>          
                    </div>      
                </div>
                
            </nav>
            <ul 
                className='container-menu-mobile'
                style={menuMobile ? { right: "0"} : { right: "-80%"}}
            >
                <div 
                    className='img-close-menu'
                    onClick={() => openMobile()}
                ></div>
                <div className='menu-mobile-hover'>
                    <li><Link to="">HOME</Link></li>
                    <li><Link to="">SOBRE</Link></li>
                    <li><Link to="/calc-produtos">CALCULADORA</Link></li>
                </div>
            </ul>   
        </div>
    );
}

export default Menu;