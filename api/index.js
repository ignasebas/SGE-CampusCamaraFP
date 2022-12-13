require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})
const app = express();

app.use(express.json());

app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})

const rutasClientes = require('./routes/rutasClientes');
const routasProveedores = require('./routes/rutasProveedores');
const rutasClientes = require('./routes/rutasCompras');
const routasProveedores = require('./routes/rutasVentas');

app.use('/api', rutasClientes)
app.use('/api', routasProveedores)
app.use('/api', rutasCompras)
app.use('/api', routasVentas)
