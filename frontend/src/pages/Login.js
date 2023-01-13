import React, { useState } from 'react';
import { NavLink } from "react-router-dom";

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // perform authentication here
        console.log(`Email: ${email}`);
        console.log(`Password: ${password}`);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
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
                <button type="submit">Login</button>
                <br />
                <NavLink
                exact
                to="/register"
                activeClassName="activeClicked">
                    Registrate
                </NavLink>
            </form>
        </div>
    );
};

export default LoginPage;
