import React, { useState ,useEffect}  from 'react'
import './Address.css'
import locationicon from './location_icon.png'
import edit from './editaddbut.PNG'
import del from './deladdbut.PNG'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import noadd from './noaddimg.PNG'
export default function Address(props) {
    // const addlist = ["bbdskjbvckjsdc cocowcpowecwe weifnwef", "iusbccweioc wejweomw ejdpewwepo", "uhweiuewewwe, iuwehdiuwefwe wefiweifhiuwe"];
    const [addlist,setaddlist]=useState(props.addlist);
    const [newadd2,setnewadd2]=useState(0);
    const [index,setindex]=useState(-1);
    useEffect(()=>{
        if(addlist.length===0)
        setaddlist(props.addlist);
    },[props.addlist]);
    async function addressedit(t,ind,add){
        if(t===1)
        {
            var f=Object.assign([],addlist);
            f.push(add);
            const hgf6= await fetch('/profileedit/addressadd',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json',
                    'auth-token':(props.authtoken)
                },
                body:JSON.stringify({newadd:add})
            });
            setaddlist(f);
            props.aadfre(f)
        }
        else if(t===2){
            var g=Object.assign([],addlist);
            g[ind]=add;
            const hgf6= await fetch('/profileedit/addressedit',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json',
                    'auth-token':(props.authtoken)
                },
                body:JSON.stringify({address:add,prevadd:addlist[ind]})
            });
            setaddlist(g);
            props.aadfre(g)
        }
        else if(t===3){
            var h=Object.assign([],addlist);
            h.splice(ind,1);
            const hgf6= await fetch('/profileedit/addressdelete',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json',
                    'auth-token':(props.authtoken)
                },
                body:JSON.stringify({deladd:add})
            });
            setaddlist(h);
            props.aadfre(h)

        }
        props.aadfre(addlist)

    }
    return (
        <div className={props.status}>
            <div className='mcc'>
            <button className="closeadd" type="button" onClick={() => props.addresspage()}>&#x2716;</button>
                <Router>
                    <Routes>
                        <Route exact path='/' element={
                            (addlist.length!==0)?
                            (<>
                               <div className='addtabtitle'>
                                    <p className='tter'>My Address</p>
                                    <Link to="/add"><button className='addnewadd' type='button'>ADD NEW ADDRESS</button></Link>
                                </div>
                                <div className='addlist'>
                                    {
                                        addlist.map((adds,i) => (
                                            <div className='adds'>
                                                <button className='addp1' onClick={()=>props.addoi(adds)}>
                                                    <img className='lim' src={locationicon} alt="..." />
                                                    <p className='addtext'>{adds}</p>
                                                </button>
                                                <div className='addp2'>
                                                    <Link to="/edit"><button className='addedit' type='button' onClick={()=>setindex(i)}><img className='addc' src={edit} alt="..." /></button></Link>
                                                    <button className='adddel' type='button' onClick={()=>addressedit(3,i,adds)}><img className='addc' src={del} alt="..." /></button>
                                                </div>
                                            </div>
                                        ))}
                                </div>
                            </>):(<>
                              <div className='addtabtitle'>
                                <p className='tter'>My Address</p>
                              </div>
                              <div className='mkj'>
                                  <img className='tgv' src={noadd} alt="..."/>
                                  <p className='ttt1'>NO ADDRESSES ARE SAVED</p>
                                  <p className='ytre'>Please add an address for faster checkout</p>
                                  <Link to="/add"><button className='uygf' type='button'>ADD NEW ADDRESS</button></Link>
                              </div>
                            </>)}></Route>
                        <Route exact path="/edit" element={
                            <>
                                <div className='addtabtitle'>
                                    <p className='tter'>Edit Address</p>
                                </div>
                                <div className='editform'>
                                    <p className='eftitle'>Fill details below</p>
                                    <form>
                                        <div className='finf'>
                                            <input className='dets' type='text' placeholder='First Name' /><br />
                                            <input className='dets' type='text' placeholder='Address' onChange={e=>{setnewadd2(e.target.value)}}/>
                                        </div>
                                    </form>
                                </div>
                                <Link to="/"><button className='savebut' type='button' onClick={()=>addressedit(2,index,newadd2)}>SAVE & CONTINUE</button></Link>
                            </>
                        }></Route>
                        <Route exact path="/add" element={
                            <>
                                <div className='addtabtitle'>
                                    <p className='tter'>Add Address</p>
                                </div>
                                <div className='editform'>
                                    <p className='eftitle'>Fill details below</p>
                                    <form>
                                        <div className='finf'>
                                            <input className='dets' type='text' placeholder='First Name' /><br />
                                            <input className='dets' type='text' placeholder='Address' onChange={e=>{setnewadd2(e.target.value)}} />
                                        </div>
                                    </form>
                                </div>
                                <Link to="/"><button className='savebut' type='button' onClick={()=>addressedit(1,-1,newadd2)}>SAVE & CONTINUE</button></Link>
                            </>
                        }></Route>
                    </Routes>
                </Router>
            </div>
        </div>
    )
}
