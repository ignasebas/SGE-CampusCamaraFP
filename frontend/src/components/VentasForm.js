import React from "react";

const VentasForm = ({add,edit,del,state}) => {

	const {
		dni,
		setDni,
		nombreCliente,
		setNombre,
		apellidos,
		setApellidos,
		email,
		setEmail,
		direccion,
		setDireccion,
		fechaVenta,
		setFechaVenta,
		precioTotal,
		setPrecioTotal,
		observaciones,
		setObservaciones,
		productos,
	 	setProductos
	} = state;

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
								<td><label>NIF/DNI del cliente: </label></td>
								<td><input 
									type={'text'} 
									style={{marginLeft:"20px"}}
									value={dni}
									onChange={(event) => setDni(event.target.value)}></input></td>
							</tr>
							<tr>
								<td><label>Nombre del cliente: </label></td>
								<td><input 
									type={'text'} 
									style={{marginLeft:"20px"}}
									value={nombreCliente}
									onChange={(event) => setNombre(event.target.value)}></input></td>
							</tr>
							<tr>
								<td><label>Apellidos del cliente: </label></td>
								<td><input 
									type={'text'} 
									style={{marginLeft:"20px"}}
									value={apellidos}
									onChange={(event) => setApellidos(event.target.value)}></input></td>
							</tr>
							<tr>
								<td><label>Email: </label></td>
								<td><input 
									type={'text'} 
									style={{marginLeft:"20px"}}
									value={email}
									onChange={(event) => setEmail(event.target.value)}></input></td>
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
								<td><label>Fecha de venta: </label></td>
								<td><input 
									type={'text'} 
									style={{marginLeft:"20px"}}
									value={fechaVenta}
									onChange={(event) => setFechaVenta(event.target.value)}></input></td>
							</tr>
							<tr>
								<td><label>Precio total: </label></td>
								<td><input 
									type={'text'} 
									style={{marginLeft:"20px"}}
									value={precioTotal}
									onChange={(event) => setPrecioTotal(event.target.value)}></input></td>
							</tr>
							<tr>
								<td><label>Observaciones: </label></td>
								<td><input 
									type={'text'} 
									style={{marginLeft:"20px"}}
									value={observaciones}
									onChange={(event) => setObservaciones(event.target.value)}></input></td>
							</tr>
						</table>
					</center>
				</>
			)}
			{!edit ? (
				<>
				</>
			):(
				<center>
						<table cellPadding={"5px"}>
							<tr>
								<td><label>NIF/DNI del cliente: </label></td>
								<td></td>
							</tr>
							<tr>
								<td><label>Nombre del cliente: </label></td>
								<td></td>
							</tr>
							<tr>
								<td><label>Apellidos del cliente: </label></td>
								<td></td>
							</tr>
							<tr>
								<td><label>Email: </label></td>
								<td></td>
							</tr>
							<tr>
								<td><label>Dirección: </label></td>
								<td></td>
							</tr>
							<tr>
								<td><label>Fecha de venta: </label></td>
								<td></td>
							</tr>
							<tr>
								<td><label>Precio total: </label></td>
								<td></td>
							</tr>
							<tr>
								<td><label>Observaciones: </label></td>
								<td></td>
							</tr>
						</table>
					</center>
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

export default VentasForm;
