import React from "react";
import { CDBBtn} from "cdbreact";
import {SlClose} from 'react-icons/sl';
import {HiMagnifyingGlass} from 'react-icons/hi2';

const LensModal = ({handleShow}) => {

	return (
		<div className="modal-full">
			<div className="modal-container">
				<div className="modal-header">
					<div><HiMagnifyingGlass/></div>
                    <div onClick={handleShow}>
                        <button> <SlClose/> </button>
                    </div>
				</div>
				<div>
					<img className="image404" alt="404" src="/pagame.webp"  width="500px" />
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
