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
						<label>DNI/NIF: </label>
						<input type={'text'} style={{marginLeft:"20px"}}></input>
					</div>
					<div>
						<label>Nombre: </label>
						<input type={'text'} style={{marginLeft:"20px"}}></input>
					</div>
					<div>
						<label>Apellidos: </label>
						<input type={'text'} style={{marginLeft:"20px"}}></input>
					</div>
					<div>
						<label>Teléfono: </label>
						<input type={'text'} style={{marginLeft:"20px"}}></input>
					</div>
					<div>
						<label>Email: </label>
						<input type={'text'} style={{marginLeft:"20px"}}></input>
					</div>
					<div>
						<label>Dirección: </label>
						<input type={'text'} style={{marginLeft:"20px"}}></input>
					</div>
				</>
			)}
			{!edit ? (
				<>
				</>
			):(
				<>
					<div>
						<label>DNI/NIF: </label>
						<input type={'text'} style={{marginLeft:"20px"}}></input>
					</div>
					<div>
						<label>Nombre: </label>
						<input type={'text'} style={{marginLeft:"20px"}}></input>
					</div>
					<div>
						<label>Apellidos: </label>
						<input type={'text'} style={{marginLeft:"20px"}}></input>
					</div>
					<div>
						<label>Teléfono: </label>
						<input type={'text'} style={{marginLeft:"20px"}}></input>
					</div>
					<div>
						<label>Email: </label>
						<input type={'text'} style={{marginLeft:"20px"}}></input>
					</div>
					<div>
						<label>Dirección: </label>
						<input type={'text'} style={{marginLeft:"20px"}}></input>
					</div>
				</>
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
