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
							<td><label>Nombre del proveedor: </label></td>
							<td><input type={'text'} style={{marginLeft:"20px"}}></input></td>
						</tr>
						<tr>
							<td><label>Fecha de compra: </label></td>
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
					<center>¿Estás seguro de que deseas eliminar ... de la base de datos?</center>
				</div>
			)}
		</>
	);
}

export default ClientesForm;
