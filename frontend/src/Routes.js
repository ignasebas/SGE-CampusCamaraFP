import React, { Fragment } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { Tables } from "./pages/Tables";
import { Hero404 } from "./pages/Hero404";
import { Profile } from "./pages/Profile";
import { Calendario } from "./pages/Calendario";
import { Clientes } from "./pages/Clientes";
import { Ventas } from "./pages/Ventas";
import { Compras } from "./pages/Compras";
import { Proveedores } from "./pages/Proveedores";
import { Empleados } from "./pages/Empleados";
import { Productos } from "./pages/Productos";

const Routes = () => {

  return (
    <Fragment>
      <BrowserRouter>
        <Route exact path="/" render={() => <Dashboard/> } />
        <Route path="/tables" component={Tables} />
        <Route path="/hero404" component={Hero404} />
        <Route path="/profile" component={Profile} />
        <Route path="/calendario" component={Calendario} />
        <Route path="/clientes" component={Clientes} />
        <Route path="/ventas" component={Ventas} />
        <Route path="/compras" component={Compras} />
        <Route path="/proveedores" component={Proveedores} />
        <Route path="/empleados" component={Empleados} />
        <Route path="/productos" component={Productos} />
      </BrowserRouter>
    </Fragment>
  );
};

export default Routes;
