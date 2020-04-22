import './styles.css';
import React from 'react';

import {Link} from 'react-router-dom';
import {FiLogIn} from 'react-icons/fi';



import ocorrenciasimg from '../../assets/ocorrencias.PNG';
import logoimg from '../../assets/logo.png';

export default function Logon() {
    return(
      <div className="logon-container">
          <section className="form">
                <img src={logoimg} alt="aeox soluções" />

                <form>
                    <h1>Faça seu logon</h1>
                    <input placeholder="Sua ID" />
                    <button classname="button" type="submit">Entrar</button>

                    <Link to="/register">
                        <FiLogIn size={16} color="#E02041" />
                        Não tenho cadastro
                    </Link>
                </form>
          </section>

        <img src={ocorrenciasimg} alt="Ocorrencias" />
      </div>
      
    );
} 