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
					<div>
						<label>CIF: </label>
						<input 
							type={'text'} 
							style={{marginLeft:"20px"}}
							value={cif}
							onChange={(event) => setCif(event.target.value)}></input>
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
						<label>Contacto: </label>
						<input 
							type={'text'} 
							style={{marginLeft:"20px"}}
							value={contacto}
							onChange={(event) => setContacto(event.target.value)}></input>
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
			
				</>
			)}
			{!edit ? (
				<>
				</>
			):(
				<>
						<div>
						<label>CIF: </label>
						<input type={'text'} style={{marginLeft:"20px"}}></input>
					</div>
					<br/>
					<div>
						<label>Nombre: </label>
						<input type={'text'} style={{marginLeft:"20px"}}></input>
					</div>
					<br/>
					<div>
						<label>Contacto: </label>
						<input type={'text'} style={{marginLeft:"20px"}}></input>
					</div>
					<br/>
					<div>
						<label>Dirección: </label>
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

export default ProveedoresForm;
