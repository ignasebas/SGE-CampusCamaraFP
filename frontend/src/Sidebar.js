import React from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink } from "react-router-dom";
import { CgMenuCheese } from "react-icons/cg";

const Sidebar = () => {
  return (
    <div
      className={`app`}
      style={{ display: "flex", height: "100vh", overflow: "hidden" }}
    >
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader prefix={<CgMenuCheese size={30} />}>
          <a
            href="/"
            className="text-decoration-none"
            style={{ color: "inherit" }}
          >
            EMS Tech
          </a>
        </CDBSidebarHeader>

        <div style={{ overflowY: "scroll" }}>
          <CDBSidebarContent className="sidebar-content">
            <CDBSidebarMenu>
              <NavLink exact to="/" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="table">
                  Menú principal
                </CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="/calendario" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="calendar-alt">
                  Calendario
                </CDBSidebarMenuItem>
              </NavLink>

              <NavLink exact to="/clientes" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="users">Clientes</CDBSidebarMenuItem>
              </NavLink>

              <NavLink exact to="/ventas" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="poll">Ventas</CDBSidebarMenuItem>
              </NavLink>

              <NavLink exact to="/compras" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="shopping-cart">
                  Compras
                </CDBSidebarMenuItem>
              </NavLink>

              <NavLink exact to="/proveedores" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="boxes">
                  Proveedores
                </CDBSidebarMenuItem>
              </NavLink>

              <NavLink exact to="/empleados" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="sitemap">
                  Empleados
                </CDBSidebarMenuItem>
              </NavLink>

              <NavLink exact to="/productos" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="flask">Productos</CDBSidebarMenuItem>
              </NavLink>
            </CDBSidebarMenu>
          </CDBSidebarContent>

          <CDBSidebarFooter style={{ textAlign: "center" }}>
            <div
              className="sidebar-btn-wrapper"
              style={{
                padding: "20px 5px",
              }}
            ></div>
          </CDBSidebarFooter>
        </div>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;
