import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import { postUsuario } from '../services/userAPI';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { app } from '../firebase';
import {IoArrowBackCircleSharp} from 'react-icons/io5';


const RegisterPage = () => {
    
    const auth = getAuth(app);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            updateProfile(auth.currentUser, {
                displayName: name
            }).then(() => {
                console.log("SUU")
                window.location.href = "/"
            }).catch((error) => {
                // An error occurred
                // ...
            });
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage)
        });
        

       
        
        console.log(`Email: ${email}`);
        console.log(`Password: ${password}`);
    }

    return (
        <><div class="login-form">
            <form onSubmit={handleSubmit}>
                <h1>Registrar usuario</h1>
                <div class="content">
                    <div class="input-field">
                        <input placeholder="Nombre" type="name" id="name" value={name} onChange={(event) => setName(event.target.value)} required></input>
                    </div>
                    <div class="input-field">
                        <input placeholder="Email" type="email" id="email" value={email} onChange={(event) => setEmail(event.target.value)} required></input>
                    </div>
                    <div class="input-field">
                        <input placeholder="Contraseña" type="password" id="password" value={password} onChange={(event) => setPassword(event.target.value)} required></input>
                    </div>
                </div>
                <div class="action">
                    <button>
                        <NavLink exact to="/login" style={{ textDecoration: 'none', color: 'black'}}>
                            <IoArrowBackCircleSharp/>&nbsp;
                            Iniciar sesión
                        </NavLink>
                    </button>
                    <button type='submit'>Registrarse</button>
                </div>
            </form>
        </div></>
    );
};

export default RegisterPage;
