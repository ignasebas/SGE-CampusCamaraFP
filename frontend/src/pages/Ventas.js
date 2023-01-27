import React, { useState, useEffect } from "react";
import { CDBBtn } from "cdbreact";
import { CDBTable, CDBTableHeader, CDBTableBody } from "cdbreact";
import Sidebar from "../Sidebar";
import { CDBIcon } from "cdbreact";
import Navbar from "../Navbar";
import "./Profile.css";
import { HiMagnifyingGlass } from "react-icons/hi2";
import AddModal from "../components/AddModal";
import LensModal from "../components/LensModal";
import { getVentas, postVentas } from "../services/ventasAPI";
import Spinner from "react-bootstrap/Spinner";
import { app } from "../firebase";
import { getAuth } from "firebase/auth";
import { getProductos } from "../services/productosAPI";

export const Ventas = () => {
	const [isLoading, setIsLoading] = useState(true);

	const auth = getAuth(app);
	const [logIn, setLogIn] = useState(false);
	auth.onAuthStateChanged(function (user) {
		if (user) {
			setLogIn(true);
		} else {
			window.location.href = "/login";
		}
	});

	useEffect(() => {
		getVentas().then((clientData) => {
			setData(clientData);
      getProductos().then(ProductData => {
        setProductoData(ProductData);
        setIsLoading(false);
      });
		});
	}, []);

	const [data, setData] = useState([]);
  const [productoData, setProductoData] = useState([]);
	const [error, setError] = useState(null);

	const [showAdd, setShowAdd] = useState(false);
	const [showLens, setShowLens] = useState(false);

  const handleShowAdd = () => {
    setShowAdd(!showAdd);
    if (
      dni &&
      nombre &&
      apellidos &&
      fechaVenta &&
      email &&
      direccion &&
      precioTotal &&
      productos &&
      observaciones !== ""
    ) {
      setDni("");
      setNombre("");
      setApellidos("");
      setEmail("");
      setDireccion("");
      setFechaVenta("");
      setPrecioTotal("");
      setProductos("");
      setObservaciones("");
    }
  };

  const handleShowLens = (venta) => {
    setShowLens(!showLens);
    setDni(venta.nif);
    setNombre(venta.nombre);
    setApellidos(venta.apellidos);
    setEmail(venta.email);
    setDireccion(venta.direccion);
    setFechaVenta(venta.fechaVenta);
    setPrecioTotal(venta.precioTotal)
    setObservaciones(venta.observaciones);
    setProductos(venta.productos);
  };

  const [dni, setDni] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [email, setEmail] = useState("");
  const [direccion, setDireccion] = useState("");
  const [fechaVenta, setFechaVenta] = useState("");
  const [precioTotal, setPrecioTotal] = useState("");
  const [observaciones, setObservaciones] = useState("");
  const [productos, setProductos] = useState("");

  const dataModifier = {
    data,
    setData,
  };

  const state = {
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
  };

  console.log(data);

  return (
    <>
      {!logIn ? (
        <></>
      ) : (
        <>
          {!showAdd ? (
            <></>
          ) : (
            <AddModal
              ventas
              handleShow={handleShowAdd}
              dataModifier={dataModifier}
              state={state}
            />
          )}
          {!showLens ? (
            <></>
          ) : (
            <LensModal ventas handleShow={handleShowLens} state={state} />
          )}
          <div className="d-flex profile">
            <div>
              <Sidebar />
            </div>
            <div
              style={{
                flex: "1 1 auto",
                display: "flex",
                flexFlow: "column",
                height: "100vh",
                overflowY: "hidden",
              }}
            >
              <Navbar />
              <div style={{ height: "100%" }}>
                <div
                  style={{
                    height: "calc(100% - 64px)",
                    padding: "20px 5%",
                    overflowY: "scroll",
                  }}
                >
                  <div className="mt-5">
                    <div className="mb-3 title-with-add">
                      <h4
                        className="font-weight-bold"
                        style={{ marginBottom: "0" }}
                      >
                        <CDBIcon icon="poll" /> Ventas
                      </h4>
                      <CDBBtn className={"add-button"} onClick={handleShowAdd}>
                        <CDBIcon icon="plus" className="ml-1" />
                      </CDBBtn>
                    </div>

                    <CDBTable striped responsive>
                      {isLoading ? (
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <Spinner animation="grow" />
                        </div>
                      ) : (
                        <>
                          <CDBTableHeader>
                            <tr>
                              <th>Nombre cliente</th>
                              <th>Fecha de venta</th>
                              <th>Observaciones</th>
                              <th>Precio total</th>
                              <th>Acciones</th>
                            </tr>
                          </CDBTableHeader>
                          <CDBTableBody style={{ verticalAlign: "middle" }}>
                            {data.map((venta, index) => (
                              <tr key={index}>
                                <td>{venta.nombre}</td>
                                <td>{venta.fechaVenta}</td>
                                <td>{venta.observaciones}</td>
                                <td>{venta.precioTotal} €</td>
                                <td style={{ whiteSpace: "nowrap" }}>
                                  <CDBBtn
                                    onClick={() => handleShowLens(venta)}
                                    className={"edit-button"}
                                    style={{ marginRight: "10px" }}
                                  >
                                    <HiMagnifyingGlass />
                                  </CDBBtn>
                                </td>
                              </tr>
                            ))}
                          </CDBTableBody>
                        </>
                      )}
                    </CDBTable>
                  </div>

                  <div style={{ margin: "0 auto", maxWidth: "1320px" }}>
                    <footer className="d-flex mx-auto py-4">
                      <small className="mx-auto my-1 text-center">
                        &copy; EMS Tech, 2022. All rights reserved.
                      </small>
                    </footer>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
