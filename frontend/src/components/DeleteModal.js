import React from "react";
import { CDBBtn} from "cdbreact";
import ClientesForm from "./ClientesForm";
import VentasForm from "./VentasForm";
import ComprasForm from "./ComprasForm";
import EmpleadosForm from "./EmpleadosForm";
import ProductosForm from "./ProductosForm";
import ProveedoresForm from "./ProveedoresForm";
import { deleteCliente } from "../services/clientesAPI";
import { deleteProducto } from "../services/productosAPI";
import { deleteProveedor } from "../services/proveedoresAPI";
import { deleteEmpleados } from "../services/empleadosAPI";

const DeleteModal = ({handleShow,dataModifier,state,clientes,compras,empleados,productos,proveedores,ventas}) => {

	const addNew = () => {
		const { id } = state;
		const { data, setData } = dataModifier
		if (clientes) {
			deleteCliente(id)
			.then(() => {
				setData(data.filter(client => client._id !== id));
				handleShow();
			})
			.catch(error => {
				handleShow();
			});
		} 
		
		if (productos) {
		  	deleteProducto(id);
			handleShow()
		}

		if (proveedores) {
			deleteProveedor(id);
		  	handleShow()
		}
		if (empleados) {
			deleteEmpleados(id);
		  	handleShow()
		}
	};

	return (
		<div className="modal-full">
			<div className="modal-container">
				<div className="modal-header">
					<div>ELIMINAR</div>
				</div>
				<div className="modal-body">
					{!clientes ? (
						<>
						</>
					):(
						<ClientesForm del state={state}/>
					)}
					{!compras ? (
						<>
						</>
					):(
						<ComprasForm del/>
					)}
					{!empleados ? (
						<>
						</>
					):(
						<EmpleadosForm del/>
					)}
					{!productos ? (
						<>
						</>
					):(
						<ProductosForm del/>
					)}
					{!proveedores ? (
						<>
						</>
					):(
						<ProveedoresForm del/>
					)}
					{!ventas ? (
						<>
						</>
					):(
						<VentasForm del/>
					)}
				</div>
				<div className="modal-footer">
					<CDBBtn className={"discard-button"} onClick={addNew}>
						Eliminar
					</CDBBtn>
					<CDBBtn className={"cancel-button"} onClick={handleShow} style={{marginLeft:"15px"}}>
						Cancelar
					</CDBBtn>
				</div>
			</div>
		</div>
	);
}

export default DeleteModal;
