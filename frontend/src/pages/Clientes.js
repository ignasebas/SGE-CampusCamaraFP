import React from "react";
import { CDBBtn} from "cdbreact";
import { CDBTable, CDBTableHeader, CDBTableBody } from "cdbreact";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import "./Profile.css"

export const Clientes = () => {

	const data = [							
		{ id: 1, nif:"Y2192133D", nombre:"Sebas", apellido:"Kuhnel", telefono:"6271618", email:"sebastian@gmail.com", direccion:"Calle Palancia,32"},
		{ id: 2, nif:"Y2192133D", nombre:"Sebas", apellido:"Kuhnel", telefono:"6271618", email:"sebastian@gmail.com", direccion:"Calle Palancia,32"},
		{ id: 3, nif:"Y2192133D", nombre:"Sebas", apellido:"Kuhnel", telefono:"6271618", email:"sebastian@gmail.com", direccion:"Calle Palancia,32"},
		{ id: 4, nif:"Y2192133D", nombre:"Sebas", apellido:"Kuhnel", telefono:"6271618", email:"sebastian@gmail.com", direccion:"Calle Palancia,32"},
		{ id: 5, nif:"Y2192133D", nombre:"Sebas", apellido:"Kuhnel", telefono:"6271618", email:"sebastian@gmail.com", direccion:"Calle Palancia,32"},
		{ id: 6, nif:"Y2192133D", nombre:"Sebas", apellido:"Kuhnel", telefono:"6271618", email:"sebastian@gmail.com", direccion:"Calle Palancia,32"},
	]

	return (
		<div className="d-flex profile">
			<div>
				<Sidebar/>
			</div>
			<div style={{flex:"1 1 auto", display:"flex", flexFlow:"column", height:"100vh", overflowY:"hidden"}}>
				<Navbar/>
				<div style={{height:"100%"}}>
					<div style={{height:"calc(100% - 64px)", padding:"20px 5%", overflowY:"scroll"}}>
							<div className="mt-5">
								<div className="mb-3 title-with-add">
									<h4 className="font-weight-bold" style={{marginBottom:"0"}}>Clientes</h4>
									<CDBBtn className={"add-button"}>
										Añadir
									</CDBBtn>
								</div>
								
								<CDBTable striped responsive>
									<CDBTableHeader>
										<tr>
											<th>Id</th>
											<th>NIF</th>
											<th>Nombre</th>
											<th>Apellidos</th>
											<th>Telefono</th>
											<th>Email</th>
											<th>Direccion</th>
											<th>Acciones</th>
										</tr>
									</CDBTableHeader>
									<CDBTableBody style={{verticalAlign: "middle"}}>
										{data.map((cliente) =>
											<tr>
												<td>{cliente.id}</td>
												<td>{cliente.nif}</td>
												<td>{cliente.nombre}</td>
												<td>{cliente.apellido}</td>
												<td>{cliente.telefono}</td>
												<td>{cliente.email}</td>
												<td>{cliente.direccion}</td>
												<td style={{whiteSpace: "nowrap"}}>
													<CDBBtn className={"edit-button"} style={{marginRight:"10px"}}>
														Editar
													</CDBBtn>
													<CDBBtn className={"delete-button"}>
														Eliminar
													</CDBBtn>
												</td>
											</tr>
										)}
										
									</CDBTableBody>
								</CDBTable>
							</div>
								
							<div style={{margin:"0 auto", maxWidth:"1320px"}}>
								<footer className="d-flex mx-auto py-4">
									<small className="mx-auto my-1 text-center">&copy; Devwares, 2020. All rights reserved.</small>
								</footer>
							</div>
					</div>
				</div>
			</div>
		</div>

	);
}