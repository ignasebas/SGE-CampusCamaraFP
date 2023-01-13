import React, {useState, useEffect} from "react";
import { CDBProgress, CDBBtn } from "cdbreact";
import { Pie, Bar } from "react-chartjs-2";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import "./Dashboard.css";
import { getVentas } from "../services/ventasAPI";
import { getClientes } from "../services/clientesAPI";
import { app } from "../firebase";
import { getAuth } from "firebase/auth";


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

	const [ventas, setVentas] = useState([]);
	const numVentas = ventas.length;
	const [clientes, setClientes] = useState([]);
	const numClientes = clientes.length;
	var totalVentas = 0;
	ventas.forEach(venta => {
		totalVentas += venta.precioTotal;
	});

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