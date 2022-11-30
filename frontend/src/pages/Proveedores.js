import React, {useState} from "react";
import { CDBBtn} from "cdbreact";
import { CDBTable, CDBTableHeader, CDBTableBody } from "cdbreact";
import Sidebar from "../Sidebar";
import {CDBIcon} from "cdbreact";
import Navbar from "../Navbar";
import "./Profile.css"
import AddModal from "../components/AddModal"
import EditModal from "../components/EditModal"
import DeleteModal from "../components/DeleteModal"

export const Proveedores = () => {

	const data = [							
		{ id: 1, nombre:"Pantuflas S.L.", contacto: "Belén Puerto", telefono:"6271618", email:"belpuerto@pantuflassl.com", direccion:"Calle Flores, 32"},
		{ id: 2, nombre:"Pantuflas S.L.", contacto: "Belén Puerto", telefono:"6271618", email:"belpuerto@pantuflassl.com", direccion:"Calle Flores, 32"},
		{ id: 3, nombre:"Pantuflas S.L.", contacto: "Belén Puerto", telefono:"6271618", email:"belpuerto@pantuflassl.com", direccion:"Calle Flores, 32"},
		{ id: 4, nombre:"Pantuflas S.L.", contacto: "Belén Puerto", telefono:"6271618", email:"belpuerto@pantuflassl.com", direccion:"Calle Flores, 32"},
		{ id: 5, nombre:"Pantuflas S.L.", contacto: "Belén Puerto", telefono:"6271618", email:"belpuerto@pantuflassl.com", direccion:"Calle Flores, 32"},
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
				<AddModal proveedores handleShow={handleShowAdd}/>
			)}
			{!showEdit ? (
				<>
				</>
			):(
				<EditModal proveedores handleShow={handleShowEdit}/>
			)}
			{!showDelete ? (
				<>
				</>
			):(
				<DeleteModal proveedores handleShow={handleShowDelete}/>
			)}
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
									<h4 className="font-weight-bold" style={{marginBottom:"0"}}><CDBIcon icon="boxes"/> Proveedores</h4>
									<CDBBtn className={"add-button"} onClick={handleShowAdd}>
										<CDBIcon icon="plus" className="ml-1" />
									</CDBBtn>
								</div>
								
								<CDBTable striped responsive>
									<CDBTableHeader>
										<tr>
											<th>Id</th>
											<th>Nombre</th>
											<th>Contacto</th>
											<th>Teléfono</th>
											<th>Email</th>
											<th>Dirección</th>
											<th>Acciones</th>
										</tr>
									</CDBTableHeader>
									<CDBTableBody style={{verticalAlign: "middle"}}>
										{data.map((proveedor) =>
											<tr>
												<td>{proveedor.id}</td>
												<td>{proveedor.nombre}</td>
												<td>{proveedor.contacto}</td>
												<td>{proveedor.telefono}</td>
												<td>{proveedor.email}</td>
												<td>{proveedor.direccion}</td>
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