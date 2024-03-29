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
import Spinner from 'react-bootstrap/Spinner';

export const Productos = () => {

	const[isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		getProductos().then(ProductData => {
			setData(ProductData);
			setIsLoading(false);
		});
	}, []);
	  

	const [data, setData] = useState([]);
	const [error, setError] = useState(null);

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
		console.log(producto)
		setShowEdit(!showEdit);
		setId(producto._id);
		setNombre(producto.nombre);
		setProveedorID(producto.proveedor.id);
		setProveedorNombre(producto.proveedor.nombre);
		setProveedorPrecioCompra(producto.proveedor.precioCompra.$numberDecimal);
		setPrecioVenta(producto.precioVenta.$numberDecimal);
		setImagen(producto.imagen);
		setTasas(producto.tasas);
		setDescripcion(producto.descripcion);
	}

	const handleShowDelete = (producto) => {
		setShowDelete(!showDelete);
		setId(producto._id);
		setNombre(producto.nombre);
		setProveedorID(producto.proveedor.id);
		setProveedorNombre(producto.proveedor.nombre);
		setProveedorPrecioCompra(producto.proveedor.precioCompra.$numberDecimal);
		setPrecioVenta(producto.precioVenta.$numberDecimal);
		setImagen(producto.imagen);
		setTasas(producto.tasas);
		setDescripcion(producto.descripcion);
	}
	
	const [id, setId] = useState("");
	const [nombre, setNombre] = useState("");
	const [proveedorID, setProveedorID] = useState("");
	const [proveedorNombre, setProveedorNombre] = useState("");
	const [proveedorPrecioCompra, setProveedorPrecioCompra] = useState("");
	const [precioVenta, setPrecioVenta] = useState("");
	const [imagen, setImagen] = useState("");
	const [tasas, setTasas] = useState("");
	const [descripcion, setDescripcion] = useState("");

	const dataModifier = {
		data,
		setData
	}

	const state = {
		id,
    	setId,
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
								{isLoading ? (
										<div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
											<Spinner animation="grow" />
										</div>
									) : (
										<>
									<CDBTableHeader>
										<tr>
											<th>Precio de venta</th>
											<th>Precio de compra</th>
											<th>Tasas</th>
											<th>Nombre Proveedor</th>
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
												<td>{producto.proveedor.nombre}</td>
												<td>{producto.imagen}</td>
												<td>{producto.descripcion}</td>
												<td style={{whiteSpace: "nowrap"}}>
													<CDBBtn onClick={() => handleShowEdit(producto)} className={"edit-button"} style={{marginRight:"10px"}}>
														<CDBIcon icon="pen" className="ml-1" />
													</CDBBtn>

													<CDBBtn className={"delete-button"} onClick={() => handleShowDelete(producto)}>
														<CDBIcon icon="trash" className="ml-1" />
													</CDBBtn>
												</td>
											</tr>
										)}
										
									</CDBTableBody>
									</>
									)}
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