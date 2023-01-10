import React from "react";

const ClientesForm = ({add,edit,del,state}) => {

	const{
		nombre,
		setNombre,
		proveedorID,
		setProveedorID,
		proveedorNombre,
		setProveedorNombre,
		proveedorPrecioCompra,
		setProveedorPrecioCompra,
		precioVenta,
		setPrecioVenta,
		imagen,
		setImagen,
		tasas,
		setTasas,
		descripcion,
		setDescripcion
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
								<td><label>Nombre: </label></td>
								<td><input 
									type={'text'} 
									style={{marginLeft:"20px"}}
									value={nombre}
									onChange={(event) => setNombre(event.target.value)}></input></td>
							</tr>
							<tr>
								<td><label>Proveedor ID: </label></td>
								<td><input 
									type={'text'} 
									style={{marginLeft:"20px"}}
									value={proveedorID}
									onChange={(event) => setProveedorID(event.target.value)}></input></td>
							</tr>
							<tr>
								<td><label>Proveedor Nombre: </label></td>
								<td><input 
									type={'text'} 
									style={{marginLeft:"20px"}}
									value={proveedorNombre}
									onChange={(event) => setProveedorNombre(event.target.value)}></input></td>
							</tr>
							<tr>
								<td><label>Proveedor Precio Compra: </label></td>
								<td><input 
									type={'text'} 
									style={{marginLeft:"20px"}}
									value={proveedorPrecioCompra}
									onChange={(event) => setProveedorPrecioCompra(event.target.value)}></input></td>
							</tr>
							<tr>
								<td><label>Precio Venta: </label></td>
								<td><input 
									type={'text'} 
									style={{marginLeft:"20px"}}
									value={precioVenta}
									onChange={(event) => setPrecioVenta(event.target.value)}></input></td>
							</tr>
							<tr>
								<td><label>Imagen: </label></td>
								<td><input 
									type={'text'} 
									style={{marginLeft:"20px"}}
									value={imagen}
									onChange={(event) => setImagen(event.target.value)}></input></td>
							</tr>
							<tr>
								<td><label>Tasas: </label></td>
								<td><input 
									type={'text'} 
									style={{marginLeft:"20px"}}
									value={tasas}
									onChange={(event) => setTasas(event.target.value)}></input></td>
							</tr>
							<tr>
								<td><label>Descripción: </label></td>
								<td><input 
									type={'text'} 
									style={{marginLeft:"20px"}}
									value={descripcion}
									onChange={(event) => setDescripcion(event.target.value)}></input></td>
							</tr>
						</table>
					</center>
				</>
			)}
			{!edit ? (
				<>
				</>
			):(
				<>
					<center>
						<table>
							<tr>
								<td><label>Precio venta: </label></td>
								<td><input type={'text'} style={{marginLeft:"20px"}}></input></td>
							</tr>
							
							<tr>
								<td><label>Precio de compra: </label></td>
								<td><input type={'text'} style={{marginLeft:"20px"}}></input></td>
							</tr>
							
							<tr>
								<td><label>Tasas: </label></td>
								<td><input type={'text'} style={{marginLeft:"20px"}}></input></td>
							</tr>
							
							<tr>
								<td><label>ID Proveedor: </label></td>
								<td><input type={'text'} style={{marginLeft:"20px"}}></input></td>
							</tr>
							
							<tr>
								<td><label>Imagen: </label></td>
								<td><input type={'text'} style={{marginLeft:"20px"}}></input></td>
							</tr>
							
							<tr>
								<td><label>Descripción: </label></td>
								<td><input type={'text'} style={{marginLeft:"20px"}}></input></td>
							</tr>
						</table>
					</center>
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

export default ClientesForm;
