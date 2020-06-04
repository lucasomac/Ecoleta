import React from 'react';
import logo from '../../assets/logo.svg';
import './styles.css';
import { FiLogin } from 'react-icons/fi';

const Home = () => {
    return (
        <div id="page-home">
            <div className="content">
                <header>
                    <img src={logo} alt="Ecoleta" />
                </header>
                <main>
                    <h1>Seu marketplace de coelta de resíduos.</h1>
                    <p>Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente</p>
                    <a href="/cadastro">
                        <span>
                            <FiLogin />
                        </span>
                        <strong>
                            Cadastre um ponto de coleta
                        </strong>
                    </a>
                </main>
            </div>
        </div>
    );
};

export default Home;