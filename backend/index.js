const connecttomongo=require('./db');
const express=require('express');
const path=require('path')

connecttomongo();

const app=express();
const port=5000;

app.use(express.json())
app.use(express.static(path.join('C:/Users/dell/Documents/web dev clone 3','build')))

app.use('/silog',require('./routes/silog'));
app.use('/profileedit',require('./routes/ProfileEdit'));
app.use('/payment',require('./routes/Payment'));

app.get('/',(req,res)=>{
    res.sendFile(path.join('C:/Users/dell/Documents/web dev clone 3','build','index.html'));
});


app.listen(port,()=>{
    console.log(`listening on port ${port}`);
});