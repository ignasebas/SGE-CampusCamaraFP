// Add Express
const express = require('express');
const { default: mongoose } = require('mongoose');
// Using Router from Express
const router = express.Router()
// Import model
const Model = require('../models/producto');
// Exporting it too using module.exports
module.exports = router;

/*
This router is taking the route as the first parameter. 
Then in the second parameter it's taking a callback.

In the callback, we have a res and a req. res means response, and req means request. 
We use res for sending responses to our client, like Postman, or any front-end client. 
And we use req for receiving requests from a client app like Postman, or any front-end client.

Then in the callback body, we are printing a message that says the respective API message
*/

/**
 * Post Method
 * 
 * Create the data body to post using the model we just created
 * Our name and age is accepting the name and age from req body.
 * 
 * In the try block, we are saving the data using data.save(). 
 * Then, we are storing the data in a const called dataToSave.
 * We are also sending the success message with the data in the response body.
 * 
 * This function needs to be asynchronous to work. So, we will use async-await.
 */

router.post('/post', async (req, res) => {
    const data = new Model({
        nombre: req.body.nombre,
        proveedor: {
            id: req.body.proveedor.id,
            nombre: req.body.proveedor.nombre,
            precioCompra: req.body.proveedor.precioCompra,
        },
        precioVenta: req.body.precioVenta,
        imagen: req.body.imagen,
        tasas: req.body.tasas,
        descripcion: req.body.descripcion,
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})

/**
 * Get all Method
 * 
 * We are using the Model.find method to fetch all the data from the database. 
 * Then, we are returning it back in JSON format. 
 * If we have an error, we will get that too.
 */
router.get('/getAll', async (req, res) => {
    try{
        const data = await Model.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

/**
 * Get by ID Method
 * 
 * We just have to pass the ID of the document, which is req.params.id, in a method called findById
 */
router.get('/getOne/:id', async (req, res) => {
    try{
        const data = await Model.findById(req.params.id);
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

router.get('/getBetween/:min/:max', async (req, res) => {
    try{
        const data = await Model.find({"tasas": {
            $gte: req.params.min,
            $lt: req.params.max}})      
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

/**
 * Update by ID Method
 * 
 * Here we have three parameters that we are passing in the findByIdAndUpdate method,
 * which we use to find a document by ID and update it.
 * 
 * The req.params.id is the const id, updatedData which contains the req.body, and the options,
 * which specifies whether to return the updated data in the body or not.
 */
 router.patch('/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await Model.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

/**
 * Delete by ID Method
 * 
 * We are getting the ID here, and then we are using Model.findByIdAndDelete
 * to delete that field, while passing the id.
 */ 
router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Model.findByIdAndDelete(id)
        res.send(`Document with ${data.nombre} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})