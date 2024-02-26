const express=require('express');
const router=express.Router();
const Product=require('../Models/ProductSchema')
router.post("/addInvoice",async(req,res)=>{
    try{
const invoice=new Product({
    date:req.body.date,
    code_no:req.body.code_no,
    gross_weight:req.body.gross_weight,
    less_vax:req.body.less_vax,
    less_manimoti:req.body.less_manimoti,
    less_others_sil:req.body.less_others_sil,
    ghat_weight:req.body.ghat_weight,
    kundan_weight:req.body.kundan_weight,
    net_weight:req.body.net_weight,
    pcs_k:req.body.pcs_k,
    tak_pcs:req.body.tak_pcs,
    extra:req.body.extra,
    Sil_victo:req.body.Sil_victo,
    total:req.body.total
})
const invoicesave=await invoice.save()
if(invoicesave){
    return res.status(200).json({message:"Created!"})
}
else{
    return res.status(200).json({message:"Error Occured"})
}
    }
    catch(err){
        console.log(err)
    }
})
router.get('/getInvoice',async(req,res)=>{
       try{
       const product=await Product.find()
       if(product){
        return res.json(product)
       }

    }
    catch(err){
        console.log(err)
    }
})
router.get('/getInvoiceById/:id',async(req,res)=>{
    const Id=req.params.id;
    try{
    const Getdata= await Product.findById(Id)
    if(Getdata)
    {
        return res.status(200).json(Getdata)
    }
    else{
        return res.json({
            message:"Please Try Again"
        })
    }
    }
    catch(err)
    {
        return res.json(err)
    }
    })
    module.exports=router