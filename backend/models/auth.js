const mongoose=require('mongoose');
const {Schema}=mongoose;
const authschema= new Schema({
    username:{
        type:String,
        unique:false
    },
    email:{
        type:String,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    phoneNumber:{
        type:Number,
        required:true,
        unique:true
    },
    address:{
        type:Array,
        unique:false
    },
    atcdets:{
        type:Array,
        unique:false
    }
});
const user=mongoose.model('autherisation',authschema);
// user.createIndexes();
module.exports=user;