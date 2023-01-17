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
            const errorMessage = error.message;
            if (errorMessage === "The email address is badly formatted.") {
                alert("El correo electrónico está mal formateado.")
            }
            if (errorMessage === "There is no user record corresponding to this identifier. The user may have been deleted.") {
                alert("No hay registro de usuario correspondiente a este identificador. El usuario puede haber sido eliminado.")
            }
            if (errorMessage === "The password is invalid or the user does not have a password.") {
                alert("La contraseña no es válida o el usuario no tiene una contraseña.")
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
                    <button>
                        <NavLink exact to="/register" style={{ textDecoration: 'none', color: 'black'}}>
                            <IoArrowBackCircleSharp/>&nbsp;
                            Registrarse
                        </NavLink>
                    </button>
                    <button type='submit'>Iniciar sesión</button>
                </div>
            </form>
        </div></>
    );
};

export default LoginPage;
