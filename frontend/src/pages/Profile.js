import React from "react";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import "./Profile.css"
import {CDBIcon} from "cdbreact";
import { getAuth, updateEmail, signOut, updatePassword} from "firebase/auth";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export const Profile = () => {

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
								<h4 className="font-weight-bold" style={{marginBottom:"0"}}><FontAwesomeIcon icon="fa-solid fa-circle-user" /> Perfil</h4>
							</div>
							{/*EDITAR A PARTIR DE AQUÍ*/}
							<div style={{ margin: "0 auto", maxWidth: "1320px"}}>
								<div className="cards-container1">
									<form>
										<div className="card shadow border-0" >
											<label for="imagen">Cambiar imagen:</label>
											<input type="file" name="imagen"></input><br/>
										</div><br/><br/>
										<div className="card shadow border-0">
											<label for="nombre">Cambiar nombre:</label>
											<input type="text" name="imagen"></input><br />

											<label for="apellidos">Cambiar apellidos:</label>
											<input type="text" name="imagen"></input><br />
										</div><br/><br/>
										<div className="card shadow border-0">
											<label for="telefono">Cambiar teléfono:</label>
											<input type="text" name="telefono"></input><br />

											<label for="correo">Cambiar correo:</label>
											<input type="text" name="correo"></input><br />

											<label for="direccion">Cambiar correo:</label>
											<input type="text" name="direccion"></input>
										</div><br/><br/>
										<div className="card shadow border-0">
											<input type="submit" value="Actualizar"></input>
										</div><br/><br/>
									</form>
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