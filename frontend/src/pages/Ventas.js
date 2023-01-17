import React, {useState, useEffect} from "react";
import { CDBBtn} from "cdbreact";
import { CDBTable, CDBTableHeader, CDBTableBody } from "cdbreact";
import Sidebar from "../Sidebar";
import {CDBIcon} from "cdbreact";
import Navbar from "../Navbar";
import "./Profile.css"
import {HiMagnifyingGlass} from 'react-icons/hi2';
import AddModal from "../components/AddModal"
import LensModal from "../components/LensModal"
import { getVentas, postVentas } from "../services/ventasAPI";
import Spinner from 'react-bootstrap/Spinner';

export const Ventas = () => {
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setIsLoading(true);
		}, 700);
		setIsLoading(false);
		getVentas().then(clientData => {
			setData(clientData);
		});
	}, []);

	const [data, setData] = useState([]);
	const [error, setError] = useState(null);

	const [showAdd, setShowAdd] = useState(false);
	const [showLens, setShowLens] = useState(false);

	const handleShowAdd = () => {
		setShowAdd(!showAdd);
		if (dni && nombre && apellidos && fechaVenta && email && direccion && precioTotal && observaciones != "") {
			setDni("");
			setNombre("");
			setApellidos("");
			setEmail("");
			setDireccion("");
			setFechaVenta("");
			setPrecioTotal("");
			setObservaciones("");
		}
	}

	const handleShowLens = (venta) => {
		setShowLens(!showLens); 
		setDni(venta.nif);
		setNombre(venta.nombre);
		setApellidos(venta.apellidos);
		setEmail(venta.email);
		setDireccion(venta.direccion);
		setFechaVenta(venta.fechaVenta);
		setPrecioTotal(venta.precioTotal);
		setObservaciones(venta.observaciones);
	}

	const [dni, setDni] = useState("");
	const [nombre, setNombre] = useState("");
	const [apellidos, setApellidos] = useState("");
	const [email, setEmail] = useState("");
	const [direccion, setDireccion] = useState("");
	const [fechaVenta, setFechaVenta] = useState("");
	const [precioTotal, setPrecioTotal] = useState("");
	const [observaciones, setObservaciones] = useState("");
	const [productos, setProductos] = useState("");

	const dataModifier = {
		data,
		setData
	}

	const state = {
		dni,
		setDni,
		nombre,
		setNombre,
		apellidos,
		setApellidos,
		email,
		setEmail,
		direccion,
		setDireccion,
		fechaVenta,
		setFechaVenta,
		precioTotal,
		setPrecioTotal,
		observaciones,
		setObservaciones,
		productos,
		setProductos
	};

	const place = "ventas"

	console.log(data)

	return (
		<>
			{!showAdd ? (
				<>
				</>
			):(
				<AddModal ventas handleShow={handleShowAdd} dataModifier={dataModifier} state={state}/>
			)}
			{!showLens ? (
				<>
				</>
			):(
				<LensModal ventas handleShow={handleShowLens} state={state}/>
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
									<h4 className="font-weight-bold" style={{marginBottom:"0"}}><CDBIcon icon="poll"/> Ventas</h4>
									<CDBBtn className={"add-button"} onClick={handleShowAdd}>
										<CDBIcon icon="plus" className="ml-1" />
									</CDBBtn>
								</div>
								
								<CDBTable striped responsive>
									<CDBTableHeader>
										<tr>
											<th>Nombre cliente</th>
											<th>Fecha de venta</th>
											<th>Observaciones</th>
											<th>Precio total</th>
											<th>Acciones</th>
										</tr>
									</CDBTableHeader>
									{!isLoading ? (
										<div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
											<Spinner animation="grow" />
										</div>
									) : (
									<CDBTableBody style={{verticalAlign: "middle"}}>
										{data.map((venta) =>
											<tr>
												<td>{venta.nombre}</td>
												<td>{venta.fechaVenta}</td>
												<td>{venta.observaciones}</td>
												<td>{venta.precioTotal} €</td>
												<td style={{whiteSpace: "nowrap"}}>
													<CDBBtn onClick={() => handleShowLens(venta)} className={"edit-button"} style={{marginRight:"10px"}}>
														<HiMagnifyingGlass/>
													</CDBBtn>
												</td>
											</tr>
										)}
									</CDBTableBody>
									)}
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