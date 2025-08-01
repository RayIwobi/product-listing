const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const NewModel = require('./NewModel')
const dotenv = require('dotenv')
dotenv.config()

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect('mongodb://127.0.0.1:27017/companyDbase')

// app.listen(process.env.PORT, () => {
//     console.log('APP RUNNING ON PORT 4000')
// })

app.post('/new', async(req, res) => {
    const{name, amount, image} = req.body
    const items = NewModel(req.body)
    await items.save()
    res.json(items)
})

app.get('/getme', async(req, res) => {
    const{name, amount, image} = req.body
    const item = await NewModel.find(req.body)
    res.json(item)
})

app.get('/read/:id', async(req, res) => {
    const{id} = req.params
    const item = await NewModel.findById(req.params.id)
    res.json(item)
})

app.put('/profile/:id', async(req, res) => {
    const{id} = req.params
    const {name, amount, image} = req.body
    const updateitems = await NewModel.findByIdAndUpdate(
        id,
        req.body,
        {new:true}
    ) 
    res.json(updateitems)
})

app.delete('/del/:id', async(req, res) => {
    const{id} = req.params
    const{name, amount, image} =req.body
    const delitem = await NewModel.findByIdAndDelete(
        id,
        {name, amount, image},
        {new:true}
    )
    res.status(200).json(delitem)
})

app.listen(process.env.PORT, () => {
    console.log('server running 4000')
})