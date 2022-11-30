import React from "react";

const ClientesForm = ({add,edit,del}) => {


	return (
		<>
			{!add ? (
				<>
				</>
			):(
				<>
					<div>
						<label>Nombre proveedor: </label>
						<input type={'text'} style={{marginLeft:"20px"}}></input>
					</div>
					<br/>
					<div>
						<label>Fecha de compra: </label>
						<input type={'text'} style={{marginLeft:"20px"}}></input>
					</div>
					<br/>
					<div>
						<label>Observaciones: </label>
						<input type={'text'} style={{marginLeft:"20px"}}></input>
					</div>
					<br/>
					<div>
						<label>Precio total: </label>
						<input type={'text'} style={{marginLeft:"20px"}}></input>
					</div>
				</>
			)}
			{!edit ? (
				<>
				</>
			):(
				<input type={'text'}></input>
			)}
			{!del ? (
				<>
				</>
			):(
				<div>
					¿Estás seguro de que deseas eliminar ... de la base de datos?
				</div>
			)}
		</>
	);
}

export default ClientesForm;
