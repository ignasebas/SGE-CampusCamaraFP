import React, {useState, useEffect} from "react";
import { CDBBtn} from "cdbreact";
import { CDBTable, CDBTableHeader, CDBTableBody } from "cdbreact";
import Sidebar from "../Sidebar";
import {CDBIcon} from "cdbreact";
import Navbar from "../Navbar";
import "./Profile.css"
import AddModal from "../components/AddModal"
import EditModal from "../components/EditModal"
import DeleteModal from "../components/DeleteModal"
import { getEmpleados, postEmpleados } from "../services/empleadosAPI";
import Spinner from "react-bootstrap/Spinner";
import { app } from "../firebase";
import { getAuth } from "firebase/auth";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Empleados = () => {

	useEffect(() => {
		setIsLoading(true);
		getEmpleados().then(empleadoData => {
		  setData(empleadoData);
		});
	}, []);

	const [data, setData] = useState([]);
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(false);


	const [showAdd, setShowAdd] = useState(false);
	const [showEdit, setShowEdit] = useState(false);
	const [showDelete, setShowDelete] = useState(false);
	
	const handleShowAdd = () => { setShowAdd(!showAdd);
		if(nif && nombre && apellidos && telefono && email && direccion !=""){
			setId("");
			setNif("");
			setNombre("");
			setApellidos("");
			setTelefono("");
			setEmail("");
			setDireccion("");
			setPuesto("");	
		}
	} 


	const handleShowEdit = (empleado) => {
		setShowEdit(!showEdit); 
		setId(empleado._id);
		setNif(empleado.nif);
		setNombre(empleado.nombre);
		setApellidos(empleado.apellidos);
		setTelefono(empleado.telefono);
		setEmail(empleado.email);
		setDireccion(empleado.direccion);
		setPuesto(empleado.puesto);
		
	}

	const handleShowDelete = (empleado) => {
		setShowDelete(!showDelete); 
		setId(empleado._id);
		setNif(empleado.nif);
		setNombre(empleado.nombre);
		setApellidos(empleado.apellidos);
		setTelefono(empleado.telefono);
		setEmail(empleado.email);
		setDireccion(empleado.direccion);	
		setPuesto(empleado.puesto);
	}
	
	const [id, setId] = useState("");
	const [nif, setNif] = useState("");
	const [nombre, setNombre] = useState("");
	const [apellidos, setApellidos] = useState("");
	const [telefono, setTelefono] = useState("");
	const [email, setEmail] = useState("");
	const [direccion, setDireccion] = useState("");
	const [puesto, setPuesto] = useState("");
	const dataModifier = {
		data,
		setData
	}

	const state = {
		id,
		setId,
		nif,
		setNif,
		nombre,
		setNombre,
		apellidos,
		setApellidos,
		telefono,
		setTelefono,
		email,
		setEmail,
		direccion,
		setDireccion,
		puesto,
		setPuesto
	};

	const place = "empleados"

	console.log(data)

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
              empleados
              handleShow={handleShowAdd}
              dataModifier={dataModifier}
              state={state}
            />
          )}
          {!showEdit ? (
            <></>
          ) : (
            <EditModal
              empleados
              handleShow={handleShowEdit}
              dataModifier={dataModifier}
              state={state}
            />
          )}
          {!showDelete ? (
            <></>
          ) : (
            <DeleteModal
              empleados
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
                        <FontAwesomeIcon icon="fa-solid fa-sitemap" /> Empleados
                      </h4>
                      <CDBBtn className={"add-button"} onClick={handleShowAdd}>
                        <FontAwesomeIcon icon="fa-solid fa-plus" className="ml-1"/>
                      </CDBBtn>
                    </div>

                    <CDBTable striped responsive>
                      
                      {isLoading ? (
                        <div
                          style={{
                            display: "flex", justifyContent: "center", alignItems: "center",
                          }}
                        >
                          <Spinner animation="grow" />
                        </div>
                      ) : (
						<><CDBTableHeader>
                        <tr>
                          <th>NIF</th>
                          <th>Nombre</th>
                          <th>Apellidos</th>
                          <th>Teléfono</th>
                          <th>Email</th>
                          <th>Dirección</th>
                          <th>Puesto</th>
                        </tr>
                      </CDBTableHeader>
                        <CDBTableBody style={{ verticalAlign: "middle" }}>
                          {data.map((empleado) => (
                            <tr>
                              <td>{empleado.nif}</td>
                              <td>{empleado.nombre}</td>
                              <td>{empleado.apellidos}</td>
                              <td>{empleado.telefono}</td>
                              <td>{empleado.email}</td>
                              <td>{empleado.direccion}</td>
                              <td>{empleado.puesto}</td>
                              <td style={{ whiteSpace: "nowrap" }}>
                                <CDBBtn
                                  onClick={() => handleShowEdit(empleado)}
                                  className={"edit-button"}
                                  style={{ marginRight: "10px" }}
                                >
                                  <FontAwesomeIcon icon="fa-solid fa-pen" className="ml-1" />
                                </CDBBtn>
                                <CDBBtn
                                  className={"delete-button"}
                                  onClick={() => handleShowDelete(empleado)}
                                >
                                  <FontAwesomeIcon icon="fa-solid fa-trash" className="ml-1" />
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
