import React, {useEffect, useState} from "react";
import { CDBBtn} from "cdbreact";
import ClientesForm from "./ClientesForm";
import VentasForm from "./VentasForm";
import ComprasForm from "./ComprasForm";
import EmpleadosForm from "./EmpleadosForm";
import ProductosForm from "./ProductosForm";
import ProveedoresForm from "./ProveedoresForm";

const AddModal = ({handleShow,clientes,compras,empleados,productos,proveedores,ventas}) => {

	const [dni, setDni] = useState(false);
	const [nombre, setNombre] = useState(false);
	const [apellidos, setApellidos] = useState(false);
	const [telefono, setTelefono] = useState(false);
	const [email, setEmail] = useState(false);
	const [direccion, setDireccion] = useState(false);

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
						<ClientesForm add/>
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
					<CDBBtn className={"confirm-button"} onClick={handleShow} style={{marginLeft:"15px"}}>
						Guardar
					</CDBBtn>
				</div>
			</div>
		</div>
	);
}

export default AddModal;
