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

const AddModal = ({handleShow,place,state,clientes,compras,empleados,productos,proveedores,ventas}) => {

	
	const addNew = () => {
		if (place === "clientes") {
			const { dni, nombre, apellidos, telefono, email, direccion } = state;
		  	postCliente({"nif":dni,"nombre":nombre,"apellidos":apellidos,"telefono":telefono,"email":email,"direccion":direccion});
			handleShow()
		} 
		
		if (place === "productos") {
			const { nombre, proveedor, precioVenta, imagen, tasas, descripcion } = state;
		  	postProducto({"nombre":nombre,"proveedor":proveedor,"precioVenta":precioVenta, "imagen":imagen,"tasas":tasas,"descripcion":descripcion, });
			handleShow()
		}

		if (place === "ventas") {
			const { dni, nombreCliente, apellidos, email, direccion, fechaVenta, precioTotal, observaciones, descripcion} = state;
		  	postVentas({"nif":dni, "nombreCliente":nombreCliente, "apellidos":apellidos, "email":email, "direccion":direccion, "fechaVenta":fechaVenta, "precioTotal":precioTotal, "observaciones":observaciones,"descripcion":descripcion});
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
						<VentasForm add state={state}/>
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
