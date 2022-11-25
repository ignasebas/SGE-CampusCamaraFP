import React from "react";
import { CDBBtn} from "cdbreact";

const DeleteModal = ({handleShow}) => {

	return (
		<div className="modal-full">
			<div className="modal-container">
				<div className="modal-header">
					<div>ELIMINAR</div>
				</div>
				<div className="modal-body">
					¿Estás seguro de que deseas eliminar a ... de la base de datos?
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
