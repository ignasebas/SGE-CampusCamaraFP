import React, {useState,useEffect} from "react";
import { CDBBtn} from "cdbreact";
import { CDBTable, CDBTableHeader, CDBTableBody } from "cdbreact";
import Sidebar from "../Sidebar";
import {CDBIcon} from "cdbreact";
import Navbar from "../Navbar";
import "./Profile.css"
import AddModal from "../components/AddModal"
import EditModal from "../components/EditModal"
import DeleteModal from "../components/DeleteModal"
import { getProductos } from "../services/productosAPI";


export const Productos = () => {

	useEffect(() => {
		
		getProductos().then(ProductData => {
		  setData(ProductData);
		});
		
	}, []);
	  

	const [data, setData] = useState([]);
	const [error, setError] = useState(null);
	const[isLoading, setIsLoading] = useState(false);

	const [showAdd, setShowAdd] = useState(false);
	const [showEdit, setShowEdit] = useState(false);
	const [showDelete, setShowDelete] = useState(false);


	const handleShowAdd = () => {
		setShowAdd(!showAdd);
		if(nombre && proveedorID && proveedorNombre && proveedorPrecioCompra && precioVenta && imagen && tasas && descripcion != ""){
			setNombre("");
			setProveedorID("");
			setProveedorNombre("");
			setProveedorPrecioCompra("");
			setPrecioVenta("");
			setImagen("");
			setTasas("");
			setDescripcion("");
		}
	}

	const handleShowEdit = (producto) =>{
		setShowEdit(!showEdit);
		setNombre(producto._nombre);
		setProveedorID(producto._proveedorID);
		setProveedorNombre(producto._proveedorNombre);
		setProveedorPrecioCompra(producto._proveedorPrecioCompra);
		setPrecioVenta(producto._precioVenta);
		setImagen(producto._imagen);
		setTasas(producto._tasas);
		setDescripcion(producto._descrpcion);
	}

	const handleShowDelete = (producto) => {
		setShowDelete(!showDelete);
		setNombre(producto._nombre);
		setProveedorID(producto._proveedorID);
		setProveedorNombre(producto._proveedorNombre);
		setProveedorPrecioCompra(producto._proveedorPrecioCompra);
		setPrecioVenta(producto._precioVenta);
		setImagen(producto._imagen);
		setTasas(producto._tasas);
		setDescripcion(producto._descrpcion);
	}
	
	const [nombre, setNombre] = useState("");
	const [proveedorID, setProveedorID] = useState("");
	const [proveedorNombre, setProveedorNombre] = useState("");
	const [proveedorPrecioCompra, setProveedorPrecioCompra] = useState("");
	const [precioVenta, setPrecioVenta] = useState("");
	const [imagen, setImagen] = useState("");
	const [tasas, setTasas] = useState("");
	const [descripcion, setDescripcion] = useState("");

	const state = {
		nombre,
		setNombre,
		proveedorID,
		setProveedorID,
		proveedorNombre,
		setProveedorNombre,
		proveedorPrecioCompra,
		setProveedorPrecioCompra,
		precioVenta,
		setPrecioVenta,
		imagen,
		setImagen,
		tasas,
		setTasas,
		descripcion,
		setDescripcion
	};

	const place = "productos"

	console.log(data)

	return (
		<>
			{!showAdd ? (
				<>
				</>
			):(
				<AddModal productos handleShow={handleShowAdd} dataModifier={dataModifier} state={state}/>
			)}
			{!showEdit ? (
				<>
				</>
			):(
				<EditModal productos handleShow={handleShowEdit} dataModifier={dataModifier} state={state}/>
			)}
			{!showDelete ? (
				<>
				</>
			):(
				<DeleteModal productos handleShow={handleShowDelete} dataModifier={dataModifier} state={state}/>
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
									<h4 className="font-weight-bold" style={{marginBottom:"0"}}><CDBIcon icon="flask"/> Productos</h4>
									<CDBBtn className={"add-button"} onClick={handleShowAdd}>
										<CDBIcon icon="plus" className="ml-1" />
									</CDBBtn>
								</div>
								
								<CDBTable striped responsive>
									<CDBTableHeader>
										<tr>
											<th>Precio de venta</th>
											<th>Precio de compra</th>
											<th>Tasas</th>
											<th>ID Proveedor</th>
											<th>Imagen</th>
											<th>Descripción</th>
											<th>Acciones</th>
										</tr>
									</CDBTableHeader>
									<CDBTableBody style={{verticalAlign: "middle"}}>
										{data.map((producto) =>
											<tr>
												<td>{producto.precioVenta.$numberDecimal}</td>
												<td>{producto.proveedor.precioCompra.$numberDecimal}</td>
												<td>{producto.tasas}</td>
												<td>{producto.proveedor.id}</td>
												<td>{producto.imagen}</td>
												<td>{producto.descripcion}</td>
												<td style={{whiteSpace: "nowrap"}}>
													<CDBBtn onClick={handleShowEdit} className={"edit-button"} style={{marginRight:"10px"}}>
														<CDBIcon icon="pen" className="ml-1" />
													</CDBBtn>

													<CDBBtn className={"delete-button"} onClick={handleShowDelete}>
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
		</>
	);
}