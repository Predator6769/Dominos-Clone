import React, { useState, useEffect, useRef } from 'react'
import './CustomiseMenu.css'
// import farmhouse from './farmhouse.jpg'
import vegsym from './veg_symbol.png'
import regular from './regular_pizza.JPG'
import medium from './medium_pizza.JPG'
import large from './large_pizza.JPG'
import check from './checkmark.png'
import mushroom from './mashroom_toping.JPG'
import capsicum from './capsicum_toping.JPG'
import corn from './corn_topping.JPG'
import jalapeno from './jalapeno_topping.JPG'
import olive from './olive_topping.JPG'
import onion from './onion_topping.JPG'
import panner from './panner_topping.JPG'
import chilli from './redchilli_toping.JPG'
import nonvegsym from './nonveg_symbol.png'
import bbqchicken from './barbecuechicken.JPG'
import periperi from './Periperichicken.JPG'
import grilled from './grilledchickenrasher.JPG'
import tikka from './chickentikka.JPG'
import peperoni from './chickenpepronitopping.JPG'
import keema from './chickenkeema.JPG'
import CustumMenuToppings from './CustumMenuToppings'
import CustumMenuToppings2 from './CustomMenuToppings2'
import downarrow from './down_arrow.JPG'
import nonveg from './nonveg_symbol.png'
import uparrow from './up_arrow.JPG'
import tickg from './greytick.JPG'
const topping_data = { veg: [{ name: "Grilled Mushroom", image: mushroom, status: ["add_but", "ADD"] }, { name: "Onion", image: onion, status: ["add_but", "ADD"] }, { name: "Crisp Capsicum", image: capsicum, status: ["add_but", "ADD"] }, { name: "Panner", image: panner, status: ["add_but", "ADD"] }, { name: "Red Pepper", image: chilli, status: ["add_but", "ADD"] }, { name: "Jalapeno", image: jalapeno, status: ["add_but", "ADD"] }, { name: "Golden Corn", image: corn, status: ["add_but", "ADD"] }, { name: "Black Olive", image: olive, status: ["add_but", "ADD"] }], nonveg: [{ name: "Barbeque Chicken", image: bbqchicken, status: ["add_but", "ADD"] }, { name: "Peri-Peri Chicken", image: periperi, status: ["add_but", "ADD"] }, { name: "Grilled Chicken Rasher", image: grilled, status: ["add_but", "ADD"] }, { name: "Chicken Tikka", image: tikka, status: ["add_but", "ADD"] }, { name: "Chicken Pepperoni", image: peperoni, status: ["add_but", "ADD"] }, { name: "Chicken Keema", image: keema, status: ["add_but", "ADD"] }], vegprice: 60, nonvegprice: 75 }
// var veg_topping = topping_data.veg;
// var nonveg_topping = topping_data.nonveg;
// var vbn=0;
// var bnm1= [["add_but", "ADD"], ["add_but", "ADD"], ["add_but", "ADD"], ["add_but", "ADD"], ["add_but", "ADD"], ["add_but", "ADD"], ["add_but", "ADD"], ["add_but", "ADD"], ["add_but", "ADD"], ["add_but", "ADD"], ["add_but", "ADD"], ["add_but", "ADD"], ["add_but", "ADD"], ["add_but", "ADD"]];

export default function CustomiseMenu(props) {
    const veg_topping23 = useRef(topping_data.veg);
    const nonveg_topping23 = useRef(topping_data.nonveg);
    // var veg_topping = veg_topping23.current;
    var nonveg_topping = nonveg_topping23.current;
    var veg_topping=veg_topping23.current
    const vbn = useRef(0);
    const bnm1 = useRef([["add_but", "ADD"], ["add_but", "ADD"], ["add_but", "ADD"], ["add_but", "ADD"], ["add_but", "ADD"], ["add_but", "ADD"], ["add_but", "ADD"], ["add_but", "ADD"], ["add_but", "ADD"], ["add_but", "ADD"], ["add_but", "ADD"], ["add_but", "ADD"], ["add_but", "ADD"], ["add_but", "ADD"]]);
    // const [veg_topping,setveg_topping]=useState(veg_topping1);
    // const [nonveg_topping,setnonveg_topping]=useState(nonveg_topping1);
    var topping_avail = props.custdets.topping;
    var radb = [];
    // for (let i = 0; i < topping_avail.length; i++) {
    //     radb.push("topingavail");
    // }
    const [selectedsize1, setselectedsize1] = useState(0);
    var atcdets=Object.assign([],props.atcdets);
    function toppingpriceupdate(n, e) {
        var vegtop = { veg: veg_topping };
        var nonvegtop = { nonveg: nonveg_topping };
        vegtop = JSON.stringify(vegtop);
        nonvegtop = JSON.stringify(nonvegtop);
        // var newprice;
        if (vegtop.includes(n)) {
            if (e === 1)
                // newprice = finalprice + topping_data.vegprice;
                setfinalprice(finalprice => finalprice + topping_data.vegprice);
            else
                setfinalprice(finalprice => finalprice - topping_data.vegprice);
            // newprice = finalprice - topping_data.vegprice;

        }
        else if (nonvegtop.includes(n)) {
            if (e === 1)
                setfinalprice(finalprice => finalprice + topping_data.nonvegprice);
            //    newprice = finalprice + topping_data.nonvegprice;
            else
                setfinalprice(finalprice => finalprice - topping_data.nonvegprice);
            // newprice = finalprice - topping_data.nonvegprice;

        }

    }
    const [allcustoms, setallcustoms] = useState([[], [0, 0]]);
    function custumisations(toppingstate, topping) {
        
        if (toppingstate === 1) {
            var hjs = Object.assign([], allcustoms);
            hjs[0].push(topping);
            setallcustoms(hjs);
        }
        else if (toppingstate === 2) {

            var nhf = Object.assign([], allcustoms);
            for (let i = 0; i < nhf[0].length; i++) {
                if (nhf[0][i] === topping) {
                    nhf[0].splice(i, 1);

                    break;
                }
            }
            setallcustoms(nhf);
        }
        else if (toppingstate === 3) {
            var bnv = Object.assign([], allcustoms);
            bnv[1][1] = topping;
            setallcustoms(bnv);
        }
        else if (toppingstate === 4) {
            var thy = Object.assign([], allcustoms);
            thy[1][0] = topping;
            setallcustoms(thy);
        }
        else {
            var cfg = Object.assign([], allcustoms);
            cfg[1][1] = 0;
            setallcustoms(cfg);
        }
        
    }

    const [selectedcrust1, setselctedcrust1] = useState(0);
    const [finalprice, setfinalprice] = useState(0);
    const [sizeselclass, setsizeselclass] = useState(0);
    const [crustsel, setcrustsel] = useState(0);
    const [sizeprice, setsizeprice] = useState(0);
    const [crustprice, setcrustprice] = useState(0);
    const [toppriceinc, settoppriceinc] = useState(vbn.current);
    const [buttonstate, setbuttonstate] = useState([false, false, false, false, false, false, false, false]);
    const [custclass, setcustclass] = useState("custom_body");
    const [chrep, setchrep] = useState("")
    const sizecrust1 = props.custdets;
    const sizecrust = sizecrust1.dets2;
    const crustsize = sizecrust1.dets1;
    const [vegtop, setvegtop] = useState(veg_topping);
    const [nonvegtop, setnonvegtop] = useState(nonveg_topping);
    const [topmenust, settopmenust] = useState(["replacetoppingsmenuclose", downarrow]);
    const [repmenu, setrepmenu] = useState(bnm1.current);
    const [exche, setexche] = useState("ADD");
    const [tickstate, settickstate] = useState(tickg);
    const [radiobg, setradiobg] = useState(0);
    const [repbuttonstate, setrepbuttonstate] = useState([true, true, true, true, true, true, true, true, true, true, true, true, true, true]);

    var replacemenustate;
    if (topping_avail[0] === "none") {
        replacemenustate = "replacetoppingsclose";
    }
    else {
        replacemenustate = "replacetoppings";
    }
    const reptop = () => {
        var gf;
        if (topmenust[0] === "replacetoppingsmenu") {
            gf = ["replacetoppingsmenuclose", downarrow];
            settopmenust(gf);
        }
        else {
            gf = ["replacetoppingsmenu", uparrow];
            settopmenust(gf);
        }
    }
    function reptopchosen(n, ind) {

        var vegtop1 = topping_data.veg;
        var nonvegtop1 = topping_data.nonveg;
        var newlist = [];
        for (let i = 0; i < vegtop1.length; i++) {
            if (vegtop1[i].name !== n) {
                newlist.push(vegtop1[i]);
            }
        }
        if (newlist.length !== vegtop1.length) {
            setchrep("veg");
            // tst="veg";
        }
        else {
            setchrep("nonveg");
            // tst="nonveg";
        }
        setvegtop(newlist);
        newlist = [];
        for (let j = 0; j < nonvegtop1.length; j++) {
            if (nonvegtop1[j].name !== n) {
                newlist.push(nonvegtop1[j])
            }
        }
        setnonvegtop(newlist);
        var ne = radb.slice();
        ne[ind] = "topingavailbg";
        setradiobg(ne);
        setrepbuttonstate([false, false, false, false, false, false, false, false, false, false, false, false, false, false]);
        custumisations(4, n);
    }
    function repchange(index) {
        var new1 = [["add_but", "ADD"], ["add_but", "ADD"], ["add_but", "ADD"], ["add_but", "ADD"], ["add_but", "ADD"], ["add_but", "ADD"], ["add_but", "ADD"], ["add_but", "ADD"], ["add_but", "ADD"], ["add_but", "ADD"], ["add_but", "ADD"], ["add_but", "ADD"], ["add_but", "ADD"], ["add_but", "ADD"]];
        if (repmenu[index][0] === "add_but") {
            new1[index] = ["remove_but", "REMOVE"];

            if (chrep === "veg" && index > 7) {
                settoppriceinc(15);
            }
            else if (chrep === "nonveg" && index < 8) {
                settoppriceinc(-15);
            }
            else {
                settoppriceinc(0);
            }
            setrepmenu(new1);
        }
        else {
            new1[index] = ["add_but", "ADD"];
            settoppriceinc(0);
            setrepmenu(new1);
        }
    }
    function selectedsize(e) {
        console.log(crustsize);
        console.log(sizeprice);
        var but_st = [buttonstate[0], buttonstate[1], buttonstate[2]];
        var pri;
        var prises = [];
        if (e === 0) {
            pri = crustsize.regular;
            // setfinalprice(sizeprice[0]);
        }

        else if (e === 1) {
            pri = crustsize.medium;
            // setfinalprice(sizeprice[1]);
        }

        else if (e === 2) {
            pri = crustsize.large;
            // setfinalprice(sizeprice[2]);
        }

        for (var i in pri) {
            if (pri[i][0] === true) {
                prises.push(pri[i][1])
                but_st.push(false)
            }
            else {
                prises.push("");
                but_st.push(true);
            }
        }
        setcrustprice(prises);
        setbuttonstate(but_st);
        setselectedsize1(e);
        var t = ["option_button", "option_button", "option_button", "serves", "serves", "serves"];
        t[e] = "sel_option_button";
        t[e + 3] = "sel_serves";
        setsizeselclass(t);
        // if (finalprice !== 0) {
        var fds = JSON.stringify(veg_topping);
        var tds = JSON.stringify(nonveg_topping);
        var topprice = 0;
        if (allcustoms[0].length !== 0)
            for (let v = 0; v < allcustoms[0].length; v++)
                if (fds.includes(allcustoms[0][v]))
                    topprice = topprice + topping_data.vegprice;
                else if (tds.includes(allcustoms[0][v]))
                    topprice = topprice + topping_data.nonvegprice;


        setfinalprice(sizeprice[e] + topprice);
        // }
    }

    function selectedcrust(e) {
        var but_st = [0, 0, 0, buttonstate[3], buttonstate[4], buttonstate[5], buttonstate[6], buttonstate[7]];
        var pri = [];
        var hgk;
        if (e === 0) {
            hgk = sizecrust.newhandtossed;
            // setfinalprice(crustprice[0]);
        }
        else if (e === 1) {
            hgk = sizecrust.wheatthincrust;
            // setfinalprice(crustprice[1]);
        }
        else if (e === 2) {
            hgk = sizecrust.cheeseburst;
            // setfinalprice(crustprice[2]);
        }
        else if (e === 3) {
            hgk = sizecrust.freshpanpizza;
            // setfinalprice(crustprice[3]);
        }
        else {
            hgk = sizecrust.classichandtossed;
            // setfinalprice(crustprice[4]);
        }
        var j = 0;
        for (var i in hgk) {
            if (hgk[i][0] === true) {
                but_st[j] = false;
                pri.push(hgk[i][1]);
                j = j + 1;
            }
            else {
                but_st[j] = true;
                pri.push("")
                j = j + 1;
            }
        }

        setsizeprice(pri);
        setbuttonstate(but_st);
        setselctedcrust1(e);
        var t = ["option_button1", "option_button1", "option_button1", "option_button1", "option_button1", "serves1", "serves1", "serves1", "serves1", "serves1"];
        t[e] = "sel_option_button1";
        t[e + 5] = "sel_serves1";
        setcrustsel(t);

        var fds = JSON.stringify(veg_topping);
        var tds = JSON.stringify(nonveg_topping);
        var topprice = 0;
        if (allcustoms[0].length !== 0)
            for (let v = 0; v < allcustoms[0].length; v++)
                if (fds.includes(allcustoms[0][v]))
                    topprice = topprice + topping_data.vegprice;
                else if (tds.includes(allcustoms[0][v]))
                    topprice = topprice + topping_data.nonvegprice;

        // if (finalprice !== 0) {
        setfinalprice(crustprice[e] + topprice);
        // }
    }


    // useEffect(() => {
    //     selectedsize(props.selsize3);
    //     selectedcrust(props.selcrust3);

    //     if (finalprice === 0) { setfinalprice(props.fp); }
    //     if (props.custmen === 1) {
    //         setcustclass("custom_bodyout");

    //     }


    // }, []);

    function closecustommenu() {
        setcustclass("custom_bodyin");
        setTimeout(function () {
            setcustclass("custom_body");
        }, 500);
        // setcustclass("custom_body");
        props.cfc(0);
        // console.log(atcdets);

    }



    function extracheesecheck(){
        var newpr;
        var bft = Object.assign([], allcustoms);
        if (exche === "ADD") {
            setexche("REMOVE");
            settickstate(check);
            newpr = finalprice + 75;
            setfinalprice(newpr);
            bft[0].push("Extra Cheese");
        }
        else {
            setexche("ADD");
            settickstate(tickg);
            newpr = finalprice - 75;
            setfinalprice(newpr);
            for (let i = 0; i < bft[0].length; i++)
                if (bft[0][i] === "Extra Cheese")
                    bft[0].splice(i, 1);
        }
        setallcustoms(bft);
    }

    function multidcompare(arr1, arr2) {
        var g = 0,h=0;
        console.log(arr1,arr2);
        if(arr1===arr2)
        return true;
        if (arr1[0].length !== arr2[0].length)
            return false;
        if((arr1[0].length!==0 && arr2[0].length!==0))    
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
        g=1;
        if((arr1[1][0]===arr2[1][0] && arr1[1][1]===arr2[1][1]))
        h=1;
        if (g === 1 && h===1)
            return true;
        return false;
      
      }
    const atccust = () => {
        var siz1;
        var cr1;

        if (selectedsize1 === 0)
            siz1 = "Regular";
        else if (selectedsize1 === 1)
            siz1 = "Medium";
        else if (selectedsize1 === 2)
            siz1 = "Large";

        if (selectedcrust1 === 0)
            cr1 = "New Hand Tossed"
        else if (selectedcrust1 === 1)
            cr1 = "100% Wheat Thin Crust"
        else if (selectedcrust1 === 2)
            cr1 = "Cheese Burst"
        else if (selectedcrust1 === 3)
            cr1 = "Fresh Pan Pizza"
        else if (selectedcrust1 === 4)
            cr1 = "Classic Hand Tossed"
        var nhg = 0;
        console.log(allcustoms);
        console.log(finalprice);
        
        for (let i = 0; i < props.atcdets.length; i++) {

            if ((props.atcdets[i].title === props.custdets.title && multidcompare(props.atcdets[i].customisations, allcustoms) && props.atcdets[i].selectedsize===siz1 && props.atcdets[i].selectedcrust===cr1)) {
                
                nhg = props.atcdets[i].quantity;
                
                break;
            }
            else if(props.atcdets[i].title === props.custdets.title && allcustoms[0].length === 0 && allcustoms[1][0] === 0 && props.atcdets[i].selectedsize===siz1 && props.atcdets[i].selectedcrust===cr1){
                for(let j=0;j<props.atcdets.length;j++)
                if(props.atcdets[j].title===props.custdets.title && (props.atcdets[j].customisations[0].length===0 && props.atcdets[j].customisations[1][0]===0) && props.atcdets[i].selectedsize===siz1 && props.atcdets[i].selectedcrust===cr1)
                {nhg=props.atcdets[j].quantity;
                    
                    break;}
            }
        }


        console.log(nhg);
        if (nhg === 0)
            props.atcpresseddets(1, props.custdets.title, props.custdets.description, props.custdets.pizza_image, props.custdets.veg, siz1, cr1, (Number(finalprice) + Number(toppriceinc)), 1, allcustoms, 2);
        else
            props.atcpresseddets(0, props.custdets.title, props.custdets.description, props.custdets.pizza_image, props.custdets.veg, siz1, cr1, (Number(finalprice) + Number(toppriceinc)), nhg + 1, allcustoms, 2);
        closecustommenu();

        // props.proitemsquanupdate(props.custdets.title,props.quantity+1);
    }
    
    useEffect(() => {
        console.log("yes");
        var y=0;
        // setallcustoms([[],[0,0]]);
        const topping_data123 = { veg: [{ name: "Grilled Mushroom", image: mushroom, status: ["add_but", "ADD"] }, { name: "Onion", image: onion, status: ["add_but", "ADD"] }, { name: "Crisp Capsicum", image: capsicum, status: ["add_but", "ADD"] }, { name: "Panner", image: panner, status: ["add_but", "ADD"] }, { name: "Red Pepper", image: chilli, status: ["add_but", "ADD"] }, { name: "Jalapeno", image: jalapeno, status: ["add_but", "ADD"] }, { name: "Golden Corn", image: corn, status: ["add_but", "ADD"] }, { name: "Black Olive", image: olive, status: ["add_but", "ADD"] }], nonveg: [{ name: "Barbeque Chicken", image: bbqchicken, status: ["add_but", "ADD"] }, { name: "Peri-Peri Chicken", image: periperi, status: ["add_but", "ADD"] }, { name: "Grilled Chicken Rasher", image: grilled, status: ["add_but", "ADD"] }, { name: "Chicken Tikka", image: tikka, status: ["add_but", "ADD"] }, { name: "Chicken Pepperoni", image: peperoni, status: ["add_but", "ADD"] }, { name: "Chicken Keema", image: keema, status: ["add_but", "ADD"] }], vegprice: 60, nonvegprice: 75 }
        var siz1=props.selsize3, cr1=props.selcrust3;
        var veg_topping123 = Object.assign([],topping_data123.veg);
        var nonveg_topping123 =Object.assign([],topping_data123.nonveg);
        var bnm = [["add_but", "ADD"],["add_but", "ADD"], ["add_but", "ADD"], ["add_but", "ADD"], ["add_but", "ADD"], ["add_but", "ADD"], ["add_but", "ADD"], ["add_but", "ADD"], ["add_but", "ADD"], ["add_but", "ADD"], ["add_but", "ADD"], ["add_but", "ADD"], ["add_but", "ADD"], ["add_but", "ADD"]];
        for (let i = 0; i < topping_avail.length; i++) {
            radb.push("topingavail");
        }                 
        selectedsize(props.selsize3); 
        selectedcrust(props.selcrust3);
        if (finalprice === 0) { setfinalprice(props.fp); }
        
        var gcd1 = JSON.stringify(veg_topping123);
        var gcd2 = JSON.stringify(nonveg_topping123);
        var vbn1 = 0;
        y={selectedsize: props.selsize3, selectedcrust: props.selcrust3, finalprice: props.fp, customisations: props.customs3 };

        // for (let i = 0; i < props.atcdets.length; i++) {
        //     if (atcdets[i].title === props.custdets.title) {
        //         y = Object.assign({},props.atcdets[i]);}}
                if(y!==0)
                {// if (y.selectedsize === "Regular")
                //     siz1 = 0;
                // else if (y.selectedsize === "Medium")
                //     siz1 = 1;
                // else if (y.selectedsize === "Large")
                //     siz1 = 2;

                // if (y.selectedcrust === "New Hand Tossed")
                //     cr1 = 0;
                // else if (y.selectedcrust === "100% Wheat Thin Crust")
                //     cr1 = 1;
                // else if (y.selectedcrust === "Cheese Burst")
                //     cr1 = 2;
                // else if (y.selectedcrust === "Fresh Pan Pizza")
                //     cr1 = 3;
                // else if (y.selectedcrust === "Classic Hand Tossed")
                //     cr1 = 4;    
                // selectedsize(siz1);
                // selectedcrust(cr1);        
                if (y.customisations !== null) {
                    radb = [];
                    for (let p = 0; p < topping_avail.length; p++) {
                        if (topping_avail[p] === y.customisations[1][0]) {
                            radb.push("topingavailbg");
                            reptopchosen(y.customisations[1][0], p);
                            if (gcd1.includes(y.customisations[1][1])) {
                                for (let d = 0; d < veg_topping123.length; d++)
                                    if (veg_topping123[d].name === y.customisations[1][1]) {
                                        if(d>1)
                                        bnm[d-1] = ["remove_but", "REMOVE"];
                                        else
                                        bnm[d] = ["remove_but", "REMOVE"];
                                        vbn1 = 0;
                                        custumisations(3,veg_topping123[d].name);
                                        break;
                                    }
                            }
                            else if (gcd2.includes(y.customisations[1][1])) {
                                for (let e = 0; e < nonveg_topping123.length; e++)
                                    if (nonveg_topping123[e].name === y.customisations[1][1]) {
                                        bnm[e + 8] = ["remove_but", "REMOVE"];
                                        // vbn1 = 15;
                                        vbn1=0;
                                        custumisations(3,nonveg_topping123[e].name);
                                        break;
                                    }
                            }
                        }
                        else
                            radb.push("topingavail");
                    }
                    for (let j = 0; j < y.customisations[0].length; j++) {
                        for (let k = 0; k < veg_topping123.length; k++)
                            if (y.customisations[0][j] === veg_topping123[k].name) {
                                veg_topping123[k].status = ["remove_but", "REMOVE"];

                                toppingpriceupdate(veg_topping123[k].name, 1);
                                custumisations(1, veg_topping123[k].name);
                                // setveg_topping(veg_topping1);
                            }
                        for (let l = 0; l < nonveg_topping.length; l++)
                            if (y.customisations[0][j] === nonveg_topping123[l].name) {
                                nonveg_topping123[l].status = ["remove_but", "REMOVE"];

                                toppingpriceupdate(nonveg_topping123[l].name, 1);
                                custumisations(1, nonveg_topping123[l].name);
                                // setnonveg_topping(nonveg_topping1);
                            }
                    }
                }
                // if (y.customisations !== 0)
                //     setallcustoms(y.customisations);
                  
                if(y.customisations[0].includes("Extra Cheese"))
                {
                    // setexche("REMOVE");
                    // settickstate(check);
                    extracheesecheck();
                }        
                // setallcustoms(y.customisations);
                // setallcustoms([[],[0,0]]);
                setfinalprice(y.finalprice);    
               
                }
        vbn.current = vbn1;
        bnm1.current = bnm;
        veg_topping23.current = Object.assign([],veg_topping123);
        nonveg_topping23.current =Object.assign([],nonveg_topping123);
        setradiobg(radb);
        if (props.custmen === 1) {
            setcustclass("custom_bodyout");

        }
        

        // console.log(radb);
        setrepmenu(bnm);
        settoppriceinc(vbn1);    
    },[]);
    return (
        <div className={custclass}>
            <div className="custom_menu">
                <img className="pizz_img" src={props.custdets.pizza_image} alt="..." />
                <img className="veg" src={(props.custdets.veg === true) ? (vegsym) : (nonveg)} alt="..." />
                <p className="piz_price">{"₹ " + (Number(finalprice) + Number(toppriceinc))}</p>
                <button className="close_custommenu" type="button" onClick={() => closecustommenu()}>&#x2716;</button>
                <div className="titl_desc">
                    <p className="piz_title">{props.custdets.title}</p>
                    <p className="piz_desc">{props.custdets.description}</p>
                </div>

                <p className="sel_s">Select size</p>
                <div className="size_options">
                    <button type="button" disabled={buttonstate[0]} className={sizeselclass[0]} onClick={() => selectedsize(0)}><p className="opt_con"><img className="size_pics" src={regular} alt="..." /><span className="size_name">Regular <span className={sizeselclass[3]}>Serves 1</span></span></p></button>
                    <button type="button" disabled={buttonstate[1]} className={sizeselclass[1]} onClick={() => selectedsize(1)}><p className="opt_con"><img className="size_pics" src={medium} alt="..." /><span className="size_name">Medium <span className={sizeselclass[4]}>Serves 2</span></span></p></button>
                    <button type="button" disabled={buttonstate[2]} className={sizeselclass[2]} onClick={() => selectedsize(2)}><p className="opt_con"><img className="size_pics" src={large} alt="..." /><span className="size_name">Large <span className={sizeselclass[5]}>Serves 4</span></span></p></button>
                </div>
                <p className="sel_c">Select Crust</p>
                <div className="crust_options">
                    <button type="button" disabled={buttonstate[3]} className={crustsel[0]} onClick={() => selectedcrust(0)}><p className="opt_con1"><span className="size_name1">New Hand Tossed<p className={crustsel[5]}>{(crustprice[0] === "") ? ("") : ("₹" + crustprice[0])}</p></span></p></button>
                    <button type="button" disabled={buttonstate[4]} className={crustsel[1]} onClick={() => selectedcrust(1)}><p className="opt_con1"><span className="size_name1">100% Wheat Thin Crust<p className={crustsel[6]}>{(crustprice[1] === "") ? ("") : ("₹" + crustprice[1])}</p></span></p></button>
                    <button type="button" disabled={buttonstate[5]} className={crustsel[2]} onClick={() => selectedcrust(2)}><p className="opt_con1"><span className="size_name1">Cheese Burst<p className={crustsel[7]}>{(crustprice[2] === "") ? ("") : ("₹" + crustprice[2])}</p></span></p></button>
                    <button type="button" disabled={buttonstate[6]} className={crustsel[3]} onClick={() => selectedcrust(3)}><p className="opt_con1"><span className="size_name1">Fresh Pan Pizza<p className={crustsel[8]}>{(crustprice[3] === "") ? ("") : ("₹" + crustprice[3])}</p></span></p></button>
                    <button type="button" disabled={buttonstate[7]} className={crustsel[4]} onClick={() => selectedcrust(4)}><p className="opt_con1"><span className="size_name1">Classic Hand Tossed<p className={crustsel[9]}>{(crustprice[4] === "") ? ("") : ("₹" + crustprice[4])}</p></span></p></button>
                </div>
                <p className="ex_ch">Extra Cheese</p>
                <div className="extra_cheese">
                    <img className="check_img" src={tickstate} alt="..." />
                    <p className="che">I want to add Extra Cheese</p>
                    <p className="amt_ch">₹ 75</p>
                    <button className="che_but" type="button" onClick={()=>extracheesecheck()}>{exche}</button>
                </div>
                <p className="toppings">Add Toppings</p>
                <p className="head">You can add more toppings</p>
                <hr className="custmenuhr" />
                <div className="addtoppings">
                    <div className="veg_topings">
                        <img className="veg_" src={vegsym} alt="..." />
                        <span className="sd">Add Veg Toppings @ ₹ {topping_data.vegprice} each</span>
                        <div className="toping_opts">
                            {
                                veg_topping.map((topping) => (
                                    <CustumMenuToppings name={topping.name} image={topping.image} priceupdate={toppingpriceupdate} custumisations={custumisations} status={topping.status}/>

                                ))
                            }
                        </div>
                    </div>
                    <div className="veg_topings">
                        <img className="veg_" src={nonvegsym} alt="..." />
                        <span className="sd">Add Non-Veg Toppings @ ₹ {topping_data.nonvegprice} each</span>
                        <div className="toping_opts">
                            {
                                nonveg_topping.map((topping) => (
                                    <CustumMenuToppings name={topping.name} image={topping.image} priceupdate={toppingpriceupdate} custumisations={custumisations} status={topping.status} />
                                ))

                            }
                        </div>
                    </div>
                </div>
                <div className={replacemenustate}>
                    <div>
                        <p className="rtoppings">Replace Toppings</p>
                        <p className="rhead">You can replace any one topping</p>
                    </div>
                    <button type="button" className="rbutt" onClick={reptop}><img className="arrow" src={topmenust[1]} alt="..." /></button>
                </div>
                <div className={topmenust[0]}>
                    <p className="topping_titl">Select topping to replace</p>
                    <div className="toppingavailable">
                        {
                            topping_avail.map((topping, i) => (
                                <div className={radiobg[i]}>
                                    <input type="radio" className="topping_radio" id="rad" value={topping} name="rep_topping_choise" onClick={() => reptopchosen(topping, i)} />
                                    <label className="rad_label" htmlFor="rad">{topping}</label>
                                </div>
                            ))
                        }
                    </div>
                    <div className="veg_topings">
                        <img className="veg_" src={vegsym} alt="..." />
                        <span className="sd">Add Veg Toppings</span>
                        <div className="toping_opts">
                            {
                                vegtop.map((topping, i) => (

                                    <CustumMenuToppings2 name={topping.name} image={topping.image} cls={repmenu[i]} index={i} updateavail={repchange} buttonstate={repbuttonstate[i]} custumisations={custumisations} />

                                ))
                            }
                        </div>
                    </div>
                    <div className="veg_topings" >
                        <img className="veg_" src={nonvegsym} alt="..." />
                        <span className="sd">Add Non-Veg Toppings</span>
                        <div className="toping_opts">
                            {
                                nonvegtop.map((topping, j) => (
                                    <CustumMenuToppings2 name={topping.name} image={topping.image} cls={repmenu[j + 8]} index={j + 8} updateavail={repchange} buttonstate={repbuttonstate[j + 8]} custumisations={custumisations} />
                                ))
                            }
                        </div>
                    </div>

                </div>
                <div className="custommenubottombar">
                    <p className="priceadd">1 ITEM &nbsp;&nbsp;|&nbsp;&nbsp; {"₹ " + (Number(finalprice) + Number(toppriceinc))}</p>
                    <button type="button" className="custom_atc" onClick={atccust}>ADD TO CART</button>
                </div>

            </div>
        </div>
    )
}
