import React from "react";
import { CDBBtn} from "cdbreact";
import ClientesForm from "./ClientesForm";
import VentasForm from "./VentasForm";
import ComprasForm from "./ComprasForm";
import EmpleadosForm from "./EmpleadosForm";
import ProductosForm from "./ProductosForm";
import ProveedoresForm from "./ProveedoresForm";

const DeleteModal = ({handleShow,clientes,compras,empleados,productos,proveedores,ventas}) => {

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
					<CDBBtn className={"cancel-button"} onClick={handleShow} style={{marginLeft:"15px"}}>
						Cancelar
					</CDBBtn>
				</div>
			</div>
		</div>
	);
}

export default DeleteModal;
