import React, { useState } from 'react'
export default function CustumMenuToppings(props) {
    const [toppingbut, settoppingbut] = useState(0);
    function topbuttonclick(){
        if(toppingbut[0]==="add_but" || (toppingbut===0 && props.status[0]==="add_but")){
            settoppingbut(["remove_but","REMOVE"]);
            props.priceupdate(props.name,1);
            props.custumisations(1,props.name);
        }
        else{
            settoppingbut(["add_but","ADD"]);
            props.priceupdate(props.name,0);
            props.custumisations(2,props.name);
        }
    }
    
    return (
        <div className="toping_opt">
            <p className="toping_title">{props.name}</p>
            <img className="opt_img" src={props.image} alt="..."/>
            <span><button className={(toppingbut===0)?(props.status[0]):toppingbut[0]} type="button" onClick={()=>topbuttonclick()}>{(toppingbut===0)?(props.status[1]):toppingbut[1]}</button></span>
        </div>
        
    )
}
