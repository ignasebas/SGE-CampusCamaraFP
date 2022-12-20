import React, {useState, useEffect} from "react";
import { CDBBtn, CDBTable, CDBTableHeader, CDBTableBody} from "cdbreact";
import Sidebar from "../Sidebar";
import {CDBIcon} from "cdbreact";
import Navbar from "../Navbar";
import "./Profile.css"
import {HiMagnifyingGlass} from 'react-icons/hi2';
import AddModal from "../components/AddModal"
import LensModal from "../components/LensModal"
import { getCompras } from "../services/comprasAPI";

export const Compras = () => {

	useEffect(() => {
		getCompras().then(clientData => {
		  setData(clientData);
		});
	}, []);
	  

	const [data, setData] = useState([]);
	const [showAdd, setShowAdd] = useState(false);
	const handleShowAdd = () => setShowAdd(!showAdd);
	const [showLens, setShowLens] = useState(false);
	const handleShowLens = () => setShowLens(!showLens);

	const [cif, setCif] = useState("");
	const [nombre, setNombre] = useState("");
	const [direccion, setDireccion] = useState("");
	const [telefono, setTelefono] = useState("");
	const [email, setEmail] = useState("");
	const [fechaCompra, setFechaCompra] = useState("");
	const [precioTotal, setPrecioTotal] = useState("");
	const [observaciones, setObservaciones] = useState("");

	const state = {
		cif,
		setCif,
		nombre,
		setNombre,
		direccion,
		setDireccion,
		telefono,
		setTelefono,
		email,
		setEmail,
		fechaCompra,
		setFechaCompra,
		precioTotal,
		setPrecioTotal,
		observaciones,
		setObservaciones
		
	};

	const place = "compras"

	console.log(data)
	
	return (
		<>
			{!showAdd ? (
				<>
				</>
			):(
				<AddModal compras handleShow={handleShowAdd }state={state}/>
			)}
			{!showLens ? (
				<>
				</>
			):(
				<LensModal handleShow={handleShowLens}/>
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
									<h4 className="font-weight-bold" style={{marginBottom:"0"}}><CDBIcon icon="shopping-cart"/> Compras</h4>
									<CDBBtn className={"add-button"} onClick={handleShowAdd}>
										<CDBIcon icon="plus" className="ml-1" />
									</CDBBtn>
								</div>
								
								<CDBTable striped responsive>
									<CDBTableHeader>
										<tr>
											<th>Proveedor</th>
											<th>Fecha de compra</th>
											<th>Observaciones</th>
											<th>Precio total</th>
											<th>Acciones</th>
										</tr>
									</CDBTableHeader>
									<CDBTableBody style={{verticalAlign: "middle"}}>
										{data.map((compra) =>
											<tr>
												<td>{compra.nombre}</td>
												<td>{compra.fechaCompra}</td>
												<td>{compra.observaciones}</td>
												<td>{compra.precioTotal} €</td>
												<td style={{whiteSpace: "nowrap"}}>
													<CDBBtn onClick={handleShowLens} className={"edit-button"} style={{marginRight:"10px"}}>
														<HiMagnifyingGlass/>
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