import React, {useEffect, useState} from "react";
import { CDBBtn} from "cdbreact";
import ClientesForm from "./ClientesForm";
import VentasForm from "./VentasForm";
import ComprasForm from "./ComprasForm";
import EmpleadosForm from "./EmpleadosForm";
import ProductosForm from "./ProductosForm";
import ProveedoresForm from "./ProveedoresForm";
import { postCliente } from "../services/clientesAPI";

const AddModal = ({handleShow,place,state,clientes,compras,empleados,productos,proveedores,ventas}) => {

	
	const addNew = () => {
		if (place === "clientes") {
			const { dni, nombre, apellidos, telefono, email, direccion } = state;
		  	postCliente({"nif":dni,"nombre":nombre,"apellidos":apellidos,"telefono":telefono,"email":email,"direccion":direccion});
			handleShow()
		} else {
		  	console.log("Not cliente");
		}
	};
	  
	return (
		<div className="modal-full">
			<div className="modal-container">
				<div className="modal-header">
					<div>Añadir datos</div>
				</div>
				<div className="modal-body">Introduzca la información...</div>
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
						<ProductosForm add/>
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
