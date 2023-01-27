import React, { useState, useEffect } from "react";
import { CDBBtn, CDBTable, CDBTableHeader, CDBTableBody } from "cdbreact";
import Sidebar from "../Sidebar";
import { CDBIcon } from "cdbreact";
import Navbar from "../Navbar";
import "./Profile.css";
import { HiMagnifyingGlass } from "react-icons/hi2";
import AddModal from "../components/AddModal";
import LensModal from "../components/LensModal";
import { getCompras } from "../services/comprasAPI";
import Spinner from "react-bootstrap/Spinner";
import { app } from "../firebase";
import { getAuth } from "firebase/auth";
import { getProductos } from "../services/productosAPI";

export const Compras = () => {
	const [isLoading, setIsLoading] = useState(true);

	const auth = getAuth(app);
	const [logIn, setLogIn] = useState(false);
	auth.onAuthStateChanged(function (user) {
		if (user) {
		setLogIn(true);
		} else {
		window.location.href = "/login";
		}
	});
	useEffect(() => {
		getCompras().then((clientData) => {
			setData(clientData);
			getProductos().then(ProductData => {
				setProductoData(ProductData);
				setIsLoading(false);
			});
		});
	}, []);

	const [data, setData] = useState([]);
	const [productoData, setProductoData] = useState([]);
	const [showAdd, setShowAdd] = useState(false);
	const handleShowAdd = () => setShowAdd(!showAdd);
	const [showLens, setShowLens] = useState(false);

	const handleShowLens = (compra) => {
		setShowLens(!showLens);
		setCif(compra.cif);
		setNombre(compra.nombre);
		setDireccion(compra.direccion);
		setTelefono(compra.telefono);
		setEmail(compra.email);
		setFechaCompra(compra.fechaCompra);
		setPrecioTotal(compra.precioTotal);
		setObservaciones(compra.observaciones);
		setProductos(compra.productos);
		console.log(compra.productos)
	};
	
	const [cif, setCif] = useState("");
	const [nombre, setNombre] = useState("");
	const [direccion, setDireccion] = useState("");
	const [telefono, setTelefono] = useState("");
	const [email, setEmail] = useState("");
	const [fechaCompra, setFechaCompra] = useState("");
	const [precioTotal, setPrecioTotal] = useState("");
	const [observaciones, setObservaciones] = useState("");
	const [productos, setProductos] = useState("");

	const dataModifier = {
		data,
		setData,
	};

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
		setObservaciones,
		productos,
		setProductos,
		productoData,
	};

	console.log(data);

	return (
		<>
		{!logIn ? (
			<></>
		) : (
			<>
			{!showAdd ? (
				<></>
			) : (
				<AddModal
				compras
				handleShow={handleShowAdd}
				dataModifier={dataModifier}
				state={state}
				/>
			)}
			{!showLens ? (
				<></>
			) : (
				<LensModal compras handleShow={handleShowLens} state={state} />
			)}
			<div className="d-flex profile">
				<div>
				<Sidebar />
				</div>
				<div
				style={{
					flex: "1 1 auto",
					display: "flex",
					flexFlow: "column",
					height: "100vh",
					overflowY: "hidden",
				}}
				>
				<Navbar />
				<div style={{ height: "100%" }}>
					<div
					style={{
						height: "calc(100% - 64px)",
						padding: "20px 5%",
						overflowY: "scroll",
					}}
					>
					<div className="mt-5">
						<div className="mb-3 title-with-add">
						<h4
							className="font-weight-bold"
							style={{ marginBottom: "0" }}
						>
							<CDBIcon icon="shopping-cart" /> Compras
						</h4>
						<CDBBtn className={"add-button"} onClick={handleShowAdd}>
							<CDBIcon icon="plus" className="ml-1" />
						</CDBBtn>
						</div>

						<CDBTable striped responsive>
						{isLoading ? (
							<div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
								<Spinner animation="grow" />
							</div>
						) : (
						<>
						<CDBTableHeader>
							<tr>
							<th>Proveedor</th>
							<th>Fecha de compra</th>
							<th>Observaciones</th>
							<th>Precio total</th>
							<th>Acciones</th>
							</tr>
						</CDBTableHeader>
							<CDBTableBody style={{ verticalAlign: "middle" }}>
								{data.map((compra) => (
								<tr>
									<td>{compra.nombre}</td>
									<td>{compra.fechaCompra}</td>
									<td>{compra.observaciones}</td>
									<td>{compra.precioTotal} €</td>
									<td style={{ whiteSpace: "nowrap" }}>
									<CDBBtn
										onClick={() => handleShowLens(compra)}
										className={"edit-button"}
										style={{ marginRight: "10px" }}
									>
										<HiMagnifyingGlass />
									</CDBBtn>
									</td>
								</tr>
								))}
							</CDBTableBody>
							</>
						)}
						</CDBTable>
					</div>

					<div style={{ margin: "0 auto", maxWidth: "1320px" }}>
						<footer className="d-flex mx-auto py-4">
						<small className="mx-auto my-1 text-center">
							&copy; EMS Tech, 2022. All rights reserved.
						</small>
						</footer>
					</div>
					</div>
				</div>
				</div>
			</div>
			</>
		)}
		</>
	);
};
