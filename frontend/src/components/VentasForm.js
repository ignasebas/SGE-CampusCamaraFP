import React from "react";

const ClientesForm = ({add,edit,del}) => {


	return (
		<>
			{!add ? (
				<>
				</>
			):(
				<>
					<center>
						<table cellPadding={"5px"}>
							<tr>
								<td><label>Nombre cliente: </label></td>
								<td><input type={'text'} style={{marginLeft:"20px"}}></input></td>
							</tr>
							<tr>
								<td><label>Apellidos cliente: </label></td>
								<td><input type={'text'} style={{marginLeft:"20px"}}></input></td>
							</tr>
							<tr>
								<td><label>Fecha de venta: </label></td>
								<td><input type={'text'} style={{marginLeft:"20px"}}></input></td>
							</tr>
							<tr>
								<td><label>Observaciones: </label></td>
								<td><input type={'text'} style={{marginLeft:"20px"}}></input></td>
							</tr>
							<tr>
								<td><label>Precio total: </label></td>
								<td><input type={'text'} style={{marginLeft:"20px"}}></input></td>
							</tr>
						</table>
					</center>
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
