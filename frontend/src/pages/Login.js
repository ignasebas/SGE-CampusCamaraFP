import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { app } from '../firebase';
import "./Login.css";
import {IoArrowBackCircleSharp} from 'react-icons/io5';


const LoginPage = () => {
    const auth = getAuth(app);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log(userCredential)
            window.location.href = "/"
        })
        .catch((error) => {
            const errorMessage = error.code;
            if (errorMessage === "auth/user-not-found") {
                alert("El usuario no existe.")
            }
            if (errorMessage === "auth/wrong-password") {
                alert("Contraseña incorrecta.")
            }
        });
    }

    return (
        <><div class="login-form">
            <form onSubmit={handleSubmit}>
                <h1>Inicio de sesión</h1>
                <div class="content">
                    <div class="input-field">
                        <input placeholder="Email" type="email" id="email" value={email} onChange={(event) => setEmail(event.target.value)} required></input>
                    </div>
                    <div class="input-field">
                        <input placeholder="Contraseña" type="password" id="password" value={password} onChange={(event) => setPassword(event.target.value)} required></input>
                    </div>
                </div>
                <div class="action">
                    <button type='submit'>Iniciar sesión</button>
                </div>
            </form>
        </div>&nbsp;
        <div style={{alignContent: 'center', width: '100%', textAlign: 'center', display: 'inline-block'}}>
            <NavLink exact to="/register" style={{ textDecoration: 'none', color: 'black'}}>
                <IoArrowBackCircleSharp/>&nbsp;
                <h6>Registrarse</h6>
            </NavLink>
        </div>
        </>
    );
};

export default LoginPage;
