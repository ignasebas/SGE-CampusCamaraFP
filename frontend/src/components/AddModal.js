import React from "react";
import { CDBBtn} from "cdbreact";

const AddModal = ({handleShow}) => {

	return (
		<div className="modal-full">
			<div className="modal-container">
				<div className="modal-header">
					<div>Hola</div>
					<div onClick={handleShow}>
						<button>X</button>
					</div>
				</div>
				<div className="modal-body">BODY</div>
				<div className="modal-footer">
					<CDBBtn className={"delete-button"} onClick={handleShow}>
						Cerrar
					</CDBBtn>
					<CDBBtn className={"add-button"} onClick={handleShow}>
						Guardar
					</CDBBtn>
				</div>
			</div>
		</div>
	);
}

export default AddModal;