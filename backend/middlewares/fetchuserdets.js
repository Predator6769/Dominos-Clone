const jwt=require('jsonwebtoken');
const secret="wedonttalkanymore";
const fetchuser=(req,res,next)=>{

    const token=req.header('auth-token');
    if(!token){
        return res.status(401).json({errors:"please use a valid auth token"});
    }
    try{
    const data=jwt.verify(token,secret);
    req.id=data.id;
    next();
    }
    catch(err){
        return res.status(401).json({errors:"please use a valid auth token"});
    }
    

}


module.exports=fetchuser;