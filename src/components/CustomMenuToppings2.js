import React, { useState } from 'react'
export default function CustumMenuToppings(props) {
function vaters(){
    props.updateavail(props.index);
    if(props.cls[0]==="add_but")
    props.custumisations(3,props.name);
    else
    props.custumisations(5,props.name);

}    
    return (
        <div className="toping_opt">
            <p className="toping_title">{props.name}</p>
            <img className="opt_img" src={props.image} alt="..."/>
            <span><button className={props.cls[0]} disabled={props.buttonstate} type="button" onClick={()=>vaters()}>{props.cls[1]}</button></span>
        </div>
        
    )
}
