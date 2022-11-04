import React from "react";
import { CDBBtn, CDBIframe} from "cdbreact";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import "./Profile.css"

export const Ventas = () => {

	return (
		<div className="d-flex profile">
			<div>
				<Sidebar />
			</div>
			<div style={{ flex: "1 1 auto", display: "flex", flexFlow: "column", height: "100vh", overflowY: "hidden" }}>
				<Navbar />
				<div style={{ height: "100%" }}>
					<div style={{ height: "calc(100% - 64px)", padding: "20px 5%", overflowY: "scroll" }}>
						{/*EDITAR A PARTIR DE AQUÍ*/}
						<div style={{ margin: "0 auto", maxWidth: "1320px" }}>
							<div className="cards-container2">
								<div>
									<div className="card shadow border-0">
										<div className="p-3">
											<h4 className="mt-3">Venta ejemplo 1</h4>
											<p>Código: 001</p>
											<p>Cliente: XXXX</p>
											<p>Total: 0000.00</p>
											<p>Fecha: 00/00/0000</p>
										</div>
										<div className="p-3">
											<CDBBtn color="dark" flat outline circle>
												+
											</CDBBtn>
										</div>
									</div>
								</div>
								<div>
									<div className="card shadow border-0">
										<div className="p-3">
											<h4 className="mt-3">Venta ejemplo 2</h4>
											<p>Código: 002</p>
											<p>Cliente: XXXX</p>
											<p>Total: 0000.00</p>
											<p>Fecha: 00/00/0000</p>
										</div>
										<div className="p-3">
											<CDBBtn color="dark" flat outline circle>
												+
											</CDBBtn>
										</div>
									</div>
								</div>
								<div>
									<div className="card shadow border-0">
										<div className="p-3">
											<h4 className="mt-3">Venta ejemplo 3</h4>
											<p>Código: 003</p>
											<p>Cliente: XXXX</p>
											<p>Total: 0000.00</p>
											<p>Fecha: 00/00/0000</p>
										</div>
										<div className="p-3">
											<CDBBtn color="dark" flat outline circle>
												+
											</CDBBtn>
										</div>
									</div>
								</div>
								<div>
									<div className="card shadow border-0">
										<div className="p-3">
											<h4 className="mt-3">Venta ejemplo 4</h4>
											<p>Código: 004</p>
											<p>Cliente: XXXX</p>
											<p>Total: 0000.00</p>
											<p>Fecha: 00/00/0000</p>
										</div>
										<div className="p-3">
											<CDBBtn color="dark" flat outline circle>
												+
											</CDBBtn>
										</div>
									</div>
								</div>
								<div>
									<div className="card shadow border-0">
										<div className="p-3">
											<h4 className="mt-3">Venta ejemplo 5</h4>
											<p>Código: 005</p>
											<p>Cliente: XXXX</p>
											<p>Total: 0000.00</p>
											<p>Fecha: 00/00/0000</p>
										</div>
										<div className="p-3">
											<CDBBtn color="dark" flat outline circle>
												+
											</CDBBtn>
										</div>
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