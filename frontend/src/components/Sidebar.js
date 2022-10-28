import React , {useState} from 'react';
import { Link } from 'react-router-dom'
import '../assets/css/App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'

const Sidebar = ({ props }) => {
    const [sidebar, setSidebar] = useState(true);
    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
        {sidebar ? (
            <div className='sidebar'>
                <div onClick={showSidebar} className='sidebar_section'>
                    <div className="sidebar_icon">
                        <FontAwesomeIcon icon={faHouse}/>
                    </div>
                    <h5 className="sidebar_text">Cerrar</h5>
                </div>
                <Link to="/register" style={{ textDecoration: 'none' }}>
                    <div className='sidebar_section'>
                        <div className="sidebar_icon">
                            <FontAwesomeIcon icon={faHouse}/>
                        </div>
                        <h5 className="sidebar_text">Home</h5>
                    </div>
                </Link>
                <Link to="/register" style={{ textDecoration: 'none' }}>
                    <div className='sidebar_section'>
                        <div className="sidebar_icon">
                            <FontAwesomeIcon icon={faHouse}/>
                        </div>
                        <h5 className="sidebar_text">Clientes</h5>
                    </div>
                </Link>
                <Link to="/register" style={{ textDecoration: 'none' }}>
                    <div className='sidebar_section'>
                        <div className="sidebar_icon">
                            <FontAwesomeIcon icon={faHouse}/>
                        </div>
                        <h5 className="sidebar_text">Empleados</h5>
                    </div>
                </Link>
                <Link to="/register" style={{ textDecoration: 'none' }}>
                    <div className='sidebar_section'>
                        <div className="sidebar_icon">
                            <FontAwesomeIcon icon={faHouse}/>
                        </div>
                        <h5 className="sidebar_text">Proveedores</h5>
                    </div>
                </Link>
                <Link to="/register" style={{ textDecoration: 'none' }}>
                    <div className='sidebar_section'>
                        <div className="sidebar_icon">
                            <FontAwesomeIcon icon={faHouse}/>
                        </div>
                        <h5 className="sidebar_text">Compras</h5>
                    </div>
                </Link>
                <Link to="/register" style={{ textDecoration: 'none' }}>
                    <div className='sidebar_section'>
                        <div className="sidebar_icon">
                            <FontAwesomeIcon icon={faHouse}/>
                        </div>
                        <h5 className="sidebar_text">Ventas</h5>
                    </div>
                </Link>
                <Link to="/register" style={{ textDecoration: 'none' }}>
                    <div className='sidebar_section'>
                        <div className="sidebar_icon">
                            <FontAwesomeIcon icon={faHouse}/>
                        </div>
                        <h5 className="sidebar_text">Productos</h5>
                    </div>
                </Link>
                <Link to="/register" style={{ textDecoration: 'none' }}>
                    <div className='sidebar_section'>
                        <div className="sidebar_icon">
                            <FontAwesomeIcon icon={faHouse}/>
                        </div>
                        <h5 className="sidebar_text">Facturas</h5>
                    </div>
                </Link>
                <Link to="/register" style={{ textDecoration: 'none' }}>
                    <div className='sidebar_section'>
                        <div className="sidebar_icon">
                            <FontAwesomeIcon icon={faHouse}/>
                        </div>
                        <h5 className="sidebar_text">Pedidos</h5>
                    </div>
                </Link>
            </div> 
        ):(
            <div className='sidebar_close'>
                <div onClick={showSidebar} className='sidebar_section_close'>
                    <div className="sidebar_icon">
                        <FontAwesomeIcon icon={faHouse}/>
                    </div>
                </div>
                <Link to="/register" style={{ textDecoration: 'none' }}>
                    <div className='sidebar_section_close'>
                        <div className="sidebar_icon">
                            <FontAwesomeIcon icon={faHouse}/>
                        </div>
                    </div>
                </Link>
                <Link to="/register" style={{ textDecoration: 'none' }}>
                    <div className='sidebar_section_close'>
                        <div className="sidebar_icon">
                            <FontAwesomeIcon icon={faHouse}/>
                        </div>
                    </div>
                </Link>
                <Link to="/register" style={{ textDecoration: 'none' }}>
                    <div className='sidebar_section_close'>
                        <div className="sidebar_icon">
                            <FontAwesomeIcon icon={faHouse}/>
                        </div>
                    </div>
                </Link>
                <Link to="/register" style={{ textDecoration: 'none' }}>
                    <div className='sidebar_section_close'>
                        <div className="sidebar_icon">
                            <FontAwesomeIcon icon={faHouse}/>
                        </div>
                    </div>
                </Link>
                <Link to="/register" style={{ textDecoration: 'none' }}>
                    <div className='sidebar_section_close'>
                        <div className="sidebar_icon">
                            <FontAwesomeIcon icon={faHouse}/>
                        </div>
                    </div>
                </Link>
                <Link to="/register" style={{ textDecoration: 'none' }}>
                    <div className='sidebar_section_close'>
                        <div className="sidebar_icon">
                            <FontAwesomeIcon icon={faHouse}/>
                        </div>
                    </div>
                </Link>
                <Link to="/register" style={{ textDecoration: 'none' }}>
                    <div className='sidebar_section_close'>
                        <div className="sidebar_icon">
                            <FontAwesomeIcon icon={faHouse}/>
                        </div>
                    </div>
                </Link>
                <Link to="/register" style={{ textDecoration: 'none' }}>
                    <div className='sidebar_section_close'>
                        <div className="sidebar_icon">
                            <FontAwesomeIcon icon={faHouse}/>
                        </div>
                    </div>
                </Link>
                <Link to="/register" style={{ textDecoration: 'none' }}>
                    <div className='sidebar_section_close'>
                        <div className="sidebar_icon">
                            <FontAwesomeIcon icon={faHouse}/>
                        </div>
                    </div>
                </Link>
            </div> 
        )}         
        </>
    );
};

export default Sidebar;