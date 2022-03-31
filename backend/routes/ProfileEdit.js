const express = require('express');
const router=express.Router();
const fetchuser =require('../middlewares/fetchuserdets');
const User = require('../models/auth');

router.post('/addressedit',fetchuser,async (req,res)=>{
    try{
    const chid=req.id;
    const user=await User.findById(chid);
    for(let i=0;i<user.address.length;i++)
    if(user.address[i]===req.body.prevadd)
    {user.address[i]=(req.body.address);
        break;}
    await user.save();
    res.json(user);
    }
    catch(err){
        res.status(500).json({errors:"internal servor error"});
    }
});
router.post('/addressadd',fetchuser,async (req,res)=>{
    try{
       const chid=req.id;
       const user=await User.findById(chid);
       user.address.push(req.body.newadd);
       await user.save();
       res.json(user);
    }
    catch(err){
        res.status(500).json({errors:"internal servor error"});
    }
});
router.post('/addressdelete',fetchuser,async (req,res)=>{
    try{
       const chid=req.id;
       const user=await User.findById(chid);
       for(let i=0;i<user.address.length;i++)
       if(user.address[i]===req.body.deladd)
       {user.address.splice(i,1);
           break;}       
       await user.save();
       res.json(user);
    }
    catch(err){
        res.status(500).json({errors:"internal servor error"});
    }    
});
router.post('/emailedit',fetchuser,async (req,res)=>{
    try{
       const chid=req.id;
       const user=await User.findById(chid);
       user.email=req.body.email;       
       await user.save();
       res.json(user);
    }
    catch(err){
        res.status(500).json({errors:"internal servor error"});
    }
});
router.post('/usernameedit',fetchuser,async (req,res)=>{
    try{
       const chid=req.id;
       const user=await User.findById(chid);
       user.username=req.body.username;       
       await user.save();
       res.json(user);
    }
    catch(err){
        res.status(500).json({errors:"internal servor error"});
    }
});
router.post('/atcedit',fetchuser,async (req,res)=>{
    try{
       const chid=req.id;
       const user=await User.findById(chid);
       user.atcdets=req.body.atcdets;       
       await user.save();
       res.json(user);
    }
    catch(err){
        res.status(500).json({errors:"internal servor error"});
    }
});    
module.exports=router;