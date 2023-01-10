import React from "react";

const EmpleadosForm = ({add,edit,del, state}) => {
	const {nif, setNif, nombre, setNombre, apellidos, setApellidos, telefono, setTelefono, email, setEmail, direccion, setDireccion, puesto, setPuesto } = state;

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
								<td><label>NIF: </label></td>
								<td><input type={'text'} style={{marginLeft:"20px"}}
								value={nif}
								onChange={(event) => setNif(event.target.value)}></input></td>
							</tr>
							<tr>
								<td><label>Nombre: </label></td>
								<td><input type={'text'} style={{marginLeft:"20px"}}
								value={nombre}
								onChange={(event) => setNombre(event.target.value)}></input></td>
							</tr>
					
							<tr>
								<td><label>Apellidos: </label></td>
								<td><input type={'text'} style={{marginLeft:"20px"}}
								value={apellidos}
								onChange={(event) => setApellidos(event.target.value)}></input></td>
							</tr>
							
							<tr>
								<td><label>Teléfono: </label></td>
								<td><input type={'text'} style={{marginLeft:"20px"}}
								value={telefono}
								onChange={(event) => setTelefono(event.target.value)}></input></td>
							</tr>
							
							<tr>
								<td><label>Email: </label></td>
								<td><input type={'text'} style={{marginLeft:"20px"}}
								value={email}
								onChange={(event) => setEmail(event.target.value)}></input></td>
							</tr>
							
							<tr>
								<td><label>Dirección: </label></td>
								<td><input type={'text'} style={{marginLeft:"20px"}}
								value={direccion}
								onChange={(event) => setDireccion(event.target.value)}></input></td>
							</tr>
							
							<tr>
								<td><label>Puesto: </label></td>
								<td><input type={'text'} style={{marginLeft:"20px"}}
								value={puesto}
								onChange={(event) => setPuesto(event.target.value)}
								></input></td>
							</tr>
						</table>
					</center>
				</>
			)}
			{!edit ? (
				<>
				</>
			):(
				<>
					<center>
						<table cellPadding={"5px"}>
							<tr>
								<td><label>NIF: </label></td>
								<td><input type={'text'} style={{marginLeft:"20px"}}></input></td>
							</tr>
							<tr>
								<td><label>Nombre: </label></td>
								<td><input type={'text'} style={{marginLeft:"20px"}}></input></td>
							</tr>	
							<tr>
								<td><label>Apellidos: </label></td>
								<td><input type={'text'} style={{marginLeft:"20px"}}></input></td>
							</tr>
							<tr>
								<td><label>Teléfono: </label></td>
								<td><input type={'text'} style={{marginLeft:"20px"}}></input></td>
							</tr>
							<tr>
								<td><label>Email: </label></td>
								<td><input type={'text'} style={{marginLeft:"20px"}}></input></td>
							</tr>
							<tr>
								<td><label>Dirección: </label></td>
								<td><input type={'text'} style={{marginLeft:"20px"}}></input></td>
							</tr>
							<tr>
								<td><label>Puesto: </label></td>
								<td><input type={'text'} style={{marginLeft:"20px"}}></input></td>
							</tr>
						</table>
					</center>			
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

export default EmpleadosForm;
