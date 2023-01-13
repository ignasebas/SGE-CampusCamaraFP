import React from "react";

const VentasForm = ({add,lens,del,state}) => {

	console.log(state)

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
			{!lens ? (
				<>
				</>
			):(
				<center>
						<table cellPadding={"20px"}>
							<tr>
								<th>Datos del cliente</th>
								<th>Infomación de la venta</th>
							</tr>
							<tr>
								<td>NIF/DNI:</td>
								<td>Fecha:</td>
							</tr>
							<tr>
								<td>{nombreCliente}</td>
								<td></td>
							</tr>
							<tr>
								<td>Nombre:</td>
								<td>Precio total:</td>
							</tr>
							<tr>
								<td>Apellidos:</td>
								<td>Observaciones:</td>
							</tr>
							<tr>
								<td>Email:</td>
							</tr>
							<tr>
								<td>Dirección:</td>
								
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
