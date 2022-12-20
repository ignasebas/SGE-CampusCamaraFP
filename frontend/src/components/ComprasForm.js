import React from "react";

const ComprasForm = ({add,edit,del,state}) => {

	const {
		cif,
		setCif,
		nombre,
		setNombre,
		direccion,
		setDireccion,
		telefono,
		setTelefono,
		email,
		setEmail,
		fechaCompra,
		setFechaCompra,
		precioTotal,
		setPrecioTotal,
		observaciones,
		setObservaciones
		
	}=state;
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
							<td><label>Nombre del cif: </label></td>
							<input 
							type={'text'} 
							style={{marginLeft:"20px"}}
							value={cif}
							onChange={(event) => setCif(event.target.value)}></input>
						</tr>
						<tr>
							<td><label>Nombre: </label></td>
							<input 
							type={'text'} 
							style={{marginLeft:"20px"}}
							value={nombre}
							onChange={(event) => setNombre(event.target.value)}></input>
						</tr>
						<tr>
							<td><label>Direccion: </label></td>
							<input 
							type={'text'} 
							style={{marginLeft:"20px"}}
							value={direccion}
							onChange={(event) => setDireccion(event.target.value)}></input>
						</tr>
						<tr>
							<td><label>Numero de telefono: </label></td>
							<input 
							type={'text'} 
							style={{marginLeft:"20px"}}
							value={telefono}
							onChange={(event) => setTelefono(event.target.value)}></input>
						</tr>
						<tr>
							<td><label>Email: </label></td>
							<input 
							type={'text'} 
							style={{marginLeft:"20px"}}
							value={email}
							onChange={(event) => setEmail(event.target.value)}></input>
						</tr>
						<tr>
							<td><label>Fecha de la compra: </label></td>
							<input 
							type={'text'} 
							style={{marginLeft:"20px"}}
							value={fechaCompra}
							onChange={(event) => setFechaCompra(event.target.value)}></input>
						</tr>
						<tr>
							<td><label>Precio total: </label></td>
							<input 
							type={'text'} 
							style={{marginLeft:"20px"}}
							value={precioTotal}
							onChange={(event) => setPrecioTotal(event.target.value)}></input>
						</tr>
						<tr>
							<td><label>Observaciones: </label></td>
							<input 
							type={'text'} 
							style={{marginLeft:"20px"}}
							value={observaciones}
							onChange={(event) => setObservaciones(event.target.value)}></input>
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
