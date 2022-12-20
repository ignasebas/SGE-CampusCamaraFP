import React, {useEffect, useState} from "react";
import { CDBBtn} from "cdbreact";
import ClientesForm from "./ClientesForm";
import VentasForm from "./VentasForm";
import ComprasForm from "./ComprasForm";
import EmpleadosForm from "./EmpleadosForm";
import ProductosForm from "./ProductosForm";
import ProveedoresForm from "./ProveedoresForm";
import { postCliente } from "../services/clientesAPI";
import { postProducto } from "../services/productosAPI";
import { postVentas } from "../services/ventasAPI";
import { postProveedor } from "../services/proveedoresAPI";
import { postEmpleados } from "../services/empleadosAPI";
const AddModal = ({handleShow,place,state,clientes,compras,empleados,productos,proveedores,ventas}) => {

	
	const addNew = () => {
		if (place === "clientes") {
			const { dni, nombre, apellidos, telefono, email, direccion } = state;
		  	postCliente({"nif":dni,"nombre":nombre,"apellidos":apellidos,"telefono":telefono,"email":email,"direccion":direccion});
			handleShow()
		} 
		
		if (place === "productos") {
			const { nombre, proveedorID, proveedorNombre, proveedorPrecioCompra, precioVenta, imagen, tasas, descripcion } = state;
		  	postProducto({"nombre":nombre, "provedor.id":proveedorID, "proveedor.nombre":proveedorNombre, "proveedor.precioCompra":proveedorPrecioCompra, "precioVenta":precioVenta, "imagen":imagen,"tasas":tasas,"descripcion":descripcion, });
			handleShow()
		}

		if (place === "ventas") {
			const { dni, nombre, apellidos, email, direccion, fechaVenta, precioTotal, observaciones, descripcion} = state;
		  	postVentas({"DNI":dni, "Nombre":nombre, "Apellidos":apellidos, "Email":email, "Direccion":direccion, "Fecha venta":fechaVenta, "Precio total":precioTotal, "Observaciones":observaciones,"Descripción":descripcion});
			handleShow()
		}

		if (place === "proveedor") {
			const { cif, nombre, contacto, direccion, telefono, email } = state;
		  	postProveedor({"CIF":cif,"Nombre":nombre,"Contacto":contacto,"Dirección":direccion,"Teléfono":telefono,"Email":email});
			handleShow()
		}
		if (place === "empleados") {
			const { nif, nombre, apellidos, telefono, email, direccion, puesto } = state;
		  	postEmpleados({"Nif":nif,"Nombre":nombre,"Apellidos":apellidos,"Telefono":telefono,"Email":email, "Direccion":direccion,"Puesto":puesto});
			handleShow()
		}
	};
	  
	return (
		<div className="modal-full">
			<div className="modal-container">
				<div className="modal-header">
					<div>Añadir datos</div>
				</div>
				<div className="modal-body">Introduzca la información:</div>
				<div className="modal-body">
					{!clientes ? (
						<>
						</>
					):(
						<ClientesForm add state={state} />
					)}
					{!compras ? (
						<>
						</>
					):(
						<ComprasForm add/>
					)}
					{!empleados ? (
						<>
						</>
					):(
						<EmpleadosForm add/>
					)}
					{!productos ? (
						<>
						</>
					):(
						<ProductosForm add state={state} />
					)}
					{!proveedores ? (
						<>
						</>
					):(
						<ProveedoresForm add/>
					)}
					{!ventas ? (
						<>
						</>
					):(
						<VentasForm add/>
					)}
				</div>
				<div className="modal-footer">
					<CDBBtn className={"discard-button"} onClick={handleShow}>
						Descartar
					</CDBBtn>
					<CDBBtn className={"confirm-button"} onClick={addNew} style={{marginLeft:"15px"}}>
						Guardar
					</CDBBtn>
				</div>
			</div>
		</div>
	);
}

export default AddModal;
