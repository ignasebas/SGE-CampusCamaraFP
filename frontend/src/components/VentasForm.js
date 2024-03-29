import React, {useState} from "react";

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
	 	setProductos,
		productoData,
		clienteData,
	} = state;

	const [selectedProductos, setSelectedProductos] = useState(-1);
	const addProduct = (id, venta) => {

		const productExists = productos.some(product => product._id === venta._id);

		if (!productExists) {
			setSelectedProductos(id);
			setProductos(oldArray => [...oldArray, venta]);
		}
	};

	const [selectedCliente, setSelectedCliente] = useState(-1);
	const addCliente = (id, cliente) => {
		setSelectedCliente(id);
		setDni(cliente.nif);
		setNombre(cliente.nombre);
		setApellidos(cliente.apellidos);
		setDireccion(cliente.direccion);
		setEmail(cliente.email);
	};

	return (
		<>
			{!add ? (
				<>
				</>
			):(
				<>
					<center>
						<table cellPadding={"5px"}>
							<tbody>
								<div>
									<label>Cliente:</label>
									{clienteData.map((cliente, index) => (
										<tr key={index} style={{backgroundColor: selectedCliente === index ? "#bfbfbf" : ""}} onClick={() => addCliente(index, cliente)}>
											<td>
												Nombre:&nbsp;{cliente.nombre}
											</td>
										</tr>
									))}
								</div>
								<br/>
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
								<br/>
								<div>
									<label>Productos:</label>
									{productoData.map((producto, index) => (
										<tr key={index} style={{backgroundColor: productos.some(product => product._id === producto._id) ? "#bfbfbf" : ""}} onClick={() => addProduct(index, producto)}>
											<td>
												Nombre:&nbsp;{producto.nombre}
											</td>
											<td>
												Precio:&nbsp;{producto.precioVenta.$numberDecimal} €
											</td>
											<td>
												Tasas:&nbsp;{producto.tasas} %
											</td>
										</tr>
									))}
								</div>
							</tbody>
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
								<th style={{padding: "0px 140px 0px 0px"}}>Datos del cliente</th>
								<th style={{padding: "0px 0px 0px 0px"}}>Infomación de la venta</th>
							</tr>
							<tr>
								<td>NIF/DNI: {dni}</td>
								<td>Fecha: {fechaVenta}</td>
							</tr>
							<tr>
								<td>Nombre: {nombre} {apellidos}</td>
								<td>Precio total: {precioTotal}</td>
							</tr>
							<tr>
								<td>Email: {email}</td>
								<td>Observaciones:&nbsp;{observaciones}</td>
							</tr>
							<tr>
								<td>Dirección: {direccion}</td>
							</tr>
							<br/>
							<label>Productos:</label>
							{productos.map((product, index) => (
								<tr key={index}>
									<td>
										Nombre:&nbsp;{product.nombre}
									</td>
									<td>
										Precio:&nbsp;{product.precioVenta.$numberDecimal} €
									</td>
									<td>
										Tasas:&nbsp;{product.tasas} %
									</td>
								</tr>
							))}
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
