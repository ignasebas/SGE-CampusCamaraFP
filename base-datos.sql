DROP TABLE IF EXISTS calendario;
DROP TABLE IF EXISTS ventas;
DROP TABLE IF EXISTS compras;
DROP TABLE IF EXISTS productos;
DROP TABLE IF EXISTS clientes;
DROP TABLE IF EXISTS empleados;
DROP TABLE IF EXISTS proveedores;
DROP TABLE IF EXISTS empresa;

CREATE TABLE empresa (
    nombre VARCHAR(50),
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
    CONSTRAINT `fk_idProveedorEnProductos` FOREIGN KEY (idProveedor) REFERENCES proveedores (idProveedor) ON DELETE CASCADE,
    precioVenta DECIMAL(8,2) NOT NULL,
    precioCompra DECIMAL(8,2) NOT NULL,
    imagen VARCHAR(255) NULL,
    tasas INT(2) NOT NULL,
    descripcion TEXT(200) NOT NULL
);

CREATE TABLE compras ( //AQUÍ
    idCompra INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    cif VARCHAR(15) NOT NULL,
    nombre VARCHAR(50) NOT NULL,
    contacto VARCHAR(50) NOT NULL,
    direccion VARCHAR(150) NOT NULL,
    telefono VARCHAR(15) NOT NULL,
    email VARCHAR(100) NOT NULL,
    fechaCompra DATETIME NOT NULL,
    observaciones TEXT(200),
    precioTotal DECIMAL(8, 2) NOT NULL

);

CREATE TABLE detalles_compras (
    idCompra INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    cantidad INT(6) NOT NULL,
    precioCompra DECIMAL(8,2) NOT NULL,
    tasas INT(2) NOT NULL,
    descripcion TEXT(200) NOT NULL,
    CONSTRAINT `fk_idVentaEnDetallesVentas` FOREIGN KEY (idCompra) REFERENCES compras (idCompra) ON DELETE CASCADE
);


CREATE TABLE ventas (
    idVenta INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nif VARCHAR(15) NOT NULL,
    nombre VARCHAR(50) NOT NULL,
    apellidos VARCHAR(50) NOT NULL,
    telefono VARCHAR(50),
    email VARCHAR(50),
    direccion VARCHAR(50),
    precioTotal DECIMAL(8, 2) NOT NULL,
    fechaVenta DATETIME,
    observaciones TEXT(200)
);

CREATE TABLE detalles_ventas (
    idVenta INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    cantidad INT(6) NOT NULL,
    precioVenta DECIMAL(8,2) NOT NULL,
    tasas INT(2) NOT NULL,
    descripcion TEXT(200) NOT NULL,
    CONSTRAINT `fk_idVentaEnDetallesVentas` FOREIGN KEY (idVenta) REFERENCES ventas (idVenta) ON DELETE CASCADE
);

CREATE TABLE calendario (
    idEntradaCalendario INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    idEmpleado INT NOT NULL,
    CONSTRAINT `fk_idEmpleadoEnCalendario` FOREIGN KEY (idEmpleado) REFERENCES empleados (idEmpleado) ON DELETE CASCADE,
    titulo VARCHAR(50) NOT NULL,
    descripcion TEXT(200),
    fecha DATETIME,
);

INSERT INTO `clientes`(
    `nif`,
    `nombre`,
    `apellidos`,
    `telefono`,
    `email`,
    `direccion`
)
VALUES(
    '17928570R',
    'Desiree',
    'Collado Ortiz',
    '665527659',
    'kvxxp9u8b@unforgettable.com',
    'Glorieta Iglesia, 81'
),(
    '16639977Y',
    'Nerea',
    'Baena Llamas',
    '699547001',
    'uzosojpkw@unforgettable.com',
    'Parque Nueva, 77'
),(
    '21501207W',
    'Pol',
    'Barrio Barrios',
    '615767415',
    'kujs7zfet@earthling.net',
    'Barrio Horno, 65'
),(
    '88852942D',
    'Yaiza',
    'Palma Soriano',
    '696524446',
    'ep6upl04@blu.it',
    'Travesía Horno, 8'
),(
    '31767609D',
    'Gregoria',
    'Diaz Valdes',
    '677517514',
    'wkyv5x8c@journalism.com',
    'Sector Iglesia, 17'
),(
    '49590687L',
    'Maria Elena',
    'Mosquera Gomez',
    '697584135',
    'he7g3rjg95@earthling.net',
    'Parque Pedralbes, 39'
);

INSERT INTO `empleados`(
    `nif`,
    `nombre`,
    `apellidos`,
    `telefono`,
    `email`,
    `direccion`,
    `puesto`
)
VALUES(
    '93553563M',
    'Maria Rosario',
    'Saiz Corrales',
    '696397530',
    '13lspni11@techie.com',
    'Paseo Catalunya, 30',
    'Marketing'
),(
    '91629178F',
    'Enric',
    'Soler Losada',
    '740471401',
    'dc8tm2uh1@libero.it',
    'Alameda Real, 98',
    'Programador'
),(
    '11865796G',
    'Bruno',
    'Gordillo Figueroa',
    '603014553',
    'sp48dgab@caramail.com',
    'Pasaje Horno, 1',
    'Administración'
),(
    '29669631E',
    'Juan Jose',
    'Villegas Mateu',
    '745155899',
    '1thl2jvrv@libero.it',
    'Rúa Mayor, 85',
    'Almacén'
),(
    '66431205Y',
    'Eusebio',
    'Andreu Brito',
    '734174359',
    'qzt2fk1fv@mail.com',
    'Pasaje Iglesia, 81',
    'Jefe'
);

INSERT INTO `proveedores`(
    `cif`,
    `nombre`,
    `contacto`,
    `direccion`,
    `telefono`,
    `email`
)
VALUES(
    'J98230378',
    'Lessong S.A.',
    'Josep Casado Otero',
    'Carrer Pedralbes, 43',
    '907839152',
    'l96u74n80@hotmail.com'
),(
    'E39628268',
    'Viaspect S.A.',
    'Remedios Rosado Quintero',
    'Parque Real, 34',
    '975637999',
    '0tlfohhce@yahoo.es'
),(
    'A87998266',
    'Cellap S.A.',
    'Jose Juan Pardo Casado',
    'Parque Real, 34',
    '900742611',
    'lzje2fpc@witty.com'
),(
    'N5322634F',
    'Karmat S.A.',
    'Maximo Galan Lazaro',
    'Jardins De España, 30',
    '924600371',
    'k762lm0ur@whoever.com'
),(
    'V15243918',
    'Spacus S.A.',
    'Albert Ordoñez Godoy',
    'Praza Horno, 39',
    '944272122',
    'Carretera Nueva, 78'
);

INSERT INTO `productos`(
    `idProveedor`,
    `precioVenta`,
    `precioCompra`,
    `tasas`,
    `descripcion`
)
VALUES(
    '5',
    '26.59',
    '16.07',
    '21',
    'Alpargata de cuñas'
),(
    '3',
    '30.22',
    '15.99',
    '21',
    'Alpargata plana deluxe'
),(
    '1',
    '50.01',
    '5.99',
    '21',
    'Pantuflas premium'
),(
    '2',
    '1',
    '0.5',
    '10',
    'Torrezno de Soria'
),(
    '4',
    '45',
    '3',
    '21',
    'Alfombrilla de coche Exclusive'
);

INSERT INTO `ventas`(
    `idCliente`,
    `idProducto`,
    `cantidad`,
    `precioTotal`
)
VALUES (
    '1',
    '4',
    '300',
    '330'
),(
    '2',
    '2',
    '100',
    '3656.62'
),(
    '3',
    '5',
    '60',
    '3267'
),(
    '4',
    '1',
    '2',
    '64.35'
),(
    '1',
    '3',
    '1',
    '60.51'
);

INSERT INTO `compras`(
    `idProducto`,
    `idProveedor`,
    `cantidad`
)
VALUES (
    '1',
    '5',
    '1000'
),(
    '2',
    '3',
    '800'
),(
    '3',
    '1',
    '400'
),(
    '4',
    '2',
    '500'
),(
    '5',
    '4',
    '600'
);
