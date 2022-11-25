import React from "react";
import { 
	CDBSidebar,
	CDBSidebarContent,
	CDBSidebarFooter,
	CDBSidebarHeader,
	CDBSidebarMenu,
	CDBSidebarMenuItem } from "cdbreact";
import { NavLink } from "react-router-dom";
import {CgProfile} from 'react-icons/cg';
import {IoCalendarOutline} from 'react-icons/io5';
import {HiOutlineUserGroup} from 'react-icons/hi2';
import {BsGraphUp} from 'react-icons/bs';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import {GoPackage} from 'react-icons/go';
import {GiOrganigram} from 'react-icons/gi';
import {SlChemistry} from 'react-icons/sl';
import {TbLayoutDashboard} from  'react-icons/tb';

const Sidebar = () => {

	return (
		<div
		className={`app`}
		style={{ display: "flex", height: "100vh", overflow:"hidden"}}>
			<CDBSidebar
			textColor="#fff"
			backgroundColor="#333">
				<CDBSidebarHeader
				prefix={
					<i className="fa fa-bars fa-large"></i>
				}>
					<a href="/" className="text-decoration-none" style={{color:"inherit"}}>
						EMS Tech
					</a>
				</CDBSidebarHeader>

					<div style={{overflow:"scroll"}}>
						<CDBSidebarContent className="sidebar-content">
							<CDBSidebarMenu>
								<NavLink
								exact
								to="/"
								activeClassName="activeClicked">
									<CDBSidebarMenuItem>
										<h6><TbLayoutDashboard/> Salpicadero</h6>
									</CDBSidebarMenuItem>
								</NavLink>
								<NavLink
								exact
								to="/calendario"
								activeClassName="activeClicked">
									<CDBSidebarMenuItem>
										<h6><IoCalendarOutline/> Calendario</h6>
									</CDBSidebarMenuItem>
								</NavLink>

								<NavLink
								exact
								to="/clientes"
								activeClassName="activeClicked">
									<CDBSidebarMenuItem>
										<h6><HiOutlineUserGroup/> Clientes</h6>
									</CDBSidebarMenuItem>
								</NavLink>

								<NavLink
								exact
								to="/ventas"
								activeClassName="activeClicked">
									<CDBSidebarMenuItem>
										<h6><BsGraphUp/> Ventas</h6>
									</CDBSidebarMenuItem>
								</NavLink>

								<NavLink
								exact
								to="/compras"
								activeClassName="activeClicked">
									<CDBSidebarMenuItem>
										<h6><AiOutlineShoppingCart/> Compras</h6>
									</CDBSidebarMenuItem>
								</NavLink>

								<NavLink
								exact
								to="/proveedores"
								activeClassName="activeClicked">
									<CDBSidebarMenuItem>
										<h6><GoPackage/> Proveedores</h6>
									</CDBSidebarMenuItem>
								</NavLink>

								<NavLink
								exact
								to="/empleados"
								activeClassName="activeClicked">
									<CDBSidebarMenuItem>
										<h6><GiOrganigram/> Empleados</h6>
									</CDBSidebarMenuItem>
								</NavLink>

								<NavLink
								exact
								to="/productos"
								activeClassName="activeClicked">
									<CDBSidebarMenuItem>
										<h6><SlChemistry/> Productos</h6>
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
						</CDBSidebarContent>

						<CDBSidebarFooter style={{ textAlign: "center" }}>
							<div
								className="sidebar-btn-wrapper"
								style={{
								padding: "20px 5px"
								}}>
							</div>
						</CDBSidebarFooter>
					</div>
			</CDBSidebar>
		</div>
	);
}

export default Sidebar;
