import React, {useState} from "react";
import { CDBBtn} from "cdbreact";
import { CDBTable, CDBTableHeader, CDBTableBody } from "cdbreact";
import Sidebar from "../Sidebar";
import {CDBIcon} from "cdbreact";
import Navbar from "../Navbar";
import "./Profile.css"
import { NavLink } from "react-router-dom";
import {HiOutlineUserGroup} from 'react-icons/hi2';
import AddModal from "../components/AddModal"
import EditModal from "../components/EditModal"
import DeleteModal from "../components/DeleteModal"

export const Clientes = () => {

	const data = [
		{ id: 1, nif:"Y2192133D", nombre:"Sebas", apellido:"Kuhnel", telefono:"6271618", email:"sebastian@gmail.com", direccion:"Calle Palancia, 32"},
		{ id: 2, nif:"Y2192133D", nombre:"Sebas", apellido:"Kuhnel", telefono:"6271618", email:"sebastian@gmail.com", direccion:"Calle Palancia, 32"},
		{ id: 3, nif:"Y2192133D", nombre:"Sebas", apellido:"Kuhnel", telefono:"6271618", email:"sebastian@gmail.com", direccion:"Calle Palancia, 32"},
		{ id: 4, nif:"Y2192133D", nombre:"Sebas", apellido:"Kuhnel", telefono:"6271618", email:"sebastian@gmail.com", direccion:"Calle Palancia, 32"},
		{ id: 5, nif:"Y2192133D", nombre:"Sebas", apellido:"Kuhnel", telefono:"6271618", email:"sebastian@gmail.com", direccion:"Calle Palancia, 32"},
		{ id: 6, nif:"Y2192133D", nombre:"Sebas", apellido:"Kuhnel", telefono:"6271618", email:"sebastian@gmail.com", direccion:"Calle Palancia, 32"},
		{ id: 1, nif:"Y2192133D", nombre:"Sebas", apellido:"Kuhnel", telefono:"6271618", email:"sebastian@gmail.com", direccion:"Calle Palancia, 32"},
		{ id: 2, nif:"Y2192133D", nombre:"Sebas", apellido:"Kuhnel", telefono:"6271618", email:"sebastian@gmail.com", direccion:"Calle Palancia, 32"},
		{ id: 3, nif:"Y2192133D", nombre:"Sebas", apellido:"Kuhnel", telefono:"6271618", email:"sebastian@gmail.com", direccion:"Calle Palancia, 32"},
		{ id: 4, nif:"Y2192133D", nombre:"Sebas", apellido:"Kuhnel", telefono:"6271618", email:"sebastian@gmail.com", direccion:"Calle Palancia, 32"},
		{ id: 5, nif:"Y2192133D", nombre:"Sebas", apellido:"Kuhnel", telefono:"6271618", email:"sebastian@gmail.com", direccion:"Calle Palancia, 32"},
		{ id: 6, nif:"Y2192133D", nombre:"Sebas", apellido:"Kuhnel", telefono:"6271618", email:"sebastian@gmail.com", direccion:"Calle Palancia, 32"},
		{ id: 1, nif:"Y2192133D", nombre:"Sebas", apellido:"Kuhnel", telefono:"6271618", email:"sebastian@gmail.com", direccion:"Calle Palancia, 32"},
		{ id: 2, nif:"Y2192133D", nombre:"Sebas", apellido:"Kuhnel", telefono:"6271618", email:"sebastian@gmail.com", direccion:"Calle Palancia, 32"},
		{ id: 3, nif:"Y2192133D", nombre:"Sebas", apellido:"Kuhnel", telefono:"6271618", email:"sebastian@gmail.com", direccion:"Calle Palancia, 32"},
		{ id: 4, nif:"Y2192133D", nombre:"Sebas", apellido:"Kuhnel", telefono:"6271618", email:"sebastian@gmail.com", direccion:"Calle Palancia, 32"},
		{ id: 5, nif:"Y2192133D", nombre:"Sebas", apellido:"Kuhnel", telefono:"6271618", email:"sebastian@gmail.com", direccion:"Calle Palancia, 32"},
		{ id: 6, nif:"Y2192133D", nombre:"Sebas", apellido:"Kuhnel", telefono:"6271618", email:"sebastian@gmail.com", direccion:"Calle Palancia, 32"},							
		{ id: 1, nif:"Y2192133D", nombre:"Sebas", apellido:"Kuhnel", telefono:"6271618", email:"sebastian@gmail.com", direccion:"Calle Palancia, 32"},
		{ id: 2, nif:"Y2192133D", nombre:"Sebas", apellido:"Kuhnel", telefono:"6271618", email:"sebastian@gmail.com", direccion:"Calle Palancia, 32"},
		{ id: 3, nif:"Y2192133D", nombre:"Sebas", apellido:"Kuhnel", telefono:"6271618", email:"sebastian@gmail.com", direccion:"Calle Palancia, 32"},
		{ id: 4, nif:"Y2192133D", nombre:"Sebas", apellido:"Kuhnel", telefono:"6271618", email:"sebastian@gmail.com", direccion:"Calle Palancia, 32"},
		{ id: 5, nif:"Y2192133D", nombre:"Sebas", apellido:"Kuhnel", telefono:"6271618", email:"sebastian@gmail.com", direccion:"Calle Palancia, 32"},
		{ id: 6, nif:"Y2192133D", nombre:"Sebas", apellido:"Kuhnel", telefono:"6271618", email:"sebastian@gmail.com", direccion:"Calle Palancia, 32"},
	]

	const [showAdd, setShowAdd] = useState(false);
	const [showEdit, setShowEdit] = useState(false);
	const [showDelete, setShowDelete] = useState(false);
	const handleShowAdd = () => setShowAdd(!showAdd);
	const handleShowEdit = () => setShowEdit(!showEdit);
	const handleShowDelete = () => setShowDelete(!showDelete);
	
	return (
		<>
			{!showAdd ? (
				<>
				</>
			):(
				<AddModal handleShow={handleShowAdd}/>
			)}
			{!showEdit ? (
				<>
				</>
			):(
				<EditModal handleShow={handleShowEdit}/>
			)}
			{!showDelete ? (
				<>
				</>
			):(
				<DeleteModal handleShow={handleShowDelete}/>
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
										<h4 className="font-weight-bold" style={{marginBottom:"0"}}><HiOutlineUserGroup/> Clientes</h4>
										<CDBBtn className={"add-button"} onClick={handleShowAdd}>
											<CDBIcon icon="plus" className="ml-1" />
										</CDBBtn>
									</div>

									<CDBTable striped responsive>
										<CDBTableHeader>
											<tr>
												<th>ID</th>
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
													<td>{cliente.id}</td>
													<td>{cliente.nif}</td>
													<td>{cliente.nombre}</td>
													<td>{cliente.apellido}</td>
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