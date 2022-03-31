import React, { useState,useEffect} from 'react'
import hamburger from "./hamburger_icon.png"
import domlogo from "./domlogo.png"
import './NavBar.css'
import location_icon from "./location_icon.png"
import sidelogo1 from "./side_logo_1.JPG"
import sidelogo2 from "./side_logo_2.JPG"
import sidelogo3 from "./side_logo_3.JPG"
import sidelogo4 from "./side_logo_4.JPG"
import sidelogo5 from "./side_logo_5.JPG"
import sidelogo6 from "./side_logo_6.JPG"
import sidelogo7 from "./side_logo_7.JPG"
import sidelogo8 from "./side_logo_8.JPG"
export default function NavBar(props) {
    const [style, setstyle] = useState({
        width: "26vw",
        height: "92.3vh",
        boxShadow:"10px 10px 10px rgb(0 0 0 / 69%)",
        // border: "3px solid rgb(65, 53, 53)",
        marginLeft:"-100.3%",
        position:"fixed",
        backgroundColor:"white",
        zIndex:"1"
    });
    const [click_style, setclick_style] = useState([
        "cats_buts","sel_cats_buts","cats_buts","cats_buts","cats_buts","cats_buts","cats_buts","cats_buts","cats_buts","cats_buts","cats_buts"
    ]);
    const handlescroll=()=>{
        const pos=window.pageYOffset
        var t=props.scroll_dets;
        var t1=["cats_buts","cats_buts","cats_buts","cats_buts","cats_buts","cats_buts","cats_buts","cats_buts","cats_buts","cats_buts","cats_buts"];
        for(let i=0;i<t.length;i++){
            if(pos>=t[i][0] && pos<=t[i][1]){
                t1[i+1]="sel_cats_buts";
                break;
            }

        }
        setclick_style(t1);
    }
    useEffect(() => {
        window.addEventListener('scroll',handlescroll);
        return () => {
            window.removeEventListener('scroll',handlescroll);
        }
    })
    const ham_menu=()=>{
        if(style.marginLeft==="-100.3%")
        {   console.log("1")
            setstyle({
                width: "26vw",
                height: "92.3vh",
                boxShadow:"10px 10px 10px rgb(0 0 0 / 69%)",
                // border: "3px solid rgb(65, 53, 53)",
                animation:"sidemenu1 0.5s",
                marginLeft:"0",
                position:"fixed",
                backgroundColor:"white",
                zIndex:"1"
            });
        }
        else{
            setstyle({
                width: "26vw",
                height: "92.3vh",
                boxShadow:"10px 10px 10px rgb(0 0 0 / 69%)",
                // border: "3px solid rgb(65, 53, 53)",
                animation:"sidemenu2 0.5s",
                marginLeft:"-100.3%",
                position:"fixed",
                backgroundColor:"white",
                zIndex:"1"        
            });
        }
    }
    function clickaction(e){
        var t=["cats_buts","cats_buts","cats_buts","cats_buts","cats_buts","cats_buts","cats_buts","cats_buts","cats_buts","cats_buts","cats_buts"];
        var t1=props.scroll_dets;
        window.scrollTo(0,(t1[e-1][0]+30));
        t[e]="sel_cats_buts";
        setclick_style(t);
    }
    return (
        <nav className="nav_bar">
            <div className="main_nav">
                <div className="left_part">
                    <div className="ham_menu">
                        <button className="ham_button" onClick={ham_menu}><img className="ham_img" src={hamburger} alt="..." /></button>
                    </div>
                    <div className="dom_logo">
                        <img className="im" src={domlogo} alt="..." width="20px" height="20px" />
                        <p className="logo_name">Domino's Pizza</p>
                    </div>
                </div>
                <div className="right_part">
                    <input type="radio" className="dels" name="del_ops" id="del" />
                    <label htmlFor="del">Delivery</label>
                    <input type="radio" className="dels" name="del_ops" id="din" />
                    <label htmlFor="din">Pick Up/Dine-in</label>
                    <button type="button" className="address_dets" onClick={()=>(props.authtoken!==0)?(props.addresspage1()):(props.loginpage())}><span><img className="loc_icon" src={location_icon} alt=". . ." width="20px" height="20px" /></span><span className="add">{(props.useraddress==='')?("Select your delivery address"):(props.useraddress)}</span></button>
                    <button type="button" className="sign_up_but" onClick={()=>{(props.phoneno===0)?(props.loginpage()):(props.addresspage())}}><p className="t">{(props.username!==0)?(props.username):("MY ACCOUNT")}</p><p className="u">{(props.phoneno!==0)?(props.phoneno):("Login | Sign up")}</p></button>
                </div>
            </div>
            <div className="side_menu" style={style}>
                <style>{`
                   @keyframes sidemenu1{
                       0%{
                           margin-left:-23.3%;
                       }
                       10%{
                        margin-left:-20%;
                       }
                       20%{
                           margin-left:-18%;
                       }
                       30%{
                        margin-left:-16%;
                       }
                       40%{
                        margin-left:-14%;
                       }
                       50%{
                        margin-left:-12%;
                       }
                    60%{
                        margin-left:-10%;
                    }
                    70%{
                        margin-left:-8%;
                    }
                    80%{
                        margin-left:-4%;
                    }
                    90%{
                        margin-left:-2%;
                    }
                    100%{
                        margin-left:0;
                    }
                   }
                   @keyframes sidemenu2{
                    0%{
                        margin-left:0;
                    }
                    10%{
                     margin-left:-2%;
                    }
                    20%{
                        margin-left:-4%;
                    }
                    30%{
                     margin-left:-8%;
                    }
                    40%{
                     margin-left:-10%;
                 }
                 50%{
                     margin-left:-12%;
                 }
                 60%{
                     margin-left:-14%;
                 }
                 70%{
                     margin-left:-16%;
                 }
                 80%{
                     margin-left:-18%;
                 }
                 90%{
                     margin-left:-20%;
                 }
                 100%{
                     margin-left:-23.3%;
                 }
                }
                
                `}</style>
                <ul className="menu_1">
                    <li className="opts"><button type="button" className="side_men_buts"><img src={sidelogo1} alt="..."/><span className="opt_text">TRACK CURRENT ORDER</span></button></li>
                    <li className="opts"><button type="button" className="side_men_buts"><img src={sidelogo3} alt="..."/><span className="opt_text">Order History</span></button></li>
                    <li className="opts"><button type="button" className="side_men_buts"><img src={sidelogo2} alt="..."/><span className="opt_text">Home</span></button></li>
                    <li className="opts"><button type="button" className="side_men_buts"><img src={sidelogo4} alt="..."/><span className="opt_text">Deals and Offers</span></button></li>
                    <li className="opts"><button type="button" className="side_men_buts"><img src={sidelogo5} alt="..."/><span className="opt_text">Menu</span></button></li>
                    <li className="opts"><button type="button" className="side_men_buts"><img src={sidelogo6} alt="..."/><span className="opt_text">Everyday Value Offers</span></button></li>
                    <li className="opts"><button type="button" className="side_men_buts"><img src={sidelogo7} alt="..."/><span className="opt_text">Terms And Conditons</span></button></li>
                    <li className="opts"><button type="button" className="side_men_buts"><img src={sidelogo8} alt="..."/><span className="opt_text">Feedback</span></button></li>
                </ul>
            </div>
            <div className="category_nav">
                <ul className="cat_list">
                    <li className="cats"><button  className={click_style[0]} onClick={()=>clickaction(0)} >EVERYDAY VALUE</button></li>
                    <li className="cats"><button  className={click_style[1]} onClick={()=>clickaction(1)}>BEST SELLERS</button></li>
                    <li className="cats"><button  className={click_style[2]} onClick={()=>clickaction(2)}>VEG PIZZA</button></li>
                    <li className="cats"><button  className={click_style[3]} onClick={()=>clickaction(3)}>NON-VEG PIZZA</button></li>
                    <li className="cats"><button  className={click_style[4]} onClick={()=>clickaction(4)}>NEW LAUNCHES</button></li>
                    <li className="cats"><button  className={click_style[5]} onClick={()=>clickaction(5)}>MEALS AND COMBOS</button></li>
                    <li className="cats"><button  className={click_style[6]} onClick={()=>clickaction(6)}>PIZZA MANIA</button></li>
                    <li className="cats"><button  className={click_style[7]} onClick={()=>clickaction(7)}>SPECIALITY CHICKEN</button></li>
                    <li className="cats"><button  className={click_style[8]} onClick={()=>clickaction(8)}>SIDES</button></li>
                    <li className="cats"><button  className={click_style[9]} onClick={()=>clickaction(9)}>BEVERAGES</button></li>
                    <li className="cats"><button  className={click_style[10]} onClick={()=>clickaction(10)}>DESSERT</button></li>
                </ul>
            </div>
        </nav>
        )
}
