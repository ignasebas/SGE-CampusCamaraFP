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
import { postCompras } from "../services/comprasAPI";
import { postProveedor } from "../services/proveedoresAPI";
import { postEmpleados } from "../services/empleadosAPI";
import { postCalendario } from "../services/calendarioAPI";


const AddModal = ({handleShow,dataModifier,state,clientes,compras,empleados,productos,proveedores,ventas,calendario}) => {

	const addNew = () => {
		const { data, setData } = dataModifier
		if (clientes) {
			const { dni, nombre, apellidos, telefono, email, direccion } = state;
			postCliente({"nif":dni,"nombre":nombre,"apellidos":apellidos,"telefono":telefono,"email":email,"direccion":direccion})
			.then((newClient) => {
				setData([...data, newClient]);
				handleShow();
			})
			.catch(error => {
				handleShow()
			});
			
		} 

		if (calendario) {
			const { fecha, evento, descripcion,} = state;
			postCalendario({"fecha":fecha,"evento":evento,"descripcion":descripcion})
			.then((newCalendar) => {
				setData([...data, newCalendar]);
				handleShow();
			})
			.catch(error => {
				handleShow()
			});
		}
		
		if (productos) {
			const { nombre, proveedor, precioVenta, imagen, tasas, descripcion } = state;
		  	postProducto({"nombre":nombre,"proveedor":proveedor,"precioVenta":precioVenta, "imagen":imagen,"tasas":tasas,"descripcion":descripcion, });
			handleShow()
		}

		if (ventas) {
			const { dni, nombreCliente, apellidos, email, direccion, fechaVenta, precioTotal, observaciones, descripcion} = state;
		  	postVentas({"nif":dni, "nombreCliente":nombreCliente, "apellidos":apellidos, "email":email, "direccion":direccion, "fechaVenta":fechaVenta, "precioTotal":precioTotal, "observaciones":observaciones,"descripcion":descripcion});
			handleShow()
		}

		if (proveedores) {
			const { cif, nombre,contacto, direccion, telefono, email } = state;
		  	postProveedor({"cif":cif,"nombre":nombre,"contacto":contacto,"direccion":direccion,"telefono":telefono,"email":email})
			.then((newProvedor) => {
				setData([...data, newProvedor]);
				handleShow();
			})
			.catch(error => {
				handleShow()
			});
		}
		if (empleados) {
			const { nif, nombre, apellidos, telefono, email, direccion, puesto } = state;
		  	postEmpleados({"nif":nif,"nombre":nombre,"apellidos":apellidos,"telefono":telefono,"email":email, "direccion":direccion,"puesto":puesto})
			.then((newEmpleado) => {
				setData([...data, newEmpleado]);
				handleShow();
			})
			.catch(error => {
				handleShow()
			});
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
						<ComprasForm add state={state}/>
					)}
					{!empleados ? (
						<>
						</>
					):(
						<EmpleadosForm add state={state}/>
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
						<ProveedoresForm add state={state}/>
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
