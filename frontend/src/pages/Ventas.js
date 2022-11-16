import React from "react";
import { CDBBtn} from "cdbreact";
import { CDBTable, CDBTableHeader, CDBTableBody } from "cdbreact";
import Sidebar from "../Sidebar";
import {CDBIcon} from "cdbreact";
import Navbar from "../Navbar";
import "./Profile.css"
import { NavLink } from "react-router-dom";
import {BsGraphUp} from 'react-icons/bs';

export const Ventas = () => {

	const data = [							
		{ id: 1, idCliente: 3, idProducto:"4", cantidad:"100", precioTotal:500.90},
		{ id: 2, idCliente: 3, idProducto:"4", cantidad:"100", precioTotal:500.90},
		{ id: 3, idCliente: 3, idProducto:"4", cantidad:"100", precioTotal:500.90},
		{ id: 4, idCliente: 3, idProducto:"4", cantidad:"100", precioTotal:500.90},
		{ id: 5, idCliente: 3, idProducto:"4", cantidad:"100", precioTotal:500.90},
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
									<h4 className="font-weight-bold" style={{marginBottom:"0"}}><BsGraphUp/> Ventas</h4>
									<CDBBtn className={"add-button"}>
										<CDBIcon icon="plus" className="ml-1" />
									</CDBBtn>
								</div>
								
								<CDBTable striped responsive>
									<CDBTableHeader>
										<tr>
											<th>ID</th>
											<th>ID Cliente</th>
											<th>ID Producto</th>
											<th>Cantidad</th>
											<th>Precio total</th>
											<th>Acciones</th>
										</tr>
									</CDBTableHeader>
									<CDBTableBody style={{verticalAlign: "middle"}}>
										{data.map((venta) =>
											<tr>
												<td>{venta.id}</td>
												<td>{venta.idCliente}</td>
												<td>{venta.idProducto}</td>
												<td>{venta.cantidad}</td>
												<td>{venta.precioTotal} €</td>
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