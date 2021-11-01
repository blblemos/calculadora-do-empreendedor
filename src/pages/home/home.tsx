import '../../components/slide-home/slide-home.css';

import Menu from '../../components/menu/menu';

function Home() {
    return(
        <div>
            <Menu/>
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

export default Home;