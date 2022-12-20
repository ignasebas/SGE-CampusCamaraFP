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
						<label>Proveedor ID: </label>
						<input 
							type={'text'} 
							style={{marginLeft:"20px"}}
							value={proveedorID}
							onChange={(event) => setProveedorID(event.target.value)}></input>
					</div>

					<br/>

					<div>
						<label>Proveedor Nombre: </label>
						<input 
							type={'text'} 
							style={{marginLeft:"20px"}}
							value={proveedorNombre}
							onChange={(event) => setProveedorNombre(event.target.value)}></input>
					</div>

					<br/>

					<div>
						<label>Proveedor Precio Compra: </label>
						<input 
							type={'text'} 
							style={{marginLeft:"20px"}}
							value={proveedorPrecioCompra}
							onChange={(event) => setProveedorPrecioCompra(event.target.value)}></input>
					</div>

					<br/>

					<div>
						<label>Precio Venta: </label>
						<input 
							type={'text'} 
							style={{marginLeft:"20px"}}
							value={precioVenta}
							onChange={(event) => setPrecioVenta(event.target.value)}></input>
					</div>

					<br/>

					<div>
						<label>Imagen: </label>
						<input 
							type={'text'} 
							style={{marginLeft:"20px"}}
							value={imagen}
							onChange={(event) => setImagen(event.target.value)}></input>
					</div>

					<br/>

					<div>
						<label>Tasas: </label>
						<input 
							type={'text'} 
							style={{marginLeft:"20px"}}
							value={tasas}
							onChange={(event) => setTasas(event.target.value)}></input>
					</div>

					<br/>

					<div>
						<label>Descripción: </label>
						<input 
							type={'text'} 
							style={{marginLeft:"20px"}}
							value={descripcion}
							onChange={(event) => setDescripcion(event.target.value)}></input>
					</div>
				</>
			)}
			{!edit ? (
				<>
				</>
			):(
				<>
					<div>
						<label>Precio venta: </label>
						<input type={'text'} style={{marginLeft:"20px"}}></input>
					</div>
					<br/>
					<div>
						<label>Precio de compra: </label>
						<input type={'text'} style={{marginLeft:"20px"}}></input>
					</div>
					<br/>
					<div>
						<label>Tasas: </label>
						<input type={'text'} style={{marginLeft:"20px"}}></input>
					</div>
					<br/>
					<div>
						<label>ID Proveedor: </label>
						<input type={'text'} style={{marginLeft:"20px"}}></input>
					</div>
					<br/>
					<div>
						<label>Imagen: </label>
						<input type={'text'} style={{marginLeft:"20px"}}></input>
					</div>
					<br/>
					<div>
						<label>Descripción: </label>
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

export default ClientesForm;
