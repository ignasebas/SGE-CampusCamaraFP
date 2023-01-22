import React, { useState } from 'react';
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import "./Profile.css"
import {CDBIcon} from "cdbreact";
import { getAuth, updateEmail, signOut, updatePassword} from "firebase/auth";
export const Profile = () => {
	const auth = getAuth();
	const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

	const handleLogOut = (event) => {
        signOut(auth).then(() => {
			window.location.href = "/login"
		}).catch((error) => {
			alert(error)
		});
    }

	const handleUpdateEmail = (event) => {
        updateEmail(auth.currentUser, email).then(() => {
			alert("Correo actualizado.")
			setTimeout(() => handleLogOut(), 500)
		}).catch((error) => {
			const errorMessage = error.code;
			if (errorMessage === "auth/requires-recent-login") {
				alert("Por favor, inicia sesión de nuevo.")
			}
			if (errorMessage === "auth/invalid-email") {
				alert("Correo inválido.")
			}
			if (errorMessage === "auth/email-already-in-use") {
				alert("Este correo ya está en uso.")
			}
			alert(error)
		});
    }

	const handleUpdatePassword = (event) => {
        updatePassword(auth.currentUser, password).then(() => {
			alert("Contraseña actualiazada.")
			setTimeout(() => handleLogOut(), 500)
		}).catch((error) => {
				const errorMessage = error.code;
				if (errorMessage === "auth/requires-recent-login") {
					alert("Por favor, inicia sesión de nuevo.")
				}
				if (errorMessage === "auth/weak-password") {
					alert("La contraseña debe tener al menos 6 caracteres.")
				}
				if (errorMessage === "auth/invalid-password") {
					alert("Contraseña inválida.")
				}
				alert(error)
		  });
    }


	return (
		<div className="d-flex profile">
			<div>
				<Sidebar />
			</div>
			<div style={{ flex: "1 1 auto", display: "flex", flexFlow: "column", height: "100vh", overflowY: "hidden" }}>
				<Navbar />
				<div style={{ height: "100%" }}>
					<div style={{ height: "calc(100% - 64px)", padding: "20px 5%", overflowY: "scroll" }}>
						<div className="mt-5">
							<div className="mb-3 title-with-add">
								<h4 className="font-weight-bold" style={{marginBottom:"0"}}><CDBIcon icon="user-circle"/> Perfil</h4>
							</div>
							{/*EDITAR A PARTIR DE AQUÍ*/}
							<div style={{position: 'absolute', left: '40%'}}>
								<div className="cards-container1" style={{display: 'block'}}>
									<div style={{padding: '10px'}}>
										<form method='post' onSubmit={handleUpdateEmail}>
												<label for="correo">Cambiar correo:</label><br/>
												<input type="text" name="email" value={email} onChange={(event) => setEmail(event.target.value)} required></input>&nbsp;
												<input type="submit" value="Actualizar"></input>
										</form>
									</div><br/>
									<div style={{padding: '10px'}}>
										<form onSubmit={handleUpdatePassword}>
												<label for="correo">Cambiar contraseña:</label><br/>
												<input type="password" name="password" value={password} onChange={(event) => setPassword(event.target.value)} required></input>&nbsp;
												<input type="submit" value="Actualizar"></input>
										</form>
									</div><br/>
									<div className="card shadow border-0" style={{padding: '10px'}}>
										<button onClick={handleLogOut}>Cerrar Sesión</button>
									</div>
								</div>
								<div style={{margin:"0 auto", maxWidth:"1320px"}}>
									<footer className="d-flex mx-auto py-4">
										<small className="mx-auto my-1 text-center">&copy; EMS Tech, 2022. All rights reserved.</small>
									</footer>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}