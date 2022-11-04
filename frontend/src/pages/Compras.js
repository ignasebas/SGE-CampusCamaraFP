import React from "react";
import { CDBBtn, CDBIframe, CDBView } from "cdbreact";
import { CDBTable, CDBTableHeader, CDBTableBody } from "cdbreact";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import "./Profile.css"

export const Compras = () => {

	return (
		<div className="d-flex profile">
			<div>
				<Sidebar/>
			</div>
			<div style={{flex:"1 1 auto", display:"flex", flexFlow:"column", height:"100vh", overflowY:"hidden"}}>
				<Navbar/>
				<div style={{height:"100%"}}>
							<div style={{height:"calc(100% - 64px)", padding:"20px 5%", overflowY:"scroll"}}>
								<div style={{margin:"0 auto", maxWidth:"1320px"}}>
								<div className="mt-5">
									<h4 className="font-weight-bold mb-3">Compras : </h4>
									<CDBTable striped responsive >
									<CDBTableHeader>
									<tr>
				  						<th style={{width: "10%"}}>Referencia</th>
										<th>Proveedor</th>
										<th>Compañia</th>
										<th style={{whiteSpace: "nowrap"}}>Representante de compra</th>
										<th style={{whiteSpace: "nowrap"}}>Limite de pedido</th>
										<th>Total</th>
										<th>Estado</th>
										<th>Observaciones</th>
									</tr>
								</CDBTableHeader>
								<CDBTableBody style={{VerticalAlign: "middle",textAlign:"center"}}>
                   					<tr>
                    					<td>P 0001</td>
										<td>Nike</td>
										<td>MyCompany</td>
										<td>Bogdan</td>
										<td>15/12/2022</td>
										<td style={{whiteSpace: "nowrap"}}>200 €</td>
										<td style={{whiteSpace: "nowrap"}}>Peticion de factura</td>
										<td style={{whiteSpace: "nowrap"}}>El pedido llegara a las 20:00</td>
                    				</tr>
                  				</CDBTableBody>
                				</CDBTable>
              				</div>
						</div>
					</div>
				</div>
			</div>
		</div>

	);
}