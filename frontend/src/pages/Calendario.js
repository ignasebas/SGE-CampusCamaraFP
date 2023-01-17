import {React,useState} from "react";
import {CDBBtn} from "cdbreact";
import Sidebar from "../Sidebar";
import {Calendar} from 'react-calendar';
import Navbar from "../Navbar";
import 'react-calendar/dist/Calendar.css';
import "./Profile.css"
import {CDBIcon} from "cdbreact";
import { app } from "../firebase";
import { getAuth } from "firebase/auth";

export const Calendario = () => {
	
	const[isLoading, setIsLoading] = useState(false);

	const auth = getAuth(app);
	const [logIn, setLogIn] = useState(false);
	auth.onAuthStateChanged(function(user) {
	if (user) {
		setLogIn(true)
	} else {
		window.location.href = "/login"
	}
	});

	const [date, setDate] = useState(new Date());
	const options = { weekday: 'long', day: 'numeric' };
 
	const onDateChange = (newDate) => {
		setDate(newDate);
		console.log(newDate);
		console.log(date)
	}
 

	const [value, onChange] = useState(new Date());

	return (
		<>
		{!logIn ? (
			<>
			</>
			):(
				<>
					<div className="d-flex profile">
						<div>
							<Sidebar />
						</div>
						<div style={{ flex: "1 1 auto", display: "flex", flexFlow: "column", height: "100vh", overflowY: "hidden" }}>
							<Navbar />
							<div style={{ height: "100%" }}>
								<div style={{ height: "calc(100% - 64px)", padding: "20px 5%", overflowY: "scroll" }}>
									<div className="mt-5">
										<div className="mb-3 title-with-add">
											<h4 className="font-weight-bold" style={{ marginBottom: "0" }}><CDBIcon icon="calendar-alt" /> Calendario</h4>
										</div>
										<div>
											<Calendar onChange={onDateChange}
												value={value} />

										</div>
										<br></br><br></br>
										<div>
											<div className="card shadow border-0">
												<div className="card-body">
													<h4 className="card-title mb-2" style={{ fontWeight: "600" }}>Introduce que tienes el día {date.toLocaleDateString("es-ES",options)}</h4>
													<label>Título &nbsp;</label>
													<input type="text"></input>
													<br></br>
													<br></br>
													<textarea rows="10" cols="26" wrap="soft">Descripción</textarea>
													<br></br>
													<br></br>
													<div className="justify-content-end pr-1">
													<CDBBtn className={"add-button"} >Introducir</CDBBtn>
													</div>
												</div>
											</div>
										</div>
										<div style={{ margin: "0 auto", maxWidth: "1320px" }}>


											<footer className="d-flex mx-auto py-4">
											</footer>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</>
			)}
		</>
	)
}