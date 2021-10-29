import React from 'react';
import './styles/index.css';

import logoimg from './img/logo.svg';

import './components/menu/menu.css';
import './components/slide-home/slide-home.css';

function App() {
  return (
    <div>
      <nav>
        <div className="container-logo-img">
          <div className="logo-img"></div>
        </div>
        <ul>
          <li>HOME</li>
          <li>CALCULADORA</li>
          <li>SOBRE</li>
        </ul>
      </nav>

      <main>
        <div className="text-slide">
            <h1>A calculadora que você precisa para o seu negócio!</h1>
        </div>
        <div className="img-slide">
        </div>
      </main>
    </div>
    
  );
}

export default App;
