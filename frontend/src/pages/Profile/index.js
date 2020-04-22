import React, { useEffect } from 'react';
import { Link} from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';


import api from '../../services/api';
import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function Profile() {
    const [ocorrencias, setocorrencias] = useState([]);

    const ID = localstorage.getitem('ID');
    const Condominio = localstorage.getitem('Condominio');


    useEffect(() => {
        api.get('profile', {
            headers:{
                Authorization: ID, 
            } }).then(response => {
                setocorrencias(response.data);
            })
    }, [ID]);
 
    return (
        <div  className='profile-container'>
            <header>
                <img src={logoImg} alt="Ocorrências"  />
                <span>Bem vinda, {ongName} </span>

                <Link classname="button" to ="/incidents/new">Cadastrar nova ocorrência</Link>
                <button type="button">
                    <FiPower size={18} color="#E02041" />
                </button>
            </header>

            <h1>Ocorrências cadastradas</h1>

            <ul>
               {Ocorrencias.map(incident => )}
                  <li key={ocorrencia.ID}>
                    <strong>Ocorrência:</strong>
                    <p>{ocorrencia.titulo}</p>

                    <strong>Descrição:</strong>
                    <p>{ocorrencia.descricao}</p>

                    <strong>Categoria:</strong>
                    <p>{ocorrencia.valor}</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                  </li>

            </ul>

        </div>
    )
}