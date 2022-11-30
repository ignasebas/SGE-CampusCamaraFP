import React from "react";
import { Header } from "./Navbar.style";
import { CDBNavbar, CDBInput } from "cdbreact";
import {BsPersonCircle} from 'react-icons/bs';
import { NavLink } from "react-router-dom";

const Navbar = () => {

	return (
		<Header style={{background:"#333", color:"#fff"}}>
			<CDBNavbar dark expand="md" scrolling style={{justifyContent: "space-between"}}>
				<CDBInput type="search" size="md" hint="Search" className="mb-n4 mt-n3 input-nav"/>
				<div className="header-icons">
					<i className="fas fa-bell"></i>
					<i className="fas fa-comment-alt mx-4"></i>
					<NavLink
					exact
					to="/profile"
					style={{width:"3rem",height:"3rem"}}
					activeClassName="activeClicked">
						<BsPersonCircle size={35} className="profile-icon"/>  
					</NavLink>
				</div>
			</CDBNavbar>
		</Header>
	);
}

export default Navbar;

