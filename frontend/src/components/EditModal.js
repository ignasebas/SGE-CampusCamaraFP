import React from "react";
import { CDBBtn} from "cdbreact";
import ClientesForm from "./ClientesForm";
import VentasForm from "./VentasForm";
import ComprasForm from "./ComprasForm";
import EmpleadosForm from "./EmpleadosForm";
import ProductosForm from "./ProductosForm";
import ProveedoresForm from "./ProveedoresForm";
import { updateCliente } from "../services/clientesAPI";
import { updateProducto } from "../services/productosAPI";
import { updateProveedor } from "../services/proveedoresAPI";
import { updateEmpleado } from "../services/empleadosAPI";

const EditModal = ({handleShow,dataModifier,state,clientes,compras,empleados,productos,proveedores,ventas}) => {

	const modalAction = () => {
		
		const { data, setData } = dataModifier
		if (clientes) {
			const { id, dni, nombre, apellidos, telefono, email, direccion } = state;
			updateCliente(id, {"nif":dni,"nombre":nombre,"apellidos":apellidos,"telefono":telefono,"email":email,"direccion":direccion})
			.then(() => {
				let newData = [...data];
				let index = newData.findIndex((client) => client._id === id);
				newData[index] = {"_id": id, "nif":dni,"nombre":nombre,"apellidos":apellidos,"telefono":telefono,"email":email,"direccion":direccion};
				setData(newData);
				handleShow();
			})
			.catch(error => {
				alert(error.response.data.message)
				//handleShow();
			});
		} 
		
		if (productos) { //Cambiar los nombres en naranja del updateProducto por los guardados en la base de datos
			const { nombre, proveedorID, proveedorNombre, proveedorPrecioCompra, precioVenta, imagen, tasas, descripcion } = state;
			updateProducto(id, {"nombre":nombre,"proveedorid":proveedorID, "proveedornombre":proveedorNombre, "proveedorpreciocompra":proveedorPrecioCompra, "precioVenta":precioVenta, "imagen":imagen, "tasas":tasas, "descripción":descripcion})
			.then(() => {
				let newData = [...data];
				let index = newData.findIndex((producto) => producto._id === id);
				newData[index] = {"_id": id, "nombre":nombre,"Id del proveedor":proveedorID, "Nombre del proveedor":proveedorNombre, "Precio de compra":proveedorPrecioCompra, "Precio de venta":precioVenta, "Imagen":imagen, "Tasas":tasas, "Descripción":descripcion};
				setData(newData);
				handleShow();
			})
			.catch(error => {
				handleShow();
			});
			handleShow()
		}

		if (proveedores) {
			const { id, cif, nombre,contacto, direccion, telefono, email } = state;
			updateProveedor(id, {"cif":cif,"nombre":nombre,"contacto":contacto,"direccion":direccion,"telefono":telefono,"email":email})
			.then(() => {
				let newData = [...data];
				let index = newData.findIndex((proveedor) => proveedor._id === id);
				newData[index] = {"_id": id, "cif":cif,"nombre":nombre,"contacto":contacto,"direccion":direccion,"telefono":telefono,"email":email};
				setData(newData);
				handleShow();
			})
			.catch(error => {
				alert(error.response.data.message)
				//handleShow();
			});
		  	handleShow()
		}
	};

	return (
		<div className="modal-full">
			<div className="modal-container">
				<div className="modal-header">
					<div>Editar</div>
				</div>
				<div className="modal-body">
					Introduzca la nueva información...
					{!clientes ? (
						<>
						</>
					):(
						<ClientesForm edit state={state}/>
					)}
					{!compras ? (
						<>
						</>
					):(
						<ComprasForm edit/>
					)}
					{!empleados ? (
						<>
						</>
					):(
						<EmpleadosForm edit state ={state}/>
					)}
					{!productos ? (
						<>
						</>
					):(
						<ProductosForm edit/>
					)}
					{!proveedores ? (
						<>
						</>
					):(
						<ProveedoresForm edit state={state}/>
					)}
					{!ventas ? (
						<>
						</>
					):(
						<VentasForm edit/>
					)}
				</div>
				<div className="modal-footer">
					<CDBBtn className={"delete-button"} onClick={handleShow}>
						Cerrar
					</CDBBtn>
					<CDBBtn className={"edit-button"} onClick={modalAction} style={{marginLeft:"15px"}}>
						Guardar Cambios
					</CDBBtn>
				</div>
			</div>
		</div>
	);
}

export default EditModal;
