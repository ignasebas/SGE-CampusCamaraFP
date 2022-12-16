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
			{!edit ? (
				<>
				</>
			):(
				<>

					<table>
					<tr>
						<td><label style={{marginLeft:"150px", marginTop:"5px"}}>DNI/NIF: </label></td>
						<td><input type={'text'} style={{marginLeft:"20px", marginTop:"5px"}}></input></td>
					</tr>
					<tr>
						<td><label style={{marginLeft:"150px", marginTop:"5px"}}>Nombre: </label></td>
						<td><input type={'text'} style={{marginLeft:"20px", marginTop:"5px"}}></input></td>
					</tr>
					<tr>
						<td><label style={{marginLeft:"150px", marginTop:"5px"}}>Apellidos: </label></td>
						<td><input type={'text'} style={{marginLeft:"20px", marginTop:"5px"}}></input></td>
					</tr>
					<tr>
						<td><label style={{marginLeft:"150px", marginTop:"5px"}}>Teléfono: </label></td>
						<td><input type={'text'} style={{marginLeft:"20px", marginTop:"5px"}}></input></td>
					</tr>
					<tr>
						<td><label style={{marginLeft:"150px", marginTop:"5px"}}>Email: </label></td>
						<td><input type={'text'} style={{marginLeft:"20px", marginTop:"5px"}}></input></td>
					</tr>
					<tr>
						<td><label style={{marginLeft:"150px", marginTop:"5px"}}>Dirección: </label></td>
						<td><input type={'text'} style={{marginLeft:"20px", marginTop:"5px"}}></input></td>
					</tr>
					</table>
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
