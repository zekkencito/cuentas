import React from 'react';
import './style/style.css';

export default function Login() {
    const [email, setEmail] = React.useState('ana@gmail.com');
    const [password, setPassword] = React.useState('password');

    const submit = async (e) => {
        e.preventDefault();
        try{
            const res = await fetch('http://localhost:8000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email:email, password: password })
            });
            const data = await res.json();
            console.log("Respuesta:",data);
        }catch(err){
            console.error(err);
        }
    }
    const handleMouseOver = (e) => {
        e.currentTarget.style.backgroundColor = '#3a5a80';
    };

    const handleMouseOut = (e) => {
        e.currentTarget.style.backgroundColor = '#4a6fa5';
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h2 className="login-title">Iniciar Sesión</h2>

                <form onSubmit={submit}>
                    <div className="input-group">
                        <label htmlFor="email" className="input-label">
                            Correo electrónico
                        </label>
                        <input
                            value={email}
                            onChange={(e) => { setEmail(e.target.value) }}
                            type="email"
                            id="email"
                            placeholder="Ingresa tu correo"
                            className="input-field"
                        />
                    </div>

                    <div className="input-group">
                        <label htmlFor="password" className="input-label">
                            Contraseña
                        </label>
                        <input
                            value={password}
                            onChange={e => { setPassword(e.target.value) }}
                            type="password"
                            id="password"
                            placeholder="Ingresa tu contraseña"
                            className="input-field"
                        />
                    </div>

                    <button
                        type="submit"
                        className="login-button"
                        onMouseOver={handleMouseOver}
                        onMouseOut={handleMouseOut}
                    >
                        Iniciar Sesión
                    </button>
                </form>

                <a href="#" className="forgot-password">
                    ¿Olvidaste tu contraseña?
                </a>
            </div>
        </div>
    );
}