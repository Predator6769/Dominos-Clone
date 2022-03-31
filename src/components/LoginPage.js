import React, { useState } from 'react'
import './LoginPage.css'
import loginpizzaimage from './loginpizzaimage.png'
import pizzalogo from './domlogo2.PNG'
export default function LoginPage(props) {
const [rmnl,setrmnl]=useState(0);
const [passl,setpassl]=useState(0);
const [pass,setpass]=useState("");
const [rmn,setrmn]=useState();
// const [token,settoken]=useState(0);
  
async function gsubmit(){
    var yui; 
    const dets={
      phoneNumber:rmn,
      password:pass
    };
    const lguserdets=await fetch('/silog',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(dets)
    })
    .then(res=>res.json())
    .then(response=>{yui=response;});
    props.logtoken(yui);

    setpass("");
    setrmn("");
    setrmnl(0);
    setpassl(0);
    if(!JSON.stringify(yui).includes("errors"))
    props.loginpage();
}
  return (
    <div className={props.status}>
      <div className='eeef'>
        <img className='piimg2' src={loginpizzaimage} alt="..."/>
        <img className='dl2' src={pizzalogo} alt="..."/>
        <span className='ltext'>Domino's Pizza</span>
        <p className='lr2'>Login to unlock awesome new features</p>
      </div>  
      <form>
      <div className='entdets'>
        <p className='drt'>Login with your valid mobile number</p>
        <label className='e' htmlFor='rmn1'>Mobile Number</label> 
        <input className='rmni' type='number' name='rmn1' onChange={e=>{setrmnl(e.target.value.length);setrmn(e.target.value);}} value={rmn}/>
        <label className='e' htmlFor='pass'>Password</label> 
        <input className='rmni' type='password' name='pass' onChange={e=>{setpassl(e.target.value.length);setpass(e.target.value);}} value={pass}/>
        <button disabled={(rmnl===10 && passl>=8)?false:true} className='logbut' type='button' onClick={()=>gsubmit()}>SUBMIT</button>
      </div>
      </form>
      <button className='rty' type='button'>TERMS OF USE</button>
    </div>
  )
}