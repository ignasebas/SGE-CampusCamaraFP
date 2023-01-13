import React from "react";

const ComprasForm = ({add,lens,del,state}) => {

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
							<td><label>CIF: </label></td>
							<input 
							type={'text'} 
							style={{marginLeft:"20px"}}
							value={cif}
							onChange={(event) => setCif(event.target.value)}></input>
						</tr>
						<tr>
							<td><label>Nombre de proveedor: </label></td>
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
							<td><label>Teléfono: </label></td>
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
			{!lens ? (
				<>
				</>
			):(
				<center>
					<table cellPadding={"20px"}>
						<tr>
							<th>Datos del proveedor</th>
							<th>Infomación de la compra</th>
						</tr>
						<tr>
							<td>CIF:</td>
							<td>Fecha:</td>
						</tr>
						<tr>
							<td>Nombre:</td>
							<td>Precio total:</td>
						</tr>
						<tr>
							<td>Direccion:</td>
							<td>Observaciones:</td>
						</tr>
						<tr>
							<td>Email:</td>
						</tr>
						<tr>
							<td>Teléfono:</td>
						</tr>
					</table>
				</center>
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

export default ComprasForm;
