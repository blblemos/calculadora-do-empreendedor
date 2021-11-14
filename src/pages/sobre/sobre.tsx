import Menu from '../../components/menu/menu';

import './sobre.css';

function Sobre() {
    return(
        <div>
            <Menu/>
            <div className="container-sobre">
                <h1>O que é a Calculadora do Empreendedor?</h1>
                <p>
                Considerando que determinar o preço de um produto e/ou serviço pode ser complicado devido a quantidade de variáveis envolvidas no processo. 
                Apesar de existir algumas ferramentas que oferecem um serviço de precificação, elas muitas vezes são complexas e não trazem uma explicação simples 
                sobre a importância e como definir cada ponto necessário para o desenvolvimento do preço. A ferramenta “Calculadora do Empreendedor” tem como objetivo 
                simplificar o cálculo da precificação de um produto ou serviço e instruir o usuário a entender todo o funcionamento, para que ele possa realizar o processo 
                de maneira independente no futuro, efetuando um cálculo mais preciso e condizente com a sua necessidade.
                <br /><br />
                Essa ferramenta é parte integrante de um trabalho de conclusão de curso a ser apresentado ao Instituto Federal de Educação, Ciência e Tecnologia da Bahia (IFBA), 
                como parte das exigências para obtenção do título de Tecnólogo em Análise e Desenvolvimento de Sistemas.
                <br /><br />
                Para auxiliar no desenvolvimento da "Calculadora do Empreendedor", basta acessar o link do formulário <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSd-BicKReKArK0bFHw1qJ6ir9RS0WGmId56Ee3hg1ZUtqY9xQ/viewform?usp=sf_link">clicando aqui</a> e responder o questionário.
                
                
                </p>
            </div>
        </div>
    );
}

export default Sobre;