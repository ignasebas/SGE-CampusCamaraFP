import React from "react";
import { CDBBtn, CDBTable, CDBTableHeader, CDBTableBody} from "cdbreact";
import Sidebar from "../Sidebar";
import {CDBIcon} from "cdbreact";
import Navbar from "../Navbar";
import "./Profile.css"
import { NavLink } from "react-router-dom";
import {AiOutlineShoppingCart} from 'react-icons/ai';
import {HiMagnifyingGlass} from 'react-icons/hi2';

export const Compras = () => {

	const data = [	
		{ id: 1, nombre: "Lessong S.A.", fechaCompra: "2022/10/22", observaciones: "Bueno, bonito, barato.", precioTotal:600.90},
		{ id: 2, nombre: "Viaspect S.A.", fechaCompra: "2022/08/30", observaciones: "Bueno, bonito, barato.", precioTotal:600.90},
		{ id: 3, nombre: "Cellap S.A.", fechaCompra: "2022/07/23", observaciones: "Bueno, bonito, barato.", precioTotal:600.90},
		{ id: 4, nombre: "Karmat S.A.", fechaCompra: "2022/05/12", observaciones: "Bueno, bonito, barato.", precioTotal:600.90},
		{ id: 5, nombre: "Spacus S.A.", fechaCompra: "2022/06/21", observaciones: "Bueno, bonito, barato.", precioTotal:600.90},
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
									<h4 className="font-weight-bold" style={{marginBottom:"0"}}><AiOutlineShoppingCart /> Compras</h4>
									<CDBBtn className={"add-button"}>
										<CDBIcon icon="plus" className="ml-1" />
									</CDBBtn>
								</div>
								
								<CDBTable striped responsive>
									<CDBTableHeader>
										<tr>
											<th>ID</th>
											<th>Nombre proveedor</th>
											<th>Fecha de compra</th>
											<th>Observaciones</th>
											<th>Precio total</th>
											<th>Acciones</th>
										</tr>
									</CDBTableHeader>
									<CDBTableBody style={{verticalAlign: "middle"}}>
										{data.map((compra) =>
											<tr>
												<td>{compra.id}</td>
												<td>{compra.nombre}</td>
												<td>{compra.fechaCompra}</td>
												<td>{compra.observaciones}</td>
												<td>{compra.precioTotal} €</td>
												<td style={{whiteSpace: "nowrap"}}>
												<NavLink exact to="/" activeClassName="activeClicked">
													<CDBBtn className={"edit-button"} style={{marginRight:"10px"}}>
														<HiMagnifyingGlass/>
													</CDBBtn>
												</NavLink>	
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