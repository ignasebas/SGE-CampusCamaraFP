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
					
					<div>
						<label>Nif: </label>
						<input type={'text'} style={{marginLeft:"20px"}}
						value={nif}
						onChange={(event) => setNif(event.target.value)}></input>
					</div>
					<div>
						<label>Nombre: </label>
						<input type={'text'} style={{marginLeft:"20px"}}
						value={nombre}
						onChange={(event) => setNombre(event.target.value)}></input>
					</div>
					<br/>
					<div>
						<label>Apellidos: </label>
						<input type={'text'} style={{marginLeft:"20px"}}
						value={apellidos}
						onChange={(event) => setApellidos(event.target.value)}></input>
					</div>
					<br/>
					<div>
						<label>Teléfono: </label>
						<input type={'text'} style={{marginLeft:"20px"}}
						value={telefono}
						onChange={(event) => setTelefono(event.target.value)}></input>
					</div>
					<br/>
					<div>
						<label>Email: </label>
						<input type={'text'} style={{marginLeft:"20px"}}
						value={email}
						onChange={(event) => setEmail(event.target.value)}></input>
					</div>
					<br/>
					<div>
						<label>Dirección: </label>
						<input type={'text'} style={{marginLeft:"20px"}}
						value={direccion}
						onChange={(event) => setDireccion(event.target.value)}></input>
					</div>
					<br/>
					<div>
						<label>Puesto: </label>
						<input type={'text'} style={{marginLeft:"20px"}}
						value={puesto}
						onChange={(event) => setPuesto(event.target.value)}
						></input>
					</div>
				</>
			)}
			{!edit ? (
				<>
				</>
			):(
				<>
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
					<br/>
					<div>
						<label>Puesto: </label>
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

export default EmpleadosForm;
