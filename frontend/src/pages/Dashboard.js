import React from "react";
import {
	CDBProgress,
	CDBContainer,
} from "cdbreact";
import { Pie, Bar } from "react-chartjs-2";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import "./Dashboard.css";

export const Dashboard = () => {

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
		},
		chart2: {
			labels: [
				"Pedidos",
				"Pedidos",
				"Pedidos",
				"Pedidos",
				"Pedidos",
				"Pedidos",
				"Pedidos",
			],
			datasets: [
				{
					label: "Octubre",
					backgroundColor: "rgba(255, 153, 51, 0.8)",
					borderColor: "rgb(102, 51, 0)",
					data: [65, 59, 75, 81, 56, 55, 40],
				},
				{
					label: "Noviembre",
					backgroundColor: "#2F80ED",
					borderColor: "rgb(0, 41, 102)",
					data: [38, 48, 60, 79, 96, 47, 80],
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
										<h4 className="my-4 text-right text-dark h2 font-weight-bold">30,000 €</h4>
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
								<div className="card-bg w-100 border d-flex flex-column">
									<div className="p-4 d-flex flex-column h-100">
										<div className="d-flex align-items-center justify-content-between">
											<h4 className="m-0 h5 font-weight-bold text-dark">Clientes</h4>
											<div className="px-2 py-1 bg-grey rounded-circle"><i className="fas fa-chart-line"></i></div>
										</div>
										<div className="mt-3 d-flex justify-content-between">
											<CDBContainer style={{ width: "250px", height: "150px", margin: "0 -4rem" }} className="p-0">
												<Pie data={data.chart1} options={({ responsive: true }, { maintainAspectRatio: false }, { legend: { display: false } })} />
											</CDBContainer>
											<div className="text-right w-25">
												<p className="m-0">España</p>
												<p className="text-success small">55%</p>
												<div>
													<div className="d-flex align-items-center justify-content-between" style={{ color: "#2F80ED" }}>
														<span style={{ fontSize: "3em", margin: "-2rem 0px -1.5rem 0px" }}>&#8226;</span>
														<span className="small">España</span>
													</div>
													<div className="d-flex align-items-center justify-content-between" style={{ color: "#F2C94C" }}>
														<span style={{ fontSize: "3em", margin: "-2rem 0px -1.5rem 0px" }}>&#8226;</span>
														<span className="small">Francia</span>
													</div>
													<div className="d-flex align-items-center justify-content-between" style={{ color: "#9B51E0" }}>
														<span style={{ fontSize: "3em", margin: "-2rem 0px -1.5rem 0px" }}>&#8226;</span>
														<span className="small">Alemania</span>
													</div>
												</div>
											</div>
										</div>
										<p className="c-p text-dark mb-0 font-weight-bold text-right mt-auto">
											Más detalles
											<i className="fas fa-arrow-right ml-1"></i>
										</p>
									</div>
								</div>
								<div className="card-bg w-100 d-flex flex-column border d-flex flex-column" style={{ gridRow: "span 2" }}>
									<div className="p-4 d-flex flex-column h-100">
										<div className="d-flex align-items-center justify-content-between">
											<h4 className="m-0 h5 font-weight-bold text-dark">Total pedidos</h4>
											<div className="px-2 py-1 bg-grey rounded-circle"><i className="fas fa-shopping-bag"></i></div>
										</div>
										<div className="mt-5 d-flex align-items-center justify-content-between">
											<div>
												<h4 className="m-0 h1 font-weight-bold text-dark">452</h4>
												<p className="text-success small">
													<i className="fas fa-angle-up p-0"></i> 18.52%
												</p>
											</div>
											<div className="text-right d-flex flex-column justify-content-between">
												<div className="d-flex align-items-center justify-content-between">
													<span style={{ fontWeight: "bold", color: "#ff9933", fontSize: "3em", margin: "-2rem 0px -1.5rem 0px" }}>&#8226;</span>
													<span className="small">Octubre</span>
												</div>
												<div className="d-flex align-items-center justify-content-between text-warning">
													<span style={{ fontWeight: "bold", color: "#2F80ED", fontSize: "3em", margin: "-2rem 0px -1.5rem 0px" }}>&#8226;</span>
													<span className="small ml-2" style={{ color: "black"}}>Noviembre</span>
												</div>
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