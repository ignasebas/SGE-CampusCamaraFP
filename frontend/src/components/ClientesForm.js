import React from "react";

const ClientesForm = ({add,edit,del,state}) => {
	const { dni, setDni, nombre, setNombre, apellidos, setApellidos, telefono, setTelefono, email, setEmail, direccion, setDireccion } = state;
	return (
		<>
			{!add || !edit ? (
				<>
				</>
			):(
				<>
					<div>
						<label>DNI/NIF: </label>
						<input 
							type={'text'} 
							style={{marginLeft:"20px"}}
							value={dni}
							onChange={(event) => setDni(event.target.value)}></input>
					</div>
					<br/>
					<div>
						<label>Nombre: </label>
						<input 
							type={'text'} 
							style={{marginLeft:"20px"}}
							value={nombre}
							onChange={(event) => setNombre(event.target.value)}></input>
					</div>
					<br/>
					<div>
						<label>Apellidos: </label>
						<input 
							type={'text'} 
							style={{marginLeft:"20px"}}
							value={apellidos}
							onChange={(event) => setApellidos(event.target.value)}></input>
					</div>
					<br/>
					<div>
						<label>Teléfono: </label>
						<input 
							type={'text'} 
							style={{marginLeft:"20px"}}
							value={telefono}
							onChange={(event) => setTelefono(event.target.value)}></input>
					</div>
					<br/>
					<div>
						<label>Email: </label>
						<input 
							type={'text'} 
							style={{marginLeft:"20px"}}
							value={email}
							onChange={(event) => setEmail(event.target.value)}></input>
					</div>
					<br/>
					<div>
						<label>Dirección: </label>
						<input 
							type={'text'} 
							style={{marginLeft:"20px"}}
							value={direccion}
							onChange={(event) => setDireccion(event.target.value)}></input>
					</div>
			
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

export default ClientesForm;
