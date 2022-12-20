import React, {useEffect, useState} from "react";
import { CDBBtn} from "cdbreact";
import { CDBTable, CDBTableHeader, CDBTableBody } from "cdbreact";
import Sidebar from "../Sidebar";
import {CDBIcon} from "cdbreact";
import Navbar from "../Navbar";
import "./Profile.css"
import AddModal from "../components/AddModal"
import EditModal from "../components/EditModal"
import DeleteModal from "../components/DeleteModal"
import { getClientes, postCliente } from "../services/clientesAPI";

export const Clientes = () => {

	useEffect(() => {
		setIsLoading(true);
		getClientes().then(clientData => {
		  setData(clientData);
		});
	}, []);
	  

	const [data, setData] = useState([]);
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	const [showAdd, setShowAdd] = useState(false);
	const [showEdit, setShowEdit] = useState(false);
	const [showDelete, setShowDelete] = useState(false);
	const handleShowAdd = () => setShowAdd(!showAdd)
	const handleShowEdit = () => setShowEdit(!showEdit);
	const handleShowDelete = () => setShowDelete(!showDelete);
	
	const [dni, setDni] = useState("");
	const [nombre, setNombre] = useState("");
	const [apellidos, setApellidos] = useState("");
	const [telefono, setTelefono] = useState("");
	const [email, setEmail] = useState("");
	const [direccion, setDireccion] = useState("");
	const state = {
		dni,
		setDni,
		nombre,
		setNombre,
		apellidos,
		setApellidos,
		telefono,
		setTelefono,
		email,
		setEmail,
		direccion,
		setDireccion
	};

	const place = "clientes"

	console.log(data)
	

	return (
		<>
			{!showAdd ? (
				<>
				</>
			):(
				<AddModal clientes handleShow={handleShowAdd} place={place} state={state}/>
			)}
			{!showEdit ? (
				<>
				</>
			):(
				<EditModal clientes handleShow={handleShowEdit} place={place}/>
			)}
			{!showDelete ? (
				<>
				</>
			):(
				<DeleteModal clientes handleShow={handleShowDelete} place={place}/>
			)}
			<div className="d-flex profile" style={{overflowY:"hidden"}}>
				<div>
					<Sidebar/>
				</div>
				<div style={{flex:"1 1 auto", display:"flex", flexFlow:"column", height:"100vh", overflowY:"hidden"}}>
					<Navbar/>
					
					<div style={{height:"100%", overflowY:"scroll"}}>					
						<div style={{padding:"20px 5%"}}>
								
								<div className="mt-5">
									<div className="mb-3 title-with-add">
										<h4 className="font-weight-bold" style={{marginBottom:"0"}}><CDBIcon icon="users"/> Clientes</h4>
										<CDBBtn className={"add-button"} onClick={handleShowAdd}>
											<CDBIcon icon="plus" className="ml-1" />
										</CDBBtn>
									</div>

									<CDBTable striped responsive>
										<CDBTableHeader>
											<tr>
												<th>NIF/DNI</th>
												<th>Nombre</th>
												<th>Apellidos</th>
												<th>Teléfono</th>
												<th>Email</th>
												<th>Dirección</th>
												<th>Acciones</th>
											</tr>
										</CDBTableHeader>
										<CDBTableBody style={{verticalAlign: "middle"}}>
											{data.map((cliente) =>
												<tr>
													<td>{cliente.nif}</td>
													<td>{cliente.nombre}</td>
													<td>{cliente.apellidos}</td>
													<td>{cliente.telefono}</td>
													<td>{cliente.email}</td>
													<td>{cliente.direccion}</td>
													<td style={{whiteSpace: "nowrap"}}>
														<CDBBtn onClick={handleShowEdit} className={"edit-button"} style={{marginRight:"10px"}}>
															<CDBIcon icon="pen" className="ml-1" />
														</CDBBtn>
														<CDBBtn className={"delete-button"} onClick={handleShowDelete}>
															<CDBIcon icon="trash" className="ml-1" />
														</CDBBtn>
													</td>
												</tr>
											)}
											
										</CDBTableBody>
									</CDBTable>
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
		</>
	);
}