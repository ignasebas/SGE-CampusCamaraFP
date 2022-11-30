import React, {useState} from "react";
import { CDBBtn} from "cdbreact";
import { CDBTable, CDBTableHeader, CDBTableBody } from "cdbreact";
import Sidebar from "../Sidebar";
import {CDBIcon} from "cdbreact";
import Navbar from "../Navbar";
import "./Profile.css"
import {BsGraphUp} from 'react-icons/bs';
import {HiMagnifyingGlass} from 'react-icons/hi2';
import AddModal from "../components/AddModal"
import LensModal from "../components/LensModal"

export const Ventas = () => {

	const data = [		
		{ id: 1, nombre: "Desiree", apellidos: "Collado Ortiz", fechaVenta:"2022/10/20", observaciones:"Bueno, bonito, barato.", precioTotal:500.90},
		{ id: 2, nombre: "Nerea", apellidos: "Baena Llamas", fechaVenta:"2022/10/19", observaciones:"Bueno, bonito, barato.", precioTotal:500.90},
		{ id: 3, nombre: "Pol", apellidos: "Barrio Barrios", fechaVenta:"2022/10/18", observaciones:"Bueno, bonito, barato.", precioTotal:500.90},
		{ id: 4, nombre: "Yaiza", apellidos: "Palma Soriano", fechaVenta:"2022/10/17", observaciones:"Bueno, bonito, barato.", precioTotal:500.90},
		{ id: 5, nombre: "Gregoria", apellidos: "Diaz Valdes", fechaVenta:"2022/10/21", observaciones:"Bueno, bonito, barato.", precioTotal:500.90},
	]

	const [showAdd, setShowAdd] = useState(false);
	const handleShowAdd = () => setShowAdd(!showAdd);
	const [showLens, setShowLens] = useState(false);
	const handleShowLens = () => setShowLens(!showLens);

	return (
		<>
			{!showAdd ? (
				<>
				</>
			):(
				<AddModal ventas handleShow={handleShowAdd}/>
			)}
			{!showLens ? (
				<>
				</>
			):(
				<LensModal handleShow={handleShowLens}/>
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
											<th>ID</th>
											<th>Nombre cliente</th>
											<th>Apellido cliente</th>
											<th>Fecha de venta</th>
											<th>Observaciones</th>
											<th>Precio total</th>
											<th>Acciones</th>
										</tr>
									</CDBTableHeader>
									<CDBTableBody style={{verticalAlign: "middle"}}>
										{data.map((venta) =>
											<tr>
												<td>{venta.id}</td>
												<td>{venta.nombre}</td>
												<td>{venta.apellidos}</td>
												<td>{venta.fechaVenta}</td>
												<td>{venta.observaciones}</td>
												<td>{venta.precioTotal} €</td>
												<td style={{whiteSpace: "nowrap"}}>
													<CDBBtn onClick={handleShowLens} className={"edit-button"} style={{marginRight:"10px"}}>
														<HiMagnifyingGlass/>
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
		</>
	);
}