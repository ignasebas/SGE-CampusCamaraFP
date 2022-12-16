import React from "react";

const ClientesForm = ({add,edit,del}) => {


	return (
		<>
			{!add ? (
				<>
				</>
			):(
				<>
					
						<label>DNI/NIF: </label>
						<input type={'text'} style={{marginLeft:"20px"}}></input>
					
						<label>Nombre: </label>
						<input type={'text'} style={{marginLeft:"20px"}}></input>

					
						<label>Apellidos: </label>
						<input type={'text'} style={{marginLeft:"20px"}}></input>
					
						<label>Teléfono: </label>
						<input type={'text'} style={{marginLeft:"20px"}}></input>
					
						<label>Email: </label>
						<input type={'text'} style={{marginLeft:"20px"}}></input>
					
				
						<label>Dirección: </label>
						<input type={'text'} style={{marginLeft:"20px"}}></input>
			
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
					<br/>
					<div>
						<label>Nombre: </label>
						<input type={'text'} style={{marginLeft:"20px"}}></input>
					</div>
					<br/>
					<div>
						<label>Apellidos: </label>
						<input type={'text'} style={{marginLeft:"20px"}}></input>
					</div>
					<br/>
					<div>
						<label>Teléfono: </label>
						<input type={'text'} style={{marginLeft:"20px"}}></input>
					</div>
					<br/>
					<div>
						<label>Email: </label>
						<input type={'text'} style={{marginLeft:"20px"}}></input>
					</div>
					<br/>
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
