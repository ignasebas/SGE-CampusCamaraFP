import React from "react";
import { CDBBtn} from "cdbreact";
import VentasForm from "./VentasForm";
import ComprasForm from "./ComprasForm";
import {HiMagnifyingGlass} from 'react-icons/hi2';

const LensModal = ({handleShow, ventas, compras, state}) => {

	return (
		<div className="modal-full">
			<div className="modal-container">
				<div className="modal-header">
					<div><HiMagnifyingGlass/></div>
				</div>
				<div>
				<div className="modal-body">
					{!compras ? (
						<>
						</>
					):(
						<ComprasForm lens state={state}/>
					)}
					{!ventas ? (
						<>
						</>
					):(
						<VentasForm lens state={state}/>
					)}
				</div>
				</div>
				<div className="modal-footer">
                    <CDBBtn className={"cancel-button"} onClick={handleShow}>
						Aceptar
					</CDBBtn>
				</div>
			</div>
		</div>
	);
}

export default LensModal;
