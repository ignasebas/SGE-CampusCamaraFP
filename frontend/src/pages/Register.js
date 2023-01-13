import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import { postUsuario } from '../services/userAPI';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { app } from '../firebase';

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
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input
                    type="name"
                    id="name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    required
                />
                <br />
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required
                />
                <br />
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    required
                />
                <br />
                <button type="submit">Registrarse</button>
                <br />
                <NavLink
                exact
                to="/login"
                activeClassName="activeClicked">
                    Inicia Sesión
                </NavLink>
            </form>
        </div>
    );
};

export default RegisterPage;
