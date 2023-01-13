import React from "react";

const ProveedoresForm = ({add,edit,del,state}) => {
	const { cif, setCif, nombre, setNombre, contacto, setContacto, direccion, setDireccion, telefono, setTelefono, email, setEmail } = state;
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
								<td> <label>CIF: </label> </td> 
								<td><input 
									type={'text'} 
									style={{marginLeft:"20px"}}
									value={cif}
									onChange={(event) => setCif(event.target.value)}></input></td>
							</tr>
							<tr>
					
							    <td> <label>Nombre: </label> </td>
								<td> <input 
									type={'text'} 
									style={{marginLeft:"20px"}}
									value={nombre}
									onChange={(event) => setNombre(event.target.value)}></input></td>
							</tr>
							<tr>
								<td><label>Contacto: </label></td>
								<td><input 
									type={'text'} 
									style={{marginLeft:"20px"}}
									value={contacto}
									onChange={(event) => setContacto(event.target.value)}></input></td>
							</tr>
							<tr>
								<td><label>Dirección: </label></td>
								<td><input 
									type={'text'} 
									style={{marginLeft:"20px"}}
									value={direccion}
									onChange={(event) => setDireccion(event.target.value)}></input></td>
							</tr>
							<tr>
								<td><label>Teléfono: </label></td>
								<td><input 
									type={'text'} 
									style={{marginLeft:"20px"}}
									value={telefono}
									onChange={(event) => setTelefono(event.target.value)}></input></td>
							</tr>
							<tr>
								<td><label>Email: </label></td>
								<td><input 
									type={'text'} 
									style={{marginLeft:"20px"}}
									value={email}
									onChange={(event) => setEmail(event.target.value)}></input></td>
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
							<td> <label>CIF: </label> </td> 
							<td><input 
								type={'text'} 
								style={{marginLeft:"20px"}}
								value={cif}
								onChange={(event) => setCif(event.target.value)}></input></td>
						</tr>
						<tr>
				
							<td> <label>Nombre: </label> </td>
							<td> <input 
								type={'text'} 
								style={{marginLeft:"20px"}}
								value={nombre}
								onChange={(event) => setNombre(event.target.value)}></input></td>
						</tr>
						<tr>
							<td><label>Contacto: </label></td>
							<td><input 
								type={'text'} 
								style={{marginLeft:"20px"}}
								value={contacto}
								onChange={(event) => setContacto(event.target.value)}></input></td>
						</tr>
						<tr>
							<td><label>Dirección: </label></td>
							<td><input 
								type={'text'} 
								style={{marginLeft:"20px"}}
								value={direccion}
								onChange={(event) => setDireccion(event.target.value)}></input></td>
						</tr>
						<tr>
							<td><label>Teléfono: </label></td>
							<td><input 
								type={'text'} 
								style={{marginLeft:"20px"}}
								value={telefono}
								onChange={(event) => setTelefono(event.target.value)}></input></td>
						</tr>
						<tr>
							<td><label>Email: </label></td>
							<td><input 
								type={'text'} 
								style={{marginLeft:"20px"}}
								value={email}
								onChange={(event) => setEmail(event.target.value)}></input></td>
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
					¿Estás seguro de que deseas eliminar a {nombre} de la base de datos?
				</div>
			)}
		</>
	);
}

export default ProveedoresForm;
