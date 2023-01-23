import React, {useState} from "react";

const CalendarioForm = ({add,edit,del,state}) => {

	const { 
		evento,
        setEvento,
        fecha,
        setFecha,
		descripcion,
        setDescripcion
	} = state;

	return (
		<>
			{!add && !edit ? (
				<>
				</>
			):(
				<>
					<center>
						<table cellPadding={"5px"}>
							<tr>
								<td>
									<label>Evento: </label>
								</td>
								<td>
								<input 
									type={'text'} 
									style={{marginLeft:"20px"}}
									value={evento}
									onChange={(event) => setEvento(event.target.value)}>
								</input>
								</td>
							</tr>
							<tr>
							<td><label>Fecha: </label></td>
							<td><input 
								type={'date'} 
								style={{marginLeft:"20px"}}
								value={fecha}
								onChange={(event) => setFecha(event.target.value)}></input></td>
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
			{!del ? (
				<>
				</>
			):(
				<div>
					¿Estás seguro de que deseas eliminar el evento {evento} de la base de datos?
				</div>
			)}
		</>
	);
}

export default CalendarioForm;
