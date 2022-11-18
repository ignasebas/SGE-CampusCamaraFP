import React,{useState} from "react";
import { CDBBtn, CDBIframe, CDBView } from "cdbreact";
import Sidebar from "../Sidebar";
import Calendar,{onClickDay} from 'react-calendar';
import Navbar from "../Navbar";
import 'react-calendar/dist/Calendar.css';
import "./Profile.css"

export const Calendario = () => {
	const [value, onChange] = useState(new Date());
	function formulario(){
		return <h2>hola</h2>
	}
	
	return (
		<div className="d-flex profile">
			<div>
				<Sidebar/>
			</div>
			<div style={{flex:"1 1 auto", display:"flex", flexFlow:"column", height:"100vh", overflowY:"hidden"}}>
				<Navbar/>
				<div style={{height:"100%"}}>
							<div style={{height:"calc(100% - 64px)", padding:"20px 5%", overflowY:"scroll"}}>
								<br></br><br></br>
								<div>
		  							<Calendar onChange={onChange} 
									value={value}
									onClickDay={formulario}/>
									
								</div>
								<br></br><br></br>
								<div>
											<div className="card shadow border-0">
												<div className="card-body">
													<h4 className="card-title mb-2" style={{fontWeight:"600"}}>Introduce que tienes ese día</h4>
													<label>Título &nbsp;</label>
													<input value = {""}></input>
													<br></br>
													<br></br>
													<textarea rows="10" cols="26" wrap="soft">Descripción</textarea>
													<br></br>
													<br></br>
													<div className="justify-content-end pr-1">
														<CDBBtn color="dark" outline>Introducir</CDBBtn>
													</div>
												</div>
											</div>
										</div>
							<div style={{margin:"0 auto", maxWidth:"1320px"}}>
									
								
							<footer className="d-flex mx-auto py-4">
							</footer>
							</div>
							</div>
				</div>
			</div>
		</div>

	);
}