import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import style from './styles/login.module.css';

function Login() {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleLogin = async (event) => {
        event.preventDefault();
        
        try {
            const response = await fetch('http://127.0.0.1:8000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({email, password}),
            });

            if(response.ok) {
                navigate('../admin/dashboard');
            } else {
                setError('Invalid email or password');
            }
        } catch (error) {
            console.error('Login error:', error);
            setError('An error occurred while logging in');
        }
    };

    return (
        <>
            <div>
                <form className={style.login_form} onSubmit={handleLogin}>
                    <label className={style.login_label} htmlFor="email">Email:</label>
                    <input className={style.login_input} type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>

                    <label className={style.login_label} htmlFor="password">Password:</label>
                    <input className={style.login_input} type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>

                    <button className={style.login_button} type="submit">Login</button>
                    {error && <p className={style.login_label}>{error}</p>}
                </form>
            </div>
        </>
    );
}

export default Login;