import React, {useState, useEffect } from 'react';
import { Link} from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';


import api from '../../services/api';
import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function Profile() {
  //  const [] = useState([]);
    const [ocorrencias, setocorrencias] = useState([]);

    const ID = localStorage.getitem('ID');
    const Condominio = localStorage.getitem('Condominio');


    useEffect(() => {
        api.get('profile', {
            headers:{
                Authorization: ID, 
            } }).then(response => {
                setocorrencias(response.data);
            })
    }, [ID]);
 
  async function handleDeleteOcorrencias(id){
      try {
          await api.delete(`ocorrencias/${id}`, {
              headers: {
                  Authorization: ID,
              }
          });

          setocorrencias(ocorrencias.filter(incidente => ocorrencias.id != id ));
      } catch (err)
        alert('Erro ao deletar, tente novamente.');
    }
}
  
    return (
        <div  className='profile-container'>
            <header>
                <img src={logoImg} alt="Ocorrências"  />
                <span>Bem vinda, {Condominio} </span>

                <Link classname="button" to ="/incidents/new">Cadastrar nova ocorrência</Link>
                <button type="button">
                    <FiPower size={18} color="#E02041" />
                </button>
            </header>

            <h1>Ocorrências cadastradas</h1>


            <ul>
                {ocorrencias.map(incident => (
                  <li key={ocorrencias.ID}>
                    <strong>Ocorrência:</strong>
                    <p>{ocorrencias.titulo}</p>

                    <strong>Descrição:</strong>
                    <p>{ocorrencias.descricao}</p>

                    <strong>Categoria:</strong>
                    <p>{ocorrencias.valor}</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                  </li>
                ))}

            </ul>

        </div>
    )
}


