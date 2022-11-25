import React from "react";
import { Header } from "./Navbar.style";
import { CDBNavbar, CDBInput } from "cdbreact";
import {CgProfile} from 'react-icons/cg';

const Navbar = () => {

	return (
        <Header style={{background:"#333", color:"#fff"}}>
          <CDBNavbar dark expand="md" scrolling className="justify-content-start">
            <CDBInput type="search" size="md" hint="Search" className="mb-n4 mt-n3 input-nav"/>
            <div className="header-icons">
              <i className="fas fa-bell"></i>
              <i className="fas fa-comment-alt mx-4"></i>
              <CgProfile size={40}/>
            </div>
          </CDBNavbar>
        </Header>
	);
}

export default Navbar;
