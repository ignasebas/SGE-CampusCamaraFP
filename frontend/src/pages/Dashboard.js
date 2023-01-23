import React, {useState, useEffect} from "react";
import { CDBBtn } from "cdbreact";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import "./Dashboard.css";
import { getVentas } from "../services/ventasAPI";
import { getCompras } from "../services/comprasAPI";
import { getClientes } from "../services/clientesAPI";
import { app } from "../firebase";
import { getAuth } from "firebase/auth";
import { getEmpleados } from "../services/empleadosAPI";
import { getProveedores } from "../services/proveedoresAPI";
import { getProductos } from "../services/productosAPI";


export const Dashboard = () => {
	const auth = getAuth(app);
	const [logIn, setLogIn] = useState(false);
	auth.onAuthStateChanged(function(user) {
	if (user) {
		console.log(user);
		setLogIn(true)
	} else {
		window.location.href = "/login"
	}
	});
	useEffect(() => {
		getClientes().then(clientData => {
		  setClientes(clientData);
		});
	}, []);

	useEffect(() => {
		getVentas().then(ventasData => {
			setVentas(ventasData);
		});
	}, []);

	useEffect(() => {
		getEmpleados().then(empleadosData => {
		  setEmpleados(empleadosData);
		});
	}, []);

	useEffect(() => {
		getCompras().then(comprasData => {
		  setCompras(comprasData);
		});
	}, []);

	useEffect(() => {
		getProveedores().then(proveedoresData => {
		  setProveedores(proveedoresData);
		});
	}, []);
	
	useEffect(() => {
		getProductos().then(productosData => {
		  setProductos(productosData);
		});
	}, []);
	

	const [ventas, setVentas] = useState([]);
	const numVentas = ventas.length;
	const [compras, setCompras] = useState([]);
	const numCompras = compras.length;
	const [clientes, setClientes] = useState([]);
	const numClientes = clientes.length;
	const [empleados, setEmpleados] = useState([]);
	const numEmpleados = empleados.length;
	const [proveedores, setProveedores] = useState([]);
	const numProveedores = proveedores.length;
	const [productos, setProductos] = useState([]);
	const numProductos = productos.length;
	var totalVentas = 0;
	ventas.forEach(venta => {
		totalVentas += venta.precioTotal;
	});
	Math.round(totalVentas);

	return (
		<>
			{!logIn ? (
				<>
				</>
			):(
				<div className="dashboard d-flex">
					<div>
						<Sidebar />
					</div>
					<div style={{ flex: "1 1 auto", display: "flex", flexFlow: "column", height: "100vh", overflowY: "hidden" }}>
						<Navbar />
						<div style={{ height: "100%" }}>
							<div style={{ height: "calc(100% - 64px)", overflowY: "scroll" }}>
								<div className="d-flex card-section">
									<div className="cards-container">
									<div className="card-bg w-100 d-flex flex-column border d-flex flex-column" style={{ gridRow: "span 2" }}>
											<div className="p-4 d-flex flex-column h-100">
												<div className="d-flex align-items-center justify-content-between">
													<h4 className="m-0 h5 font-weight-bold text-dark">Volumen de ventas</h4>
													<div className="px-2 py-1 bg-grey rounded-circle"><i className="fas fa-shopping-bag"></i></div>
												</div>
												<div className="mt-5 d-flex align-items-center justify-content-between">
													<div>
														<h4 className="m-0 h1 font-weight-bold text-dark">{totalVentas}</h4>
													</div>
												</div>
												<CDBBtn color="gray" onClick={
													() => {
														window.location.href = "/ventas";
													}
												}>
													<p className="c-p text-dark font-weight-bold text-right mt-3 mb-0">
														Más detalles&nbsp;&nbsp;&nbsp;<i className="fas fa-arrow-right ml-1"></i>
													</p>
												</CDBBtn>
											</div>
										</div>
										<div className="card-bg w-100 d-flex flex-column border d-flex flex-column" style={{ gridRow: "span 2" }}>
											<div className="p-4 d-flex flex-column h-100">
												<div className="d-flex align-items-center justify-content-between">
													<h4 className="m-0 h5 font-weight-bold text-dark">Número de clientes</h4>
													<div className="px-2 py-1 bg-grey rounded-circle"><i className="fas fa-shopping-bag"></i></div>
												</div>
												<div className="mt-5 d-flex align-items-center justify-content-between">
													<div>
														<h4 className="m-0 h1 font-weight-bold text-dark">{numClientes}</h4>
													</div>
												</div>
												<CDBBtn color="gray" onClick={
													() => {
														window.location.href = "/clientes";
													}
												}>
													<p className="c-p text-dark font-weight-bold text-right mt-3 mb-0">
														Más detalles&nbsp;&nbsp;&nbsp;<i className="fas fa-arrow-right ml-1"></i>
													</p>
												</CDBBtn>
											</div>
										</div>
										<div className="card-bg w-100 d-flex flex-column border d-flex flex-column" style={{ gridRow: "span 2" }}>
											<div className="p-4 d-flex flex-column h-100">
												<div className="d-flex align-items-center justify-content-between">
													<h4 className="m-0 h5 font-weight-bold text-dark">Número de ventas</h4>
													<div className="px-2 py-1 bg-grey rounded-circle"><i className="fas fa-shopping-bag"></i></div>
												</div>
												<div className="mt-5 d-flex align-items-center justify-content-between">
													<div>
														<h4 className="m-0 h1 font-weight-bold text-dark">{numVentas}</h4>
													</div>
												</div>
												<CDBBtn color="gray" onClick={
													() => {
														window.location.href = "/ventas";
													}
												}>
													<p className="c-p text-dark font-weight-bold text-right mt-3 mb-0">
														Más detalles&nbsp;&nbsp;&nbsp;<i className="fas fa-arrow-right ml-1"></i>
													</p>
												</CDBBtn>
											</div>
										</div>
										<div className="card-bg w-100 d-flex flex-column border d-flex flex-column" style={{ gridRow: "span 2" }}>
											<div className="p-4 d-flex flex-column h-100">
												<div className="d-flex align-items-center justify-content-between">
													<h4 className="m-0 h5 font-weight-bold text-dark">Empleados</h4>
													<div className="px-2 py-1 bg-grey rounded-circle"><i className="fas fa-shopping-bag"></i></div>
												</div>
												<div className="mt-5 d-flex align-items-center justify-content-between">
													<div>
														<h4 className="m-0 h1 font-weight-bold text-dark">{numEmpleados}</h4>
													</div>
												</div>
												<CDBBtn color="gray" onClick={
													() => {
														window.location.href = "/empleados";
													}
												}>
													<p className="c-p text-dark font-weight-bold text-right mt-3 mb-0">
														Más detalles&nbsp;&nbsp;&nbsp;<i className="fas fa-arrow-right ml-1"></i>
													</p>
												</CDBBtn>
											</div>
										</div>
										<div className="card-bg w-100 d-flex flex-column border d-flex flex-column" style={{ gridRow: "span 2" }}>
											<div className="p-4 d-flex flex-column h-100">
												<div className="d-flex align-items-center justify-content-between">
													<h4 className="m-0 h5 font-weight-bold text-dark">Compras</h4>
													<div className="px-2 py-1 bg-grey rounded-circle"><i className="fas fa-shopping-bag"></i></div>
												</div>
												<div className="mt-5 d-flex align-items-center justify-content-between">
													<div>
														<h4 className="m-0 h1 font-weight-bold text-dark">{numCompras}</h4>
													</div>
												</div>
												<CDBBtn color="gray" onClick={
													() => {
														window.location.href = "/compras";
													}
												}>
													<p className="c-p text-dark font-weight-bold text-right mt-3 mb-0">
														Más detalles&nbsp;&nbsp;&nbsp;<i className="fas fa-arrow-right ml-1"></i>
													</p>
												</CDBBtn>
											</div>
										</div>
										<div className="card-bg w-100 d-flex flex-column border d-flex flex-column" style={{ gridRow: "span 2" }}>
											<div className="p-4 d-flex flex-column h-100">
												<div className="d-flex align-items-center justify-content-between">
													<h4 className="m-0 h5 font-weight-bold text-dark">Proveedores</h4>
													<div className="px-2 py-1 bg-grey rounded-circle"><i className="fas fa-shopping-bag"></i></div>
												</div>
												<div className="mt-5 d-flex align-items-center justify-content-between">
													<div>
														<h4 className="m-0 h1 font-weight-bold text-dark">{numProveedores}</h4>
													</div>
												</div>
												<CDBBtn color="gray" onClick={
													() => {
														window.location.href = "/proveedores";
													}
												}>
													<p className="c-p text-dark font-weight-bold text-right mt-3 mb-0">
														Más detalles&nbsp;&nbsp;&nbsp;<i className="fas fa-arrow-right ml-1"></i>
													</p>
												</CDBBtn>
											</div>
										</div>
										<div className="card-bg w-100 d-flex flex-column border d-flex flex-column" style={{ gridRow: "span 2" }}>
											<div className="p-4 d-flex flex-column h-100">
												<div className="d-flex align-items-center justify-content-between">
													<h4 className="m-0 h5 font-weight-bold text-dark">Productos</h4>
													<div className="px-2 py-1 bg-grey rounded-circle"><i className="fas fa-shopping-bag"></i></div>
												</div>
												<div className="mt-5 d-flex align-items-center justify-content-between">
													<div>
														<h4 className="m-0 h1 font-weight-bold text-dark">{numProductos}</h4>
													</div>
												</div>
												<CDBBtn color="gray" onClick={
													() => {
														window.location.href = "/productos";
													}
												}>
													<p className="c-p text-dark font-weight-bold text-right mt-3 mb-0">
														Más detalles&nbsp;&nbsp;&nbsp;<i className="fas fa-arrow-right ml-1"></i>
													</p>
												</CDBBtn>
											</div>
										</div>
									</div>
									
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
}