import React from "react";
import { Header } from "./Navbar.style";
import { CDBNavbar } from "cdbreact";
import {BsPersonCircle} from 'react-icons/bs';
import { NavLink } from "react-router-dom";

const Navbar = () => {

	return (
		<Header style={{background:"#333", color:"#fff"}}>
			<CDBNavbar dark expand="md" scrolling style={{justifyContent : "right", height : "5rem"}}>
				<div className="header-icons">
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

