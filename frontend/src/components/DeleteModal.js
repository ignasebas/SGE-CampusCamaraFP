import React from "react";
import { CDBBtn} from "cdbreact";

const DeleteModal = ({handleShow}) => {

	return (
		<div className="modal-full">
			<div className="modal-container">
				<div className="modal-header">
					<div>ELIMINAR</div>
					<div onClick={handleShow}>
						<button>X</button>
					</div>
				</div>
				<div className="modal-body">¿Estás seguro de que deseas eliminar a ... de la base de datos?</div>
				<div className="modal-footer">
					<CDBBtn className={"add-button"} onClick={handleShow}>
						Cerrar
					</CDBBtn>
					<CDBBtn className={"delete-button"} onClick={handleShow}>
						Eliminar Para Siempre
					</CDBBtn>
				</div>
			</div>
		</div>
	);
}

export default DeleteModal;
