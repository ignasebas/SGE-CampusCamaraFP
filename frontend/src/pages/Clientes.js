import React, { useEffect, useState } from "react";
import { CDBBtn } from "cdbreact";
import { CDBTable, CDBTableHeader, CDBTableBody } from "cdbreact";
import Sidebar from "../Sidebar";
import { CDBIcon } from "cdbreact";
import Navbar from "../Navbar";
import "./Profile.css"
import AddModal from "../components/AddModal"
import EditModal from "../components/EditModal"
import DeleteModal from "../components/DeleteModal"
import { getClientes, postCliente } from "../services/clientesAPI";
import Spinner from 'react-bootstrap/Spinner';

export const Clientes = () => {

	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setIsLoading(true);
		}, 700);
		setIsLoading(false);
		getClientes().then(clientData => {
			setData(clientData);
		});
	}, []);

	const [data, setData] = useState([]);

	const [showAdd, setShowAdd] = useState(false);
	const [showEdit, setShowEdit] = useState(false);
	const [showDelete, setShowDelete] = useState(false);

	const handleShowAdd = () => {
		setShowAdd(!showAdd);
		if (dni && nombre && apellidos && telefono && email && direccion != "") {
			setId("");
			setDni("");
			setNombre("");
			setApellidos("");
			setTelefono("");
			setEmail("");
			setDireccion("");
		}
	}

	const handleShowEdit = (cliente) => {
		setShowEdit(!showEdit);
		setId(cliente._id);
		setDni(cliente.nif);
		setNombre(cliente.nombre);
		setApellidos(cliente.apellidos);
		setTelefono(cliente.telefono);
		setEmail(cliente.email);
		setDireccion(cliente.direccion);

	}
	const handleShowDelete = (cliente) => {
		setShowDelete(!showDelete);
		setId(cliente._id);
		setDni(cliente.nif);
		setNombre(cliente.nombre);
		setApellidos(cliente.apellidos);
		setTelefono(cliente.telefono);
		setEmail(cliente.email);
		setDireccion(cliente.direccion);

	}

	const [id, setId] = useState("");
	const [dni, setDni] = useState("");
	const [nombre, setNombre] = useState("");
	const [apellidos, setApellidos] = useState("");
	const [telefono, setTelefono] = useState("");
	const [email, setEmail] = useState("");
	const [direccion, setDireccion] = useState("");
	const dataModifier = {
		data,
		setData
	}
	const state = {
		id,
		setId,
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
			) : (
				<AddModal clientes handleShow={handleShowAdd} dataModifier={dataModifier} state={state} />
			)}
			{!showEdit ? (
				<>
				</>
			) : (
				<EditModal clientes handleShow={handleShowEdit} dataModifier={dataModifier} state={state} />
			)}
			{!showDelete ? (
				<>
				</>
			) : (
				<DeleteModal clientes handleShow={handleShowDelete} dataModifier={dataModifier} state={state} />
			)}
			<div className="d-flex profile" style={{ overflowY: "hidden" }}>
				<div>
					<Sidebar />
				</div>
				<div style={{ flex: "1 1 auto", display: "flex", flexFlow: "column", height: "100vh", overflowY: "hidden" }}>
					<Navbar />

					<div style={{ height: "100%", overflowY: "scroll" }}>
						<div style={{ padding: "20px 5%" }}>

							<div className="mt-5">
								<div className="mb-3 title-with-add">
									<h4 className="font-weight-bold" style={{ marginBottom: "0" }}><CDBIcon icon="users" /> Clientes</h4>
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
									{!isLoading ? (
										<div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
											<Spinner animation="grow" />
										</div>
									) : (
										<CDBTableBody style={{ verticalAlign: "middle" }}>											{data.map((cliente) =>
											<tr>
												<td>{cliente.nif}</td>
												<td>{cliente.nombre}</td>
												<td>{cliente.apellidos}</td>
												<td>{cliente.telefono}</td>
												<td>{cliente.email}</td>
												<td>{cliente.direccion}</td>
												<td style={{ whiteSpace: "nowrap" }}>
													<CDBBtn onClick={() => handleShowEdit(cliente)} className={"edit-button"} style={{ marginRight: "10px" }}>
														<CDBIcon icon="pen" className="ml-1" />
													</CDBBtn>
													<CDBBtn className={"delete-button"} onClick={() => handleShowDelete(cliente)}>
														<CDBIcon icon="trash" className="ml-1" />
													</CDBBtn>
												</td>
											</tr>
										)}

										</CDBTableBody>
									)}
								</CDBTable>
							</div>

							<div style={{ margin: "0 auto", maxWidth: "1320px" }}>
								<footer className="d-flex mx-auto py-4">
									<small className="mx-auto my-1 text-center">&copy; EMS Tech, 2022. All rights reserved.</small>
								</footer>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}