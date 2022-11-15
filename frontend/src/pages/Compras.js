import React from "react";
import { CDBBtn, CDBTable, CDBTableHeader, CDBTableBody, CDBSidebarMenuItem} from "cdbreact";
import Sidebar from "../Sidebar";
import {CDBIcon} from "cdbreact";
import Navbar from "../Navbar";
import "./Profile.css"
import { NavLink } from "react-router-dom";

export const Compras = () => {

	const data = [							
		{ id: 1, idProveedor: 2, idProducto: 5, cantidad: 700, precioTotal:600.90},
		{ id: 2, idProveedor: 2, idProducto: 5, cantidad: 700, precioTotal:600.90},
		{ id: 3, idProveedor: 2, idProducto: 5, cantidad: 700, precioTotal:600.90},
		{ id: 4, idProveedor: 2, idProducto: 5, cantidad: 700, precioTotal:600.90},
		{ id: 5, idProveedor: 2, idProducto: 5, cantidad: 700, precioTotal:600.90},
	]

	return (
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
									<h4 className="font-weight-bold" style={{marginBottom:"0"}}>Compras</h4>
									<CDBBtn className={"add-button"}>
										<CDBIcon icon="plus" className="ml-1" />
									</CDBBtn>
								</div>
								
								<CDBTable striped responsive>
									<CDBTableHeader>
										<tr>
											<th>ID</th>
											<th>ID Proveedor</th>
											<th>ID Producto</th>
											<th>Cantidad</th>
											<th>Precio total</th>
											<th>Acciones</th>
										</tr>
									</CDBTableHeader>
									<CDBTableBody style={{verticalAlign: "middle"}}>
										{data.map((compra) =>
											<tr>
												<td>{compra.id}</td>
												<td>{compra.idProveedor}</td>
												<td>{compra.idProducto}</td>
												<td>{compra.cantidad}</td>
												<td>{compra.precioTotal} €</td>
												<td style={{whiteSpace: "nowrap"}}>
												<NavLink
												exact
												to="/"
												activeClassName="activeClicked">
													<CDBBtn className={"edit-button"} style={{marginRight:"10px"}}>
														<CDBIcon icon="pen" className="ml-1" />
													</CDBBtn>
												</NavLink>	
													<CDBBtn className={"delete-button"}>
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

	);
}