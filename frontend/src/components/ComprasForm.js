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
		setObservaciones,
		productos,
		setProductos,
		productoData,
		
	}=state;

	const addProduct = (venta) => {
		setProductos(oldArray => [...oldArray, venta]);
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
						<br/>
						<div>
							<label>Productos:</label>
							{productoData.map((product, index) => (
								<tr key={index} onClick={() => addProduct(product)}>
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
						</div>
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
							<th style={{padding: "0px 150px 0px 0px"}}>Datos del proveedor</th>
							<th>Infomación de la compra</th>
						</tr>
						<tr>
							<td>CIF:</td>
							<td>Fecha:</td>
						</tr>
						<tr>
								<td>{cif}</td>
								<td>{fechaCompra}</td>
							</tr>
						<tr>
							<td>Nombre:&nbsp;{nombre}</td>
							<td>Precio total:&nbsp;{precioTotal}</td>
						</tr>
						<tr>
							<td>Direccion:&nbsp;{direccion}</td>
							<td>Observaciones:&nbsp;{observaciones}</td>
						</tr>
						<tr>
							<td>Email:&nbsp;{email}</td>
						</tr>
						<tr>
							<td>Teléfono:&nbsp;{telefono}</td>
						</tr>
						<br/>
						<label>Productos:</label>
						{productos.map((product, index) => (
								
								<tr key={index}>
									<td>
										<label>Nombre:&nbsp;</label>{product.nombre}
									</td>
									<td>
										<label>Precio:&nbsp;</label>{product.precioVenta.$numberDecimal} €
									</td>
									<td>
										<label>Tasas:&nbsp;</label>{product.tasas} %
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
					<center>¿Estás seguro de que deseas eliminar ... de la base de datos?</center>
				</div>
			)}
		</>
	);
}

export default ComprasForm;
