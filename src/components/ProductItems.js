import React, { useEffect, useState ,useRef} from 'react'
// import margarita from './margarita.jpg'
import './ProductItems.css'
import vegsym from './veg_symbol.png'
import nonvegsym from './nonveg_symbol.png'
import delsym from './delete_symbol.JPG'
export default function ProductItems(props) {
    const [customs, setcustoms] = useState([[],[0,0]]);
    const r=useRef(0);
    const custp=useRef(0);
    //const sizecrustprises={regular:{newhandtossed:[true,99],wheatthincrust:[true,129],cheeseburst:[true,174],freshpanpizza:[true,129],classichandtossed:[true,99]},medium:{newhandtossed:[true,199],wheatthincrust:[true,249],cheeseburst:[true,298],freshpanpizza:[true,239],classichandtossed:[false,99]},large:{newhandtossed:[true,99],wheatthincrust:[false,129],cheeseburst:[false,174],freshpanpizza:[false,129],classichandtossed:[false,99]}};
    //const crustsizeprises={newhandtossed:{regular:[true,99],medium:[true,199],large:[true,399]},wheatthincrust:{regular:[true,129],medium:[true,249],large:[false,399]},cheeseburst:{regular:[true,174],medium:[true,298],large:[false,399]},freshpanpizza:{regular:[true,129],medium:[true,239],large:[false,399]},classichandtossed:{regular:[true,99],medium:[false,199],large:[false,399]}};
    const sizecrustprises = props.details1;
    const crustsizeprises = props.details2;
    const [custdispclass,setcustdispclass]=useState("nocustdisplay");
    const [selectedsize, setselectedsize] = useState("Regular");
    const [selectedcrust, setselectedcrust] = useState("New Hand Tossed");
    const [sizeprice, setsizeprice] = useState([crustsizeprises.newhandtossed.regular[1], crustsizeprises.newhandtossed.medium[1], crustsizeprises.newhandtossed.large[1]]);
    const [crustprice, setcrustprice] = useState([sizecrustprises.regular.newhandtossed[1], sizecrustprises.regular.wheatthincrust[1], sizecrustprises.regular.cheeseburst[1], sizecrustprises.regular.freshpanpizza[1], sizecrustprises.regular.classichandtossed[1]]);
    const [buttonstate, setbuttonstate] = useState([false, false, false, false, false, false, false, false]);
    const [finalprice, setfinalprice] = useState(crustsizeprises.newhandtossed.regular[1]);

    const [sizestyle, setsizestyle] = useState({
        display: "none",
        backgroundColor: "white",
        boxShadow: "0px 0px 2px 2px rgb(210 221 233)",
        borderRadius: "2px",
        padding: "1vw",
        marginLeft: "1vw",
        marginTop: "-0.5vw",
        zIndex: 1
    });
    const [cruststyle, setcruststyle] = useState({
        display: "none",
        backgroundColor: "white",
        boxShadow: "0px 0px 2px 2px rgb(210 221 233)",
        borderRadius: "2px",
        padding: "1vw",
        marginLeft: "6vw",
        marginTop: "-0.5vw",
        zIndex: 1
    });
    const sizeSelection = () => {
        if (sizestyle.display === "none") {
            setcruststyle({
                display: "none",
                backgroundColor: "white",
                boxShadow: "0px 0px 2px 2px rgb(210 221 233)",
                borderRadius: "2px",
                padding: "1vw",
                marginLeft: "6vw",
                marginTop: "-0.5vw",
                zIndex: 1
            });
            setsizestyle({
                display: "block",
                backgroundColor: "white",
                boxShadow: "0px 0px 2px 2px rgb(210 221 233)",
                borderRadius: "2px",
                padding: "1vw",
                marginLeft: "1vw",
                marginTop: "-0.5vw",
                zIndex: 1
            });
        }
        else {
            setsizestyle({
                display: "none",
                backgroundColor: "white",
                boxShadow: "0px 0px 2px 2px rgb(210 221 233)",
                borderRadius: "2px",
                padding: "1vw",
                marginLeft: "1vw",
                marginTop: "-0.5vw",
                zIndex: 1
            });
        }
    }
    const crustSelection = () => {
        if (cruststyle.display === "none") {
            setcruststyle({
                display: "block",
                backgroundColor: "white",
                boxShadow: "0px 0px 2px 2px rgb(210 221 233)",
                borderRadius: "2px",
                padding: "1vw",
                marginLeft: "6vw",
                marginTop: "-0.5vw",
                zIndex: 1
            });
            setsizestyle({
                display: "none",
                backgroundColor: "white",
                boxShadow: "0px 0px 2px 2px rgb(210 221 233)",
                borderRadius: "2px",
                padding: "1vw",
                marginLeft: "1vw",
                marginTop: "-0.5vw",
                zIndex: 1
            });
        }
        else {
            setcruststyle({
                display: "none",
                backgroundColor: "white",
                boxShadow: "0px 0px 2px 2px rgb(210 221 233)",
                borderRadius: "2px",
                padding: "1vw",
                marginLeft: "6vw",
                marginTop: "-0.5vw",
                zIndex: 1
            });
        }
    }
    function selectsize(e) {
        var but_st = [buttonstate[0], buttonstate[1], buttonstate[2]];
        var pri = [];
        var hjk;
        if (e === "Regular") {
            hjk = sizecrustprises.regular;
            setfinalprice(sizeprice[0]);
        }
        else if (e === "Medium") {
            hjk = sizecrustprises.medium;
            setfinalprice(sizeprice[1]);
        }
        else {
            hjk = sizecrustprises.large;
            setfinalprice(sizeprice[2]);
        }
        for (var i in hjk) {
            if (hjk[i][0] === true) {
                but_st.push(false);
                pri.push(hjk[i][1]+custp.current);
            }
            else {
                but_st.push(true);
                pri.push("");
            }
        }
        setbuttonstate(but_st);
        setselectedsize(e);
        setcrustprice(pri);
        setsizestyle({
            display: "none",
            backgroundColor: "white",
            boxShadow: "0px 0px 2px 2px rgb(210 221 233)",
            borderRadius: "2px",
            padding: "1vw",
            marginLeft: "1vw",
            marginTop: "-0.5vw",
            zIndex: 1
        });
    }
    function selectcrust(e) {
        var but_st = [0, 0, 0, buttonstate[3], buttonstate[4], buttonstate[5], buttonstate[6], buttonstate[7]];
        var pri = [];
        var hgk;
        if (e === "New Hand Tossed") {
            hgk = crustsizeprises.newhandtossed;
            setfinalprice(crustprice[0]);
        }
        else if (e === "100% wheat thin crust") {
            hgk = crustsizeprises.wheatthincrust;
            setfinalprice(crustprice[1]);
        }
        else if (e === "Cheese Burst") {
            hgk = crustsizeprises.cheeseburst;
            setfinalprice(crustprice[2]);
        }
        else if (e === "Fresh Pan Pizza") {
            hgk = crustsizeprises.freshpanpizza;
            setfinalprice(crustprice[3]);
        }
        else {
            hgk = crustsizeprises.classichandtossed;
            setfinalprice(crustprice[4]);
        }
        var j = 0;
        for (var i in hgk) {
            if (hgk[i][0] === true) {
                but_st[j] = false;
                pri.push(hgk[i][1]+custp.current);
                j = j + 1;
            }
            else {
                but_st[j] = true;
                pri.push("")
                j = j + 1;
            }
        }
        setbuttonstate(but_st);
        setselectedcrust(e);
        setsizeprice(pri);
        setcruststyle({
            display: "none",
            backgroundColor: "white",
            boxShadow: "0px 0px 2px 2px rgb(210 221 233)",
            borderRadius: "2px",
            padding: "1vw",
            marginLeft: "6vw",
            marginTop: "-0.5vw",
            zIndex: 1
        });
    }
    const [atcstate, setatcstate] = useState(0);
    const [quantity, setquantity] = useState(0);
    useEffect(() => {
        setquantity(props.quantity);
        setatcstate(props.quantity);
    }, [props.quantity]);

    function multidcompare(arr1, arr2) {
        var g = 0, h = 0;
        if ((arr1 === arr2) || (arr1[0].length === 0 && arr2[0].length === 0 && arr2[1][0] === 0 && arr2[1][0] === 0))
          return true;
        if ((arr1[0].length !== arr2[0].length) || (arr1[0].length === 0) || (arr2[0].length === 0))
          return false;
        if ((arr1[0].length !== 0 && arr2[0].length !== 0))
          for (let i = 0; i < arr1[0].length; i++) {
            // for (let j = 0; j < arr1[i].length; j++) 
            if (arr2[0].includes(arr1[0][i]))
              g = 1;
            else {
              g = 0;
              break;
            }
          }
        else
          g = 1;
        if ((arr1[1][0] === arr2[1][0] && arr1[1][1] === arr2[1][1]))
          h = 1;
        if (g === 1 && h === 1)
          return true;
        return false;
    
      }
    function quantitychange(e) {
        var trt;
        if (e === 1) {
            if (quantity === 1) {
                trt = 0;
                setatcstate(0);
                props.atcpresseddets(2, props.title, props.desc, props.pizza_img, props.vegetarian, selectedsize, selectedcrust, finalprice, quantity, customs, e);
            }
            else {
                var bgh=0;
                for(let i=0;i<props.atcdets.length;i++){
                    if(props.atcdets[i].title===props.title)
                    bgh=bgh+1;
                }
                if(bgh<2)
                {trt = quantity - 1;
                // setquantity(t2);
                props.atcpresseddets(0, props.title, props.desc, props.pizza_img, props.vegetarian, selectedsize, selectedcrust, finalprice, trt, customs, e);
                }
                else
                {trt=quantity;
                props.disperrorbox(true);
                }
            }
        }
        else {
            trt = quantity + 1;
            // if(r.current.selectedsize===selectedsize && r.current.selectedcrust===selectedcrust) 
            // var sd=0;  
            // for(let i=0;i<props.atcdets.length;i++)
            // if(props.atcdets[i].title===props.title && multidcompare(props.atcdets[i].customisations,customs) && props.atcdets[i].selectedsize===selectedsize && props.atcdets[i].selectcrust===selectedcrust)    
            // {sd=props.atcdets[i].quantity; 
            //     break;}
            // console.log(sd);     
            props.atcpresseddets(0, props.title, props.desc, props.pizza_img, props.vegetarian, selectedsize, selectedcrust, finalprice,r.current.quantity+1, customs, e);
            // else
            // props.atcpresseddets(1, props.title, props.desc, props.pizza_img, props.vegetarian, selectedsize, selectedcrust, finalprice,1, customs, e);
            
        }
        setquantity(trt);
        // console.log(quantity);
    }
    function atcoc() {
        setatcstate(1);
        setquantity(1);
        props.atcpresseddets(1, props.title, props.desc, props.pizza_img, props.vegetarian, selectedsize, selectedcrust, finalprice,1, customs, 2);
    }
    var hbn = ''
    useEffect(() => {
        var t=0;
        var jf=-1; 
        // r.current=0;
        for(let b=0;b<props.inr.length;b++)
        if(props.inr[b][0]===props.title)
        jf=props.inr[b][1];
        if (props.atcdets.length !== 0 && props.atcdets[0] !== 0)
        if(jf!==-1 && jf!==-2)
        r.current=props.atcdets[jf];
        else if(jf!==-2)
            for (let i = 0; i < props.atcdets.length; i++) {
                if (props.atcdets[i].title === props.title) {
                    r.current=props.atcdets[i];
                    // selectsize(props.atcdets[i].selectedsize);
                    // selectcrust(props.atcdets[i].selectedcrust);
                    // if(props.atcdets[i].customisations!==0){
                    //     setcustoms(props.atcdets[i].customisations);
                    //     setfinalprice(props.atcdets[i].finalprice);
                    //     t=1;
                    // }
            }
        }


        var vcf,pd=0;
        var bts=[0,0,0],sizp=[],crup=[];
        if(r.current!==0)
        {
            // selectsize(r.current.selectedsize);
            // selectcrust(r.current.selectedcrust);
                    if(r.current.customisations!==0 && (r.current.customisations[0].length!==0 || r.current.customisations[1][0]!==0) ){
                        setcustoms(r.current.customisations);
                        // setfinalprice(r.current.finalprice);
                        t=1;
                    }
            if(r.current.selectedsize==="Regular")
            vcf=sizecrustprises.regular;
            else if(r.current.selectedsize==="Medium")
            vcf=sizecrustprises.medium;
            else
            vcf=sizecrustprises.large;
            var vcj;
            if(r.current.selectedcrust==="New Hand Tossed")
            {pd=vcf.newhandtossed[1];
                vcj=crustsizeprises.newhandtossed;
            }
            else if(r.current.selectedcrust==="100% wheat thin crust")
            {pd=vcf.wheatthincrust[1];
                vcj=crustsizeprises.wheatthincrust;}
            else if(r.current.selectedcrust==="Cheese Burst")
            {pd=vcf.cheeseburst[1];
                vcj=crustsizeprises.cheeseburst;}
            else if(r.current.selectedcrust==="Fresh Pan Pizza")
            {pd=vcf.freshpanpizza[1];
                vcj=crustsizeprises.freshpanpizza;}
            else
            {pd=vcf.classichandtossed[1];
                vcj=crustsizeprises.classichandtossed;}
            custp.current=(r.current.finalprice)-pd;    
            for(var hs in vcf)
            if(vcf[hs][0]===true)
            {
                bts.push(false);
                crup.push(vcf[hs][1]+custp.current);
            }
            else
            {bts.push(true);
                crup.push("");
            }
                var topd=0;
            for(var rjh in vcj)
            if(vcj[rjh][0]===true)
            {bts[topd]=false;
                sizp.push(vcj[rjh][1]+custp.current);
                topd=topd+1;
            }
            else
            {
                bts[topd]=true;
                sizp.push("");
                topd=topd+1;
            }
            setcrustprice(crup);
            setsizeprice(sizp);
            setbuttonstate(bts);
            setselectedsize(r.current.selectedsize);
            setselectedcrust(r.current.selectedcrust);

            // selectsize(r.current.selectedsize);
            // selectcrust(r.current.selectedcrust);
            setfinalprice(r.current.finalprice);


        }
        if (t === 0)
        {//setcustoms([[],[0,0]]);
        //     custp.current=0;
            selectsize(selectedsize);
            selectcrust(selectedcrust);   
        }
    }, [props.atcdets]);
    useEffect(() => {
        // var t = 0; 
        // var jf=-1;
        // for(let b=0;b<props.inr.length;b++)
        // if(props.inr[b][0]===props.title)
        // jf=props.inr[b][1];
        if (props.atcdets.length !== 0 && props.atcdets[0] !== 0)
        // if(jf!==-1)
        // r.current=props.atcdets[jf];
        // else 
            for (let i = 0; i < props.atcdets.length; i++) {
                if (props.atcdets[i].title === props.title && multidcompare(props.atcdets[i].customisations,customs) && props.atcdets[i].selectedsize===selectedsize && props.atcdets[i].selectedcrust===selectedcrust) {
                    r.current=props.atcdets[i];
                    // selectsize(props.atcdets[i].selectedsize);
                    // selectcrust(props.atcdets[i].selectedcrust);
                    // if(props.atcdets[i].customisations!==0){
                    //     setcustoms(props.atcdets[i].customisations);
                    //     setfinalprice(props.atcdets[i].finalprice);
                    //     t=1;
                    // }
            }
        }   
        // setfinalprice(finalprice=>finalprice+(custp.current));

    }, [selectedsize,selectedcrust,customs]);
const custclick=()=>{
    if(custdispclass==="nocustdisplay")
    setcustdispclass("custdisplay");
    else
    setcustdispclass("nocustdisplay");
}
function bvf(){
    if(customs[0].length!==0 && customs!==0)
    for(let i=0;i<customs[0].length;i++){
           hbn=hbn+customs[0][i]+", ";
    }
    hbn=hbn.slice(0,hbn.length-2);
}
function hbgh(){
    setcustoms([[],[0,0]]);
    var y=custp.current;
    custp.current=0;
    setcustdispclass("nocustdisplay");
    selectsize(selectedsize);
    selectcrust(selectedcrust); 
    setfinalprice(finalprice=>finalprice-y);
}
if(customs!==0)
bvf();
return (
    <>
        <div className="product_card">
            <img className="pizza_img" src={props.pizza_img} alt="..." />
            <img className="veg_img" src={(props.vegetarian === true) ? (vegsym) : (nonvegsym)} alt="..." />
            <p className="price">₹ {finalprice}</p>
            <button className="customise" type="button" onClick={() => props.custm(1, props.title, selectedsize, selectedcrust, finalprice,customs)}>CUSTOMISE &#8594;</button>
            <p className="title">{props.title}</p>
            <p className="desc">{props.desc}</p>
            <hr />
            <div className="size_crust">
                <div className="piz_size">
                    <p className="ss">Size</p>
                    <button type="button" className="size" onClick={sizeSelection}>{selectedsize}</button>
                </div>
                <div className="piz_crust">
                    <p className="ss">Crust</p>
                    <button type="button" className="crust" onClick={crustSelection}>{selectedcrust}</button>
                </div>
            </div>
            <div className="dd">
                <div className="size_dd" style={sizestyle}>
                    <p className="dd_1"><button type="button" disabled={buttonstate[0]} className="dd_but1" onClick={() => selectsize("Regular")}><p className="butt_text"><span className="dd_desc">Regular</span><span className="p">{(sizeprice[0] === "") ? ("") : ("₹" + sizeprice[0])}</span><p>Serves 1</p></p></button></p>
                    <p className="dd_1"><button type="button" disabled={buttonstate[1]} className="dd_but1" onClick={() => selectsize("Medium")}><p className="butt_text"><span className="dd_desc">Medium</span><span className="p">{(sizeprice[1] === "") ? ("") : ("₹" + sizeprice[1])}</span><p>Serves 2</p></p></button></p>
                    <p className="dd_1"><button type="button" disabled={buttonstate[2]} className="dd_but1" onClick={() => selectsize("Large")}><p className="butt_text"><span className="dd_desc">Large</span><span className="p">{(sizeprice[2] === "") ? ("") : ("₹" + sizeprice[2])}</span><p>Serves 3</p></p></button></p>
                </div>
                <div className="crust_dd" style={cruststyle}>
                    <p className="dd_1"><button type="button" disabled={buttonstate[3]} className="dd_but" onClick={() => selectcrust("New Hand Tossed")}><p><span className="dd_desc">New Hand Tossed</span><span className="p">{(crustprice[0] === "") ? ("") : ("₹" + crustprice[0])}</span></p></button></p>
                    <p className="dd_1"><button type="button" disabled={buttonstate[4]} className="dd_but" onClick={() => selectcrust("100% wheat thin crust")}><p><span className="dd_desc">100% wheat thin crust</span><span className="p">{(crustprice[1] === "") ? ("") : ("₹" + crustprice[1])}</span></p></button></p>
                    <p className="dd_1"><button type="button" disabled={buttonstate[5]} className="dd_but" onClick={() => selectcrust("Cheese Burst")}><p><span className="dd_desc">Cheese Burst</span><span className="p">{(crustprice[2] === "") ? ("") : ("₹" + crustprice[2])}</span></p></button></p>
                    <p className="dd_1"><button type="button" disabled={buttonstate[6]} className="dd_but" onClick={() => selectcrust("Fresh Pan Pizza")}><p><span className="dd_desc">Fresh Pan Pizza</span><span className="p">{(crustprice[3] === "") ? ("") : ("₹" + crustprice[3])}</span></p></button></p>
                    <p className="dd_1"><button type="button" disabled={buttonstate[7]} className="dd_but" onClick={() => selectcrust("Classic Hand Tossed")}><p><span className="dd_desc">Classic Hand Tossed</span><span className="p">{(crustprice[4] === "") ? ("") : ("₹" + crustprice[4])}</span></p></button></p>
                </div>
            </div>
            {
                (customs !== 0 && (customs[0].length !== 0 || customs[1][1] !== 0)) && (<div className='customs1'>
                    <button className='custombutt1' type="button" onClick={custclick}>CUSTOMISED</button>
                    <div className={custdispclass}>
                        <div className='dfg'>
                            <p className='custtitle1'>YOUR CUSTOMISATION</p>
                            <button type="button" className='cvf' onClick={()=>hbgh()}><img className='delbut1' src={delsym} alt="..." /></button>
                        </div>
                        {(customs[0].length !== 0) && (<div className='adtops'>
                            <p className='addtopstitle'>Added Toppings</p>
                            <p className='alltop'>{hbn}</p>
                        </div>)
                        }
                        {(customs[1][1] !== 0) && (<div className='replacetop'>
                            <p className='reptoptitle'>Replaced Toppings</p>
                            <p className='replacedtop'>{customs[1][0]} with {customs[1][1]}</p>
                        </div>)
                        }
                    </div>
                </div>)
            }
            {(atcstate === 0) ? (<p className="atc"><button type="button" className="addtc" onClick={() => atcoc()}>ADD TO CART</button></p>) :
                (<div className="quan1">
                    <button className="quan1_but" onClick={() => quantitychange(1)}>-</button>
                    <button className="quan1_but_1">{quantity}</button>
                    <button className="quan1_but" onClick={() => quantitychange(2)}>+</button>
                </div>)

            }
        </div>
    </>
)
}
