const mongoose=require('mongoose')
const TemplateSchema= mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    },
    active:{
       type:Boolean
    },
},{timestamps:true})
const Template=mongoose.model('TEMPLATE',TemplateSchema)
module.exports=Template