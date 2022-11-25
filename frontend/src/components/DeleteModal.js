import React from "react";
import { CDBBtn} from "cdbreact";
import ClientesForm from "./ClientesForm";
import VentasForm from "./VentasForm";
import ComprasForm from "./ComprasForm";
import EmpleadosForm from "./EmpleadosForm";
import ProductosForm from "./ProductosForm";
import ProveedoresForm from "./ProveedoresForm";

const DeleteModal = ({handleShow}) => {

	return (
		<div className="modal-full">
			<div className="modal-container">
				<div className="modal-header">
					<div>ELIMINAR</div>
				</div>
				<div className="modal-body">
					¿Estás seguro de que deseas eliminar a ... de la base de datos?
					{!clientes ? (
						<>
						</>
					):(
						<ClientesForm del/>
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
					<CDBBtn className={"discard-button"} onClick={handleShow}>
						Eliminar
					</CDBBtn>
					<CDBBtn className={"cancel-button"} onClick={handleShow}>
						Cancelar
					</CDBBtn>
				</div>
			</div>
		</div>
	);
}

export default DeleteModal;
