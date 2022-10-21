DROP TABLE IF EXISTS empresa;
DROP TABLE IF EXISTS proveedores;
DROP TABLE IF EXISTS empleados;
DROP TABLE IF EXISTS clientes;
DROP TABLE IF EXISTS productos;
DROP TABLE IF EXISTS compras;
DROP TABLE IF EXISTS ventas;
DROP TABLE IF EXISTS calendario;

CREATE TABLE empresa (
    nombre VARCHAR(50),
    colorCorporativo VARCHAR(50),
    logo VARCHAR(255)
);

 CREATE TABLE proveedores (
    idProveedor INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    cif VARCHAR(15) NOT NULL,
    nombre VARCHAR(50) NOT NULL,
    contacto VARCHAR(50) NOT NULL,
    direccion VARCHAR(150) NOT NULL,
    telefono VARCHAR(15) NOT NULL,
    email VARCHAR(100) NOT NULL
 );
 
CREATE TABLE empleados (
    idEmpleado INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nif VARCHAR(15) NOT NULL,
    nombre VARCHAR(50) NOT NULL,
    apellidos VARCHAR(50) NOT NULL,
    telefono VARCHAR(50),
    email VARCHAR(50),
    direccion VARCHAR(50),
    puesto VARCHAR(50)
);

CREATE TABLE clientes (
    idCliente INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nif VARCHAR(15) NOT NULL,
    nombre VARCHAR(50) NOT NULL,
    apellidos VARCHAR(50) NOT NULL,
    telefono VARCHAR(50),
    email VARCHAR(50),
    direccion VARCHAR(50)
);

CREATE TABLE productos (
    idProducto INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    idProveedor INT NOT NULL,
    CONSTRAINT `fk_idProveedor` FOREIGN KEY (idProveedor) REFERENCES proveedores (idProveedor) ON DELETE CASCADE ON UPDATE CASCADE ,
    precioVenta DECIMAL(8,2) NOT NULL,
    precioCompra DECIMAL(8,2) NOT NULL,
    imagen VARCHAR(255) NOT NULL,
    tasas INT(2) NOT NULL,
    descripcion TEXT(200) NOT NULL
);


CREATE TABLE compras (
    idCompra INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    idProducto INT NOT NULL,
    idProveedor INT NOT NULL,
    CONSTRAINT `fk_idProducto` FOREIGN KEY (idProducto) REFERENCES productos (idProducto) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT `fk_idProveedor` FOREIGN KEY (idProveedor) REFERENCES proveedores (idProveedor) ON DELETE CASCADE ON UPDATE CASCADE
);


CREATE TABLE ventas (
    idVenta INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    idCliente INT NOT NULL,
    idProducto INT NOT NULL,
    CONSTRAINT `fk_idCliente` FOREIGN KEY (idCliente) REFERENCES clientes (idCliente) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT `fk_idProducto` FOREIGN KEY (idProducto) REFERENCES productos (idProducto) ON DELETE CASCADE ON UPDATE CASCADE,
    cantidad INT(6) NOT NULL,
    precioTotal DECIMAL(8, 2) NOT NULL
);

CREATE TABLE calendario (
    idEntradaCalendario INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    idEmpleado INT NOT NULL,
    CONSTRAINT `fk_idEmpleado` FOREIGN KEY (idEmpleado) REFERENCES empleados (idEmpleados) ON DELETE CASCADE ON UPDATE CASCADE,
    nombre VARCHAR(50),
    descripcion TEXT(200),
    fecha DATETIME,
    direccion VARCHAR(100)
);