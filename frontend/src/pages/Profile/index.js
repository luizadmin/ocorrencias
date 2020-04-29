import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';


import api from '../../services/api';
import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function Profile() {
  //  const [] = useState([]);
    const [ocorrencias, setocorrencias] = useState([]);

    const ID = localStorage.getItem('id');
    const Entidade = localStorage.getItem('nome');
    const history = useHistory();

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

          setocorrencias(ocorrencias.filter(ocorrencias => ocorrencias.id !== id ));
        } catch (err){
            alert('Erro ao deletar, tente novamente.');
        }
    }

    function handleLogout(){
        localStorage.clear();

        history.push('/');  
    }
  
    return (
        <div  className='profile-container'>
            <header>
                <img src={logoImg} alt="Ocorrências"  />
                <span>Bem vinda, {Entidade} </span>

                <Link className="button" to ="/ocorrencias/new">Cadastrar nova ocorrência</Link>
                <button onClick={handleLogout}  type="button">
                    <FiPower size={18} color="#E02041" />
                </button>
            </header>

            <h1>Ocorrências cadastradas</h1>
 
            <ul>
                {ocorrencias.map(ocorrencias => (
                  <li key={ocorrencias.id}>
                    <strong>Ocorrência:</strong>
                    <p>{ocorrencias.titulo}</p>

                    <strong>Descrição:</strong>
                    <p>{ocorrencias.descricao}</p>

                    <strong>Valor:</strong>
                    <p>{ Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(ocorrencias.valor)}</p>

                    <button type="button" onClick={() => handleDeleteOcorrencias(ocorrencias.id)} >
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                  </li>
                ))}
            </ul>
        </div>
    )
}
