const mongoose = require('mongoose')


const NewSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    amount:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:false
    }

},{timestamps:true})

const NewModel = mongoose.model('profile', NewSchema)
module.exports = NewModel