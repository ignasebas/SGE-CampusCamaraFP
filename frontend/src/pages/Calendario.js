import React, { useEffect, useState } from "react";
import { CDBBtn } from "cdbreact";
import Sidebar from "../Sidebar";
import { CDBTable, CDBTableHeader, CDBTableBody } from "cdbreact";
import { Calendar } from "react-calendar";
import Navbar from "../Navbar";
import AddModal from "../components/AddModal";
import EditModal from "../components/EditModal";
import DeleteModal from "../components/DeleteModal";
import "react-calendar/dist/Calendar.css";
import Spinner from "react-bootstrap/Spinner";
import "./Profile.css";
import { CDBIcon } from "cdbreact";
import { app } from "../firebase";
import { getAuth } from "firebase/auth";
import { getCalendario, postCalendario } from "../services/calendarioAPI";

export const Calendario = () => {
  const [isLoading, setIsLoading] = useState(false);

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
    getCalendario().then((calendarData) => {
      setData(calendarData);
      setIsLoading(false);
    });
  }, []);

  const [date, setDate] = useState(new Date());
  const options = { weekday: "long", day: "numeric" };

  const onDateChange = (newDate) => {
    setDate(newDate);
  };

  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const [showAdd, setShowAdd] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  const handleShowAdd = () => {
    setShowAdd(!showAdd);
    if (evento && fecha && descripcion != "") {
      setEvento("");
      setFecha("");
      setDescripcion("");
    }
  };
  const handleShowEdit = (calendario) => {
    setShowEdit(!showEdit);
    setId(calendario._id);
    setEvento(calendario.evento);
    setFecha(calendario.fecha);
    setDescripcion(calendario.descripcion);
  };
  const handleShowDelete = (calendario) => {
    setShowDelete(!showDelete);
    setId(calendario._id);
    setEvento(calendario.evento);
    setFecha(calendario.fecha);
    setDescripcion(calendario.descripcion);
  };

  const [value, onChange] = useState(new Date());

  const [id, setId] = useState("");
  const [evento, setEvento] = useState("");
  const [fecha, setFecha] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const dataModifier = {
    data,
    setData,
  };

  const state = {
    id,
    setId,
    evento,
    setEvento,
    fecha,
    setFecha,
    descripcion,
    setDescripcion,
  };

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
              calendario
              handleShow={handleShowAdd}
              dataModifier={dataModifier}
              state={state}
            />
          )}
          {!showEdit ? (
            <></>
          ) : (
            <EditModal
              calendario
              handleShow={handleShowEdit}
              dataModifier={dataModifier}
              state={state}
            />
          )}
          {!showDelete ? (
            <></>
          ) : (
            <DeleteModal
              calendario
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
                        <CDBIcon icon="calendar-alt" /> Calendario
                      </h4>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Calendar onChange={onDateChange} value={value} />
                    </div>
                    <br></br>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <CDBBtn className={"add-button"} onClick={handleShowAdd} style={{ marginRight: "10px" }}>
                        <CDBIcon icon="plus" className="ml-1" />
                    
                      </CDBBtn>
                    </div>
                    <br></br>
                    <br></br>
                    <div>
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
                              <th>Evento</th>
                              <th>Fecha</th>
                              <th>Descripción</th>
                            </tr>
                          </CDBTableHeader>

                          <CDBTableBody style={{ verticalAlign: "middle" }}>
                            {data.map((calendario) => (
                              <tr>
                                <td>{calendario.evento}</td>
                                <td>{calendario.fecha}</td>
                                <td>{calendario.descripcion}</td>
                                <td style={{ whiteSpace: "nowrap" }}>
                                  <CDBBtn
                                    onClick={() => handleShowEdit(calendario)}
                                    className={"edit-button"}
                                    style={{ marginRight: "10px" }}
                                  >
                                    <CDBIcon icon="pen" className="ml-1" />
                                  </CDBBtn>
                                  <CDBBtn
                                    className={"delete-button"}
                                    onClick={() => handleShowDelete(calendario)}
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
                    <div style={{ margin: "0 auto", maxWidth: "0 auto" }}>
                      <footer className="d-flex mx-auto py-4"></footer>
                    </div>
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