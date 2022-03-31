import React, { useState } from 'react'
import './ProfileEditMenu.css'
import mobilesym from './phonesym.PNG'
import emailsym from './emailsym.PNG'
import lglogo from './lgsym.PNG'
import addsym from './addsym.PNG'
export default function ProfileEditMenu(props) {
  const [usern,setusern]=useState(props.username);
  const [email,setemail]=useState(props.email);
  const [ist,setist]=useState(0);  
  const [eval2,seteval2]=useState(0);
  const [ist1,setist1]=useState(0);
  const [eval1,seteval1]=useState(0);
  async function usernameedit(){
    if(ist===0)  
    {setist(1);}
    else{
        const yf = await fetch('/profileedit/usernameedit',{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
                'auth-token':props.authtoken
            },
            body:JSON.stringify({username:eval2})
        });
        setusern(eval2);
        setist(0);
    }

  }
  async function emailedit(){
    if(ist1===0)  
    {setist1(1);}
    else{
        const yf = await fetch('/profileedit/emailedit',{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
                'auth-token':props.authtoken
            },
            body:JSON.stringify({email:eval1})
        });
        setemail(eval1);
        setist1(0);
    } 
  }
  return (
    <div className={props.status}>
        <div className='dfgb'>
            <div className='p1 tyu'>
                <div className='initial'>{(usern===0)?(""):(usern[0])}</div>
                {(ist===0)?(<p className='nt'>{(usern===0)?(""):(usern)}</p>):(<input className='ett' type='text' onChange={e=>{seteval2(e.target.value);}}/>)}
                <button className='ebut' type='button' onClick={()=>{usernameedit();props.usnedit(ist,eval2);}}>{(ist===0)?("EDIT"):("DONE")}</button>
            </div>
            <div className='p1'>
                <img className='ggg' src={mobilesym} alt="..."/>
                <p className='tgf'>{props.phoneno}</p>
            </div>
            <div className='p1 tyu'>
                <img className='ggg' src={emailsym} alt="..."/>
                {(ist1===0)?(<p className='tgf'>{(email===0)?(""):(email)}</p>):(<input className='ett' type='email' onChange={e=>{seteval1(e.target.value);}}/>)}
                <button className='ebut' type='button' onClick={()=>{emailedit();props.eedit(ist1,eval1)}}>{(ist1===0)?("EDIT"):("DONE")}</button>
                {/* <p className='tgf'>rajesh@gmail.com</p>
                <button className='ebut2' type='button'>EDIT</button> */}
            </div>
            <button className='p1' type='button' onClick={()=>props.addresspage()}>
                <img className='ggg' src={addsym} alt="..."/>
                <p className='tgf'>Address</p>
            </button>
            <button className='p1' type='button' onClick={()=>props.logout()}>
                <img className='ggg' src={lglogo} alt="..."/>
                <p className='tgf'>Logout</p>
            </button>
        </div>
    </div>
  )
}
