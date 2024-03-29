import React, {useState} from "react";

const ComprasForm = ({add,lens,del,state}) => {

	console.log(state)
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
		proveedorData,
		
	}=state;

	const [selectedProductos, setSelectedProductos] = useState(-1);
	const addProduct = (id,venta) => {
		

		const productExists = productos.some(product => product._id === venta._id);

		if (!productExists) {
			setSelectedProductos(id);
			setProductos(oldArray => [...oldArray, venta]);
		}
	};

	const [selectedProveedor, setSelectedProvedor] = useState(-1);
	const addProveedor = (id, proveedor) => {
		setSelectedProvedor(id);
		setCif(proveedor.cif);
		setNombre(proveedor.nombre);
		setDireccion(proveedor.direccion);
		setTelefono(proveedor.telefono);
		setEmail(proveedor.email);
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
						<div>
							<label>Proveedor:</label>
							{proveedorData.map((proveedor, index) => (
								<tr key={index} style={{backgroundColor: selectedProveedor === index ? "#bfbfbf" : ""}} onClick={() => addProveedor(index,proveedor)}>
									<td>
										Nombre:&nbsp;{proveedor.nombre}
									</td>
								</tr>
							))}
						</div>
						<br/>
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
							<td>CIF:&nbsp;{cif}</td>
							<td>Fecha:&nbsp;{fechaCompra}</td>
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
