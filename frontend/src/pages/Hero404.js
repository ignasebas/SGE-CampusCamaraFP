import React from "react";
import { CDBBtn } from "cdbreact";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import "./Profile.css"

export const Hero404 = () => {

  return (
    <div className="d-flex profile">
      <div>
        <Sidebar />
      </div>
      <div style={{ flex: "1 1 auto", display: "flex", flexFlow: "column", height: "100vh", overflowY: "hidden" }}>
        <Navbar />
        <div style={{ height: "100%" }}>
          <div style={{ height: "calc(100% - 64px)", padding: "20px 5%", overflowY: "scroll" }}>
            {/*EDITAR A PARTIR DE AQUÍ*/}
            <section className="page-body" style={{display:"flex"}}>
              <div className="message404">
                <h4 className="h1 font-weight-bold">Oops</h4>
                <h4 className="h3 my-4">Se ha producido un error</h4>
                <p>Lo sentimos, hmmm... probablemente falta una página o el enlace es incorrecto.</p>
                <CDBBtn flat color="dark" className="py-2 btn-block">Volver</CDBBtn>
              </div>
              <img className="image404" alt="404" src="/sad.png" width="200px" />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}