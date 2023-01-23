import React from "react";

const VentasForm = ({add,lens,del,state}) => {

	console.log(state)

	const {
		dni,
		setDni,
		nombre,
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
									value={nombre}
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
								<td><label>Productos: </label></td>
								<td><input 
									type={'text'} 
									style={{marginLeft:"20px"}}
									value={productos}
									onChange={(event) => setProductos(event.target.value)}></input></td>
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
						<table cellPadding={"15px"}>
							<tr>
								<th style={{padding: "0px 150px 0px 0px"}}>Datos del cliente</th>
								<th style={{padding: "0px 0px 0px 0px"}}>Infomación de la venta</th>
							</tr>
							<tr>
								<td>NIF/DNI:</td>
								<td>Fecha:</td>
							</tr>
							<tr>
								<td>{dni}</td>
								<td>{fechaVenta}</td>
							</tr>
							<tr>
								<td>Nombre:</td>
								<td>Precio total:</td>
							</tr>
							<tr>
								<td>{nombre} {apellidos}</td>
								<td>{precioTotal}</td>
							</tr>
							<tr>
								<td>Email:</td>
								<td>Observaciones:</td>
							</tr>
							<tr>
								<td>{email}</td>
								<td>{observaciones}</td>
							</tr>
							<tr>
								<td>Dirección:</td>
								<td>Productos:</td>
							</tr>
							<tr>
								<td>{direccion}</td>
								<td>{productos}</td>
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
