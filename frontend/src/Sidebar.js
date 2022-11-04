import React from "react";
import { 
	CDBSidebar,
	CDBSidebarContent,
	CDBSidebarFooter,
	CDBSidebarHeader,
	CDBSidebarMenu,
	CDBSidebarMenuItem } from "cdbreact";
import { NavLink } from "react-router-dom";

const Sidebar = () => {

	return (
		<div
		className={`app`}
		style={{ display: "flex", height: "100%", overflow:"scroll initial"}}>
		<CDBSidebar
		textColor="#fff"
		backgroundColor="#333">
			<CDBSidebarHeader
			prefix={
				<i className="fa fa-bars fa-large"></i>
			}>
				<a href="/" className="text-decoration-none" style={{color:"inherit"}}>
					Contrast
				</a>
			</CDBSidebarHeader>

			<CDBSidebarContent className="sidebar-content">
				<CDBSidebarMenu>
					<NavLink
					exact
					to="/"
					activeClassName="activeClicked">
						<CDBSidebarMenuItem icon="columns">
							Dashboard
						</CDBSidebarMenuItem>
					</NavLink>
					<NavLink
					exact
					to="/tables"
					activeClassName="activeClicked">
						<CDBSidebarMenuItem icon="table">
							Tables
						</CDBSidebarMenuItem>
					</NavLink>
					<NavLink
					exact
					to="/profile"
					activeClassName="activeClicked">
						<CDBSidebarMenuItem icon="user">
							profile
						</CDBSidebarMenuItem>
					</NavLink>

					<NavLink
					exact
					to="/calendario"
					activeClassName="activeClicked">
						<CDBSidebarMenuItem icon="user">
							Calendario
						</CDBSidebarMenuItem>
					</NavLink>

					<NavLink
					exact
					to="/clientes"
					activeClassName="activeClicked">
						<CDBSidebarMenuItem icon="user">
							Clientes
						</CDBSidebarMenuItem>
					</NavLink>

					<NavLink
					exact
					to="/ventas"
					activeClassName="activeClicked">
						<CDBSidebarMenuItem icon="user">
							Ventas
						</CDBSidebarMenuItem>
					</NavLink>

					<NavLink
					exact
					to="/compras"
					activeClassName="activeClicked">
						<CDBSidebarMenuItem icon="user">
							Compras
						</CDBSidebarMenuItem>
					</NavLink>

					<NavLink
					exact
					to="/proveedores"
					activeClassName="activeClicked">
						<CDBSidebarMenuItem icon="user">
							Proveedores
						</CDBSidebarMenuItem>
					</NavLink>

					<NavLink
					exact
					to="/empleados"
					activeClassName="activeClicked">
						<CDBSidebarMenuItem icon="user">
							Empleados
						</CDBSidebarMenuItem>
					</NavLink>

					<NavLink
					exact
					to="/productos"
					activeClassName="activeClicked">
						<CDBSidebarMenuItem icon="user">
							Productos
						</CDBSidebarMenuItem>
					</NavLink>

					<NavLink
					exact
					to="/hero404"
					target="_blank"
					activeClassName="activeClicked">
						<CDBSidebarMenuItem icon="exclamation-circle">
							404 page
						</CDBSidebarMenuItem>
					</NavLink>

				</CDBSidebarMenu>
				<CDBSidebarMenu>
				</CDBSidebarMenu>
			</CDBSidebarContent>

			<CDBSidebarFooter style={{ textAlign: "center" }}>
				<div
					className="sidebar-btn-wrapper"
					style={{
					padding: "20px 5px"
					}}>
					Sidebar Footer
				</div>
			</CDBSidebarFooter>
		</CDBSidebar>
		</div>
	);
}

export default Sidebar;
