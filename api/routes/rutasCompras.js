const express = require('express');

const router = express.Router()

module.exports = router;

const ModelCompras = require('../models/modelCompras');

//Post Method
router.post('/compra', async (req, res) => {
    const data = new ModelCompras({
        idCompra: req.body.idCompra,
        idProveedor: req.body.idProveedor,
        fechaCompras: req.body.fechaCompras,
        precioTotal: req.body.precioTotal,
        observaciones: req.body.observaciones
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})

//Get all Method
router.get('/allCompras', async (req, res) => {
    try{
        const data = await ModelCompras.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Get by ID Method
router.get('/byIdCompra/:id', async (req, res) => {
    try{
        const data = await ModelCompras.findById(req.params.id);
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Update by ID Method
router.patch('/byIdCompra/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await ModelCompras.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})


//Delete by ID Method
router.delete('/byIdCompra/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await ModelCompras.findByIdAndDelete(id)
        res.send(`Document with ${data.idCompra} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

router.get('/byPrecioCompra/:min/:max', async (req, res) => {
    try{
        const data = await ModelCompras.find({"precioTotal":{ 
            $gte : req.params.min,
            $lte : req.params.max }});
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})