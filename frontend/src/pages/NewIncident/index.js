import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/logo.svg';


export default function NewIncident() {

    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [valor, setValor] = useState('');
    const history = useHistory();

    const ID = localStorage.getItem('id');

    async function handleNewIncidente(e) {
        e.preventDefault();

        const data = {
            titulo,
            descricao,
            valor,
        };    
        try {
            await api.post('ocorrencias', data, {
                headers: {
                    Authorization: ID
                }
            })
            history.push('/profile');
        } catch (err) {
            alert('Erro ao cadastrar ocorrência, tente novamente.');

        }
    }

    return (

        <div className="new-ocorrencia-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="ocorrências" />

                    <h1>Cadastrar nova ocorrência</h1>
                    <p>Descreva a ocorrência detalhada para registrar no livro.</p>

                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color="#E02041" />
                        Voltar para home
                    </Link>
                </section>

                <form onSubmit={handleNewIncidente}>
                    <input
                        placeholder="Ocorrência"
                        value={titulo}
                        onChange={e => setTitulo(e.target.value)}
                    />
                    <textarea
                        placeholder="Descrição"
                        value={descricao}
                        onChange={e => setDescricao(e.target.value)}

                    />
                    <input
                        placeholder="WhatsApp"
                        value={valor}
                        onChange={e => setValor(e.target.value)}
                    />

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}

