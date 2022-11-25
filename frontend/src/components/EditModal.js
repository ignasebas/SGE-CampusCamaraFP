import React from "react";
import { CDBBtn} from "cdbreact";

const EditModal = ({handleShow}) => {

	return (
		<div className="modal-full">
			<div className="modal-container">
				<div className="modal-header">
					<div>Editar</div>
				</div>
				<div className="modal-body">Introduzca la nueva información...</div>
				<div className="modal-footer">
					<CDBBtn className={"discard-button"} onClick={handleShow}>
						Descartar
					</CDBBtn>
					<CDBBtn className={"confirm-button"} onClick={handleShow}>
						Guardar cambios
					</CDBBtn>	
				</div>
			</div>
		</div>
	);
}

export default EditModal;
