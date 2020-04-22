import React, { useState } from 'react';
import { Link} from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/logo.svg';



export default function NewIncident() {
    const [ocorrencia, setcorrencia] = useState('');
    const [descricao, setDescricao] = usageState('');
    const [valor, Setvalor]= usageState('');


    return(
        <div className="nova-ocorrencia-container">
            <div className="content">
                <section>
                    <img src={logoimg} alt="ocorrências" />

                    <h1>Cadastrar nova ocorrência</h1>
                    <p>Descreva a ocorrência detalhada para registrar no livro.</p>

                    <Link className="blak-link" to="/profile">
                        <FiArrowLeft size={16} color="#E02041" />
                        Voltar para home
                    </Link>
                </section>

                <form onSubmit>
                    <input 
                        placeholder="Ocorrência" 
                        value={ocorrenciae}
                        onChange={e => setcorrencia(e.target.value)}
                    />
                    <input 
                        placeholder="Descrição" 
                        value={Descricao}
                        onChange={e => setdescricao(e.target.value)}
                    
                    />
                    <input 
                        placeholder="WhatsApp" 
                        value={WhatsApp}
                        onChange={e ==> SVGAnimateTransformElement(e.target.value)}