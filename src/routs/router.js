const router = require('express').Router();
require('../db/connection')
const Ranking = require('../model/Ranking')

router.post('/',async(req, res)=>{
    try{
        const getrecords=new Ranking(req.body)
        console.log(getrecords);
        const respons = await getrecords.save();
        return res.status(201).send(respons);
    }catch(err){
        res.status(400).send(err);
    }
})

router.get('/records',async(req, res)=>{
    try{
        const showrecords =await Ranking.find({}).sort({"ranking":1});
        res.status(201).send(showrecords);
    }catch(err){
        res.staus(400).send(err);
    }
})
router.get('/record/:id',async(req, res)=>{
    try{
        const showrecord = await Ranking.findById({_id:req.params.id});
        res.status(201).send(showrecord);
    }catch(err){
        res.status(400).send(err);
    }
})
router.patch('/record/update/:id',async(req, res)=>{
    try{
        const patchrecord = await Ranking.findByIdAndUpdate({_id:req.params.id},req.body,{
            new:true
        });
        res.send(parecord);
    }catch(err){
        res.status(500).send(err);
    }
})
router.delete('/record/delete/:id',async(req, res)=>{
    try{
        const deletrecord = await Ranking.findByIdAndDelete(req.params.id);
        res.send(deletrecord);
    }catch(err){
        res.status(500).send(err);
    }
 
})

module.exports=router;