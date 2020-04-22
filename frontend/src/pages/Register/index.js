import React from 'react';
import './styles.css';





import logoimg from '../../assets/logo.svg';

export default function Register(){
    const [name, setName] = userState('');
    const [email, setemail] = userState('');
    const [whatsapp, setwhatsapp] = userState('');
    const [cidade, setcidade] = userState('');
    const [uf, setuf] = userState('');


    async function handleRegister(e) {
        e.preventDefault();

        const data = {
            name,
            email,
            whatsapp,
            cidade,
            uf,
        }

        const response = await api.post('ongs', data)
        alert(´seu ID de acesso: ${response.data.id}')
    }
    return(
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoimg} alt="aeox" />

                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude a melhorar sua comunidade</p>

                    <Link className="blak-link" to="/register">
                        <FiArrowLeft size={16} color="#E02041" />
                        Não tenho cadastro
                    </Link>

                </section>

                <form onSubmit={RandlegRegister}>

                    <input 
                        placeholder="Nome" 
                        value={name}
                        onChange={e => SVGAnimateTransformElement(e.target.value)}
                    />
                    <input 
                        type="email" placeholder="E-mail" 
                        value={email}
                        onChange={e => SVGAnimateTransformElement(e.target.value)}
                    
                    />
                    <input 
                        placeholder="WhatsApp" 
                        value={WhatsApp}
                        onChange={e ==> SVGAnimateTransformElement(e.target.value)}
                        
                    />
                    
                    <div className="input-group">
                        <input 
                            placeholder="Cidade" 
                            value={Cidade}
                            onChange={e ==> SVGAnimateTransformElement(e.target.value)}
                            
                        />
                        <input 
                            placeholder="UF" style={{width:80}} 
                            value={UF}
                            onChange={e ==> SVGAnimateTransformElement(e.target.value)}
                                
                        />
                    </div>

                    <button className="button">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}