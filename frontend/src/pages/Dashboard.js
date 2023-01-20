import React, {useState, useEffect} from "react";
import { CDBProgress } from "cdbreact";
import { Pie, Bar } from "react-chartjs-2";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import "./Dashboard.css";
import { getVentas } from "../services/ventasAPI";
import { getClientes } from "../services/clientesAPI";


export const Dashboard = () => {

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

	const data = {
		chart1: {
			labels: [
				"Francia",
				"España",
				"Alemania",
			],
			datasets: [
				{
					backgroundColor: [
						"#F2C94C",
						"#2F80ED",
						"#9B51E0",
					],
					borderWidth: 0,
					data: [22, 55, 23],
				},
			]
		}
	}
	const options = {
		responsive: true,
		maintainAspectRatio: false,
		legend: { display: false },
		scales: {
			xAxes: [{
				ticks: {
					display: false
				},
			}],
			yAxes: [{
				gridLines: {
					display: false
				},
				ticks: {
					display: false
				}
			}]
		}
	}

	return (
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
								<div className="card-bg w-100 border d-flex flex-column">
									<div className="p-4 d-flex flex-column h-100">
										<div className="d-flex align-items-center justify-content-between">
											<h4 className="m-0 h5 font-weight-bold text-dark">Ventas</h4>
											<div className="py-1 px-2 bg-grey rounded-circle"><i className="fas fa-suitcase"></i></div>
										</div>
										<h4 className="my-4 text-right text-dark h2 font-weight-bold">0000</h4>
										<CDBProgress value={65} height={8} colors="primary"></CDBProgress>
										<p className="mt-2 text-success small">
											<i className="fas fa-angle-up p-0"></i> 27.4%
											<span style={{ fontSize: "0.95em" }} className="ml-2 font-weight-bold text-muted">Desde el mes pasado</span>
										</p>
										<p className="c-p mb-0 text-dark font-weight-bold text-right mt-auto">
											Más detalles
											<i className="fas fa-arrow-right ml-1"></i>
										</p>
									</div>
								</div>
								<div className="card-bg w-100 d-flex flex-column border d-flex flex-column" style={{ gridRow: "span 2" }}>
									<div className="p-4 d-flex flex-column h-100">
										<div className="d-flex align-items-center justify-content-between">
											<h4 className="m-0 h5 font-weight-bold text-dark">Total clientes</h4>
											<div className="px-2 py-1 bg-grey rounded-circle"><i className="fas fa-shopping-bag"></i></div>
										</div>
										<div className="mt-5 d-flex align-items-center justify-content-between">
											<div>
												<h4 className="m-0 h1 font-weight-bold text-dark">{numClientes}</h4>
											</div>
										</div>
										<div className="p-0 mt-auto">
											<Bar height={250} data={data.chart2} options={options} />
										</div>
										<p className="c-p text-dark font-weight-bold text-right mt-3 mb-0">
											Más detalles
											<i className="fas fa-arrow-right ml-1"></i>
										</p>
									</div>
								</div>
								<div className="card-bg w-100 d-flex flex-column border d-flex flex-column" style={{ gridRow: "span 2" }}>
									<div className="p-4 d-flex flex-column h-100">
										<div className="d-flex align-items-center justify-content-between">
											<h4 className="m-0 h5 font-weight-bold text-dark">Total ventas</h4>
											<div className="px-2 py-1 bg-grey rounded-circle"><i className="fas fa-shopping-bag"></i></div>
										</div>
										<div className="mt-5 d-flex align-items-center justify-content-between">
											<div>
												<h4 className="m-0 h1 font-weight-bold text-dark">{numVentas}</h4>
											</div>
										</div>
										<div className="p-0 mt-auto">
											<Bar height={250} data={data.chart2} options={options} />
										</div>
										<p className="c-p text-dark font-weight-bold text-right mt-3 mb-0">
											Más detalles
											<i className="fas fa-arrow-right ml-1"></i>
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}