import React from "react";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import "./Profile.css"
import {CDBIcon} from "cdbreact";
import { getAuth, signOut } from "firebase/auth";

export const Profile = () => {
	const auth = getAuth();

	const handleSubmit = (event) => {
        signOut(auth).then(() => {
			window.location.href = "/login"
		}).catch((error) => {
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
							<div style={{ margin: "0 auto", maxWidth: "1320px"}}>
								<div className="cards-container1">
									<form>
										<div className="card shadow border-0">
											<label for="nombre">Cambiar nombre:</label>
											<input type="text" name="imagen"></input><br />
										</div><br/><br/>
										<div className="card shadow border-0">
											<label for="correo">Cambiar correo:</label>
											<input type="text" name="correo"></input><br />
										</div><br/><br/>
										<div className="card shadow border-0">
											<input type="submit" value="Actualizar"></input>
										</div><br/><br/>
									</form>
									<div className="card shadow border-0">
										<button onClick={handleSubmit}>Cerrar Sesión</button>
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