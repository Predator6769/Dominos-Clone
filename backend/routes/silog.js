const express = require('express');
const User = require('../models/auth');
const { check, validationResult } = require('express-validator');
const bcryptjs = require('bcryptjs');
const fetchuser = require('../middlewares/fetchuserdets');
const router = express.Router();
const secret = "wedonttalkanymore";
const jwt = require('jsonwebtoken');
// check('username','Enter a valid username').isLength({min:3}),check('email',"Enter a valid email").isEmail(),check('password',"Enter a valid password").isLength({min:8}),check("phoneNumber","Enter a valid phonenumber").isLength(10)
router.post('/', [check('password', "Enter a valid password").isLength({ min: 8 }), check("phoneNumber", "Enter a valid phonenumber").isLength(10)], async (req, res) => {
    
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }
    User.findOne({ phoneNumber: req.body.phoneNumber }, async (err, result) => {
        if (result === null) {
            const salt = await bcryptjs.genSalt(10);
            const hashedpass = await bcryptjs.hash(req.body.password, salt);
            // var b = req.body;
            var b = {
                username:(req.body.phoneNumber).toString(),
                email:(req.body.phoneNumber).toString(),
                phoneNumber: req.body.phoneNumber,
                password: req.body.password,
                address:[],
                atcdets:[0]
            };
            b.password = hashedpass;
            const nuser = User(b);

            nuser.save((err, user) => {
                if (err)
                    {   console.log(err);
                        return res.status(400).json({ error: "The credentials used already exists" });}
                const data = { id: nuser._id };
                const jwdata = jwt.sign(data, secret);
                
                res.json({authtoken:jwdata});
            });
        }
        else{
            const comp = await bcryptjs.compare(req.body.password, result.password);
        if (!comp)
            return res.status(400).json({ errors: "incorrect password entered" });
        const data = { id: result._id };
        const jwttocken = jwt.sign(data, secret);
        res.json({authtoken:jwttocken});

        }
        // const salt=await bcryptjs.genSalt(10);
        // const hashedpass=await bcryptjs.hash(req.body.password,salt);
        // var b=req.body;
        // var b={
        //     username:"",
        //     email:"",
        //     phoneNumber:req.body.phoneNumber,
        //     password:req.body.password
        // };
        // b.password=hashedpass;
        // const nuser=User(b);

        // nuser.save((err,user)=>{
        //     if(err)
        //     return res.status(400).json({error:"The credentials used already exists"});
        //     const data={id:nuser._id};
        //     const jwdata=jwt.sign(data,secret);
        //     console.log(jwdata);
        //     res.json(data);
    });
});
// router.post('/signup', [check('email', "Enter a valid email").isEmail()], (req, res) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//         return res.status(400).json({ errors: errors.array() })
//     }
//     User.findOne({ email: req.body.email }, async (err, result) => {
//         if (result === null)
//             return res.status(400).json({ errors: "The user does not exists" });
//         const comp = await bcryptjs.compare(req.body.password, result.password);
//         if (!comp)
//             return res.status(400).json({ errors: "incorrect password entered" });
//         const data = { id: result._id };
//         const jwttocken = jwt.sign(data, secret);
//         res.send(jwttocken);
//     });
// });

router.post('/getuserdets', fetchuser, async (req, res) => {
    try {
        const usid = req.id;
        const user = await User.findById(usid).select("-password");
        res.json(user);
    }
    catch (err) {
        return res.status(500).json({ errors: "internal server error" });
    }

})

module.exports = router;