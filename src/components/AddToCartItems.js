import React, { useEffect, useState } from 'react'
import './AddToCartItems.css'
// import farmhouse from './farmhouse.jpg'
import vegsym from './veg_symbol.png'
import nonvegsym from './nonveg_symbol.png'
import delbut from './delete_symbol.JPG'

export default function AddToCartItems(props) {
    const [quantity, setquantity] = useState(0);
    useEffect(() => {
        setquantity(props.quantity);
    }, [props.quantity]);
    function quantitychange(e){
        var vfg;
          if(e===1){
              if(quantity===1){
                vfg=1;
                // props.proitemsquanupdate(props.title,vfg);
                props.atcpresseddets(2,props.title, props.desc, props.image, props.veg, props.selsize, props.selcrust,props.fp,quantity,props.customs,e,1);      
              }
              else{
                vfg=quantity-1;
                //   setquantity(t1);
                props.atcpresseddets(0,props.title, props.desc, props.image, props.veg, props.selsize, props.selcrust,props.fp,vfg,props.customs,e,1);
                // props.proitemsquanupdate(props.title,vfg);
              }  
          }
          else{
              if(quantity===0)
              props.atcpresseddets(1,props.title, props.desc, props.image, props.veg, props.selsize, props.selcrust,props.fp,0,props.customs,e,1);
              else
              {vfg=quantity+1;
              //   setquantity(t2);
              props.atcpresseddets(0,props.title, props.desc, props.image, props.veg, props.selsize, props.selcrust,props.fp,vfg,props.customs,e,1);
              }//   props.proitemsquanupdate(props.title,vfg);
          }
          setquantity(vfg);
    }
    // const [topd, settopd] = useState("");
    var hbn="";
    function bvf(){
        
        for(let i=0;i<props.customs[0].length;i++){
               hbn=hbn+props.customs[0][i]+", ";
        }
        hbn=hbn.slice(0,hbn.length-2);
        // settopd(hbn);
    }
    if( props.customs!==0){
        bvf();
    }
    return (
        <div className="addedproduct">
            <div className="piz_dets">
                <div className="piztypevnv">
                    <img className="piz_img" src={props.image} alt="..." />
                    <img className="veg_nonveg" src={(props.veg===true)?(vegsym):(nonvegsym)} alt="..." />
                </div>
                <div className="pizndt">
                    <p className="pizti">{props.title}</p>
                    <p className="pizdesc">{props.desc}</p>
                    <p className="piztype">{props.selsize} | {props.selcrust}</p>
                </div>
            </div>
            <div className="pizquanprice">
                <div className="quan">
                    <button className="quan_but" onClick={()=>quantitychange(1)}>{(quantity===1)?(<img className="del" src={delbut} alt="..."/>):("-")}</button>
                    <button className="quan_but_1">{quantity}</button>
                    <button className="quan_but" onClick={()=>quantitychange(2)}>+</button>          
                </div>
                <p className="atcprice">₹ {Number(props.fp)*Number(quantity)}</p>
            </div>
            {(props.customs!==0 && (props.customs[0].length!==0 || props.customs[1][1]!==0))&&(<div className="customs">
                <p className="custumtitl">Your Customisation</p>
                {(props.customs[0].length!==0)&&(<p className="addtop">Added Toppings : <span>{hbn}</span></p>)}
                {(props.customs[1][1]!==0)&&(<p className="reptop">Replaced Toppings : <span>{props.customs[1][0]}</span> with <span> {props.customs[1][1]}</span></p>)}
            </div>)
            }
            <div className="endl"></div>
        </div>
    )
}
