import React, { useEffect, useState } from 'react'
import './AddToCart.css'
import AddToCartItems from './AddToCartItems'
import noatc from './noatc.JPG'
export default function AddToCart(props) {
    const [tr, settr] = useState([0]);
    useEffect(() => {
        settr(props.atcdets);
    }, [props.atcdets]);
    // console.log(tr);
   
    return (

        <div className="cartlist">
            {
                (tr[0] !== 0 && tr.length !== 0) ? (tr.map((atc) => (
                    <AddToCartItems title={atc.title} desc={atc.description} image={atc.pizzaimg} selsize={atc.selectedsize} selcrust={atc.selectedcrust} customs={atc.customisations} fp={atc.finalprice} quantity={atc.quantity} veg={atc.veg} atcpresseddets={props.atcpresseddets} proitemsquanupdate={props.proitemsquanupdate}/>
                ))) : (
                    <div>
                        <img className="noatcimg" src={noatc} alt="..." />
                        <div className="efg">
                            <p className="noatcp">YOUR CART IS EMPTY</p>
                            <p className="noatcp1">Please add some items from the menu</p>
                        </div>
                    </div>)
            }
        </div>

    )
}
