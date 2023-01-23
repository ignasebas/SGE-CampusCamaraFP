import React, { useState, useEffect } from "react";
import { CDBBtn } from "cdbreact";
import { CDBTable, CDBTableHeader, CDBTableBody } from "cdbreact";
import Sidebar from "../Sidebar";
import { CDBIcon } from "cdbreact";
import Navbar from "../Navbar";
import "./Profile.css";
import AddModal from "../components/AddModal";
import EditModal from "../components/EditModal";
import DeleteModal from "../components/DeleteModal";
import { getProveedores } from "../services/proveedoresAPI";
import Spinner from "react-bootstrap/Spinner";
import { app } from "../firebase";
import { getAuth } from "firebase/auth";

export const Proveedores = () => {
  const [isLoading, setIsLoading] = useState(true);

  const auth = getAuth(app);
  const [logIn, setLogIn] = useState(false);
  auth.onAuthStateChanged(function (user) {
    if (user) {
      console.log(user);
      setLogIn(true);
    } else {
      window.location.href = "/login";
    }
  });

  useEffect(() => {
    getProveedores().then((ProveedorData) => {
      setData(ProveedorData);
      setIsLoading(false);
    });
  }, []);

  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const [showAdd, setShowAdd] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const handleShowAdd = () => {
    setShowAdd(!showAdd);
    if (
      id &&
      cif &&
      nombre &&
      contacto &&
      direccion &&
      telefono &&
      email != ""
    ) {
      setId("");
      setCif("");
      setNombre("");
      setContacto("");
      setDireccion("");
      setTelefono("");
      setEmail("");
    }
  };
  const handleShowEdit = (proveedor) => {
    setShowEdit(!showEdit);
    setId(proveedor._id);
    setCif(proveedor.cif);
    setNombre(proveedor.nombre);
    setContacto(proveedor.contacto);
    setDireccion(proveedor.direccion);
    setTelefono(proveedor.telefono);
    setEmail(proveedor.email);
  };
  const handleShowDelete = (proveedor) => {
    setShowDelete(!showDelete);
    setId(proveedor._id);
    setCif(proveedor.cif);
    setNombre(proveedor.nombre);
    setContacto(proveedor.contacto);
    setDireccion(proveedor.direccion);
    setTelefono(proveedor.telefono);
    setEmail(proveedor.email);
  };
  const [id, setId] = useState("");
  const [cif, setCif] = useState("");
  const [nombre, setNombre] = useState("");
  const [contacto, setContacto] = useState("");
  const [direccion, setDireccion] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const dataModifier = {
    data,
    setData,
  };
  const state = {
    id,
    setId,
    cif,
    setCif,
    nombre,
    setNombre,
    contacto,
    setContacto,
    direccion,
    setDireccion,
    telefono,
    setTelefono,
    email,
    setEmail,
  };

  const place = "proveedores";

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
              proveedores
              handleShow={handleShowAdd}
              dataModifier={dataModifier}
              state={state}
            />
          )}
          {!showEdit ? (
            <></>
          ) : (
            <EditModal
              proveedores
              handleShow={handleShowEdit}
              dataModifier={dataModifier}
              state={state}
            />
          )}
          {!showDelete ? (
            <></>
          ) : (
            <DeleteModal
              proveedores
              handleShow={handleShowDelete}
              dataModifier={dataModifier}
              state={state}
            />
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
                        <CDBIcon icon="boxes" /> Proveedores
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
                              <th>CIF</th>
                              <th>Nombre</th>
                              <th>Contacto</th>
                              <th>Teléfono</th>
                              <th>Email</th>
                              <th>Dirección</th>
                              <th>Acciones</th>
                            </tr>
                          </CDBTableHeader>
                          <CDBTableBody style={{ verticalAlign: "middle" }}>
                            {data.map((proveedor) => (
                              <tr>
                                <td>{proveedor.cif}</td>
                                <td>{proveedor.nombre}</td>
                                <td>{proveedor.contacto}</td>
                                <td>{proveedor.telefono}</td>
                                <td>{proveedor.email}</td>
                                <td>{proveedor.direccion}</td>
                                <td style={{ whiteSpace: "nowrap" }}>
                                  <CDBBtn
                                    onClick={() => handleShowEdit(proveedor)}
                                    className={"edit-button"}
                                    style={{ marginRight: "10px" }}
                                  >
                                    <CDBIcon icon="pen" className="ml-1" />
                                  </CDBBtn>

                                  <CDBBtn
                                    className={"delete-button"}
                                    onClick={() => handleShowDelete(proveedor)}
                                  >
                                    <CDBIcon icon="trash" className="ml-1" />
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
